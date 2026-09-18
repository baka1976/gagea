/* 가계부 서비스워커 — 앱 셸 프리캐시 + 폰트 런타임 캐싱 */
const VERSION = "ledger-v31";
const BUILD = "v31";
// 앱이 돌아가는 데 반드시 있어야 하는 것
const SHELL = ["./", "./index.html", "./app.js", "./manifest.json"];
// 없어도 앱은 돌아가는 것 (아이콘이 빠졌다고 서비스워커 설치 전체가 실패하면 안 된다)
const EXTRA = ["./icon-192.png", "./icon-512.png"];
// xlsx.js는 명세서를 처음 넣을 때 받아서 캐시에 넣는다 (앱 첫 로딩을 무겁게 하지 않기 위해)

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(SHELL).then(() => Promise.all(EXTRA.map((u) => c.add(u).catch(() => null)))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // 폰트는 처음 받을 때 캐시에 넣어두고, 이후에는 오프라인에서도 쓴다
  if (url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com")) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(req, copy));
        return res;
      }).catch(() => hit))
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // 서비스워커 자신과 매니페스트는 캐시에 가두지 않는다.
  // 여기 걸리면 새 버전이 영영 반영되지 않는다.
  if (/\/(sw\.js|manifest\.json)$/.test(url.pathname)) {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // 앱 셸은 캐시 우선, 백그라운드로 갱신
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
