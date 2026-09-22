/* 가계부 서비스워커 — 앱 셸 프리캐시 + 폰트 런타임 캐싱 */
const VERSION = "ledger-v35";
const BUILD = "v35";
// 앱이 돌아가는 데 반드시 있어야 하는 것
const SHELL = ["./", "./index.html", "./app.js", "./manifest.json"];
// 없어도 앱은 돌아가는 것 (아이콘이 빠졌다고 서비스워커 설치 전체가 실패하면 안 된다)
const EXTRA = ["./icon-192.png", "./icon-512.png"];
// xlsx.js는 명세서를 처음 넣을 때 받아서 캐시에 넣는다 (앱 첫 로딩을 무겁게 하지 않기 위해)

/**
 * 프리캐시는 반드시 브라우저 캐시를 건너뛰고 받아야 한다.
 * 깃허브 페이지가 파일마다 10분짜리 캐시를 붙이기 때문에, 그냥 받으면
 * '새 버전 상자에 옛 파일을 담는' 일이 벌어진다. (v31에서 실제로 겪음)
 */
const fresh = (u) => new Request(u, { cache: "reload" });

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(SHELL.map(fresh))
        .then(() => Promise.all(EXTRA.map((u) => c.add(fresh(u)).catch(() => null)))))
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

  /**
   * 앱 셸은 '서버 먼저, 안 되면 캐시'.
   * 예전에는 캐시를 먼저 내주고 뒤에서 갱신했는데, 그러면 새 파일을 올려도
   * 그날은 옛 화면이 뜨고 다음 번에야 바뀐다. 무엇이 반영됐는지 알 수 없어
   * 버전이 안 올라간 줄 알고 코드를 파는 일이 반복됐다.
   * 인터넷이 없으면 캐시로 넘어가므로 오프라인에서는 그대로 돌아간다.
   */
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("./index.html")))
  );
});
