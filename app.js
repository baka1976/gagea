var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n3, l3) {
  for (var u3 in l3) n3[u3] = l3[u3];
  return n3;
}
function b(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function k(l3, u3, t4) {
  var i3, r3, o3, e3 = {};
  for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t4), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return x(l3, e3, i3, r3, null);
}
function x(n3, t4, i3, r3, o3) {
  var e3 = { type: n3, props: t4, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function S(n3) {
  return n3.children;
}
function C(n3, l3) {
  this.props = n3, this.context = l3;
}
function $(n3, l3) {
  if (null == l3) return n3.__ ? $(n3.__, n3.__i + 1) : null;
  for (var u3; l3 < n3.__k.length; l3++) if (null != (u3 = n3.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n3.type ? $(n3) : null;
}
function I(n3) {
  if (n3.__P && n3.__d) {
    var u3 = n3.__v, t4 = u3.__e, i3 = [], r3 = [], o3 = m({}, u3);
    o3.__v = u3.__v + 1, l.vnode && l.vnode(o3), q(n3.__P, o3, u3, n3.__n, n3.__P.namespaceURI, 32 & u3.__u ? [t4] : null, i3, null == t4 ? $(u3) : t4, !!(32 & u3.__u), r3), o3.__v = u3.__v, o3.__.__k[o3.__i] = o3, D(i3, o3, r3), u3.__e = u3.__ = null, o3.__e != t4 && P(o3);
  }
}
function P(n3) {
  if (null != (n3 = n3.__) && null != n3.__c) return n3.__e = n3.__c.base = null, n3.__k.some(function(l3) {
    if (null != l3 && null != l3.__e) return n3.__e = n3.__c.base = l3.__e;
  }), P(n3);
}
function A(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n3, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n3 = i.shift(), l3 = i.length, I(n3);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n3, l3, u3, t4, i3, r3, o3, e3, f3, c3, a3) {
  var s3, h3, p3, v3, y3, _2, g2 = t4 && t4.__k || w, m3 = l3.length;
  for (f3 = T(u3, l3, g2, f3, m3), s3 = 0; s3 < m3; s3++) null != (p3 = u3.__k[s3]) && (h3 = -1 != p3.__i && g2[p3.__i] || d, p3.__i = s3, _2 = q(n3, p3, h3, i3, r3, o3, e3, f3, c3, a3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), 4 & p3.__u ? (f3 = j(p3, f3, n3), h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _2 ? f3 = _2 : v3 && (f3 = v3.nextSibling), p3.__u &= -7);
  return u3.__e = y3, f3;
}
function T(n3, l3, u3, t4, i3) {
  var r3, o3, e3, f3, c3, a3 = u3.length, s3 = a3, h3 = 0;
  for (n3.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n3.__k[r3] = x(null, o3, null, null, null) : g(o3) ? o3 = n3.__k[r3] = x(S, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n3.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n3.__k[r3] = o3, f3 = r3 + h3, o3.__ = n3, o3.__b = n3.__b + 1, e3 = null, -1 != (c3 = o3.__i = O(o3, u3, f3, s3)) && (s3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > a3 ? h3-- : i3 < a3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n3.__k[r3] = null;
  if (s3) for (r3 = 0; r3 < a3; r3++) null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t4 && (t4 = $(e3)), K(e3, e3));
  return t4;
}
function j(n3, l3, u3) {
  var t4, i3;
  if ("function" == typeof n3.type) {
    for (t4 = n3.__k, i3 = 0; t4 && i3 < t4.length; i3++) t4[i3] && (t4[i3].__ = n3, l3 = j(t4[i3], l3, u3));
    return l3;
  }
  n3.__e != l3 && (l3 && n3.type && !l3.parentNode && (l3 = $(n3)), l3 = u3.insertBefore(n3.__e, l3 || null));
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function O(n3, l3, u3, t4) {
  var i3, r3, o3, e3 = n3.key, f3 = n3.type, c3 = l3[u3], a3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e3 || a3 && e3 == c3.key && f3 == c3.type) return u3;
  if (t4 > (a3 ? 1 : 0)) {
    for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f3 == c3.type) return o3;
  }
  return -1;
}
function z(n3, l3, u3) {
  "-" == l3[0] ? n3.setProperty(l3, null == u3 ? "" : u3) : n3[l3] = null == u3 ? "" : "number" != typeof u3 || _.test(l3) ? u3 : u3 + "px";
}
function N(n3, l3, u3, t4, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u3) n3.style.cssText = u3;
  else {
    if ("string" == typeof t4 && (n3.style.cssText = t4 = ""), t4) for (l3 in t4) u3 && l3 in u3 || z(n3.style, l3, "");
    if (u3) for (l3 in u3) t4 && u3[l3] == t4[l3] || z(n3.style, l3, u3[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(s, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n3 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + r3] = u3, u3 ? t4 ? u3[a] = t4[a] : (u3[a] = h, n3.addEventListener(l3, r3 ? v : p, r3)) : n3.removeEventListener(l3, r3 ? v : p, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n3) try {
      n3[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n4) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n3.removeAttribute(l3) : n3.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
  }
}
function V(n3) {
  return function(u3) {
    if (this.l) {
      var t4 = this.l[u3.type + n3];
      if (null == u3[c]) u3[c] = h++;
      else if (u3[c] < t4[a]) return;
      return t4(l.event ? l.event(u3) : u3);
    }
  };
}
function q(n3, u3, t4, i3, r3, o3, e3, f3, c3, a3) {
  var s3, h3, p3, v3, y3, d3, _2, k3, x2, M, I2, P2, A3, H2, T3, j3, F = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t4.__u && (c3 = !!(32 & t4.__u), o3 = [f3 = u3.__e = t4.__e]), (s3 = l.__b) && s3(u3);
  n: if ("function" == typeof F) {
    h3 = e3.length;
    try {
      if (x2 = u3.props, M = F.prototype && F.prototype.render, I2 = (s3 = F.contextType) && i3[s3.__c], P2 = s3 ? I2 ? I2.props.value : s3.__ : i3, t4.__c ? k3 = (p3 = u3.__c = t4.__c).__ = p3.__E : (M ? u3.__c = p3 = new F(x2, P2) : (u3.__c = p3 = new C(x2, P2), p3.constructor = F, p3.render = Q), I2 && I2.sub(p3), p3.state || (p3.state = {}), p3.__n = i3, v3 = p3.__d = true, p3.__h = [], p3._sb = []), M && null == p3.__s && (p3.__s = p3.state), M && null != F.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = m({}, p3.__s)), m(p3.__s, F.getDerivedStateFromProps(x2, p3.__s))), y3 = p3.props, d3 = p3.state, p3.__v = u3, v3) M && null == F.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), M && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
      else {
        if (M && null == F.getDerivedStateFromProps && x2 !== y3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(x2, P2), u3.__v == t4.__v || !p3.__e && null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(x2, p3.__s, P2)) {
          u3.__v != t4.__v && (p3.props = x2, p3.state = p3.__s, p3.__d = false), u3.__e = t4.__e, u3.__k = t4.__k, u3.__k.some(function(n4) {
            n4 && (n4.__ = u3);
          }), w.push.apply(p3.__h, p3._sb), p3._sb = [], p3.__h.length && e3.push(p3), f3 = $(t4);
          break n;
        }
        null != p3.componentWillUpdate && p3.componentWillUpdate(x2, p3.__s, P2), M && null != p3.componentDidUpdate && p3.__h.push(function() {
          p3.componentDidUpdate(y3, d3, _2);
        });
      }
      if (p3.context = P2, p3.props = x2, p3.__P = n3, p3.__e = false, A3 = l.__r, H2 = 0, M) p3.state = p3.__s, p3.__d = false, A3 && A3(u3), s3 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
      else do {
        p3.__d = false, A3 && A3(u3), s3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
      } while (p3.__d && ++H2 < 25);
      p3.state = p3.__s, null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())), M && !v3 && null != p3.getSnapshotBeforeUpdate && (_2 = p3.getSnapshotBeforeUpdate(y3, d3)), T3 = null != s3 && s3.type === S && null == s3.key ? E(s3.props.children) : s3, f3 = L(n3, g(T3) ? T3 : [T3], u3, t4, i3, r3, o3, e3, f3, c3, a3), p3.base = u3.__e, u3.__u &= -161, p3.__h.length && e3.push(p3), k3 && (p3.__E = p3.__ = null);
    } catch (n4) {
      if (e3.length = h3, u3.__v = null, c3 || null != o3) {
        if (n4.then) {
          for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
          null != o3 && (o3[o3.indexOf(f3)] = null), u3.__e = f3;
        } else if (null != o3) for (j3 = o3.length; j3--; ) b(o3[j3]);
      } else u3.__e = t4.__e;
      null == u3.__k && (u3.__k = t4.__k || []), n4.then || B(u3), l.__e(n4, u3, t4);
    }
  } else null == o3 && u3.__v == t4.__v ? (u3.__k = t4.__k, u3.__e = t4.__e) : f3 = u3.__e = G(t4.__e, u3, t4, i3, r3, o3, e3, c3, a3);
  return (s3 = l.diffed) && s3(u3), 128 & u3.__u ? void 0 : f3;
}
function B(n3) {
  n3 && (n3.__c && (n3.__c.__e = true), n3.__k && n3.__k.some(B));
}
function D(n3, u3, t4) {
  for (var i3 = 0; i3 < t4.length; i3++) J(t4[i3], t4[++i3], t4[++i3]);
  l.__c && l.__c(u3, n3), n3.some(function(u4) {
    try {
      n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
        n4.call(u4);
      });
    } catch (n4) {
      l.__e(n4, u4.__v);
    }
  });
}
function E(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b > 0 ? n3 : g(n3) ? n3.map(E) : void 0 !== n3.constructor ? null : m({}, n3);
}
function G(u3, t4, i3, r3, o3, e3, f3, c3, a3) {
  var s3, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k3 = t4.props, x2 = t4.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (s3 = 0; s3 < e3.length; s3++) if ((y3 = e3[s3]) && "setAttribute" in y3 == !!x2 && (x2 ? y3.localName == x2 : 3 == y3.nodeType)) {
      u3 = y3, e3[s3] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k3);
    u3 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t4, e3), c3 = false), e3 = null;
  }
  if (null == x2) m3 === k3 || c3 && u3.data == k3 || (u3.data = k3);
  else {
    if (e3 = "textarea" == x2 && null != k3.defaultValue ? null : e3 && n.call(u3.childNodes), !c3 && null != e3) for (m3 = {}, s3 = 0; s3 < u3.attributes.length; s3++) m3[(y3 = u3.attributes[s3]).name] = y3.value;
    for (s3 in m3) y3 = m3[s3], "dangerouslySetInnerHTML" == s3 ? p3 = y3 : "children" == s3 || s3 in k3 || "value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3 || N(u3, s3, null, y3, o3);
    for (s3 in k3) y3 = k3[s3], "children" == s3 ? v3 = y3 : "dangerouslySetInnerHTML" == s3 ? h3 = y3 : "value" == s3 ? w3 = y3 : "checked" == s3 ? _2 = y3 : c3 && "function" != typeof y3 || m3[s3] === y3 || N(u3, s3, y3, m3[s3], o3);
    if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t4.__k = [];
    else if (p3 && (u3.innerHTML = ""), L("template" == t4.type ? u3.content : u3, g(v3) ? v3 : [v3], t4, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && $(i3, 0), c3, a3), null != e3) for (s3 = e3.length; s3--; ) b(e3[s3]);
    c3 && "textarea" != x2 || (s3 = "value", "progress" == x2 && null == w3 ? u3.removeAttribute("value") : null != w3 && (w3 !== u3[s3] || "progress" == x2 && !w3 || "option" == x2 && w3 != m3[s3]) && N(u3, s3, w3, m3[s3], o3), s3 = "checked", null != _2 && _2 != u3[s3] && N(u3, s3, _2, m3[s3], o3));
  }
  return u3;
}
function J(n3, u3, t4) {
  try {
    if ("function" == typeof n3) {
      var i3 = "function" == typeof n3.__u;
      i3 && n3.__u(), i3 && null == u3 || (n3.__u = n3(u3));
    } else n3.current = u3;
  } catch (n4) {
    l.__e(n4, t4);
  }
}
function K(n3, u3, t4) {
  var i3, r3;
  if (l.unmount && l.unmount(n3), (i3 = n3.ref) && (i3.current && i3.current != n3.__e || J(i3, null, u3)), null != (i3 = n3.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u3);
    }
    i3.base = i3.__P = i3.__n = null;
  }
  if (i3 = n3.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u3, t4 || "function" != typeof n3.type);
  t4 || b(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function Q(n3, l3, u3) {
  return this.constructor(n3, u3);
}
function R(u3, t4, i3) {
  var r3, o3, e3, f3;
  t4 == document && (t4 = document.documentElement), l.__ && l.__(u3, t4), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t4.__k, e3 = [], f3 = [], q(t4, u3 = (!r3 && i3 || t4).__k = k(S, null, [u3]), o3 || d, d, t4.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t4.firstChild ? n.call(t4.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t4.firstChild, r3, f3), D(e3, u3, f3), u3.props.children = null;
}
n = w.slice, l = { __e: function(n3, l3, u3, t4) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n3)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n3, t4 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n3 = l4;
  }
  throw n3;
} }, u = 0, t = function(n3) {
  return null != n3 && void 0 === n3.constructor;
}, C.prototype.setState = function(n3, l3) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n3 && (n3 = n3(m({}, u3), this.props)), n3 && m(u3, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), A(this));
}, C.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l3) {
  return n3.__v.__b - l3.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var p2 = c2.__;
function s2(n3, t4) {
  c2.__h && c2.__h(r2, n3, o2 || t4), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n3 >= u3.__.length && u3.__.push({}), u3.__[n3];
}
function d2(n3) {
  return o2 = 1, y2(D2, n3);
}
function y2(n3, u3, i3) {
  var o3 = s2(t2++, 2);
  if (o3.t = n3, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n4) {
    var t4 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t4, n4);
    t4 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n4, t4, r3) {
      if (!o3.__c.__H) return true;
      var u4 = false, i4 = o3.__c.props !== n4;
      if (o3.__c.__H.__.some(function(n5) {
        if (n5.__N) {
          u4 = true;
          var t5 = n5.__[0];
          n5.__ = n5.__N, n5.__N = void 0, t5 !== n5.__[0] && (i4 = true);
        }
      }), c3) {
        var f4 = c3.call(this, n4, t4, r3);
        return u4 ? f4 || i4 : f4;
      }
      return !u4 || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n4, t4, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n4, t4, r3), c3 = u4;
      }
      e3 && e3.call(this, n4, t4, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function h2(n3, u3) {
  var i3 = s2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n3, i3.u = u3, r2.__H.__h.push(i3));
}
function A2(n3) {
  return o2 = 5, T2(function() {
    return { current: n3 };
  }, []);
}
function T2(n3, r3) {
  var u3 = s2(t2++, 7);
  return C2(u3.__H, r3) && (u3.__ = n3(), u3.__H = r3, u3.__h = n3), u3.__;
}
function q2(n3, t4) {
  return o2 = 8, T2(function() {
    return n3;
  }, t4);
}
function b2(n3) {
  var u3 = s2(t2++, 10), i3 = d2();
  return u3.__ = n3, r2.componentDidCatch || (r2.componentDidCatch = function(n4, t4) {
    u3.__ && u3.__(n4, t4), i3[1](n4);
  }), [i3[0], function() {
    i3[1](void 0);
  }];
}
function j2() {
  for (var n3; n3 = f2.shift(); ) {
    var t4 = n3.__H;
    if (n3.__P && t4) try {
      t4.__h.some(z2), t4.__h.some(B2), t4.__h = [];
    } catch (r3) {
      t4.__h = [], c2.__e(r3, n3.__v);
    }
  }
}
c2.__b = function(n3) {
  r2 = null, e2 && e2(n3);
}, c2.__ = function(n3, t4) {
  n3 && t4.__k && t4.__k.__m && (n3.__m = t4.__k.__m), p2 && p2(n3, t4);
}, c2.__r = function(n3) {
  a2 && a2(n3), t2 = 0;
  var i3 = (r2 = n3.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n4) {
    n4.__N && (n4.__ = n4.__N), n4.u = n4.__N = void 0;
  })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n3) {
  v2 && v2(n3);
  var t4 = n3.__c;
  t4 && t4.__H && (t4.__H.__h.length && (1 !== f2.push(t4) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t4.__H.__.some(function(n4) {
    n4.u && (n4.__H = n4.u, n4.u = void 0);
  })), u2 = r2 = null;
}, c2.__c = function(n3, t4) {
  t4.some(function(n4) {
    try {
      n4.__h.some(z2), n4.__h = n4.__h.filter(function(n5) {
        return !n5.__ || B2(n5);
      });
    } catch (r3) {
      t4.some(function(n5) {
        n5.__h && (n5.__h = []);
      }), t4 = [], c2.__e(r3, n4.__v);
    }
  }), l2 && l2(n3, t4);
}, c2.unmount = function(n3) {
  m2 && m2(n3);
  var t4, r3 = n3.__c;
  r3 && r3.__H && (r3.__H.__.some(function(n4) {
    try {
      z2(n4);
    } catch (n5) {
      t4 = n5;
    }
  }), r3.__H = void 0, t4 && c2.__e(t4, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n3) {
  var t4, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t4), setTimeout(n3);
  }, u3 = setTimeout(r3, 35);
  k2 && (t4 = requestAnimationFrame(r3));
}
function z2(n3) {
  var t4 = r2, u3 = n3.__c;
  "function" == typeof u3 && (n3.__c = void 0, u3()), r2 = t4;
}
function B2(n3) {
  var t4 = r2;
  n3.__c = n3.__(), r2 = t4;
}
function C2(n3, t4) {
  return !n3 || n3.length !== t4.length || t4.some(function(t5, r3) {
    return t5 !== n3[r3];
  });
}
function D2(n3, t4) {
  return "function" == typeof t4 ? t4(n3) : t4;
}

// node_modules/htm/dist/htm.module.js
var n2 = function(t4, s3, r3, e3) {
  var u3;
  s3[0] = 0;
  for (var h3 = 1; h3 < s3.length; h3++) {
    var p3 = s3[h3++], a3 = s3[h3] ? (s3[0] |= p3 ? 1 : 2, r3[s3[h3++]]) : s3[++h3];
    3 === p3 ? e3[0] = a3 : 4 === p3 ? e3[1] = Object.assign(e3[1] || {}, a3) : 5 === p3 ? (e3[1] = e3[1] || {})[s3[++h3]] = a3 : 6 === p3 ? e3[1][s3[++h3]] += a3 + "" : p3 ? (u3 = t4.apply(a3, n2(t4, a3, r3, ["", null])), e3.push(u3), a3[0] ? s3[0] |= 2 : (s3[h3 - 2] = 0, s3[h3] = u3)) : e3.push(a3);
  }
  return e3;
};
var t3 = /* @__PURE__ */ new Map();
function htm_module_default(s3) {
  var r3 = t3.get(this);
  return r3 || (r3 = /* @__PURE__ */ new Map(), t3.set(this, r3)), (r3 = n2(this, r3.get(s3) || (r3.set(s3, r3 = (function(n3) {
    for (var t4, s4, r4 = 1, e3 = "", u3 = "", h3 = [0], p3 = function(n4) {
      1 === r4 && (n4 || (e3 = e3.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h3.push(0, n4, e3) : 3 === r4 && (n4 || e3) ? (h3.push(3, n4, e3), r4 = 2) : 2 === r4 && "..." === e3 && n4 ? h3.push(4, n4, 0) : 2 === r4 && e3 && !n4 ? h3.push(5, 0, true, e3) : r4 >= 5 && ((e3 || !n4 && 5 === r4) && (h3.push(r4, 0, e3, s4), r4 = 6), n4 && (h3.push(r4, n4, 0, s4), r4 = 6)), e3 = "";
    }, a3 = 0; a3 < n3.length; a3++) {
      a3 && (1 === r4 && p3(), p3(a3));
      for (var l3 = 0; l3 < n3[a3].length; l3++) t4 = n3[a3][l3], 1 === r4 ? "<" === t4 ? (p3(), h3 = [h3], r4 = 3) : e3 += t4 : 4 === r4 ? "--" === e3 && ">" === t4 ? (r4 = 1, e3 = "") : e3 = t4 + e3[0] : u3 ? t4 === u3 ? u3 = "" : e3 += t4 : '"' === t4 || "'" === t4 ? u3 = t4 : ">" === t4 ? (p3(), r4 = 1) : r4 && ("=" === t4 ? (r4 = 5, s4 = e3, e3 = "") : "/" === t4 && (r4 < 5 || ">" === n3[a3][l3 + 1]) ? (p3(), 3 === r4 && (h3 = h3[0]), r4 = h3, (h3 = h3[0]).push(2, 0, r4), r4 = 0) : " " === t4 || "	" === t4 || "\n" === t4 || "\r" === t4 ? (p3(), r4 = 2) : e3 += t4), 3 === r4 && "!--" === e3 && (r4 = 4, h3 = h3[0]);
    }
    return p3(), h3;
  })(s3)), r3), arguments, [])).length > 1 ? r3 : r3[0];
}

// src/engine.js
var engine_exports = {};
__export(engine_exports, {
  CATEGORIES: () => CATEGORIES,
  CAT_MAP: () => CAT_MAP,
  REFUND_IN_NAMES: () => REFUND_IN_NAMES,
  aliasKey: () => aliasKey,
  applyAccountRules: () => applyAccountRules,
  classifyIncome: () => classifyIncome,
  detectCategory: () => detectCategory,
  detectSmsKind: () => detectSmsKind,
  extractAmount: () => extractAmount,
  extractBalance: () => extractBalance,
  extractMerchant: () => extractMerchant,
  finishMemo: () => finishMemo,
  formatDateLabel: () => formatDateLabel,
  formatWon: () => formatWon,
  isPayrollName: () => isPayrollName,
  isRefundInName: () => isRefundInName,
  isWeakMemo: () => isWeakMemo,
  matchByAmount: () => matchByAmount,
  matchRule: () => matchRule,
  matchScore: () => matchScore,
  normKey: () => normKey,
  parseBankSms: () => parseBankSms,
  parseCardSms: () => parseCardSms,
  parseFree: () => parseFree,
  parseOne: () => parseOne,
  parsePaste: () => parsePaste,
  parseReceipt: () => parseReceipt,
  parseStatement: () => parseStatement,
  preferred: () => preferred,
  reconcile: () => reconcile,
  resolveYear: () => resolveYear,
  scoreConfidence: () => scoreConfidence,
  similarity: () => similarity,
  stripNoise: () => stripNoise,
  toLocalISO: () => toLocalISO,
  todayISO: () => todayISO,
  uid: () => uid
});
var pad = (n3) => String(n3).padStart(2, "0");
function toLocalISO(d3) {
  return `${d3.getFullYear()}-${pad(d3.getMonth() + 1)}-${pad(d3.getDate())}`;
}
function todayISO(offset = 0) {
  const d3 = /* @__PURE__ */ new Date();
  d3.setDate(d3.getDate() + offset);
  return toLocalISO(d3);
}
function resolveYear(month, day, now = /* @__PURE__ */ new Date()) {
  let y3 = now.getFullYear();
  const nowM = now.getMonth() + 1;
  if (month - nowM > 2) y3 -= 1;
  else if (nowM - month > 9) y3 += 1;
  return toLocalISO(new Date(y3, month - 1, day));
}
function formatDateLabel(iso) {
  const d3 = /* @__PURE__ */ new Date(iso + "T00:00:00");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `${d3.getMonth() + 1}월 ${d3.getDate()}일 (${days[d3.getDay()]})`;
}
function formatWon(n3) {
  return (n3 || 0).toLocaleString("ko-KR");
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
var CATEGORIES = [
  { key: "food", label: "식비", color: "#8A6D3B", words: [
    "밥",
    "점심",
    "저녁",
    "식당",
    "국밥",
    "편의점",
    "마트",
    "장보기",
    "아침",
    "치킨",
    "배달",
    "음식",
    "분식",
    "김밥",
    "GS25",
    "CU",
    "세븐일레븐",
    "이마트",
    "홈플러스",
    // 카드 명세서에는 브랜드 대신 법인명이 찍힌다
    "지에스리테일",
    "GS리테일",
    "비지에프리테일",
    "BGF리테일",
    "롯데마트",
    "롯데쇼핑",
    "이마트에브리데이",
    "노브랜드",
    "홈푸드",
    "유통",
    "식자재마트",
    "농협하나로",
    "남도장터",
    "정육",
    "축산",
    "수산",
    "familymart",
    "lawson",
    "7-eleven",
    "ministop",
    "코리아세븐",
    "롯데씨브이에스",
    "씨스페이시스",
    "이마트24",
    "하나로마트",
    "파머스마켓",
    "로컬푸드",
    "우아한형제들",
    "배달의민족",
    "쿠팡이츠",
    "요기요",
    "위대한상상"
  ] },
  { key: "cafe", label: "카페·간식", color: "#A9762F", words: ["커피", "카페", "스타벅스", "투썸", "빵", "디저트", "간식", "아이스크림", "베이커리", "이디야", "메가커피"] },
  { key: "transport", label: "교통", color: "#3E6B8A", words: [
    "택시",
    "버스",
    "지하철",
    "교통카드",
    "케이티엑스",
    "KTX",
    "기차",
    "SRT",
    "카카오T",
    "한국철도공사",
    "코레일",
    "에스알",
    "교통공사",
    "도시철도",
    "광역버스",
    "monorail",
    "yui rail",
    "metro",
    "subway",
    "티머니",
    "캐시비"
  ] },
  // 차량 유지비 — 주유·정비·보험·주차·통행료를 한곳에 모아 차 한 대에 드는 돈을 본다
  { key: "car", label: "차량 유지비", color: "#6B5B3E", words: [
    "기름",
    "주유",
    "주유소",
    "휘발유",
    "경유",
    "엘피지",
    "LPG",
    "충전소",
    "SK에너지",
    "GS칼텍스",
    "에쓰오일",
    "S-OIL",
    "현대오일뱅크",
    "알뜰주유소",
    "오일뱅크",
    "오일",
    "석유",
    "에너지플러스",
    "정비",
    "카센터",
    "자동차공업사",
    "공업사",
    "블루핸즈",
    "오토큐",
    "스피드메이트",
    "현대서비스",
    "기아서비스",
    "타이어",
    "타이어뱅크",
    "엔진오일",
    "미션오일",
    "세차",
    "자동차세",
    "검사소",
    "자동차검사",
    "주차",
    "주차장",
    "톨게이트",
    "하이패스",
    "한국도로공사",
    "자동차보험",
    "다이렉트자동차"
  ] },
  { key: "shopping", label: "쇼핑", color: "#7A4A8A", words: [
    "옷",
    "쇼핑",
    "신발",
    "가방",
    "쿠팡",
    "당근",
    "인터넷쇼핑",
    "네이버페이",
    "무신사",
    "올리브영",
    "11번가",
    "지마켓",
    "G마켓",
    "옥션",
    "위메프",
    "티몬",
    "알리익스프레스",
    "테무"
  ] },
  { key: "living", label: "주거·생활", color: "#4A6B4A", words: ["월세", "관리비", "전기", "가스", "수도", "생활용품", "세제", "다이소", "한국전력", "아파트", "어울림", "관리사무소", "상하수도", "도시가스", "난방비", "버킷플레이스", "오늘의집"] },
  { key: "health", label: "의료·건강", color: "#8A4A4A", words: [
    "병원",
    "약국",
    "약값",
    "헬스",
    "운동",
    "필라테스",
    "의원",
    "치과",
    "한의원",
    "내과",
    "외과",
    "이비인후과",
    "피부과",
    "안과",
    "소아과",
    "산부인과",
    "정신건강의학과",
    "의료원",
    "보건소",
    "의료재단"
  ] },
  { key: "culture", label: "문화·여가", color: "#4A5F8A", words: [
    "영화",
    "넷플릭스",
    "책",
    "게임",
    "공연",
    "콘서트",
    "유튜브",
    "스포티파이",
    "왓챠",
    "CGV",
    "메가박스",
    "씨제이이엔엠",
    "티빙",
    "웨이브",
    "쿠팡플레이",
    "디즈니",
    "멜론",
    "지니뮤직",
    "플러스 멤버십",
    "멤버십",
    "베트맨",
    "스포츠토토",
    "케이토토"
  ] },
  { key: "comm", label: "통신", color: "#5A5A5A", words: [
    "통신",
    "휴대폰",
    "핸드폰",
    "인터넷비",
    "SK텔레콤",
    "SKT",
    "KT",
    "LG유플러스",
    "LGU",
    "알뜰폰",
    "브로드밴드",
    "텔레콤",
    "조이텔",
    "헬로모바일",
    "케이티엠모바일",
    "KT엠모바일",
    "에스케이텔링크",
    "세븐모바일",
    "프리텔레콤",
    "세종텔레콤",
    "리브엠",
    "U+유모바일",
    "이야기모바일"
  ] },
  { key: "insurance", label: "보험", color: "#6B5A7A", words: ["보험", "실손", "상해", "화재보험"] },
  { key: "loan", label: "대출·이자", color: "#8A5A3B", words: ["대출이자", "이자상환", "원리금", "할부이자", "대출상환", "마이너스통장이자"] },
  { key: "family", label: "가족 송금", color: "#5A7A8A", words: ["생활비", "용돈"] },
  { key: "social", label: "경조사·회비", color: "#9A5B6E", words: ["축의", "부의", "조의", "근조", "경조", "결혼축하", "화환", "돌잔치", "사우회", "동창회", "친목회", "모임회비", "계모임", "향우회"] },
  { key: "travel", label: "여행", color: "#3E7A6B", words: [
    // 항공
    "항공",
    "에어로케이",
    "에어부산",
    "에어서울",
    "티웨이",
    "제주항공",
    "진에어",
    "이스타",
    "eastar",
    "아시아나",
    "대한항공",
    "airline",
    "airways",
    "nippon airw",
    "japan airlines",
    "peach avia",
    // 숙박
    "숙박",
    "호텔",
    "hotel",
    "게스트하우스",
    "리조트",
    "resort",
    "펜션",
    "료칸",
    "에어비앤비",
    "airbnb",
    "야놀자",
    "여기어때",
    "아고다",
    "agoda",
    "booking.com",
    "부킹닷컴",
    "익스피디아",
    "expedia",
    "호텔스컴바인",
    "트리바고",
    "tripla",
    // 예약·체험 플랫폼
    "클룩",
    "klook",
    "kkday",
    "마이리얼트립",
    "하나투어",
    "모두투어",
    "노랑풍선",
    "인터파크투어",
    "his ",
    "트리플",
    "스카이스캐너",
    "getyourguide",
    "viator",
    "트립닷컴",
    "trip.com",
    "씨트립",
    // 교통·기타 (현지 교통카드·유심은 떠나기 전에 결제한다)
    "렌터카",
    "rent a car",
    "면세점",
    "duty free",
    "여행",
    "트래블월렛",
    "공항",
    "airport",
    "공항철도",
    "리무진",
    "railway",
    "jr동일본",
    "jr이스트",
    "jr east",
    "jreast",
    "신칸센",
    "스이카",
    "suica",
    "파스모",
    "pasmo",
    "이코카",
    "icoca",
    "esim",
    "여행자보험",
    "도시락"
  ] },
  { key: "income", label: "수입", color: "#3D6B4F", words: [] },
  { key: "etc", label: "기타", color: "#8A8A8A", words: [] }
];
var CAT_MAP = Object.fromEntries(CATEGORIES.map((c3) => [c3.key, c3]));
var REFUND_IN_NAMES = [
  "쿠팡",
  "지마켓",
  "g마켓",
  "gmarket",
  "옥션",
  "auction",
  "11번가",
  "십일번가",
  "위메프",
  "티몬",
  "ssg",
  "롯데온",
  "인터파크",
  "알리익스프레스",
  "aliexpress",
  "테무",
  "temu",
  "무신사",
  "올리브영",
  "마켓컬리",
  "컬리",
  "오늘의집",
  "버킷플레이스",
  "베트맨",
  "스포츠토토",
  "케이토토"
];
function isRefundInName(raw) {
  const t4 = String(raw || "").replace(/\s+/g, "").toLowerCase();
  return REFUND_IN_NAMES.some((w3) => t4.includes(w3));
}
var NAME_ALIAS = [
  ["지마켓", ["g마켓", "gmarket", "지마켓"]],
  ["옥션", ["옥션", "auction"]],
  ["11번가", ["11번가", "십일번가", "번가"]],
  ["쿠팡", ["쿠팡", "쿠팡페이"]],
  ["알리", ["알리익스프레스", "aliexpress", "알리"]],
  ["테무", ["테무", "temu"]],
  ["오늘의집", ["오늘의집", "버킷플레이스"]],
  ["컬리", ["마켓컬리", "컬리"]],
  ["베트맨", ["베트맨", "스포츠토토", "케이토토"]]
];
function aliasKey(key) {
  const k3 = String(key || "").toLowerCase();
  if (!k3) return "";
  for (const [canon, words] of NAME_ALIAS) {
    if (words.some((w3) => k3.includes(w3))) return canon;
  }
  return k3;
}
var INCOME_WORDS = ["받았", "월급", "급여", "용돈받", "수입", "보너스", "환급", "들어왔", "벌었", "정산받", "상여"];
var PAYROLL_WORDS = [
  "급여",
  "월급",
  "상여",
  "성과급",
  "능률성과급",
  "수당",
  "정근수당",
  "가족수당",
  "시간외",
  "처우개선",
  "복리후생",
  "자녀학자금",
  "학자금",
  "교육비지원",
  "격려금",
  "포상금",
  "연말정산",
  "퇴직금",
  "명절휴가비",
  "직급보조비",
  "급식비",
  "복지포인트"
];
function isPayrollName(raw, settings) {
  const t4 = String(raw || "").replace(/\s+/g, "");
  if (PAYROLL_WORDS.some((w3) => t4.includes(w3))) return true;
  const src = settings && settings.incomeSources || [];
  return src.some((w3) => w3 && String(w3).length >= 2 && t4.toUpperCase().includes(String(w3).replace(/\s+/g, "").toUpperCase()));
}
function parseHangulSegment(seg) {
  const digit = { 영: 0, 일: 1, 이: 2, 삼: 3, 사: 4, 오: 5, 육: 6, 륙: 6, 칠: 7, 팔: 8, 구: 9 };
  const unit = { 십: 10, 백: 100, 천: 1e3 };
  let n3 = 0, cur = 0;
  for (const ch of seg) {
    if (digit[ch] !== void 0) cur = digit[ch];
    else if (unit[ch] !== void 0) {
      n3 += (cur || 1) * unit[ch];
      cur = 0;
    }
  }
  return n3 + cur;
}
function hangulToNumber(str) {
  let s3 = str, total = 0;
  for (const [ch, val] of [["억", 1e8], ["만", 1e4]]) {
    const idx = s3.indexOf(ch);
    if (idx !== -1) {
      const before = s3.slice(0, idx);
      total += (before === "" ? 1 : parseHangulSegment(before)) * val;
      s3 = s3.slice(idx + 1);
    }
  }
  return total + parseHangulSegment(s3);
}
function stripNoise(text) {
  return String(text == null ? "" : text).replace(/\[?\s*(web발신|국외발신|국제발신|광고)\s*\]?/gi, " ").replace(/(카드|체크|신용|카드번호)\s*[(\[]?\s*\d{4}\s*[)\]]?/gi, "$1 ").replace(/\d{4}\s*[*·]{2,}\s*\d{0,4}/g, " ").replace(/[*·]{3,}\s*\d{3,4}/g, " ").replace(/(^|[\s\]])[가-힣]\*{1,2}[가-힣]{1,2}님?(?=[\s\[]|$)/gm, "$1 ").replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g, " ").replace(/[ \t]+/g, " ");
}
var EXCLUDE_NEAR = ["누적", "잔액", "한도", "사용가능", "가용", "잔여", "적립", "포인트", "마일리지"];
function nearExcluded(text, idx) {
  const before = text.slice(Math.max(0, idx - 14), idx);
  return EXCLUDE_NEAR.some((w3) => before.includes(w3));
}
function extractAmount(text) {
  const s3 = stripNoise(text);
  const UNIT = { "억": 1e8, "만": 1e4, "천": 1e3 };
  const tier1 = [];
  let m3;
  const re1 = /([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)?\s*원/g;
  while ((m3 = re1.exec(s3)) !== null) {
    if (nearExcluded(s3, m3.index)) continue;
    let v3 = parseFloat(m3[1].replace(/,/g, ""));
    if (m3[2]) v3 *= UNIT[m3[2]];
    if (v3 > 0) tier1.push(Math.round(v3));
  }
  if (tier1.length) return tier1[0];
  const tier2 = [];
  const re2 = /(?:^|[^0-9.])(\d{1,3}(?:,\d{3})+)(?![0-9])/g;
  while ((m3 = re2.exec(s3)) !== null) {
    if (nearExcluded(s3, m3.index)) continue;
    const v3 = parseInt(m3[1].replace(/,/g, ""), 10);
    if (v3 > 0) tier2.push(v3);
  }
  if (tier2.length) return tier2[0];
  const mh = s3.match(/([일이삼사오육륙칠팔구십백천만억영]+)\s*원/);
  if (mh) {
    const v3 = hangulToNumber(mh[1]);
    if (v3 > 0) return v3;
  }
  const mu = s3.match(/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)/);
  if (mu && !nearExcluded(s3, mu.index)) {
    const v3 = Math.round(parseFloat(mu[1].replace(/,/g, "")) * UNIT[mu[2]]);
    if (v3 > 0) return v3;
  }
  const bare = s3.match(/(?:^|\s)(\d{3,})(?:\s|$)/);
  if (bare) {
    const v3 = parseInt(bare[1], 10);
    if (v3 > 0) return v3;
  }
  return 0;
}
function extractBalance(text) {
  const s3 = stripNoise(text);
  const m3 = s3.match(/(잔여한도|잔여포인트|잔여금액|사용가능금액|잔액|잔고|남은금액|사용가능|잔여)[^\d-]{0,6}(-?\s?[0-9][0-9,]*)/);
  if (m3) {
    const v3 = parseInt(m3[2].replace(/[,\s]/g, ""), 10);
    if (!isNaN(v3)) return v3;
  }
  return null;
}
function normKey(s3) {
  return String(s3 == null ? "" : s3).replace(/\d+\s*월\s*분?/g, "").replace(/\d+\s*(회차|회|차)/g, "").replace(/㈜|\(주\)|주식회사|주\)/g, "").replace(/\d+/g, "").replace(/[^\p{L}]/gu, "").replace(/점$/, "").toLowerCase();
}
function similarity(a3, b3) {
  a3 = String(a3 == null ? "" : a3);
  b3 = String(b3 == null ? "" : b3);
  if (!a3 || !b3) return 0;
  if (a3 === b3) return 1;
  const grams = (s3) => {
    const out = /* @__PURE__ */ new Set();
    const t4 = `  ${s3}  `;
    for (let i3 = 0; i3 < t4.length - 2; i3++) out.add(t4.slice(i3, i3 + 3));
    return out;
  };
  const ga = grams(a3), gb = grams(b3);
  let inter = 0;
  for (const g2 of ga) if (gb.has(g2)) inter++;
  return inter / (ga.size + gb.size - inter);
}
var NOISE_TOKENS = [
  "자동이체",
  "일시불",
  "웹발신",
  "승인취소",
  "승인",
  "취소",
  "환불",
  "할부",
  "누적",
  "포인트",
  "잔여한도",
  "잔여포인트",
  "사용가능",
  "잔여",
  "잔액",
  "한도",
  "결제",
  "출금",
  "입금",
  "이체",
  "납부",
  "청구",
  "계좌",
  "매입",
  "정정",
  "개월",
  "체크카드",
  "신용카드",
  // 통신요금 청구·상세 문자 (상호가 안 적힌 문자에서 엉뚱한 단어가 상호가 되는 것을 막는다)
  "기본료",
  "요금할인",
  "통신요금",
  "부가가치세",
  "이용상세내역",
  "청구서",
  "청구금액",
  "납부할금액",
  "총납부하실금액",
  "사용기간",
  "고객번호",
  "납기일",
  "할인액",
  "미납액",
  // 은행 거래내역의 '거래구분' 칸
  "모바일",
  "체크우리",
  "타행이체",
  "타행건별",
  "오픈뱅킹",
  "오픈인증",
  "대출결산",
  "예금결산",
  "인터넷",
  "스마트폰뱅킹",
  "창구",
  "자동화기기"
];
var BANK_BRANDS = [
  "국민",
  "KB국민",
  "KB",
  "신한",
  "삼성",
  "현대",
  "롯데",
  "하나",
  "우리",
  "농협",
  "NH",
  "IBK",
  "기업",
  "카카오뱅크",
  "카카오",
  "토스",
  "케이뱅크",
  "SC제일",
  "새마을금고",
  "신협",
  "우체국",
  "부산",
  "대구",
  "광주",
  "전북",
  "경남",
  "제주",
  "씨티",
  "산업"
];
function cleanLine(line) {
  let t4 = line.replace(/\d+\s*월\s*분/g, " ").replace(/\d+\s*(회차|회|차)/g, " ").replace(/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/g, " ").replace(/\d{1,2}[.\-/]\d{1,2}/g, " ").replace(/\d{1,2}월\s*\d{1,2}일/g, " ").replace(/-?[0-9][0-9,]*(?:\.[0-9]+)?\s*(억|만|천)?\s*원?/g, " ").replace(/[()（）\[\]]/g, " ");
  for (const b3 of BANK_BRANDS) t4 = t4.replace(new RegExp(`${b3}\\s*(카드|은행|뱅크)`, "g"), " ");
  for (const w3 of NOISE_TOKENS) t4 = t4.split(w3).join(" ");
  return t4.replace(/\s+/g, " ").trim();
}
function extractMerchant(raw) {
  const s3 = stripNoise(raw);
  const lines = s3.split(/\n/).map((l3) => l3.trim()).filter(Boolean);
  const candidates = [];
  for (const line of lines) {
    const cleaned = cleanLine(line);
    if (!cleaned || !/[\p{L}]/u.test(cleaned)) continue;
    if (cleaned.replace(/[^\p{L}]/gu, "").length < 2) continue;
    candidates.push(cleaned);
  }
  if (candidates.length) return candidates[candidates.length - 1].slice(0, 30);
  return "";
}
function matchRule(key, rules) {
  const k3 = String(key == null ? "" : key);
  if (k3.length < 2) return null;
  let best = null, bestScore = 0;
  for (const r3 of rules || []) {
    const rk = r3 && typeof r3.normKey === "string" ? r3.normKey : "";
    if (rk.length < 2) continue;
    let sc = 0;
    if (rk === k3) sc = 1e3;
    else if (k3.includes(rk)) sc = 100 + rk.length;
    else if (rk.includes(k3) && k3.length >= 3 && k3.length / rk.length >= 0.5) sc = 50 + k3.length;
    if (sc > bestScore) {
      best = r3;
      bestScore = sc;
    }
  }
  return best;
}
function wordHit(text, low, w3) {
  if (/^[A-Za-z0-9+]{1,3}$/.test(w3)) {
    const esc = w3.replace(/[+]/g, "\\+");
    return new RegExp(`(^|[^A-Za-z])${esc}([^A-Za-z]|$)`, "i").test(text);
  }
  return text.includes(w3) || low.includes(w3.toLowerCase());
}
var WEAK_MEMO = /^(기본료|요금할인|통신요금|부가가치세|이용상세내역|청구서|청구금액|납부할금액|총납부하실금액|내역|합계|금액|할인|사용료|이용료|상호확인필요)$/;
function isWeakMemo(memo) {
  const m3 = String(memo || "").replace(/\s+/g, "");
  return !m3 || m3.length < 2 || WEAK_MEMO.test(m3);
}
function matchByAmount(amount, rules = []) {
  if (!amount) return null;
  const hits = (rules || []).filter((r3) => r3 && r3.amountHint && Math.abs(r3.amountHint - amount) <= 1);
  return hits.length === 1 ? hits[0] : null;
}
function detectCategory(raw, type, rules = []) {
  if (type === "income") return "income";
  const text = String(raw == null ? "" : raw);
  const rule = matchRule(normKey(text), rules);
  if (rule && rule.category) return rule.category;
  const low = text.toLowerCase();
  for (const c3 of CATEGORIES) {
    if (c3.words.some((w3) => wordHit(text, low, w3))) return c3.key;
  }
  return "etc";
}
function scoreConfidence(raw, category, matchedRule) {
  const text = String(raw == null ? "" : raw);
  if (matchedRule) return 1;
  if (category === "etc") return 0.4;
  const c3 = CAT_MAP[category];
  if (!c3) return 0.4;
  const hits = c3.words.filter((w3) => text.includes(w3)).length;
  return hits >= 2 ? 0.9 : hits === 1 ? 0.7 : 0.5;
}
function classifyIncome(entry, settings) {
  const st = settings || {};
  const raw = `${entry.counterpartyRaw || ""} ${entry.memo || ""} ${entry.rawText || ""}`;
  if (entry.amount === 1) {
    return { type: "transfer", transferKind: "verify", confidence: 1 };
  }
  if (/(환불|취소|반품|정정)/.test(raw)) {
    return { type: "expense", isRefund: true, transferKind: null, confidence: 1 };
  }
  if (isRefundInName(raw)) {
    return { type: "expense", isRefund: true, transferKind: null, confidence: 0.9, refundByName: true };
  }
  if (/이자/.test(raw) && !/대출/.test(raw)) {
    return { type: "income", category: "income", confidence: 1 };
  }
  if (st.userName && raw.includes(st.userName)) {
    return { type: "transfer", transferKind: "internal", confidence: 1 };
  }
  const sources = st.incomeSources || [];
  const hit = sources.find((x2) => x2 && raw.includes(x2));
  if (hit) return { type: "income", category: "income", transferKind: null, confidence: 1, incomeSource: hit };
  if (isPayrollName(raw, st)) {
    return { type: "income", category: "income", transferKind: null, confidence: 0.9 };
  }
  const excl = st.excludedCounterparties || [];
  const ex = excl.find((x2) => x2 && raw.includes(x2));
  if (ex) return { type: "transfer", transferKind: "excluded", confidence: 1, excludedBy: ex };
  if (sources.length === 0) return null;
  if (st.incomeOnlyFromSources !== false) {
    return { type: "transfer", transferKind: "excluded", confidence: 0.4, needsCheck: true };
  }
  return null;
}
var CARD_BILL_RE = /^(신한|삼성|현대|국민|롯데|하나|우리|비씨|BC|농협|씨티|카카오|케이|토스)?카드(대금|결제대금|값)?$|^카드대금$/;
var SAVING_RE = /(공제회|적금|정기예금|청약|저축보험|연금저축|퇴직연금|펀드납입)/;
function applyAccountRules(entry, settings) {
  const st = settings || {};
  const raw = `${entry.counterpartyRaw || ""} ${entry.memo || ""} ${entry.rawText || ""}`;
  const invest = (st.investKeywords || []).find((x2) => x2 && raw.includes(x2));
  if (invest) {
    return { type: "transfer", transferKind: "invest", investBy: invest, confidence: 1 };
  }
  const who = String(entry.counterpartyRaw || entry.memo || "").replace(/\s+/g, "");
  const exOut = (st.excludedCounterparties || []).find((x2) => x2 && who.includes(String(x2).replace(/\s+/g, "")));
  if (entry.direction !== "in" && exOut) {
    return { type: "transfer", transferKind: "excluded", excludedBy: exOut, confidence: 1 };
  }
  const myName = String(st.userName || "").replace(/\s+/g, "");
  if (entry.direction !== "in" && myName.length >= 2 && who.endsWith(myName)) {
    return { type: "transfer", transferKind: "internal", confidence: 1 };
  }
  if (entry.direction !== "in" && CARD_BILL_RE.test(who)) {
    return { type: "transfer", transferKind: "cardPayment", confidence: 1 };
  }
  if (entry.direction !== "in" && SAVING_RE.test(who)) {
    return { type: "transfer", transferKind: "savings", confidence: 1 };
  }
  if (entry.direction !== "in" && /대출원금상환|원금상환/.test(who)) {
    return { type: "transfer", transferKind: "loanPrincipal", confidence: 1 };
  }
  const welfare = (st.welfareCards || []).find((x2) => x2 && raw.includes(x2));
  if (welfare) {
    return { transferKind: "welfare", welfareBy: welfare, category: entry.category };
  }
  const travel = (st.travelKeywords || []).find((x2) => x2 && raw.includes(x2));
  if (travel) {
    return { type: "expense", transferKind: null, category: "travel", travelBy: travel, confidence: 1 };
  }
  const fam = (st.familyTransferKeywords || []).find((x2) => x2 && raw.includes(x2));
  if (fam) {
    const base2 = st.familyRegularAmount || 0;
    const lo = st.familyAmountMin || 0;
    const hi = st.familyAmountMax || 0;
    let isExtra = false;
    if (lo > 0 || hi > 0) {
      isExtra = lo > 0 && entry.amount < lo || hi > 0 && entry.amount > hi;
    } else if (base2 > 0) {
      isExtra = entry.amount > base2 * 1.4;
    }
    if (isExtra && st.familyExtraExcluded !== false) {
      return {
        type: "transfer",
        transferKind: "excluded",
        category: "family",
        familyBy: fam,
        isExtra: true,
        excludedBy: "별도 송금",
        confidence: 1
      };
    }
    return {
      type: "expense",
      transferKind: null,
      category: "family",
      familyBy: fam,
      isExtra,
      confidence: 1
    };
  }
  return null;
}
function detectSmsKind(raw, settings) {
  const t4 = String(raw == null ? "" : raw).replace(/\s/g, "");
  const tagged = /\[(?!web발신|국외발신|국제발신|광고)[^\[\]]{2,12}\](승인|취소|승인취소)/i.test(t4);
  const welfare = (settings && settings.welfareCards || []).some((w3) => w3 && t4.includes(String(w3).replace(/\s/g, "")));
  if (/(승인|취소|매입|일시불|할부)/.test(t4) && (/(카드|체크|신용)/.test(t4) || tagged || welfare)) return "card";
  if (/(출금|입금|이체|자동이체|납부)/.test(t4)) return "bank";
  if (/(합계|결제금액|받을금액|총액|부가세|사업자)/.test(t4)) return "receipt";
  return "free";
}
function parseDateFrom(text, now = /* @__PURE__ */ new Date()) {
  const s3 = stripNoise(text);
  let m3 = s3.match(/(20\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (m3) return toLocalISO(new Date(+m3[1], +m3[2] - 1, +m3[3]));
  m3 = s3.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (m3 && +m3[1] > 20) return toLocalISO(new Date(2e3 + +m3[1], +m3[2] - 1, +m3[3]));
  m3 = s3.match(/(\d{1,2})[.\-/](\d{1,2})/);
  if (m3) {
    const mo = +m3[1], da = +m3[2];
    if (mo >= 1 && mo <= 12 && da >= 1 && da <= 31) return resolveYear(mo, da, now);
  }
  m3 = s3.match(/(\d{1,2})월\s*(\d{1,2})일/);
  if (m3) return resolveYear(+m3[1], +m3[2], now);
  return null;
}
function parseCardSms(text, opts = {}) {
  const now = opts.now || /* @__PURE__ */ new Date();
  const amount = extractAmount(text);
  const isRefund = /(취소|환불|정정)/.test(text);
  const merchant = extractMerchant(text);
  const category = detectCategory(merchant || text, "expense", opts.rules);
  const installment = /(\d{1,2})\s*개월\s*할부/.exec(text);
  const rule = applyAccountRules({ memo: merchant, rawText: text, category, amount }, opts.settings);
  const welfareBalance = rule && rule.transferKind === "welfare" ? extractBalance(text) : null;
  return {
    type: rule && rule.type || "expense",
    welfareBalance,
    isExtra: !!(rule && rule.isExtra),
    isRefund,
    category: rule && rule.category || category,
    transferKind: rule && rule.transferKind || null,
    amount,
    memo: merchant || text.replace(/\s+/g, " ").trim().slice(0, 24),
    date: parseDateFrom(text, now) || todayISO(),
    normKey: normKey(merchant),
    paymentMethod: "card",
    installmentMonths: installment ? +installment[1] : null,
    source: "sms",
    confidence: scoreConfidence(merchant || text, category),
    rawText: text
  };
}
function parseBankSms(text, opts = {}) {
  const now = opts.now || /* @__PURE__ */ new Date();
  const amount = extractAmount(text);
  const balance = extractBalance(text);
  const isOut = /(출금|이체출금|납부|송금)/.test(text) && !/입금/.test(text);
  const isIn = /입금/.test(text) && !/출금/.test(text);
  const direction = isOut ? "out" : isIn ? "in" : null;
  const counterparty = extractMerchant(text);
  const isCashOut = /(ATM|CD출금|현금인출|현금출금)/i.test(text);
  let type = "expense";
  let transferKind = isCashOut ? "cashOut" : null;
  let needsCheck = false;
  let confidence = null;
  let refundIn = false;
  if (direction === "in") {
    const inc = classifyIncome({ counterpartyRaw: counterparty, memo: counterparty, rawText: text, amount }, opts.settings);
    if (inc) {
      type = inc.type;
      transferKind = inc.transferKind;
      needsCheck = !!inc.needsCheck;
      confidence = inc.confidence;
      if (inc.isRefund) refundIn = true;
    } else {
      type = INCOME_WORDS.some((w3) => text.includes(w3)) || /(급여|월급|상여)/.test(text) ? "income" : "transfer";
    }
  } else if (isCashOut) type = "transfer";
  let category = type === "income" ? "income" : detectCategory(counterparty || text, "expense", opts.rules);
  const rule = applyAccountRules({ counterpartyRaw: counterparty, memo: counterparty, rawText: text, category, amount }, opts.settings);
  if (rule) {
    if (rule.type) type = rule.type;
    if (rule.category) category = rule.category;
    transferKind = rule.transferKind;
    if (rule.confidence != null) confidence = rule.confidence;
    needsCheck = false;
  }
  if (transferKind && ["internal", "invest", "savings", "cashOut", "cardPayment", "fxTopup", "verify"].includes(transferKind)) {
    needsCheck = false;
    if (confidence == null) confidence = 1;
  }
  return {
    type,
    direction,
    isRefund: refundIn,
    isExtra: !!(rule && rule.isExtra),
    needsCheck,
    category,
    amount,
    memo: counterparty || text.replace(/\s+/g, " ").trim().slice(0, 24),
    date: parseDateFrom(text, now) || todayISO(),
    normKey: normKey(counterparty),
    paymentMethod: "account",
    transferKind,
    balanceAfter: balance,
    counterpartyRaw: counterparty,
    source: "sms",
    confidence: confidence != null ? confidence : scoreConfidence(counterparty || text, category),
    rawText: text
  };
}
var RECEIPT_TOTAL_WORDS = ["합계", "결제금액", "받을금액", "총액", "총 금액", "판매금액", "승인금액"];
function parseReceipt(text, opts = {}) {
  const now = opts.now || /* @__PURE__ */ new Date();
  const s3 = stripNoise(text);
  let amount = 0;
  for (const w3 of RECEIPT_TOTAL_WORDS) {
    const re = new RegExp(`${w3}\\s*[:：]?\\s*([0-9][0-9,]*)`);
    const m3 = s3.match(re);
    if (m3) {
      const v3 = parseInt(m3[1].replace(/,/g, ""), 10);
      if (v3 > 0) {
        amount = v3;
        break;
      }
    }
  }
  if (!amount) {
    const all = [];
    const re = /([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{3,})\s*원?/g;
    let m3;
    while ((m3 = re.exec(s3)) !== null) {
      if (nearExcluded(s3, m3.index)) continue;
      if (/(부가세|면세|과세|할인|거스름|받은금액)/.test(s3.slice(Math.max(0, m3.index - 10), m3.index))) continue;
      const v3 = parseInt(m3[1].replace(/,/g, ""), 10);
      if (v3 > 0) all.push(v3);
    }
    amount = all.length ? Math.max(...all) : 0;
  }
  const lines = s3.split(/\n/).map((l3) => l3.trim()).filter(Boolean);
  let store = "";
  for (const line of lines.slice(0, 4)) {
    if (/[\p{L}]/u.test(line) && cleanLine(line).length >= 2 && !/\d{3,}/.test(line)) {
      store = line.slice(0, 30);
      break;
    }
  }
  const isCash = /(현금|현금영수증)/.test(text) && !/카드/.test(text);
  const category = detectCategory(store || text, "expense", opts.rules);
  return {
    type: "expense",
    isRefund: false,
    category,
    amount,
    memo: store || "영수증",
    date: parseDateFrom(text, now) || todayISO(),
    normKey: normKey(store),
    paymentMethod: isCash ? "cash" : "card",
    source: "receipt",
    confidence: store ? scoreConfidence(store, category) : 0.4,
    rawText: text
  };
}
function parseFree(text, opts = {}) {
  const amount = extractAmount(text);
  const type = INCOME_WORDS.some((w3) => text.includes(w3)) ? "income" : "expense";
  let offset = 0;
  if (/(그저께|그제)/.test(text)) offset = -2;
  else if (text.includes("어제")) offset = -1;
  const category = detectCategory(text, type, opts.rules);
  return {
    type,
    isRefund: false,
    category,
    amount,
    memo: text.trim(),
    date: todayISO(offset),
    normKey: normKey(text.replace(/[0-9,]+\s*원?/g, "")),
    paymentMethod: "unknown",
    source: "manual",
    confidence: scoreConfidence(text, category),
    rawText: text
  };
}
function parseOne(text, opts = {}) {
  const kind = detectSmsKind(text, opts.settings);
  const parsed = kind === "card" ? parseCardSms(text, opts) : kind === "bank" ? parseBankSms(text, opts) : kind === "receipt" ? parseReceipt(text, opts) : parseFree(text, opts);
  return finishMemo(parsed, opts);
}
var BILL_RE = /(이용상세내역|청구서|청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)/;
var BILL_AMT = /(청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)\D{0,8}([0-9][0-9,]*)/;
function finishMemo(parsed, opts = {}) {
  if (!parsed || parsed.type === "income") return parsed;
  const raw = String(parsed.rawText || parsed.memo || "");
  if (BILL_RE.test(raw)) {
    const m3 = raw.match(BILL_AMT);
    const billAmt = m3 ? parseInt(m3[2].replace(/,/g, ""), 10) : null;
    parsed = {
      ...parsed,
      memo: "",
      normKey: "",
      amount: billAmt && billAmt > 0 ? billAmt : parsed.amount
    };
  }
  if (!isWeakMemo(parsed.memo)) return parsed;
  const hit = matchByAmount(parsed.amount, opts.rules);
  if (hit && hit.name) {
    return {
      ...parsed,
      memo: hit.name,
      normKey: normKey(hit.name),
      counterpartyRaw: hit.name,
      category: hit.category || parsed.category,
      confidence: Math.max(parsed.confidence ?? 0.5, 0.8)
    };
  }
  return {
    ...parsed,
    memo: "상호 확인 필요",
    normKey: "",
    needsCheck: true,
    confidence: Math.min(parsed.confidence ?? 0.5, 0.4)
  };
}
var DATE_LINE = /(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}|\d{1,2}[.\-/]\d{1,2}(?![.\-/]?\d{3})|\d{1,2}월\s*\d{1,2}일)/;
function parseStatement(text, opts = {}) {
  const now = opts.now || /* @__PURE__ */ new Date();
  const raw = stripNoise(text);
  const lines = raw.split(/\n/).map((l3) => l3.trim()).filter(Boolean);
  const rows = [];
  let cur = null;
  for (const line of lines) {
    if (DATE_LINE.test(line)) {
      if (cur) rows.push(cur);
      cur = { lines: [line] };
    } else if (cur) {
      cur.lines.push(line);
    }
  }
  if (cur) rows.push(cur);
  if (rows.length < 2) return [];
  const parsed = rows.map((r3) => {
    const body = r3.lines.join(" ");
    const date = parseDateFrom(body, now) || todayISO();
    const nums = [];
    const reWon = /(-?[0-9][0-9,]*)\s*원/g;
    let m3;
    while ((m3 = reWon.exec(body)) !== null) nums.push({ v: parseInt(m3[1].replace(/,/g, ""), 10), i: m3.index });
    if (nums.length === 0) {
      const re2 = /(-?[0-9]{1,3}(?:,[0-9]{3})+|-?[0-9]{4,})/g;
      while ((m3 = re2.exec(body)) !== null) {
        if (!m3[1].includes(",") && m3[1].replace(/-/g, "").length >= 10) continue;
        nums.push({ v: parseInt(m3[1].replace(/,/g, ""), 10), i: m3.index });
      }
    }
    let amount = 0, balance = null, direction = null;
    if (nums.length >= 3) {
      balance = nums[nums.length - 1].v;
      const o3 = nums[nums.length - 3].v, n3 = nums[nums.length - 2].v;
      if (o3 > 0 && n3 === 0) {
        amount = o3;
        direction = "out";
      } else if (n3 > 0 && o3 === 0) {
        amount = n3;
        direction = "in";
      } else {
        amount = Math.abs(n3 || o3);
      }
    } else if (nums.length === 2) {
      balance = nums[1].v;
      amount = Math.abs(nums[0].v);
    } else if (nums.length === 1) {
      amount = Math.abs(nums[0].v);
    }
    if (!direction) {
      if (/출금|지급|인출/.test(body)) direction = "out";
      else if (/입금|수취|예입/.test(body)) direction = "in";
    }
    const merchant = extractMerchant(body);
    return { date, amount, balance, direction, merchant, body };
  });
  const chrono = [...parsed].reverse();
  for (let i3 = 1; i3 < chrono.length; i3++) {
    const prev = chrono[i3 - 1], curr = chrono[i3];
    if (prev.balance == null || curr.balance == null) continue;
    const delta = curr.balance - prev.balance;
    if (Math.abs(Math.abs(delta) - curr.amount) <= 1) {
      curr.direction = delta < 0 ? "out" : "in";
    }
  }
  const gaps = [];
  for (let i3 = 1; i3 < chrono.length; i3++) {
    const prev = chrono[i3 - 1], curr = chrono[i3];
    if (prev.balance == null || curr.balance == null || !curr.amount) continue;
    const dOut = curr.balance - (prev.balance - curr.amount);
    const dIn = curr.balance - (prev.balance + curr.amount);
    const diff = curr.direction === "out" ? dOut : curr.direction === "in" ? dIn : Math.abs(dOut) <= Math.abs(dIn) ? dOut : dIn;
    if (Math.abs(diff) > 1) gaps.push({ afterDate: prev.date, beforeDate: curr.date, missing: Math.abs(diff) });
  }
  const entries = parsed.filter((p3) => p3.amount > 0).map((p3) => {
    let type = p3.direction === "in" ? "transfer" : "expense";
    let transferKind = null, needsCheck = false;
    let refunded = false;
    if (p3.direction === "in") {
      const inc = classifyIncome({ counterpartyRaw: p3.merchant, memo: p3.merchant, rawText: p3.body, amount: p3.amount }, opts.settings);
      if (inc) {
        type = inc.type;
        transferKind = inc.transferKind;
        needsCheck = !!inc.needsCheck;
        refunded = !!inc.isRefund;
      } else if (/(급여|월급|상여)/.test(p3.body)) type = "income";
    }
    let category = type === "income" ? "income" : detectCategory(p3.merchant || p3.body, "expense", opts.rules);
    const rule = applyAccountRules(
      { counterpartyRaw: p3.merchant, memo: p3.merchant, rawText: p3.body, category, amount: p3.amount },
      opts.settings
    );
    let isExtra = false;
    if (rule) {
      if (rule.type) type = rule.type;
      if (rule.category) category = rule.category;
      transferKind = rule.transferKind;
      isExtra = !!rule.isExtra;
      needsCheck = false;
    }
    return {
      type,
      transferKind,
      needsCheck,
      isExtra,
      direction: p3.direction,
      isRefund: refunded,
      category,
      amount: p3.amount,
      memo: p3.merchant || "내역",
      date: p3.date,
      normKey: normKey(p3.merchant),
      paymentMethod: "account",
      balanceAfter: p3.balance,
      counterpartyRaw: p3.merchant,
      source: "statement",
      confidence: scoreConfidence(p3.merchant || p3.body, category),
      rawText: p3.body
    };
  });
  return { entries, gaps };
}
function parsePaste(text, opts = {}) {
  const s3 = stripNoise(text);
  const dateHits = (s3.match(new RegExp(DATE_LINE.source, "g")) || []).length;
  const amountHits = (s3.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})/g) || []).length;
  if (dateHits >= 2 && amountHits >= 3) {
    const res = parseStatement(text, opts);
    if (res.entries && res.entries.length >= 2) return { mode: "multi", ...res };
  }
  return { mode: "single", entries: [parseOne(text, opts)], gaps: [] };
}
var SOURCE_RANK = { statement: 4, sms: 3, shortcut: 3, receipt: 2, capture: 2, manual: 1, favorite: 1, auto: 1 };
function matchScore(a3, b3) {
  if (a3.amount !== b3.amount) return 0;
  if (a3.type !== b3.type) return 0;
  const da = /* @__PURE__ */ new Date(a3.date + "T00:00:00"), db = /* @__PURE__ */ new Date(b3.date + "T00:00:00");
  const dayDiff2 = Math.abs((da - db) / 864e5);
  if (dayDiff2 > 3) return 0;
  let score = 0;
  const reasons = [];
  if (dayDiff2 === 0) {
    score += 40;
    reasons.push("같은 날");
  } else if (dayDiff2 === 1) {
    score += 30;
    reasons.push("하루 차이");
  } else {
    score += 15;
    reasons.push(`${dayDiff2}일 차이`);
  }
  const ka = a3.normKey || "", kb = b3.normKey || "";
  if (ka && kb) {
    if (ka === kb) {
      score += 40;
      reasons.push("같은 가맹점");
    } else if (ka.includes(kb) || kb.includes(ka)) {
      score += 25;
      reasons.push("비슷한 가맹점");
    } else if (similarity(ka, kb) >= 0.6) {
      score += 15;
      reasons.push("가맹점 유사");
    }
  }
  if (a3.accountId && b3.accountId && a3.accountId === b3.accountId) {
    score += 15;
    reasons.push("같은 계좌");
  }
  if (a3.paymentMethod && a3.paymentMethod === b3.paymentMethod) score += 5;
  return { score, reasons };
}
function preferred(a3, b3) {
  return (SOURCE_RANK[a3.source] || 0) >= (SOURCE_RANK[b3.source] || 0) ? a3 : b3;
}
function reconcile(incoming, existing) {
  const added = [], merged = [], review = [];
  const pool = [...existing];
  for (const inc of incoming) {
    if (inc.transferKind === "fxTopup" || inc.category === "family") {
      added.push(inc);
      pool.push(inc);
      continue;
    }
    let best = null;
    for (const ex of pool) {
      if (ex.deleted) continue;
      if (inc.sourceHash && ex.sourceHash && inc.sourceHash !== ex.sourceHash && String(inc.sourceHash).split("|")[0] === String(ex.sourceHash).split("|")[0]) continue;
      const r3 = matchScore(inc, ex);
      if (!r3 || !r3.score) continue;
      if (!best || r3.score > best.score) best = { ...r3, target: ex };
    }
    if (best && best.score >= 80) {
      merged.push({ incoming: inc, target: best.target, ...best });
    } else if (best && best.score >= 50) {
      review.push({ incoming: inc, target: best.target, ...best });
      pool.push(inc);
    } else {
      added.push(inc);
      pool.push(inc);
    }
  }
  return { added, merged, review };
}

// src/sync.js
var SYNC_FIELDS = [
  "id",
  "date",
  "type",
  "category",
  "amount",
  "memo",
  "isRefund",
  "paymentMethod",
  "accountId",
  "normKey",
  "source",
  "confidence",
  "tripId",
  "carId",
  "currency",
  "foreignAmount",
  "balanceAfter",
  "transferKind",
  "direction",
  "fixedId",
  "rawText",
  "createdAt",
  "updatedAt",
  "deleted",
  "status"
];
function slim(e3) {
  const o3 = {};
  for (const k3 of SYNC_FIELDS) if (e3[k3] !== void 0) o3[k3] = e3[k3];
  return o3;
}
async function post(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    // application/json으로 보내면 프리플라이트가 걸려 Apps Script가 거부한다
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    redirect: "follow"
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (e3) {
    throw new Error("응답을 읽지 못했어요");
  }
  if (!data.ok) throw new Error(data.error || "서버가 거부했어요");
  return data;
}
async function get(url, params) {
  const q3 = new URLSearchParams(params).toString();
  const res = await fetch(`${url}${url.includes("?") ? "&" : "?"}${q3}`, { redirect: "follow" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = JSON.parse(await res.text());
  if (!data.ok) throw new Error(data.error || "서버가 거부했어요");
  return data;
}
function fixDate(v3) {
  if (!v3) return v3;
  const s3 = String(v3);
  const m3 = s3.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m3) return `${m3[1]}-${m3[2]}-${m3[3]}`;
  const d3 = new Date(s3);
  if (!isNaN(d3)) {
    const p3 = (n3) => String(n3).padStart(2, "0");
    return `${d3.getFullYear()}-${p3(d3.getMonth() + 1)}-${p3(d3.getDate())}`;
  }
  return s3;
}
function mergeEntries(local, remote) {
  const byId = new Map(local.map((e3) => [e3.id, e3]));
  let added = 0, updated = 0;
  for (const raw of remote) {
    const r3 = { ...raw, date: fixDate(raw.date) };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r3.date || "")) continue;
    const cur = byId.get(r3.id);
    if (!cur) {
      byId.set(r3.id, { ...r3, dirty: false });
      added++;
    } else if ((r3.updatedAt || 0) > (cur.updatedAt || 0)) {
      byId.set(r3.id, { ...cur, ...r3, dirty: false });
      updated++;
    }
  }
  const list = Array.from(byId.values()).sort((a3, b3) => a3.date < b3.date ? 1 : a3.date > b3.date ? -1 : (b3.createdAt || 0) - (a3.createdAt || 0));
  return { list, added, updated };
}
async function syncOnce(db) {
  const { sheetUrl, sheetToken } = db.settings || {};
  if (!sheetUrl) throw new Error("시트 주소가 없어요");
  const dirty = db.entries.filter((e3) => e3.dirty);
  if (dirty.length) {
    await post(sheetUrl, { token: sheetToken, op: "upsert", entries: dirty.map(slim) });
  }
  const res = await get(sheetUrl, { token: sheetToken, since: db.settings.lastSyncAt || "" });
  return {
    remote: res.entries || [],
    pushed: dirty.map((e3) => ({ id: e3.id, updatedAt: e3.updatedAt || 0 })),
    serverTime: res.serverTime || (/* @__PURE__ */ new Date()).toISOString()
  };
}
function applySync(db, r3) {
  const { list, added, updated } = mergeEntries(db.entries, r3.remote || []);
  const sent = new Map((r3.pushed || []).map((p3) => [p3.id, p3.updatedAt]));
  return {
    db: {
      ...db,
      entries: list.map((e3) => e3.dirty && sent.has(e3.id) && (e3.updatedAt || 0) <= sent.get(e3.id) ? { ...e3, dirty: false } : e3),
      settings: { ...db.settings, lastSyncAt: r3.serverTime }
    },
    pulled: added + updated
  };
}
async function cleanupSheet(sheetUrl, sheetToken) {
  const res = await post(sheetUrl, { token: sheetToken, op: "cleanup" });
  if (!res || res.ok !== true) throw new Error(res && res.error || "시트를 정리하지 못했어요");
  return res;
}
async function fetchTripEvents(sheetUrl, sheetToken, from, to) {
  const res = await get(sheetUrl, { token: sheetToken, op: "calendar", from, to });
  if (!Array.isArray(res.events)) throw new Error("Code.gs를 새 버전으로 바꿔야 캘린더를 읽을 수 있어요");
  return res.events;
}
async function ping(sheetUrl, sheetToken) {
  const res = await get(sheetUrl, { token: sheetToken, op: "ping" });
  return res;
}

// src/ocr.js
var baseP = null;
function base() {
  if (!baseP) {
    baseP = (async () => {
      const cands = [new URL("./ocr/", document.baseURI).href, new URL("./", document.baseURI).href];
      const need = ["tesseract.min.js", "worker.min.js", "kor.traineddata.gz", "eng.traineddata.gz"];
      let neterr = false;
      const missing = {};
      for (const b3 of cands) {
        const gone2 = [];
        for (const f3 of need) {
          try {
            const res = await fetch(b3 + f3, { method: "GET", cache: "no-store" });
            if (!res.ok) gone2.push(f3);
          } catch (err) {
            neterr = true;
            gone2.push(f3);
          }
        }
        if (!gone2.length) return b3;
        missing[b3] = gone2;
      }
      if (neterr) throw new Error("인터넷에 연결되어 있는지 확인해주세요. 글자 인식 도구는 처음 한 번만 받으면 됩니다");
      const best = cands.slice().sort((a3, b3) => missing[a3].length - missing[b3].length)[0];
      const gone = missing[best];
      throw new Error(`${gone.slice(0, 2).join(", ")}${gone.length > 2 ? ` 외 ${gone.length - 2}개` : ""} 파일이 서버에 없어요. 인식 파일 8개를 모두 올렸는지 확인해주세요`);
    })().catch((err) => {
      baseP = null;
      throw err;
    });
  }
  return baseP;
}
var workerP = null;
var progressCb = null;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s3 = document.createElement("script");
    s3.src = src;
    s3.onload = resolve;
    s3.onerror = () => reject(new Error("tesseract.min.js는 받았는데 실행되지 않았어요. 새로고침 후 다시 해보세요"));
    document.head.appendChild(s3);
  });
}
async function getWorker() {
  const b3 = await base();
  if (!window.Tesseract) await loadScript(b3 + "tesseract.min.js");
  if (!workerP) {
    workerP = (async () => {
      return window.Tesseract.createWorker(["kor", "eng"], 1, {
        workerPath: b3 + "worker.min.js",
        corePath: b3,
        langPath: b3,
        gzip: true,
        logger: (m3) => progressCb && progressCb(m3)
      });
    })().catch((err) => {
      workerP = null;
      throw err;
    });
  }
  return workerP;
}
async function readImages(files, onProgress) {
  const list = Array.from(files || []);
  if (typeof window !== "undefined" && typeof window.__ledgerOcrForTest === "function") {
    return window.__ledgerOcrForTest(list);
  }
  progressCb = (m3) => onProgress && onProgress({ ...m3, page: 0, pages: list.length });
  const worker = await getWorker();
  const pages = [];
  for (let i3 = 0; i3 < list.length; i3++) {
    const f3 = list[i3];
    progressCb = (m3) => onProgress && onProgress({ ...m3, page: i3 + 1, pages: list.length });
    const { data } = await worker.recognize(f3, {}, { blocks: true, text: false });
    const units = [];
    for (const b3 of data.blocks || []) for (const p3 of b3.paragraphs || []) for (const l3 of p3.lines || []) {
      units.push({ text: l3.text, x0: l3.bbox.x0, y0: l3.bbox.y0, x1: l3.bbox.x1, y1: l3.bbox.y1 });
    }
    pages.push({ words: units, fileDate: new Date(f3.lastModified || Date.now()), name: f3.name });
  }
  progressCb = null;
  return pages;
}

// src/capture.js
function wordsToLines(words) {
  const ws = (words || []).filter((w3) => w3 && String(w3.text || "").trim() && isFinite(w3.y0) && isFinite(w3.y1));
  if (!ws.length) return [];
  const hs = ws.map((w3) => Math.max(1, w3.y1 - w3.y0)).sort((a3, b3) => a3 - b3);
  const mh = hs[Math.floor(hs.length / 2)];
  const sorted = [...ws].sort((a3, b3) => a3.y0 + a3.y1 - (b3.y0 + b3.y1));
  const lines = [];
  for (const w3 of sorted) {
    const yc = (w3.y0 + w3.y1) / 2;
    const cur = lines[lines.length - 1];
    if (cur && Math.abs(yc - cur.yc) <= mh * 0.6) {
      cur.words.push(w3);
      cur.yc = (cur.yc * (cur.words.length - 1) + yc) / cur.words.length;
    } else {
      lines.push({ yc, words: [w3] });
    }
  }
  return lines.map((l3) => l3.words.sort((a3, b3) => a3.x0 - b3.x0).map((w3) => String(w3.text).trim()).join(" "));
}
var CUR_SYM = { "¥": "JPY", "￥": "JPY", "$": "USD", "€": "EUR", "£": "GBP", "฿": "THB", "₫": "VND" };
var CUR_WORD = { JPY: "JPY", USD: "USD", EUR: "EUR", GBP: "GBP", THB: "THB", VND: "VND", TWD: "TWD", HKD: "HKD", CNY: "CNY", 엔: "JPY", 달러: "USD", 유로: "EUR", 바트: "THB", 동: "VND" };
var NOISE = /^(일시불|할부|\d{1,2}개월|승인|승인취소|취소|매입|결제|결제취소|충전|환전|이체|입금|출금|자동이체|체크카드|체크|신용|신용카드|해외|국내|본인|가족|완료|예정|확정|잔액|잔고|잔여|사용|이용|내역|거래|오픈뱅킹|스마트폰|인터넷|모바일|ATM|CD|펌뱅킹|타행|당행|대체)$/i;
var TITLE = /(거래\s*내역|이용\s*내역|결제\s*내역|사용\s*내역|입출금|조회|필터|검색|전체|이번\s*달|지난\s*달|월별|기간\s*설정)/;
var WEEKDAY = /\(\s*(월|화|수|목|금|토|일)\s*\)|(월|화|수|목|금|토|일)요일/g;
function dateOf(line, now) {
  const s3 = line.replace(/\s+/g, " ");
  let m3, iso = null, used = "", partial = null;
  if (m3 = s3.match(/(오늘|어제|그저께|그제)/)) {
    const back = m3[1] === "오늘" ? 0 : m3[1] === "어제" ? 1 : 2;
    const d3 = new Date(now.getFullYear(), now.getMonth(), now.getDate() - back);
    iso = toLocalISO(d3);
    used = m3[0];
  } else if (m3 = s3.match(/(20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?!\d)/)) {
    iso = toLocalISO(new Date(+m3[1], +m3[2] - 1, +m3[3]));
    used = m3[0];
  } else if ((m3 = s3.match(/(20\d{2})\s*[.\-/년]?\s*([0-9OolI?]{1,2})\s*[.\-/월]?\s*([0-9OolI?]{1,2})\s*일/)) || (m3 = s3.match(/(20\d{2})\s*[.\-/년]\s*([0-9OolI?]{1,2})\s*[.\-/월]\s*([0-9OolI?]{1,2})/))) {
    const y3 = +m3[1], mo = fixNum(m3[2]), d3 = fixNum(m3[3]);
    used = m3[0];
    if (mo !== null && d3 !== null && mo >= 1 && mo <= 12 && d3 >= 1 && d3 <= 31) {
      iso = toLocalISO(new Date(y3, mo - 1, d3));
    } else if (d3 !== null && d3 >= 1 && d3 <= 31) {
      partial = { year: y3, day: d3 };
    } else if (mo !== null && mo >= 1 && mo <= 12) {
      partial = { year: y3, month: mo };
    }
  } else if (m3 = s3.match(/(?:^|\s)(\d{1,2})월\s*(\d{1,2})일/)) {
    if (+m3[1] >= 1 && +m3[1] <= 12 && +m3[2] >= 1 && +m3[2] <= 31) iso = resolveYear(+m3[1], +m3[2], now);
    used = m3[0];
  } else if (m3 = s3.match(/(?:^|\s)(\d{1,2})[./](\d{1,2})(?![\d,.])/)) {
    if (+m3[1] >= 1 && +m3[1] <= 12 && +m3[2] >= 1 && +m3[2] <= 31) iso = resolveYear(+m3[1], +m3[2], now);
    used = m3[0];
  }
  if (!iso && partial) {
    const rest0 = s3.replace(used, " ").replace(/\d{1,2}:\d{2}(:\d{2})?/g, " ").replace(WEEKDAY, " ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g, "");
    return { iso: null, partial, headerOnly: rest0.length === 0 };
  }
  if (!iso) return { iso: null, headerOnly: false };
  const rest = s3.replace(used, " ").replace(/\d{1,2}:\d{2}(:\d{2})?/g, " ").replace(WEEKDAY, " ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g, "");
  return { iso, headerOnly: rest.length === 0 };
}
function amountsOf(line) {
  const out = [];
  let s3 = line;
  const take = (re, fn) => {
    s3 = s3.replace(re, (...a3) => {
      const r3 = fn(a3);
      if (r3) {
        out.push(r3);
        return " ";
      }
      return a3[0];
    });
  };
  take(/([+\-−–])?\s*([¥￥$€£฿₫])\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g, (a3) => ({
    kind: "fx",
    currency: CUR_SYM[a3[2]],
    value: parseFloat(a3[4].replace(/,/g, "")),
    sign: sgn(a3[1] || a3[3])
  }));
  take(/([+\-−–])?\s*\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY)\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/gi, (a3) => ({
    kind: "fx",
    currency: a3[2].toUpperCase(),
    value: parseFloat(a3[3].replace(/,/g, "")),
    sign: sgn(a3[1])
  }));
  take(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)\s*(엔|달러|유로|바트)(?![가-힣])/g, (a3) => ({
    kind: "fx",
    currency: CUR_WORD[a3[3]],
    value: parseFloat(a3[2].replace(/,/g, "")),
    sign: sgn(a3[1])
  }));
  take(/(잔액|잔고|잔여|남은\s*금액)\s*[:：]?\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+|\d+)\s*원?/g, (a3) => ({
    kind: "balance",
    value: parseInt(a3[3].replace(/,/g, ""), 10) * (sgn(a3[2]) < 0 ? -1 : 1)
  }));
  take(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+)(?:\s*원)?/g, (a3) => ({ kind: "krw", value: parseInt(a3[2].replace(/,/g, ""), 10), sign: sgn(a3[1]) }));
  s3 = s3.replace(/(^|[^\d,])([+\-−–])?\s*(\d{1,9})\s*원/g, (all, pre, sign2, num3) => {
    out.push({ kind: "krw", value: parseInt(num3, 10), sign: sgn(sign2) });
    return pre + " ";
  });
  return { amounts: out, rest: s3 };
}
function sgn(ch) {
  return !ch ? 0 : ch === "+" ? 1 : -1;
}
function fixNum(t4) {
  const v3 = String(t4 || "").replace(/[Oo]/g, "0").replace(/[lI]/g, "1");
  return /^\d{1,2}$/.test(v3) ? +v3 : null;
}
function leftoverText(rest) {
  const s3 = rest.replace(/\d{1,2}:\d{2}(:\d{2})?/g, " ").replace(/(20\d{2})\s*[.\-/년]\s*\d{1,2}\s*[.\-/월]\s*\d{1,2}\s*일?/g, " ").replace(/\d{1,2}월\s*\d{1,2}일/g, " ").replace(WEEKDAY, " ").replace(/[·ㆍ•*∙‧|>›»:;,]/g, " ");
  const toks = s3.split(/\s+/).filter(Boolean).filter((t4) => {
    const bare = t4.replace(/^[\-+=~*_.()[\]]+|[\-+=~*_.()[\]]+$/g, "");
    if (!bare) return false;
    if (NOISE.test(bare)) return false;
    if (/^[\d./]+$/.test(bare)) return false;
    if (!/[가-힣]/.test(bare) && bare.length <= 1) return false;
    return true;
  });
  return toks.map((t4) => t4.replace(/^[\-+=~*_.()[\]]+|[\-+=~_.([]+$/g, "")).filter(Boolean).join(" ").trim();
}
var REFUND = /(취소|환불|정정|반품)/;
var IN_WORD = /(입금|급여|월급|상여|이자|환급|받은|받음)/;
var BANK_HINT = /(잔액|잔고|이체|입금|출금|자동이체|ATM|타행|당행)/;
function parseCaptureLines(lines, opts = {}) {
  const fileDate = opts.fileDate instanceof Date && !isNaN(opts.fileDate) ? opts.fileDate : opts.now || /* @__PURE__ */ new Date();
  const now = fileDate;
  const rows = [];
  let curDate = null, pending = null, cur = null, noKrw = 0;
  const head = [];
  const close = () => {
    if (cur) rows.push(cur);
    cur = null;
  };
  const prep = (lines || []).map((raw) => {
    const line = String(raw || "").replace(/\s+/g, " ").trim();
    if (!line) return null;
    const { amounts, rest } = amountsOf(line);
    return { line, amounts, rest, d: dateOf(rest, now) };
  }).filter(Boolean);
  for (let i3 = 0; i3 < prep.length; i3++) {
    const d3 = prep[i3].d;
    if (d3.iso || !d3.partial) continue;
    let borrowed = null;
    for (let step = 1; step < prep.length && !borrowed; step++) {
      for (const j3 of [i3 - step, i3 + step]) {
        const o3 = prep[j3] && prep[j3].d;
        if (o3 && o3.iso) {
          borrowed = o3.iso;
          break;
        }
      }
    }
    if (!borrowed) continue;
    const [by, bm] = borrowed.split("-");
    const y3 = d3.partial.year || +by;
    const mo = d3.partial.month || +bm;
    const day = d3.partial.day;
    if (!day || mo < 1 || mo > 12) continue;
    prep[i3].d = { iso: toLocalISO(new Date(y3, mo - 1, day)), headerOnly: d3.headerOnly, borrowed: true };
  }
  for (const item of prep) {
    const { line, amounts, rest, d: d3 } = item;
    if (d3.iso && d3.headerOnly && !amounts.length) {
      close();
      curDate = d3.iso;
      pending = null;
      continue;
    }
    const text = leftoverText(rest);
    const tx = amounts.filter((a3) => a3.kind === "krw" || a3.kind === "fx");
    const bal = amounts.find((a3) => a3.kind === "balance");
    if (!tx.length) {
      if (!cur && !rows.length) head.push(line);
      if (cur && !text) {
        cur.detail.push(line);
        if (bal && cur.balance == null) cur.balance = bal.value;
        continue;
      }
      if (cur && bal && cur.balance == null) {
        cur.balance = bal.value;
        cur.detail.push(line);
        continue;
      }
      if (text && !TITLE.test(text)) {
        close();
        pending = text;
      } else if (cur) cur.detail.push(line);
      continue;
    }
    const krw = tx.find((a3) => a3.kind === "krw"), fx = tx.find((a3) => a3.kind === "fx");
    if (!text && cur && !pending && (krw && !fx && cur.krw == null && cur.fx || fx && !krw && !cur.fx && cur.krw != null)) {
      if (krw) cur.krw = krw;
      else cur.fx = fx;
      if (bal && cur.balance == null) cur.balance = bal.value;
      cur.detail.push(line);
      continue;
    }
    close();
    const merchant = text || pending || "";
    pending = null;
    cur = {
      date: d3.iso || curDate,
      dateGuessed: !(d3.iso || curDate),
      merchant,
      krw: krw || null,
      fx: fx || null,
      balance: bal ? bal.value : null,
      detail: [line]
    };
  }
  close();
  const seen = /* @__PURE__ */ new Set();
  const entries = [];
  for (const r3 of rows) {
    if (!r3.merchant) continue;
    const body = [r3.merchant, ...r3.detail].join(" ");
    if (!r3.krw) {
      noKrw++;
      continue;
    }
    const amount = r3.krw.value;
    if (!(amount > 0)) continue;
    const date = r3.date || toLocalISO(fileDate);
    const sign2 = r3.krw.sign || (r3.fx ? r3.fx.sign : 0);
    const refund = REFUND.test(body);
    const bankish = r3.balance != null || BANK_HINT.test(body);
    const direction = refund ? "out" : sign2 > 0 || sign2 === 0 && IN_WORD.test(body) ? "in" : "out";
    const key = `${date}|${amount}|${normKey(r3.merchant)}|${r3.fx ? r3.fx.value : ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    let type = direction === "in" ? "transfer" : "expense";
    let transferKind = null, needsCheck = !!r3.dateGuessed, isExtra = false;
    if (direction === "in") {
      const inc = classifyIncome({ counterpartyRaw: r3.merchant, memo: r3.merchant, rawText: body, amount }, opts.settings);
      if (inc) {
        type = inc.type;
        transferKind = inc.transferKind;
        needsCheck = needsCheck || !!inc.needsCheck;
      } else if (/(급여|월급|상여)/.test(body)) type = "income";
    }
    let category = type === "income" ? "income" : detectCategory(r3.merchant, "expense", opts.rules);
    const rule = applyAccountRules({ counterpartyRaw: r3.merchant, memo: r3.merchant, rawText: `${body} ${head.join(" ")}`, category, amount }, opts.settings);
    if (rule) {
      if (rule.type) type = rule.type;
      if (rule.category) category = rule.category;
      transferKind = rule.transferKind;
      isExtra = !!rule.isExtra;
    }
    entries.push({
      type,
      transferKind,
      needsCheck,
      isExtra,
      direction,
      isRefund: refund && type === "expense",
      category,
      amount,
      date,
      memo: r3.merchant,
      normKey: normKey(r3.merchant),
      paymentMethod: bankish ? "account" : "card",
      balanceAfter: r3.balance,
      counterpartyRaw: r3.merchant,
      currency: r3.fx ? r3.fx.currency : "",
      foreignAmount: r3.fx ? r3.fx.value : null,
      isOverseas: !!r3.fx,
      dateGuessed: !!r3.dateGuessed,
      source: "capture",
      confidence: scoreConfidence(r3.merchant, category),
      rawText: body
    });
  }
  return { entries, gaps: [], skippedNoKrw: noKrw };
}
function parseCaptures(pages, opts = {}) {
  const all = [];
  let skippedNoKrw = 0;
  const seen = /* @__PURE__ */ new Set();
  for (const p3 of pages || []) {
    const lines = p3.lines || wordsToLines(p3.words);
    const res = parseCaptureLines(lines, { ...opts, fileDate: p3.fileDate || opts.fileDate });
    skippedNoKrw += res.skippedNoKrw;
    for (const e3 of res.entries) {
      const k3 = `${e3.date}|${e3.amount}|${e3.normKey}|${e3.foreignAmount ?? ""}`;
      if (seen.has(k3)) continue;
      seen.add(k3);
      all.push(e3);
    }
  }
  return { entries: all, gaps: [], skippedNoKrw };
}

// src/engine2.js
var DAY = 864e5;
var dayDiff = (a3, b3) => Math.round((/* @__PURE__ */ new Date(b3 + "T00:00:00") - /* @__PURE__ */ new Date(a3 + "T00:00:00")) / DAY);
function mode(arr) {
  const m3 = /* @__PURE__ */ new Map();
  for (const v3 of arr) m3.set(v3, (m3.get(v3) || 0) + 1);
  let best = arr[0], n3 = 0;
  for (const [v3, c3] of m3) if (c3 > n3) {
    best = v3;
    n3 = c3;
  }
  return best;
}
var median = (arr) => {
  const s3 = [...arr].sort((a3, b3) => a3 - b3);
  return s3.length % 2 ? s3[(s3.length - 1) / 2] : Math.round((s3[s3.length / 2 - 1] + s3[s3.length / 2]) / 2);
};
function detectRecurring(entries, opts = {}) {
  const minCount = opts.minCount || 3;
  const groups = /* @__PURE__ */ new Map();
  for (const e3 of entries) {
    if (e3.deleted || e3.type === "income" || !e3.amount) continue;
    if (e3.type === "transfer") continue;
    if (e3.amount >= 1e9) continue;
    if (e3.transferKind && ["external", "welfare"].includes(e3.transferKind) === false) continue;
    if (e3.isExtra) continue;
    const k3 = e3.normKey || normKey(e3.memo);
    if (!k3 || k3.length < 2) continue;
    if (!groups.has(k3)) groups.set(k3, []);
    groups.get(k3).push(e3);
  }
  const out = [];
  for (const [key, list] of groups) {
    if (list.length < minCount) continue;
    const byMonth = /* @__PURE__ */ new Map();
    for (const e3 of [...list].sort((a3, b3) => a3.date < b3.date ? -1 : 1)) {
      const m3 = e3.date.slice(0, 7);
      if (!byMonth.has(m3)) byMonth.set(m3, e3);
    }
    const monthly = Array.from(byMonth.values());
    if (monthly.length < minCount) continue;
    const gaps = [];
    for (let i3 = 1; i3 < monthly.length; i3++) gaps.push(dayDiff(monthly[i3 - 1].date, monthly[i3].date));
    const monthlyish = gaps.filter((g2) => g2 >= 25 && g2 <= 36).length;
    if (gaps.length === 0 || monthlyish / gaps.length < 0.6) continue;
    const amounts = monthly.map((e3) => e3.amount);
    const base2 = median(amounts);
    const variable = amounts.some((a3) => a3 !== amounts[0]);
    const last = monthly[monthly.length - 1];
    out.push({
      normKey: key,
      name: last.memo || key,
      amount: base2,
      amountVariable: variable,
      dayOfMonth: mode(monthly.map((e3) => parseInt(e3.date.slice(8, 10), 10))),
      category: mode(monthly.map((e3) => e3.category)),
      accountId: last.accountId || null,
      paymentMethod: last.paymentMethod || "account",
      count: monthly.length,
      lastSeen: last.date,
      sampleIds: monthly.map((e3) => e3.id)
    });
  }
  return out.sort((a3, b3) => b3.amount - a3.amount);
}
function matchesFixed(entry, fixed) {
  if (!entry || !fixed || entry.deleted) return false;
  const a3 = entry.normKey || normKey(entry.memo);
  const b3 = fixed.normKey;
  if (!a3 || !b3) return false;
  const keyOk = a3 === b3 || a3.includes(b3) || b3.includes(a3) || similarity(a3, b3) >= 0.6;
  if (!keyOk) return false;
  const d3 = Math.abs(parseInt(entry.date.slice(8, 10), 10) - fixed.dayOfMonth);
  const dayOk = d3 <= 3 || d3 >= 26;
  if (!dayOk) return false;
  if (!fixed.amountVariable && Math.abs(entry.amount - fixed.amount) / fixed.amount > 0.2) return false;
  return true;
}
function buildScheduled(fixedExpenses, entries, opts = {}) {
  const now = opts.now || /* @__PURE__ */ new Date();
  const today = toLocalISO(now);
  const out = [];
  for (const f3 of fixedExpenses) {
    if (f3.status && f3.status !== "active") continue;
    const ym = today.slice(0, 7);
    const [y3, m3] = ym.split("-").map(Number);
    const lastDay2 = new Date(y3, m3, 0).getDate();
    const day = Math.min(f3.dayOfMonth || 1, lastDay2);
    const due = `${ym}-${String(day).padStart(2, "0")}`;
    if (due > today) continue;
    const already = entries.some((e3) => e3.date && e3.date.slice(0, 7) === ym && (e3.fixedId === f3.id || !e3.deleted && matchesFixed(e3, f3)));
    if (already) continue;
    out.push({
      date: due,
      type: "expense",
      category: f3.category,
      amount: f3.amount,
      memo: f3.name,
      normKey: f3.normKey,
      accountId: f3.accountId,
      paymentMethod: f3.paymentMethod || "account",
      fixedId: f3.id,
      source: "auto",
      confidence: 1,
      status: "scheduled",
      amountEstimated: !!f3.amountVariable
    });
  }
  return out;
}
function settleScheduled(entries, fixedExpenses) {
  const settled = [], dropped = [];
  const scheduled = entries.filter((e3) => e3.status === "scheduled" && !e3.deleted);
  for (const s3 of scheduled) {
    const f3 = fixedExpenses.find((x2) => x2.id === s3.fixedId);
    const real = entries.find((e3) => !e3.deleted && e3.id !== s3.id && e3.status !== "scheduled" && e3.date.slice(0, 7) === s3.date.slice(0, 7) && (f3 ? matchesFixed(e3, f3) : false));
    if (real) {
      settled.push({ scheduledId: s3.id, realId: real.id, amount: real.amount });
      continue;
    }
    if (dayDiff(s3.date, todayISO()) > 7) dropped.push(s3.id);
  }
  return { settled, unconfirmed: dropped };
}
var CARD_BRANDS = ["신한카드", "국민카드", "삼성카드", "현대카드", "롯데카드", "하나카드", "우리카드", "농협카드", "비씨카드", "카드대금", "일시불대금", "청구대금"];
var FX_WORDS = ["트래블", "travel", "충전", "머니", "환전", "월렛", "wallet"];
var SAVE_WORDS = ["적금", "예금", "청약", "irp", "연금", "저축"];
var INVEST_BRANDS = [
  "키움증권",
  "키움",
  "미래에셋",
  "삼성증권",
  "NH투자",
  "한국투자",
  "KB증권",
  "신한투자",
  "하나증권",
  "대신증권",
  "토스증권",
  "유안타",
  "메리츠증권",
  "이베스트",
  "카카오페이증권",
  "증권",
  "선물",
  "CMA",
  "펀드"
];
var CASH_WORDS = ["atm", "cd출금", "현금인출", "현금출금", "자동화기기"];
function classifyTransfer(entry, opts = {}) {
  const accounts = opts.accounts || [];
  const st = opts.settings || {};
  if (entry.category === "family" || entry.category === "travel") return null;
  const raw0 = `${entry.counterpartyRaw ?? ""} ${entry.memo ?? ""} ${entry.rawText ?? ""}`;
  if ((st.familyTransferKeywords || []).some((k3) => k3 && raw0.includes(k3))) return null;
  if ((st.travelKeywords || []).some((k3) => k3 && raw0.includes(k3))) return null;
  const userName = String(opts.userName ?? "").trim();
  const raw = `${entry.counterpartyRaw ?? ""} ${entry.memo ?? ""} ${entry.rawText ?? ""}`;
  const low = raw.toLowerCase();
  const key = entry.normKey || normKey(entry.memo);
  const matchAccount2 = (kinds) => accounts.find((a3) => {
    if (kinds && !kinds.includes(a3.kind)) return false;
    if (a3.last4 && raw.includes(a3.last4)) return true;
    const names = [a3.name, ...a3.aliases || []].filter(Boolean);
    return names.some((n3) => {
      const nk = normKey(n3);
      return nk && (key === nk || key.includes(nk) || low.includes(n3.toLowerCase()));
    });
  });
  const bank = matchAccount2(["bank"]);
  if (bank && bank.id !== entry.accountId) return { transferKind: "internal", toAccountId: bank.id };
  if (FX_WORDS.some((w3) => low.includes(w3))) {
    const fx = matchAccount2(["fx"]);
    return { transferKind: "fxTopup", toAccountId: fx ? fx.id : null };
  }
  const card = matchAccount2(["card"]);
  if (card || CARD_BRANDS.some((w3) => raw.includes(w3))) {
    return { transferKind: "cardPayment", toAccountId: card ? card.id : null };
  }
  if (CASH_WORDS.some((w3) => low.includes(w3))) {
    const cash = accounts.find((a3) => a3.kind === "cash");
    return { transferKind: "cashOut", toAccountId: cash ? cash.id : null };
  }
  const inv = matchAccount2(["invest"]);
  if (inv || INVEST_BRANDS.some((w3) => raw.includes(w3) || low.includes(w3.toLowerCase()))) {
    return { transferKind: "invest", toAccountId: inv ? inv.id : null };
  }
  const sav = matchAccount2(["savings"]);
  if (sav || SAVE_WORDS.some((w3) => low.includes(w3))) {
    return { transferKind: "savings", toAccountId: sav ? sav.id : null };
  }
  if (userName && raw.includes(userName)) return { transferKind: "internal", toAccountId: null, unknownAccount: true };
  return { transferKind: "external", toAccountId: null };
}
function pairScore(out, inn, opts = {}) {
  if (!out || !inn) return 0;
  if (out.accountId && inn.accountId && out.accountId === inn.accountId) return 0;
  const fee = out.amount - inn.amount;
  if (fee !== 0 && !(fee > 0 && fee <= 1e3)) return 0;
  const d3 = Math.abs(dayDiff(out.date, inn.date));
  if (d3 > 2) return 0;
  let score = 0;
  const reasons = [];
  if (d3 === 0) {
    score += 35;
    reasons.push("같은 날");
  } else if (d3 === 1) {
    score += 20;
    reasons.push("하루 차이");
  } else {
    score += 8;
  }
  const userName = String(opts.userName ?? "").trim();
  const ro2 = `${out.counterpartyRaw || ""} ${out.memo || ""}`;
  const ri = `${inn.counterpartyRaw || ""} ${inn.memo || ""}`;
  if (userName && ro2.includes(userName) && ri.includes(userName)) {
    score += 30;
    reasons.push("양쪽 다 본인 명의");
  } else if (normKey(ro2) && normKey(ro2) === normKey(ri)) {
    score += 20;
    reasons.push("같은 적요");
  } else if (similarity(normKey(ro2), normKey(ri)) >= 0.5) {
    score += 10;
  }
  if (fee === 0) {
    score += 15;
    reasons.push("금액 일치");
  } else {
    score += 10;
    reasons.push(`수수료 ${fee}원`);
  }
  const hist = opts.history || 0;
  if (hist >= 3) {
    score += 15;
    reasons.push("자주 오가는 조합");
  }
  return { score, reasons, fee };
}
function pairTransfers(entries, opts = {}) {
  const cand = entries.filter((e3) => !e3.deleted && (e3.type === "transfer" || e3.transferKind === "internal") && e3.amount > 0);
  const outs = cand.filter((e3) => e3.direction === "out" || e3.direction == null && e3.type === "transfer");
  const ins = cand.filter((e3) => e3.direction === "in");
  const used = /* @__PURE__ */ new Set();
  const pairs = [], review = [];
  for (const o3 of outs) {
    if (used.has(o3.id)) continue;
    let best = null;
    for (const i3 of ins) {
      if (used.has(i3.id) || i3.id === o3.id) continue;
      const r3 = pairScore(o3, i3, opts);
      if (!r3 || !r3.score) continue;
      if (!best || r3.score > best.score) best = { ...r3, inn: i3 };
    }
    if (!best) continue;
    if (best.score >= 75) {
      pairs.push({ out: o3, inn: best.inn, ...best });
      used.add(o3.id);
      used.add(best.inn.id);
    } else if (best.score >= 50) review.push({ out: o3, inn: best.inn, ...best });
  }
  const halves = cand.filter((e3) => !used.has(e3.id) && !review.some((r3) => r3.out.id === e3.id || r3.inn.id === e3.id));
  return { pairs, review, halves };
}
function reconcileBalance(entries, accountId) {
  const list = entries.filter((e3) => !e3.deleted && e3.accountId === accountId && e3.balanceAfter != null).sort((a3, b3) => a3.date < b3.date ? -1 : a3.date > b3.date ? 1 : (a3.createdAt || 0) - (b3.createdAt || 0));
  if (list.length < 2) return { gaps: [], latest: list[0] || null };
  const gaps = [];
  for (let i3 = 1; i3 < list.length; i3++) {
    const prev = list[i3 - 1], cur = list[i3];
    const delta = cur.type === "income" || cur.direction === "in" ? cur.amount : -cur.amount;
    const expected = prev.balanceAfter + delta;
    const diff = cur.balanceAfter - expected;
    if (Math.abs(diff) > 1) {
      gaps.push({ afterDate: prev.date, beforeDate: cur.date, missing: Math.abs(diff), sign: diff < 0 ? "out" : "in" });
    }
  }
  return { gaps, latest: list[list.length - 1] };
}
function groupForReview(entries, opts = {}) {
  const groups = /* @__PURE__ */ new Map();
  for (const e3 of entries) {
    if (e3.deleted || e3.type !== "expense") continue;
    if (opts.onlyPending && e3.status !== "pending") continue;
    const k3 = e3.normKey || normKey(e3.memo) || "__none";
    if (!groups.has(k3)) groups.set(k3, []);
    groups.get(k3).push(e3);
  }
  const out = [];
  for (const [key, list] of groups) {
    const cats = new Set(list.map((e3) => e3.category));
    const payLike = isPayLike(list[0].memo);
    out.push({
      normKey: key,
      name: mode(list.map((e3) => e3.memo)) || key,
      count: list.length,
      total: list.reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0),
      category: mode(list.map((e3) => e3.category)),
      mixed: cats.size > 1,
      payLike,
      needsReview: !payLike && list.some((e3) => e3.status === "pending" || e3.category === "etc"),
      // 사람 이름으로 나간 딱 떨어지는 금액은 경조사일 가능성이 높다 (추천만 하고 정하지는 않는다)
      suggest: suggestSocial(list, opts) ? "social" : null,
      ids: list.map((e3) => e3.id)
    });
  }
  return out.sort((a3, b3) => b3.total - a3.total);
}
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", quoted = false;
  const src = text.replace(/^\uFEFF/, "");
  for (let i3 = 0; i3 < src.length; i3++) {
    const c3 = src[i3];
    if (quoted) {
      if (c3 === '"') {
        if (src[i3 + 1] === '"') {
          field += '"';
          i3++;
        } else quoted = false;
      } else field += c3;
    } else if (c3 === '"') quoted = true;
    else if (c3 === ",") {
      row.push(field.trim());
      field = "";
    } else if (c3 === "\n") {
      row.push(field.trim());
      rows.push(row);
      row = [];
      field = "";
    } else if (c3 === "\r") {
    } else field += c3;
  }
  if (field || row.length) {
    row.push(field.trim());
    rows.push(row);
  }
  return rows.filter((r3) => r3.some((c3) => c3 !== ""));
}
var COL_HINTS = {
  date: ["거래일시", "거래일자", "이용일자", "거래일", "이용일", "승인일", "매출일", "날짜", "일자"],
  amount: ["이용금액", "승인금액", "거래금액", "결제금액", "금액"],
  merchant: ["가맹점명", "기재내용", "가맹점", "거래처", "적요", "내용", "상호", "내역", "비고", "받는분", "보낸분"],
  balance: ["거래후잔액", "거래후 잔액", "잔액", "잔고"],
  // 우리은행은 '찾으신금액/맡기신금액'으로 적는다
  outCol: ["출금금액", "출금액", "출금 (원)", "출금(원)", "찾으신금액", "찾으신 금액", "지급금액", "출금", "지급"],
  inCol: ["입금금액", "입금액", "입금 (원)", "입금(원)", "맡기신금액", "맡기신 금액", "예입금액", "입금", "예입"],
  installment: ["이용구분", "할부구분", "할부개월"],
  cancel: ["취소상태", "매입구분", "승인상태"],
  cardName: ["이용카드", "카드명", "카드구분"],
  kind: ["거래구분", "거래종류", "거래유형", "적요", "구분"]
};
var SUMMARY_ROW = /(총\s*\d+\s*건|출금건수|입금건수|합\s*계|소\s*계|^\d+\/\d+$)/;
var norm = (s3) => String(s3 || "").replace(/\s+/g, "");
function detectColumns(rows) {
  let headerRow = -1, header = null;
  for (let i3 = 0; i3 < Math.min(rows.length, 25); i3++) {
    const r3 = (rows[i3] || []).map(norm);
    const hasDate = r3.some((c3) => c3 && COL_HINTS.date.some((h3) => c3.includes(norm(h3))));
    const hasAmt = r3.some((c3) => c3 && (COL_HINTS.amount.some((h3) => c3.includes(norm(h3))) || COL_HINTS.outCol.some((h3) => c3.includes(norm(h3))) || COL_HINTS.inCol.some((h3) => c3.includes(norm(h3)))));
    if (hasDate && hasAmt) {
      headerRow = i3;
      header = r3;
      break;
    }
  }
  if (headerRow === -1) return null;
  const find = (hints, skip) => {
    for (const h3 of hints) {
      const hh = norm(h3);
      for (let i3 = 0; i3 < header.length; i3++) {
        if (skip && skip.includes(i3)) continue;
        if (header[i3] === hh) return i3;
      }
    }
    for (const h3 of hints) {
      const hh = norm(h3);
      for (let i3 = 0; i3 < header.length; i3++) {
        if (skip && skip.includes(i3)) continue;
        if (header[i3] && header[i3].includes(hh) && !header[i3].startsWith("해외")) return i3;
      }
    }
    return -1;
  };
  const colOut = find(COL_HINTS.outCol);
  const colIn = find(COL_HINTS.inCol, colOut >= 0 ? [colOut] : []);
  const split = colOut >= 0 && colIn >= 0 && colOut !== colIn;
  return {
    headerRow,
    header,
    colDate: find(COL_HINTS.date),
    colAmount: split ? -1 : find(COL_HINTS.amount),
    colOut: split ? colOut : -1,
    colIn: split ? colIn : -1,
    colMerchant: find(COL_HINTS.merchant),
    colBalance: find(COL_HINTS.balance),
    colInstallment: find(COL_HINTS.installment),
    colCancel: find(COL_HINTS.cancel),
    colKind: find(COL_HINTS.kind)
  };
}
var num = (s3) => {
  const v3 = parseInt(String(s3 || "").replace(/[^\d-]/g, ""), 10);
  return isNaN(v3) ? 0 : v3;
};
function normalizeDate(s3) {
  const t4 = String(s3 || "").replace(/[\n\r]+/g, " ").trim();
  let m3 = t4.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);
  if (m3) return toLocalISO(new Date(+m3[1], +m3[2] - 1, +m3[3]));
  m3 = t4.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (m3) return toLocalISO(new Date(2e3 + +m3[1], +m3[2] - 1, +m3[3]));
  return null;
}
var PAY_WORDS = ["네이버페이", "카카오페이", "비바리퍼블리카", "토스페이", "페이코", "쿠페이", "스마일페이", "삼성페이", "애플페이", "제로페이", "페이머니", "머니충전"];
function isPayLike(name) {
  const n3 = String(name || "").replace(/\s+/g, "").toLowerCase();
  return PAY_WORDS.some((w3) => n3.includes(w3.toLowerCase()));
}
function csvToEntries(rows, map, opts = {}) {
  const seqCount = /* @__PURE__ */ new Map();
  const seqOf = (key) => {
    const n3 = (seqCount.get(key) || 0) + 1;
    seqCount.set(key, n3);
    return n3;
  };
  const out = [], skipped = [];
  for (let i3 = map.headerRow + 1; i3 < rows.length; i3++) {
    const r3 = rows[i3] || [];
    const joined = r3.join(" ");
    if (SUMMARY_ROW.test(joined.replace(/\s+/g, " ").trim())) {
      skipped.push(i3);
      continue;
    }
    const date = normalizeDate(r3[map.colDate]);
    if (!date) {
      skipped.push(i3);
      continue;
    }
    let amount = 0, direction = null, negative = false;
    if (map.colOut >= 0 && map.colIn >= 0) {
      const o3 = num(r3[map.colOut]), n3 = num(r3[map.colIn]);
      if (o3 > 0) {
        amount = o3;
        direction = "out";
      } else if (n3 > 0) {
        amount = n3;
        direction = "in";
      }
    } else {
      const raw = num(r3[map.colAmount]);
      negative = raw < 0;
      amount = Math.abs(raw);
      direction = opts.defaultDirection || "out";
    }
    if (!amount) {
      skipped.push(i3);
      continue;
    }
    let merchant = (map.colMerchant >= 0 ? String(r3[map.colMerchant] || "") : "").trim();
    if (/^[\d-]+$/.test(merchant.replace(/\s/g, "")) && map.colKind >= 0) {
      const k3 = String(r3[map.colKind] || "").trim();
      if (k3) merchant = k3;
    }
    const kindCell = (map.colKind >= 0 ? String(r3[map.colKind] || "") : "").trim();
    const forCat = kindCell && kindCell !== merchant ? `${kindCell} ${merchant}` : merchant;
    const balance = map.colBalance >= 0 ? num(r3[map.colBalance]) : null;
    const cancelCell = map.colCancel >= 0 ? String(r3[map.colCancel] || "") : "";
    const instCell = map.colInstallment >= 0 ? String(r3[map.colInstallment] || "") : "";
    const isCancel = negative || /(취소|환불)/.test(cancelCell) || /(취소|환불)/.test(merchant);
    const instM = instCell.match(/할부\s*\((\d{1,2})\s*개월\)/) || instCell.match(/(\d{1,2})\s*개월/);
    const isOverseas = /해외/.test(instCell);
    let type = direction === "in" ? "transfer" : "expense";
    let transferKind = null, needsCheck = false, conf = null, refundIn = false;
    if (direction === "in") {
      const inc = classifyIncome({ counterpartyRaw: merchant, memo: merchant, rawText: merchant, amount }, opts.settings);
      if (inc) {
        type = inc.type;
        transferKind = inc.transferKind;
        needsCheck = !!inc.needsCheck;
        if (inc.isRefund) refundIn = true;
        if (inc.confidence != null) conf = inc.confidence;
      } else if (/(급여|월급|상여|환급)/.test(merchant)) type = "income";
    }
    let category = type === "income" ? "income" : isPayLike(merchant) && !matchRule(normKey(forCat), opts.rules) && !matchRule(normKey(merchant), opts.rules) && !(opts.settings && (opts.settings.familyTransferKeywords || []).some((k3) => k3 && merchant.includes(k3))) ? "etc" : detectCategory(forCat, "expense", opts.rules);
    const rule = applyAccountRules({ counterpartyRaw: merchant, memo: merchant, rawText: joined, category, amount }, opts.settings);
    if (rule && rule.transferKind && rule.transferKind !== "welfare" && !rule.category) {
      type = "transfer";
    }
    let isExtra = false;
    if (rule) {
      if (rule.type) type = rule.type;
      if (rule.category) category = rule.category;
      transferKind = rule.transferKind;
      isExtra = !!rule.isExtra;
      needsCheck = false;
      if (rule.confidence != null) conf = rule.confidence;
    }
    if (transferKind && ["internal", "invest", "savings", "cashOut", "cardPayment", "fxTopup", "verify"].includes(transferKind)) {
      needsCheck = false;
      if (conf == null) conf = 1;
    }
    out.push({
      type,
      direction,
      date,
      amount,
      transferKind,
      needsCheck,
      isExtra,
      category,
      memo: merchant || "내역",
      normKey: normKey(merchant),
      counterpartyRaw: merchant,
      balanceAfter: balance || null,
      accountId: opts.accountId || null,
      paymentMethod: opts.paymentMethod || "account",
      source: "statement",
      isRefund: isCancel || refundIn,
      installmentMonths: instM ? parseInt(instM[1], 10) : null,
      isOverseas,
      confidence: conf != null ? conf : category === "etc" ? 0.4 : 0.8,
      // 가족 송금·여행처럼 규칙으로 성격이 정해진 건은 페이류 판정을 하지 않는다
      needsCheck: isCancel || refundIn ? false : needsCheck,
      // 같은 날 같은 곳에서 같은 금액을 여러 번 쓰는 일이 실제로 있다(입금·출금이 짝을 이루는 경우 포함).
      // 방향과 잔액, 같은 줄이 몇 번째인지까지 넣어야 정상 거래가 중복으로 지워지지 않는다.
      sourceHash: `${opts.accountId || ""}|${date}|${amount}|${merchant}|${cancelCell}|${direction}|${balance || ""}|${seqOf(`${date}|${amount}|${merchant}|${direction}|${balance || ""}`)}`,
      rawText: joined.trim()
    });
  }
  return { entries: out, skipped };
}
function decodeCSVBuffer(buf) {
  const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(buf);
  const bad = (utf8.match(/\uFFFD/g) || []).length;
  if (bad > 3) {
    try {
      return new TextDecoder("euc-kr").decode(buf);
    } catch (e3) {
    }
  }
  return utf8;
}
var shift = (iso, days) => toLocalISO(new Date((/* @__PURE__ */ new Date(iso + "T00:00:00")).getTime() + days * DAY));
function tripSummary(entries, trip) {
  const list = entries.filter((e3) => !e3.deleted && e3.tripId === trip.id);
  let total = 0, income = 0, welfare = 0, reimbursed = 0;
  const byCat = {};
  const dates = [];
  for (const e3 of list) {
    if (e3.date) dates.push(e3.date);
    if (e3.type === "income") {
      income += e3.amount;
      continue;
    }
    if (e3.type !== "expense") continue;
    const amt2 = e3.isRefund ? -e3.amount : e3.amount;
    if (e3.transferKind === "welfare") {
      welfare += amt2;
      continue;
    }
    if (e3.transferKind && e3.transferKind !== "external") continue;
    if (e3.reimbFrom) reimbursed += e3.amount;
    total += amt2;
    byCat[e3.category] = (byCat[e3.category] || 0) + amt2;
  }
  dates.sort();
  const cats = Object.entries(byCat).sort((a3, b3) => b3[1] - a3[1]);
  const fx = {};
  for (const e3 of list) {
    if (e3.currency && e3.foreignAmount) fx[e3.currency] = (fx[e3.currency] || 0) + e3.foreignAmount;
  }
  const from = trip.startDate || dates[0] || null, to = trip.endDate || dates[dates.length - 1] || null;
  return {
    count: list.length,
    total,
    income,
    welfare,
    reimbursed,
    cats,
    fx,
    from,
    to,
    days: from && to ? Math.round((new Date(to) - new Date(from)) / DAY) + 1 : null
  };
}
var ONLINE_FOREIGN = [
  "anthropic",
  "openai",
  "oracle",
  "google",
  "apple.com",
  "netflix",
  "spotify",
  "aws",
  "amazon web",
  "microsoft",
  "github",
  "adobe",
  "cloudflare",
  "steam",
  "paypal",
  "patreon",
  "figma",
  "notion",
  "dropbox"
];
function isLocalSpend(e3) {
  if (!e3 || e3.deleted || e3.type !== "expense") return false;
  const name = String(e3.memo || "").toLowerCase();
  if (ONLINE_FOREIGN.some((w3) => name.includes(w3))) return false;
  if (e3.currency && e3.currency !== "KRW") return true;
  if (e3.isOverseas) return true;
  return false;
}
function detectTrips(entries, opts = {}) {
  const gap = opts.gapDays || 3;
  const list = entries.filter(isLocalSpend).sort((a3, b3) => a3.date < b3.date ? -1 : 1);
  if (!list.length) return { trips: [], singles: [] };
  const groups = [];
  let cur = [list[0]];
  for (let i3 = 1; i3 < list.length; i3++) {
    if (dayDiff(cur[cur.length - 1].date, list[i3].date) <= gap) cur.push(list[i3]);
    else {
      groups.push(cur);
      cur = [list[i3]];
    }
  }
  groups.push(cur);
  const trips = [], singles = [];
  for (const g2 of groups) {
    const from = g2[0].date, to = g2[g2.length - 1].date;
    const days = dayDiff(from, to) + 1;
    const spent = g2.reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
    const currencies = [...new Set(g2.map((e3) => e3.currency).filter(Boolean))];
    const item = {
      startDate: from,
      endDate: to,
      days,
      count: g2.length,
      localSpent: spent,
      currencies,
      ids: g2.map((e3) => e3.id),
      name: guessTripName(g2, from)
    };
    if (g2.length >= 3 || days >= 2) trips.push(item);
    else singles.push(item);
  }
  return { trips: trips.reverse(), singles: singles.reverse() };
}
var PLACE_HINTS = [
  ["삿포로", ["sapporo", "satsuporo", "hakodate", "chitose", "moiwa", "seicomart", "yufutsu"]],
  ["오키나와", ["okinawa", "naha", "miyako", "kokusai", "coral port"]],
  ["도쿄", ["tokyo", "shinjuku", "shibuya", "haneda", "narita", "asakusa"]],
  ["오사카", ["osaka", "namba", "umeda", "kansai", "dotonbori"]],
  ["후쿠오카", ["fukuoka", "hakata", "tenjin"]],
  ["베트남", ["vietnam", "hanoi", "saigon", "danang", "marou"]],
  ["태국", ["thailand", "bangkok", "phuket"]]
];
function guessTripName(group, from) {
  const blob = group.map((e3) => String(e3.memo || "")).join(" ").toLowerCase();
  for (const [place, hints] of PLACE_HINTS) {
    if (hints.some((h3) => blob.includes(h3))) return `${place} ${from.slice(2, 7).replace("-", ".")}`;
  }
  const cur = group.find((e3) => e3.currency)?.currency;
  const byCur = { JPY: "일본", VND: "베트남", THB: "태국", USD: "미국", EUR: "유럽", TWD: "대만" };
  return `${byCur[cur] || "여행"} ${from.slice(2, 7).replace("-", ".")}`;
}
function isReimbCandidate(e3, opts) {
  if (e3.direction !== "in" || e3.type !== "transfer" || !(e3.amount > 0)) return false;
  if (e3.transferKind && e3.transferKind !== "excluded") return false;
  const st = opts.settings || {};
  const memo = `${e3.memo || ""} ${e3.counterpartyRaw || ""}`;
  if (st.userName && memo.includes(st.userName)) return false;
  if ((st.excludedCounterparties || []).some((x2) => x2 && memo.includes(x2))) return false;
  return true;
}
function buildTripCost(entries, trip, opts = {}) {
  if (!trip || !trip.startDate || !trip.endDate) {
    return { ...trip || {}, inside: [], booked: [], reimb: [], onsite: 0, prepaid: 0, total: 0, welfare: 0 };
  }
  const preDays = opts.preDays ?? 120;
  const postDays = opts.postDays ?? 0;
  const others = (opts.allTrips || []).filter((t4) => t4.startDate && t4.startDate !== trip.startDate && t4.id !== trip.id);
  const pre = shift(trip.startDate, -preDays);
  const post2 = shift(trip.endDate, postDays);
  const reimbEnd = shift(trip.endDate, Math.max(postDays, 60));
  const inside = [], booked = [], reimb = [];
  for (const e3 of entries) {
    if (e3.deleted) continue;
    if (e3.tripId && trip.id && e3.tripId !== trip.id) continue;
    if (isReimbCandidate(e3, opts)) {
      if (e3.date >= pre && e3.date <= reimbEnd) reimb.push(e3);
      continue;
    }
    if (e3.type !== "expense") continue;
    if (e3.fixedId || e3.category === "family") continue;
    const welfare = e3.transferKind === "welfare";
    if (e3.transferKind && e3.transferKind !== "external" && !welfare) continue;
    const tagged = welfare ? { ...e3, welfare: true } : e3;
    if (e3.date >= trip.startDate && e3.date <= trip.endDate) {
      inside.push(tagged);
      continue;
    }
    const before = e3.date >= pre && e3.date < trip.startDate;
    const after = postDays > 0 && e3.date > trip.endDate && e3.date <= post2;
    if (!before && !after) continue;
    if (before && others.some((t4) => t4.startDate > e3.date && t4.startDate < trip.startDate)) continue;
    if (after && others.some((t4) => t4.startDate > trip.endDate && t4.startDate <= e3.date)) continue;
    const when = before ? "pre" : "post";
    if (e3.category === "travel" || trip.id && e3.tripId === trip.id) booked.push({ ...tagged, sure: true, when });
    else if (e3.isOverseas || e3.currency && e3.currency !== "KRW") booked.push({ ...tagged, sure: false, when });
    else if (opts.wide) booked.push({ ...tagged, sure: false, when });
  }
  const own = (a3) => a3.filter((e3) => !e3.welfare).reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
  const bydate = (a3, b3) => a3.date < b3.date ? -1 : 1;
  const sureBooked = booked.filter((e3) => e3.sure);
  return {
    ...trip,
    inside: inside.sort(bydate),
    booked: booked.sort(bydate),
    reimb: reimb.sort(bydate),
    onsite: own(inside),
    prepaid: own(sureBooked),
    total: own(inside) + own(sureBooked),
    welfare: [...inside, ...sureBooked].filter((e3) => e3.welfare).reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0)
  };
}
function findRefundPairs(entries, opts = {}) {
  const days = opts.days || 30;
  const OPEN_OUT = /* @__PURE__ */ new Set([null, "external"]);
  const OPEN_IN = /* @__PURE__ */ new Set([null, "excluded"]);
  const plain = (e3) => !e3.deleted && e3.amount > 0 && e3.category !== "family" && e3.category !== "travel" && e3.type !== "income";
  const outs = entries.filter((e3) => plain(e3) && e3.direction === "out" && OPEN_OUT.has(e3.transferKind || null));
  const ins = entries.filter((e3) => plain(e3) && e3.direction === "in" && !e3.isRefund && OPEN_IN.has(e3.transferKind || null));
  const used = /* @__PURE__ */ new Set();
  const pairs = [];
  for (const i3 of ins) {
    const ki = i3.normKey || normKey(i3.memo);
    let best = null;
    for (const o3 of outs) {
      if (used.has(o3.id) || o3.amount !== i3.amount) continue;
      const d3 = dayDiff(o3.date, i3.date);
      if (d3 < 0 || d3 > days) continue;
      const ko = o3.normKey || normKey(o3.memo);
      const ai = aliasKey(ki), ao = aliasKey(ko);
      const same = ki && ko && (ki === ko || ki.includes(ko) || ko.includes(ki) || ai && ao && ai === ao || similarity(ki, ko) >= 0.55);
      if (!same) continue;
      if (!best || dayDiff(o3.date, i3.date) < dayDiff(best.date, i3.date)) best = o3;
    }
    if (best) {
      used.add(best.id);
      pairs.push({ refund: i3, original: best });
    }
  }
  return pairs;
}
var MAINT_ALIASES = [
  ["엔진오일", ["엔진오일", "엔진 오일", "engine oil", "모빌", "킥스", "지크"]],
  ["오일필터", ["오일필터", "오일 필터", "오일휠타", "오일 휠타", "oil filter"]],
  ["에어필터", ["에어필터", "에어 필터", "에어클리너", "흡기필터", "air filter"]],
  ["에어컨필터", ["에어컨필터", "에어컨 필터", "캐빈필터", "실내필터", "향균필터"]],
  ["미션오일", ["미션오일", "미션 오일", "변속기오일", "atf", "cvt오일", "오토미션"]],
  ["점화플러그", ["점화플러그", "점화 플러그", "스파크플러그", "플러그", "spark plug"]],
  ["브레이크패드", ["브레이크패드", "브레이크 패드", "패드", "제동패드", "brake pad"]],
  ["브레이크액", ["브레이크액", "브레이크 오일", "브레이크오일", "제동액", "brake fluid"]],
  ["냉각수", ["냉각수", "부동액", "쿨란트", "coolant"]],
  ["타이어", ["타이어", "tire", "tyre", "휠얼라인먼트", "얼라인먼트"]],
  ["배터리", ["배터리", "밧데리", "축전지", "battery"]],
  ["와이퍼", ["와이퍼", "wiper", "블레이드"]],
  ["연료필터", ["연료필터", "연료 필터", "퓨얼필터", "fuel filter"]],
  ["LPG 필터", ["lpg필터", "lpg 필터", "가스필터"]],
  ["DPF 점검", ["dpf", "디피에프", "매연포집"]],
  ["감속기 오일", ["감속기", "리덕션", "reduction"]]
];
var QUOTE_NOISE = /(합계|총액|부가세|공급가|할인|소계|청구|결제|카드|현금|영수증|견적|사업자|대표|전화|주소|고객|차량번호|담당)/;
function parseMaintenanceQuote(text, opts = {}) {
  const lines = String(text || "").split(/\n/).map((l3) => l3.trim()).filter(Boolean);
  const items = [];
  let date = null, mileage = null, total = 0;
  for (const line of lines) {
    if (!date) {
      const d3 = line.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);
      if (d3) date = toLocalISO(new Date(+d3[1], +d3[2] - 1, +d3[3]));
    }
    if (mileage == null) {
      const km = line.match(/([0-9][0-9,]{2,})\s*(km|KM|키로|주행)/);
      if (km) mileage = parseInt(km[1].replace(/,/g, ""), 10);
      else if (/주행|계기|누적/.test(line)) {
        const n3 = line.match(/([0-9][0-9,]{3,})/);
        if (n3) mileage = parseInt(n3[1].replace(/,/g, ""), 10);
      }
    }
    const low = line.toLowerCase();
    const money = line.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})\s*원?/);
    const amount = money ? parseInt(money[1].replace(/,/g, ""), 10) : 0;
    if (QUOTE_NOISE.test(line)) {
      if (/(합계|총액|청구)/.test(line) && amount > total) total = amount;
      continue;
    }
    const hit = MAINT_ALIASES.find(([, keys]) => keys.some((k3) => low.includes(k3)));
    if (!hit) continue;
    if (items.some((it) => it.label === hit[0])) continue;
    items.push({ label: hit[0], amount, raw: line });
  }
  if (!total) total = items.reduce((s3, i3) => s3 + i3.amount, 0);
  return { items, date: date || todayISO(), mileage, total };
}
function ruleEligible(e3) {
  if (!e3 || e3.deleted) return false;
  if (e3.category === "family") return false;
  if (e3.type === "transfer") return !e3.transferKind || e3.transferKind === "excluded";
  if (e3.type !== "expense") return false;
  return !e3.transferKind || ["external", "welfare", "verify"].includes(e3.transferKind);
}
function applyUserRules(entry, rules) {
  if (!ruleEligible(entry) || entry.catBy === "user") return entry;
  const r3 = matchRule(entry.normKey || normKey(entry.memo), rules);
  if (!r3) return entry;
  if (entry.type !== "expense" && r3.kind !== "exclude") return entry;
  const next = { ...entry, category: r3.category || entry.category, confidence: 1 };
  if (r3.kind === "exclude" && entry.transferKind !== "welfare") {
    next.transferKind = "verify";
    next.needsCheck = false;
    next.status = "confirmed";
    return next;
  }
  if (next.status === "pending" && !entry.needsCheck) next.status = "confirmed";
  return next;
}
function isSimilarKey(a3, b3) {
  a3 = String(a3 || "");
  b3 = String(b3 || "");
  if (!a3 || !b3 || a3 === b3) return false;
  const [sh, lo] = a3.length <= b3.length ? [a3, b3] : [b3, a3];
  if (sh.length >= 2 && lo.startsWith(sh)) return true;
  if (sh.length >= 3 && lo.includes(sh)) return true;
  let p3 = 0;
  while (p3 < sh.length && sh[p3] === lo[p3]) p3++;
  if (p3 >= 4 && p3 / sh.length >= 0.6) return true;
  return sh.length >= 4 && similarity(a3, b3) >= 0.6;
}
function findSimilarEntries(entries, src, category) {
  const key = src && (src.normKey || normKey(src.memo)) || "";
  const same = [], similar = [];
  if (key.length < 2) return { same, similar };
  for (const e3 of entries) {
    if (!ruleEligible(e3) || e3.id === src.id) continue;
    if (e3.category === category || e3.catBy === "user") continue;
    const k3 = e3.normKey || normKey(e3.memo);
    if (!k3 || k3.length < 2) continue;
    if (k3 === key) same.push(e3);
    else if (isSimilarKey(k3, key) && (e3.category === "etc" || e3.category === src.category)) similar.push(e3);
  }
  return { same, similar };
}
var CAT_ALIAS = [
  ["food", ["식비", "식사", "음식", "식당", "장보기"]],
  ["cafe", ["카페", "간식", "커피"]],
  ["transport", ["교통"]],
  ["car", ["차량", "차", "주유", "정비", "유지비", "자동차"]],
  ["shopping", ["쇼핑"]],
  ["living", ["주거", "생활"]],
  ["health", ["의료", "건강", "병원"]],
  ["culture", ["문화", "여가"]],
  ["comm", ["통신", "인터넷"]],
  ["insurance", ["보험"]],
  ["loan", ["대출", "이자"]],
  ["family", ["가족"]],
  ["social", ["경조", "축의", "부의", "회비", "모임"]],
  ["travel", ["여행"]],
  ["etc", ["기타"]]
];
function parseRuleLines(text) {
  const out = [];
  for (const rawLine of String(text || "").split(/\n/)) {
    const line = rawLine.replace(/#.*/, "").trim();
    if (!line) continue;
    const m3 = line.match(/^(.+?)\s*(?:=|→|->|:)\s*(.+)$/);
    if (!m3) {
      out.push({ line, error: "'이름 = 분류' 형태로 적어주세요" });
      continue;
    }
    const name = m3[1].trim(), target = m3[2].replace(/\s+/g, "");
    const key = normKey(name);
    if (key.length < 2) {
      out.push({ line, error: "이름이 너무 짧아요" });
      continue;
    }
    if (/제외|확인용|빼기/.test(target)) {
      out.push({ line, name, normKey: key, category: "etc", kind: "exclude" });
      continue;
    }
    const hit = CAT_ALIAS.find(([, words]) => words.some((w3) => target.includes(w3))) || CATEGORIES.filter((c3) => c3.key !== "income").map((c3) => [c3.key, [c3.label.replace(/\s/g, "")]]).find(([, w3]) => w3.some((x2) => target.includes(x2)));
    if (!hit) {
      out.push({ line, error: `'${m3[2].trim()}'는 없는 분류예요` });
      continue;
    }
    out.push({ line, name, normKey: key, category: hit[0], kind: null });
  }
  return out;
}
function previewRuleSet(entries, rules) {
  const changes = /* @__PURE__ */ new Map();
  const perRule = new Map(rules.map((r3) => [r3.normKey, 0]));
  for (const e3 of entries) {
    if (!ruleEligible(e3)) continue;
    const r3 = matchRule(e3.normKey || normKey(e3.memo), rules);
    if (!r3) continue;
    if (e3.type !== "expense" && r3.kind !== "exclude") continue;
    const p3 = { category: r3.category };
    if (r3.kind === "exclude" && e3.transferKind !== "welfare") p3.transferKind = "verify";
    const differs = e3.category !== p3.category || p3.transferKind && e3.transferKind !== p3.transferKind;
    if (!differs) continue;
    changes.set(e3.id, p3);
    perRule.set(r3.normKey, (perRule.get(r3.normKey) || 0) + 1);
  }
  return { changes, perRule };
}
var NAME_PREFIX = /^(우리|신한|국민|농협|하나|기업|전북|광주|부산|대구|경남|제주|산업|카카오|토스|케이|새마을|신협|우체국|SC|IBK|KB|NH)\s*/;
function looksLikePerson(memo, userName) {
  const t4 = String(memo || "").trim().replace(NAME_PREFIX, "").replace(/\s+/g, "");
  if (!/^[가-힣]{2,4}$/.test(t4)) return false;
  if (userName && t4 === String(userName).replace(/\s+/g, "")) return false;
  if (/(마트|식당|상회|약국|의원|카페|슈퍼|문구|치킨|분식|정육|세탁|학원|병원|철물|주유|전자|상사|농협|은행|카드|페이|머니|충전)$/.test(t4)) return false;
  return true;
}
function suggestSocial(list, opts = {}) {
  if (!list.length) return false;
  if (!list.every((e3) => e3.category === "etc" && e3.paymentMethod !== "card")) return false;
  if (!looksLikePerson(list[0].memo, opts.userName)) return false;
  return list.every((e3) => e3.amount >= 3e4 && e3.amount <= 1e6 && e3.amount % 1e4 === 0);
}
function localizeShortcut(e3, opts = {}) {
  if (!e3 || e3.deleted || e3.source !== "shortcut" || e3.localized) return null;
  if (Number(e3.updatedAt || 0) !== Number(e3.createdAt || 0)) return null;
  const raw = String(e3.rawText || "");
  if (!raw.trim()) return null;
  const now = new Date(Number(e3.createdAt) || Date.now());
  const p3 = parseOne(raw, { rules: opts.rules, settings: opts.settings, now });
  if (!p3 || !p3.amount) return null;
  const out = {
    type: p3.type,
    category: p3.category,
    transferKind: p3.transferKind || null,
    isRefund: !!p3.isRefund,
    isExtra: !!p3.isExtra,
    welfareBalance: p3.welfareBalance ?? null,
    confidence: p3.confidence,
    localized: true
  };
  if (p3.direction) out.direction = p3.direction;
  if (p3.balanceAfter != null) out.balanceAfter = p3.balanceAfter;
  if (detectSmsKind(raw, opts.settings) !== "free") {
    out.memo = p3.memo;
    out.date = p3.date;
    out.normKey = p3.normKey;
    if (p3.counterpartyRaw) out.counterpartyRaw = p3.counterpartyRaw;
  }
  out.needsCheck = !!p3.needsCheck;
  out.status = p3.needsCheck || (p3.confidence ?? 1) < 0.6 ? "pending" : "confirmed";
  return out;
}
function tripForEntry(e3, trips) {
  if (!e3 || e3.tripId || !isLocalSpend(e3)) return null;
  const t4 = (trips || []).find((x2) => x2.startDate && x2.endDate && e3.date >= x2.startDate && e3.date <= x2.endDate);
  return t4 ? t4.id : null;
}
function detectTopupTrips(entries, opts = {}) {
  const words = opts.settings && opts.settings.travelKeywords || [];
  if (!words.length) return [];
  const gap = opts.gapDays || 4;
  const list = entries.filter((e3) => !e3.deleted && e3.type === "expense" && !e3.tripId && !e3.isRefund && words.some((w3) => w3 && `${e3.memo || ""} ${e3.counterpartyRaw || ""}`.includes(w3))).sort((a3, b3) => a3.date < b3.date ? -1 : 1);
  const groups = [];
  let cur = [];
  for (const e3 of list) {
    if (cur.length && dayDiff(cur[cur.length - 1].date, e3.date) > gap) {
      groups.push(cur);
      cur = [];
    }
    cur.push(e3);
  }
  if (cur.length) groups.push(cur);
  return groups.filter((g2) => g2.length >= 2).map((g2) => ({
    startDate: g2[0].date,
    endDate: g2[g2.length - 1].date,
    approx: true,
    days: dayDiff(g2[0].date, g2[g2.length - 1].date) + 1,
    count: g2.length,
    localSpent: g2.reduce((s3, e3) => s3 + e3.amount, 0),
    currencies: [],
    ids: g2.map((e3) => e3.id),
    name: `여행 ${g2[0].date.slice(2, 7).replace("-", ".")}`
  })).reverse();
}
function calendarToTrips(events, trips = []) {
  const ok = (d3) => typeof d3 === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d3);
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const ev of events || []) {
    if (!ev || !ok(ev.start)) continue;
    const startDate = ev.start;
    const endDate = ok(ev.end) && ev.end >= ev.start ? ev.end : ev.start;
    const key = `${startDate}|${endDate}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const clash = (trips || []).some((t4) => t4.startDate && t4.endDate && t4.startDate <= endDate && t4.endDate >= startDate);
    if (clash) continue;
    const name = String(ev.title || "").replace(/\s+/g, " ").trim().slice(0, 20) || `여행 ${startDate.slice(2, 7).replace("-", ".")}`;
    out.push({ name, startDate, endDate, days: dayDiff(startDate, endDate) + 1, fromCalendar: true, currencies: [] });
  }
  return out.sort((a3, b3) => a3.startDate < b3.startDate ? 1 : -1);
}
var TW_HEAD = {
  date: /날짜|date/i,
  time: /시간|time/i,
  kind: /종류|payment\s*type/i,
  currency: /통화|currency/i,
  amount: /^금액|amount(?!.*krw)/i,
  balance: /잔액|balance/i,
  merchant: /가맹점|merchant/i,
  approval: /승인번호|approval/i,
  rate: /환율|exchange/i,
  krw: /원화금액|krw/i
};
function isTravelWalletTable(rows) {
  if (!Array.isArray(rows)) return false;
  for (let i3 = 0; i3 < Math.min(rows.length, 20); i3++) {
    const cells = (rows[i3] || []).map((c3) => String(c3 || ""));
    if (cells.some((c3) => TW_HEAD.krw.test(c3)) && cells.some((c3) => TW_HEAD.kind.test(c3))) return true;
    const joined = cells.join("").replace(/\s+/g, "");
    if (/종류|paymenttype/i.test(joined) && /(원화금액|krwamount|가맹점)/i.test(joined) && /(날짜|date)/i.test(joined)) return true;
  }
  return false;
}
function twColumns(rows) {
  if (!Array.isArray(rows)) return null;
  for (let i3 = 0; i3 < Math.min(rows.length, 20); i3++) {
    const cells = (rows[i3] || []).map((c3) => String(c3 || "").replace(/\s+/g, ""));
    if (!cells.some((c3) => TW_HEAD.krw.test(c3))) {
      const looksHead = /종류|paymenttype/i.test(cells.join("")) && /(날짜|date)/i.test(cells.join(""));
      if (looksHead) {
        const found = twColumnsByShape(rows, i3 + 1);
        if (found) return found;
      }
      continue;
    }
    const col = { headerRow: i3 };
    for (const [key, re] of Object.entries(TW_HEAD)) {
      col[key] = cells.findIndex((c3) => re.test(c3));
    }
    if (col.amount === col.krw) col.amount = cells.findIndex((c3, j3) => j3 !== col.krw && /금액|amount/i.test(c3));
    return col;
  }
  return null;
}
function twEntryFrom(v3, opts = {}) {
  const { date, kind, krw, fxRaw, currency, balance, approval, time, joined, index } = v3;
  let merchant = String(v3.merchant || "").replace(/\s+/g, " ").trim();
  const inflow = kind === "cancel" || kind === "topup";
  let type = "expense", category = "travel", transferKind = null, isRefund = false;
  if (kind === "topup") {
    type = "transfer";
    transferKind = "fxTopup";
    category = "etc";
    merchant = `트래블월렛 충전${currency ? ` (${currency})` : ""}`;
  } else if (kind === "cancel") {
    isRefund = true;
  } else if (kind === "atm") {
    merchant = merchant ? `현지 인출 ${merchant}` : "현지 인출";
  }
  if (!merchant) merchant = kind === "adjust" ? "정산" : "내역";
  if (type === "expense") {
    const hit = matchRule(normKey(merchant), opts.rules);
    category = hit ? detectCategory(merchant, "expense", opts.rules) : "travel";
  }
  return {
    type,
    direction: inflow ? "in" : "out",
    date,
    amount: krw,
    transferKind,
    needsCheck: false,
    isExtra: false,
    category,
    memo: merchant,
    normKey: normKey(merchant),
    counterpartyRaw: merchant,
    balanceAfter: null,
    foreignBalance: balance ?? null,
    accountId: opts.accountId || null,
    paymentMethod: "travelwallet",
    source: "statement",
    isRefund,
    installmentMonths: null,
    isOverseas: !!currency && currency !== "KRW",
    currency: currency && currency !== "KRW" ? currency : "",
    foreignAmount: fxRaw != null ? Math.abs(fxRaw) : null,
    twKind: kind,
    confidence: 0.9,
    sourceHash: `tw|${date}|${time || ""}|${krw}|${merchant}|${approval || ""}|${kind}|${index}`,
    rawText: joined || ""
  };
}
function twRowByShape(cells) {
  const raw = cells.map((c3) => String(c3 == null ? "" : c3).trim());
  const joined = raw.join(" ").replace(/\s+/g, " ").trim();
  const date = normalizeDate(raw.find((c3) => normalizeDate(c3)));
  const kind = twKindOf(raw.find((c3) => twKindOf(c3)));
  if (!date || !kind) return null;
  const curM = joined.match(/\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY|SGD|AUD|CAD|PHP|MYR|IDR)\b/);
  const currency = curM ? curM[1] : "";
  let krw = null;
  for (let i3 = raw.length - 1; i3 >= 0; i3--) {
    const v3 = raw[i3].replace(/[^\d,]/g, "");
    if (/^\d{1,3}(,\d{3})*$|^\d+$/.test(v3) && v3.replace(/,/g, "").length >= 1 && !/=/.test(raw[i3]) && !/[¥￦$€]/.test(raw[i3])) {
      krw = parseInt(v3.replace(/,/g, ""), 10);
      break;
    }
  }
  const forFx = joined.replace(/\d{3,}-\d{2}\*{2}-\*{4}-\d{3}\*/g, " ").replace(/\d{4}-\d{2}[\d*]{2}/g, " ");
  const fxM = forFx.match(/(^|[\s(])([-+−–])\s*([\d,]+(?:\.\d+)?)/);
  const fx = fxM ? parseFloat(fxM[3].replace(/,/g, "")) : null;
  let merchant = joined.replace(normalizeDateSource(raw), " ").replace(/\d{1,2}:\d{2}(:\d{2})?/g, " ").replace(/(결제\s*취소|기타\s*정산|ATM\s*출금|결제|충전)\s*\([a-z ]+\)/gi, " ").replace(/[가-힣]+\([A-Z ]+\)/g, " ").replace(/[A-Z]{2,}\s+[A-Z]+\)/g, " ").replace(/\d{4}-\d{2}\*{2}-\*{4}-\d{3}\*/g, " ").replace(/[¥￦$€£][\s\d,.]+/g, " ").replace(/[\d,]+\s*=/g, " ").replace(/\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY|SGD|AUD|CAD|PHP|MYR|IDR)\b/g, " ").replace(/[-+−–]\s*[\d,]+(\.\d+)?/g, " ").replace(/(^|\s)[\d,]+(\.\d+)?(?=\s|$)/g, " ").replace(/\s+/g, " ").trim();
  if (kind === "topup") merchant = "";
  return { date, kind, currency, krw, fx, merchant, joined };
}
function normalizeDateSource(raw) {
  for (const c3 of raw) if (normalizeDate(c3)) return c3;
  return "\0없음";
}
function twColumnsByShape(rows, from) {
  const sample = [];
  for (let i3 = from; i3 < rows.length && sample.length < 12; i3++) {
    const r3 = rows[i3] || [];
    if (r3.length >= 6 && twKindOf(r3.find((c3) => twKindOf(c3)))) sample.push(r3);
  }
  if (sample.length < 2) return null;
  const r0 = sample[0];
  const col = { headerRow: from - 1, date: -1, time: -1, kind: -1, currency: -1, amount: -1, balance: -1, merchant: -1, approval: -1, rate: -1, krw: -1 };
  for (let c3 = 0; c3 < r0.length; c3++) {
    const v3 = String(r0[c3] || "").trim();
    if (col.date < 0 && normalizeDate(v3)) {
      col.date = c3;
      continue;
    }
    if (col.time < 0 && /^\d{1,2}:\d{2}(:\d{2})?$/.test(v3)) {
      col.time = c3;
      continue;
    }
    if (col.kind < 0 && twKindOf(v3)) {
      col.kind = c3;
      continue;
    }
    if (col.currency < 0 && /^[A-Z]{3}$/.test(v3)) {
      col.currency = c3;
      continue;
    }
    if (col.amount < 0 && col.currency >= 0 && /[-+−–]?\s*[\d,]+/.test(v3) && /\d/.test(v3)) {
      col.amount = c3;
      continue;
    }
    if (col.balance < 0 && col.amount >= 0 && /^[\d,]+$/.test(v3)) {
      col.balance = c3;
      continue;
    }
    if (col.merchant < 0 && col.balance >= 0 && v3) {
      col.merchant = c3;
      continue;
    }
  }
  if (col.date < 0 || col.kind < 0 || col.amount < 0) return null;
  return col;
}
function twNum(cell) {
  const t4 = String(cell == null ? "" : cell).replace(/\s+/g, "");
  if (!t4) return null;
  const neg = /^[-−–]/.test(t4) || /^\(.*\)$/.test(t4);
  const digits = t4.replace(/[^\d]/g, "");
  if (!digits) return null;
  const v3 = parseInt(digits, 10);
  return isNaN(v3) ? null : neg ? -v3 : v3;
}
var TW_KIND = [
  { re: /충전|charge/i, kind: "topup" },
  { re: /결제\s*취소|payment\s*cancel|취소|cancel|refund/i, kind: "cancel" },
  { re: /ATM|출금|withdraw/i, kind: "atm" },
  { re: /기타\s*정산|adjust/i, kind: "adjust" },
  { re: /결제|payment/i, kind: "payment" }
];
function twKindOf(cell) {
  const t4 = String(cell || "");
  for (const k3 of TW_KIND) if (k3.re.test(t4)) return k3.kind;
  return null;
}
function travelWalletToEntries(rows, opts = {}) {
  const col0 = twColumns(rows);
  if (!col0) return { entries: [], skipped: [] };
  const score = (off) => {
    let n3 = 0;
    for (let i3 = col0.headerRow + 1; i3 < Math.min(rows.length, col0.headerRow + 12); i3++) {
      const r3 = rows[i3] || [];
      if (normalizeDate(r3[col0.date + off]) && twKindOf(r3[col0.kind + off])) n3++;
    }
    return n3;
  };
  let best = 0, bestN = -1;
  for (const off of [0, 1, -1, 2]) {
    const n3 = score(off);
    if (n3 > bestN) {
      bestN = n3;
      best = off;
    }
  }
  const col = {};
  for (const [k3, v3] of Object.entries(col0)) col[k3] = k3 === "headerRow" ? v3 : v3 >= 0 ? v3 + best : -1;
  const out = [], skipped = [];
  const cell = (r3, i3) => i3 >= 0 ? r3[i3] : void 0;
  const dataRows = rows.slice(col.headerRow + 1).filter((r3) => (r3 || []).some((c3) => String(c3 || "").trim()));
  const widths = new Set(dataRows.map((r3) => r3.length));
  const headRow = rows[col.headerRow] || [];
  const LABELS = [
    /날짜|date/i,
    /시간|time/i,
    /종류|payment\s*type/i,
    /통화|currency/i,
    /^금액|amount/i,
    /잔액|balance/i,
    /가맹점|merchant/i,
    /승인번호|approval/i,
    /환율|exchange/i,
    /원화금액|krw/i
  ];
  const merged = headRow.some((c3) => LABELS.filter((re) => re.test(String(c3 || ""))).length >= 2);
  const wider = dataRows.some((r3) => r3.length > headRow.length);
  const shaky = widths.size > 2 || col.krw < 0 || merged || wider;
  if (shaky) {
    for (let i3 = col.headerRow + 1; i3 < rows.length; i3++) {
      const got = twRowByShape(rows[i3] || []);
      if (!got || !got.krw) {
        if ((rows[i3] || []).join("").trim()) skipped.push(i3);
        continue;
      }
      const e3 = twEntryFrom({
        date: got.date,
        kind: got.kind,
        krw: got.krw,
        fxRaw: got.fx,
        currency: got.currency,
        merchant: got.merchant,
        balance: null,
        approval: "",
        time: "",
        joined: got.joined,
        index: i3
      }, opts);
      if (e3) out.push(e3);
    }
    return { entries: out, skipped };
  }
  for (let i3 = col.headerRow + 1; i3 < rows.length; i3++) {
    const r3 = rows[i3] || [];
    const joined = r3.join(" ").trim();
    const date = normalizeDate(cell(r3, col.date));
    const kind = twKindOf(cell(r3, col.kind));
    if (!date || !kind) {
      if (joined) skipped.push(i3);
      continue;
    }
    const krw = Math.abs(twNum(cell(r3, col.krw)) || 0);
    const fxRaw = twNum(cell(r3, col.amount));
    if (!krw) {
      skipped.push(i3);
      continue;
    }
    const currency = String(cell(r3, col.currency) || "").replace(/[^A-Z]/gi, "").toUpperCase();
    let merchant = String(cell(r3, col.merchant) || "").replace(/\s+/g, " ").trim();
    const balance = twNum(cell(r3, col.balance));
    const inflow = kind === "cancel" || kind === "topup";
    let type = "expense", category = "travel", transferKind = null, isRefund = false;
    if (kind === "topup") {
      type = "transfer";
      transferKind = "fxTopup";
      category = "etc";
      merchant = `트래블월렛 충전${currency ? ` (${currency})` : ""}`;
    } else if (kind === "cancel") {
      isRefund = true;
    } else if (kind === "atm") {
      merchant = merchant ? `현지 인출 ${merchant}` : "현지 인출";
    }
    if (!merchant) merchant = kind === "adjust" ? "정산" : "내역";
    if (type === "expense") {
      const hit = matchRule(normKey(merchant), opts.rules);
      category = hit ? detectCategory(merchant, "expense", opts.rules) : "travel";
    }
    out.push(twEntryFrom({
      date,
      kind,
      krw,
      fxRaw,
      currency,
      merchant,
      balance,
      approval: String(cell(r3, col.approval) || "").trim(),
      time: String(cell(r3, col.time) || "").trim(),
      joined,
      index: i3
    }, opts));
    continue;
    out.push({
      type,
      direction: inflow ? "in" : "out",
      date,
      amount: krw,
      transferKind,
      needsCheck: false,
      isExtra: false,
      category,
      memo: merchant,
      normKey: normKey(merchant),
      counterpartyRaw: merchant,
      balanceAfter: null,
      foreignBalance: balance,
      accountId: opts.accountId || null,
      paymentMethod: "travelwallet",
      source: "statement",
      isRefund,
      installmentMonths: null,
      isOverseas: !!currency && currency !== "KRW",
      currency: currency && currency !== "KRW" ? currency : "",
      foreignAmount: fxRaw != null ? Math.abs(fxRaw) : null,
      twKind: kind,
      confidence: 0.9,
      sourceHash: `tw|${date}|${String(cell(r3, col.time) || "").trim()}|${krw}|${merchant}|${String(cell(r3, col.approval) || "").trim()}|${kind}|${i3}`,
      rawText: joined
    });
  }
  return { entries: out, skipped };
}
var PDF_HEAD_RE = /(거래일시|거래일자|이용일자|날짜|일자)/;
function overlapsFull(prevLines, lines) {
  const seen = /* @__PURE__ */ new Map();
  for (const ln of prevLines) seen.set(Math.round(ln[0].y), ln);
  let full = 0, total = 0;
  for (const ln of lines) {
    const t4 = seen.get(Math.round(ln[0].y));
    if (!t4) continue;
    total++;
    const txt = t4.map((i3) => i3.s).join("");
    if (/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/.test(txt) && /20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/.test(ln.map((i3) => i3.s).join(""))) full++;
  }
  return total > 0 && full / total > 0.5;
}
function pdfLines(items) {
  const list = (items || []).filter((it) => it && String(it.str || "").trim()).map((it) => ({ s: String(it.str), x: +it.x || 0, y: Math.round(+it.y || 0), w: +it.w || 0 })).sort((a3, b3) => b3.y - a3.y || a3.x - b3.x);
  const lines = [];
  let cur = [], lastY = null;
  for (const it of list) {
    if (lastY !== null && Math.abs(it.y - lastY) > 3) {
      if (cur.length) lines.push(cur);
      cur = [];
    }
    cur.push(it);
    lastY = it.y;
  }
  if (cur.length) lines.push(cur);
  return lines;
}
function splitByGap(line) {
  if (!line.length) return [];
  let wSum = 0, cSum = 0;
  for (const it of line) {
    wSum += it.w;
    cSum += Math.max(1, String(it.s).length);
  }
  const charW = cSum > 0 && wSum > 0 ? wSum / cSum : 5;
  const cut = Math.max(charW * 0.9, 3);
  const cells = [];
  let text = line[0].s, x0 = line[0].x;
  for (let i3 = 1; i3 < line.length; i3++) {
    const gap = line[i3].x - (line[i3 - 1].x + line[i3 - 1].w);
    if (gap > cut) {
      cells.push({ text, x: x0 });
      text = line[i3].s;
      x0 = line[i3].x;
    } else text += line[i3].s;
  }
  cells.push({ text, x: x0 });
  return cells;
}
function pdfItemsToRows(pages) {
  const perPage = (pages || []).map((items) => pdfLines(items));
  const hasDateHead = (lines) => lines.some((ln) => PDF_HEAD_RE.test(ln.map((i3) => i3.s).join("")));
  const merged = [];
  for (let p3 = 0; p3 < perPage.length; p3++) {
    const lines = perPage[p3];
    if (!lines.length) continue;
    if (merged.length && !hasDateHead(lines) && !overlapsFull(merged[merged.length - 1], lines)) {
      const prev = merged[merged.length - 1];
      let maxX = 0;
      for (const ln of prev) for (const it of ln) maxX = Math.max(maxX, it.x + it.w);
      let minX = Infinity;
      for (const ln of lines) for (const it of ln) minX = Math.min(minX, it.x);
      const shift2 = maxX + 40 - (isFinite(minX) ? minX : 0);
      const byY = /* @__PURE__ */ new Map();
      for (const ln of prev) byY.set(Math.round(ln[0].y), ln);
      for (const ln of lines) {
        const moved = ln.map((it) => ({ ...it, x: it.x + shift2 }));
        const key = Math.round(ln[0].y);
        const target = byY.get(key);
        if (target) target.push(...moved);
        else prev.push(moved);
      }
      continue;
    }
    merged.push(lines.slice());
  }
  const allLines = [];
  for (const lines of merged) for (const ln of lines) allLines.push(ln);
  if (!allLines.length) return [];
  const raw = allLines.map((ln) => splitByGap(ln).map((c3) => c3.text.trim()).filter((t4) => t4 !== ""));
  if (!raw.length) return [];
  const counts = /* @__PURE__ */ new Map();
  for (const r3 of raw) counts.set(r3.length, (counts.get(r3.length) || 0) + 1);
  let width = 0, best = -1;
  for (const [len, n3] of counts) if (n3 > best || n3 === best && len > width) {
    best = n3;
    width = len;
  }
  if (width < 3) return raw;
  const fixed = (t4) => {
    const v3 = String(t4).replace(/\s/g, "");
    return /^-?[\d,]+$/.test(v3) && /\d/.test(v3) || /^\d{2,4}[.\-/]\d{1,2}[.\-/]\d{1,2}$/.test(v3) || /^\d+$/.test(v3);
  };
  return raw.map((cells) => {
    if (cells.length <= width) return cells;
    const out = cells.slice();
    while (out.length > width) {
      let at = -1;
      for (let i3 = out.length - 2; i3 >= 0; i3--) {
        if (!fixed(out[i3]) && !fixed(out[i3 + 1])) {
          at = i3;
          break;
        }
      }
      if (at < 0) break;
      out.splice(at, 2, `${out[at]} ${out[at + 1]}`);
    }
    return out;
  });
}
function canReclassify(e3) {
  if (!e3 || e3.deleted) return false;
  if (e3.catBy === "user") return false;
  if (e3.memoBy === "user") return false;
  if (e3.mergedInto || e3.pairedFrom) return false;
  if (e3.transferKind === "external") return false;
  if (e3.source === "manual") return false;
  return !!String(e3.rawText || "").trim();
}
function reclassifyOne(e3, opts = {}) {
  if (!canReclassify(e3)) return null;
  const st = opts.settings || {};
  const raw = String(e3.rawText || "");
  const base2 = {
    counterpartyRaw: e3.counterpartyRaw || e3.memo,
    memo: e3.memo,
    rawText: raw,
    amount: e3.amount,
    direction: e3.direction || (e3.type === "income" ? "in" : "out"),
    paymentMethod: e3.paymentMethod,
    category: e3.category
  };
  let type = e3.type, category = e3.category, transferKind = e3.transferKind || null;
  let isExtra = !!e3.isExtra, familyBy = e3.familyBy || null;
  if (base2.direction === "in") {
    const inc = classifyIncome(base2, st);
    if (inc) {
      type = inc.type;
      transferKind = inc.transferKind || null;
      category = inc.category || (type === "income" ? "income" : category);
    } else {
      type = "transfer";
      transferKind = null;
    }
  } else {
    type = "expense";
    transferKind = null;
    category = detectCategory(base2.counterpartyRaw || base2.memo, "expense", opts.rules);
    const rule = applyAccountRules(base2, st);
    if (rule) {
      if (rule.type) type = rule.type;
      if (rule.category) category = rule.category;
      transferKind = rule.transferKind || null;
      isExtra = !!rule.isExtra;
      familyBy = rule.familyBy || null;
    }
    const after = applyUserRules({ ...e3, type, category, transferKind }, opts.rules || []);
    if (after) {
      category = after.category;
      if (after.transferKind !== void 0) transferKind = after.transferKind;
    }
  }
  const SURE = /* @__PURE__ */ new Set(["internal", "verify", "invest", "savings", "cardPayment", "fxTopup"]);
  const resolved = type === "income" || SURE.has(transferKind || "");
  const changed = {};
  if (type !== e3.type) changed.type = type;
  if (category !== e3.category) changed.category = category;
  if ((transferKind || null) !== (e3.transferKind || null)) changed.transferKind = transferKind;
  if (!!isExtra !== !!e3.isExtra) changed.isExtra = isExtra;
  const meaningful = ["type", "category", "transferKind", "isExtra"].some((k3) => k3 in changed);
  if (!meaningful) return null;
  if (resolved && (e3.status === "pending" || e3.needsCheck)) {
    changed.status = "confirmed";
    changed.needsCheck = false;
    changed.confidence = 1;
  }
  if (familyBy && familyBy !== e3.familyBy) changed.familyBy = familyBy;
  return changed;
}
function planReclassify(entries, opts = {}) {
  const changes = [];
  let skipped = 0;
  for (const e3 of entries || []) {
    if (!canReclassify(e3)) {
      if (e3 && !e3.deleted) skipped++;
      continue;
    }
    const diff = reclassifyOne(e3, opts);
    if (!diff) continue;
    changes.push({
      id: e3.id,
      memo: e3.memo,
      amount: e3.amount,
      date: e3.date,
      before: { type: e3.type, category: e3.category, transferKind: e3.transferKind || null },
      after: {
        type: diff.type ?? e3.type,
        category: diff.category ?? e3.category,
        transferKind: diff.transferKind !== void 0 ? diff.transferKind : e3.transferKind || null
      },
      patch: diff
    });
  }
  return { total: (entries || []).filter((e3) => e3 && !e3.deleted).length, skipped, changes };
}
var CARD_NO_RE = /(\d{4}-\d{2}\*{2,4}-\*{4}-\d{3,4}\*?|\d{4}-\*{4}-\*{4}-\d{4}|\*{4}-?\d{4})/;
var SRC_BANK_NAMES = [
  "우리",
  "국민",
  "신한",
  "하나",
  "농협",
  "기업",
  "산업",
  "전북",
  "광주",
  "부산",
  "대구",
  "경남",
  "제주",
  "새마을",
  "우체국",
  "카카오뱅크",
  "케이뱅크",
  "토스뱅크",
  "씨티",
  "SC제일",
  "수협",
  "신협"
];
var SRC_CARD_BRANDS = ["신한", "삼성", "현대", "국민", "롯데", "하나", "우리", "비씨", "BC", "농협", "씨티", "카카오", "케이", "토스"];
function detectSource(rows) {
  const head = (rows || []).slice(0, 12).map((r3) => (r3 || []).join(" ")).join("\n");
  const flat = head.replace(/\s+/g, " ");
  const out = { kind: null, accountNo: "", cardNo: "", bank: "", brand: "", holder: "" };
  const card = flat.match(CARD_NO_RE);
  if (card) {
    out.cardNo = card[1];
    out.kind = "card";
  }
  const acctM = flat.match(/(계좌\s*번호|계좌|출금계좌|입금계좌)\D{0,6}(\d{2,4}-\d{2,4}-\d{2,6}(?:-\d{1,6})?)/);
  if (acctM && !/\*/.test(acctM[2])) {
    out.accountNo = acctM[2];
    if (!out.kind) out.kind = "account";
  }
  const top = (rows || []).slice(0, 4).map((r3) => (r3 || []).join(" ")).join(" ").replace(/\s+/g, " ");
  out.bank = SRC_BANK_NAMES.find((b3) => top.includes(b3 + "은행") || top.includes(b3 + "뱅크")) || "";
  out.brand = SRC_CARD_BRANDS.find((b3) => top.includes(b3 + "카드")) || "";
  if (out.brand && !out.cardNo) out.kind = out.kind || "card";
  if (out.bank && !out.accountNo && !out.cardNo) out.kind = out.kind || "account";
  if (/가맹점|이용금액|승인금액|할부/.test(flat)) out.kind = "card";
  if (/찾으신금액|맡기신금액|입금액|출금액|거래후\s*잔액/.test(flat)) out.kind = "account";
  return out;
}
function matchAccount(info, accounts) {
  if (!info || !Array.isArray(accounts)) return null;
  const tail = (s3) => String(s3 || "").replace(/[^\d]/g, "").slice(-4);
  const no = tail(info.accountNo || info.cardNo);
  if (no.length === 4) {
    const byNo = accounts.find((a3) => tail(a3.number) === no);
    if (byNo) return byNo;
  }
  const name = info.bank || info.brand;
  if (name) {
    const byName = accounts.find((a3) => String(a3.name || "").includes(name));
    if (byName) return byName;
  }
  return null;
}
function describeGaps(gaps) {
  if (!gaps || !gaps.length) return "";
  const first = gaps[0];
  const more = gaps.length > 1 ? ` 외 ${gaps.length - 1}곳` : "";
  return `${first.afterDate} ~ ${first.beforeDate} 사이에 빠진 내역이 있어 보여요${more}`;
}

// src/itinerary.js
function htmlToLines(src) {
  let s3 = String(src || "");
  s3 = s3.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  s3 = s3.replace(/<\/(tr|div|p|h1|h2|h3|li|table|thead|tbody)>/gi, "\n").replace(/<br\s*\/?>/gi, "\n").replace(/<\/td>/gi, "	");
  s3 = s3.replace(/<[^>]+>/g, " ");
  s3 = s3.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return s3.split("\n").map((l3) => l3.replace(/[ \t]+/g, " ").trim()).filter(Boolean);
}
var DAY_RE = /(\d{1,2})\s*일\s*차|Day\s*(\d{1,2})/i;
var MD_RE = /(\d{1,2})\s*월\s*(\d{1,2})\s*일/;
var TIME_RE = /^(\d{1,2}:\d{2})(?:\s*~\s*(\d{1,2}:\d{2}))?/;
var YEN_RE = /(?:약\s*)?([\d,]+)\s*(?:~|-|부터)?\s*([\d,]+)?\s*엔/;
var WON_RE = /(?:약\s*)?([\d,]{2,})\s*(?:~|-|부터)?\s*([\d,]+)?\s*원(?![가-힣])/;
var num2 = (t4) => parseInt(String(t4 || "").replace(/[^\d]/g, ""), 10) || 0;
function costOf(line, yenRate = 9.2) {
  const t4 = String(line || "");
  if (/무료|free/i.test(t4) && !YEN_RE.test(t4) && !WON_RE.test(t4)) return 0;
  const y3 = t4.match(YEN_RE);
  if (y3) {
    const a3 = num2(y3[1]), b3 = y3[2] ? num2(y3[2]) : a3;
    return Math.round((a3 + b3) / 2 * yenRate);
  }
  const w3 = t4.match(WON_RE);
  if (w3) {
    const a3 = num2(w3[1]), b3 = w3[2] ? num2(w3[2]) : a3;
    return Math.round((a3 + b3) / 2);
  }
  return null;
}
var KIND_WORDS = [
  ["transport", ["버스", "전철", "지하철", "메트로", "JR", "신칸센", "택시", "이동", "교통", "패스", "편도", "왕복", "모노레일", "라인"]],
  ["stay", ["호텔", "숙박", "료칸", "게스트하우스", "1박", "숙소비"]],
  // 체크인·체크아웃은 행동이라 뺀다
  ["food", ["점심", "저녁", "아침", "식사", "라멘", "규동", "카페", "맥주", "이자카야", "돈카츠", "스시", "먹", "맛집"]],
  ["sight", ["입장", "전망대", "티켓", "관람", "박물관", "미술관", "체험", "투어", "뮤지엄", "공원", "신사", "절"]],
  ["shop", ["쇼핑", "기념품", "면세", "굿즈", "상점"]]
];
function kindOf(line) {
  const t4 = String(line || "").slice(0, 120);
  let best = "etc", bestAt = Infinity;
  for (const [k3, words] of KIND_WORDS) {
    for (const w3 of words) {
      const at = t4.indexOf(w3);
      if (at >= 0 && at < bestAt) {
        bestAt = at;
        best = k3;
      }
    }
  }
  return best;
}
var KIND_LABEL = { transport: "교통", stay: "숙박", food: "식비", sight: "관광", shop: "쇼핑", etc: "기타" };
function parseItinerary(src, opts = {}) {
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(String(src || ""));
  const lines = isHtml ? htmlToLines(src) : String(src || "").split("\n").map((l3) => l3.trim()).filter(Boolean);
  const yenRate = opts.yenRate || 9.2;
  const days = [];
  let cur = null;
  for (const line of lines) {
    const d3 = line.match(DAY_RE);
    if (d3) {
      const no = parseInt(d3[1] || d3[2], 10);
      const md = line.match(MD_RE);
      cur = {
        dayNo: no,
        date: "",
        month: md ? +md[1] : null,
        day: md ? +md[2] : null,
        title: line.replace(/\s+/g, " ").trim(),
        items: []
      };
      days.push(cur);
      continue;
    }
    if (!cur) continue;
    const t4 = line.match(TIME_RE);
    if (t4) {
      const text = line.slice(t4[0].length).replace(/^[\s\t·-]+/, "").trim();
      cur.items.push({ time: t4[1], endTime: t4[2] || "", text, cost: costOf(line, yenRate), kind: kindOf(line) });
    } else if (cur.items.length) {
      const last = cur.items[cur.items.length - 1];
      last.text = `${last.text} ${line}`.replace(/\s+/g, " ").trim().slice(0, 300);
      if (last.cost == null) last.cost = costOf(line, yenRate);
      if (last.kind === "etc") last.kind = kindOf(line);
    }
  }
  if (opts.startDate && days.length) {
    const base2 = /* @__PURE__ */ new Date(`${opts.startDate}T00:00:00`);
    for (const dd of days) {
      const x2 = new Date(base2);
      x2.setDate(x2.getDate() + (dd.dayNo - 1));
      dd.date = `${x2.getFullYear()}-${String(x2.getMonth() + 1).padStart(2, "0")}-${String(x2.getDate()).padStart(2, "0")}`;
    }
  }
  return { days, parsed: days.length > 0, raw: String(src || "") };
}
function itemKey(dayNo, it) {
  const t4 = String(it && it.text || "").replace(/\s+/g, "").slice(0, 20);
  return `${dayNo}|${it && it.time || ""}|${t4}`;
}
function planCost(days, marks) {
  const mk = marks || {};
  const byDay = [];
  for (const d3 of days || []) {
    const kinds = {};
    let sum = 0;
    for (const it of d3.items || []) {
      if (mk[itemKey(d3.dayNo, it)] === "skip") continue;
      if (!it.cost) continue;
      kinds[it.kind] = (kinds[it.kind] || 0) + it.cost;
      sum += it.cost;
    }
    byDay.push({ dayNo: d3.dayNo, date: d3.date, total: sum, kinds });
  }
  const all = {};
  let total = 0;
  for (const b3 of byDay) {
    total += b3.total;
    for (const [k3, v3] of Object.entries(b3.kinds)) all[k3] = (all[k3] || 0) + v3;
  }
  return { byDay, total, kinds: all };
}

// src/views.js
var html = htm_module_default.bind(k);
function FixedView({ db, patch, entries, flash, onAdopt }) {
  const [adding, setAdding] = d2(false);
  const [draft, setDraft] = d2(null);
  const suggestions = T2(() => {
    const known = new Set(db.fixedExpenses.map((f3) => f3.normKey));
    return detectRecurring(entries).filter((r3) => !known.has(r3.normKey));
  }, [entries, db.fixedExpenses]);
  const ym = todayISO().slice(0, 7);
  const rows = db.fixedExpenses.filter((f3) => f3.status !== "ended").map((f3) => {
    const hit = entries.find((e3) => !e3.deleted && e3.date.slice(0, 7) === ym && (e3.fixedId === f3.id || matchesFixed(e3, f3)));
    const day = String(f3.dayOfMonth).padStart(2, "0");
    const due = `${ym}-${day}`;
    const late = !hit && due < todayISO();
    return { ...f3, hit, due, late };
  }).sort((a3, b3) => a3.dayOfMonth - b3.dayOfMonth);
  const done = rows.filter((r3) => r3.hit && r3.hit.status !== "scheduled").reduce((s3, r3) => s3 + r3.hit.amount, 0);
  const planned = rows.reduce((s3, r3) => s3 + (r3.hit && r3.hit.status !== "scheduled" ? r3.hit.amount : r3.amount), 0);
  const remove = (id) => patch((n3) => {
    n3.fixedExpenses = n3.fixedExpenses.filter((f3) => f3.id !== id);
  });
  return html`
    <div class="fixedWrap">
      ${suggestions.length > 0 && html`
        <div class="suggest">
          <div class="suggestHead">매달 반복되는 것 ${suggestions.length}건을 찾았어요</div>
          ${suggestions.slice(0, 6).map((s3) => html`
            <div class="suggestRow" key=${s3.normKey}>
              <span class="sName">${s3.name}</span>
              <span class="sAmt">${s3.amountVariable ? "약 " : ""}₩${formatWon(s3.amount)}</span>
              <span class="sDay">매월 ${s3.dayOfMonth}일</span>
            </div>`)}
          <div class="acts">
            <button class="btn primary sm" onClick=${() => {
    onAdopt(suggestions);
    flash(`고정비 ${suggestions.length}건 등록`);
  }}>
              전부 고정비로 등록
            </button>
          </div>
        </div>`}

      <div class="fixedHead">
        <span>이번 달 고정비</span>
        <span class="fixedSum">나감 ₩${formatWon(done)} · 예정 포함 ₩${formatWon(planned)}</span>
      </div>

      ${rows.length === 0 && suggestions.length === 0 && html`
        <div class="empty">아직 고정비가 없어요.<br />세 달치 기록이 쌓이면 알아서 찾아냅니다.</div>`}

      ${rows.map((r3) => html`
        <div class=${"fixedRow" + (r3.late ? " late" : "")} key=${r3.id}>
          <span class=${"fixedMark " + (r3.hit && r3.hit.status !== "scheduled" ? "done" : r3.late ? "late" : "wait")}>
            ${r3.hit && r3.hit.status !== "scheduled" ? "✓" : r3.late ? "!" : "○"}
          </span>
          <span class="fixedDay">${r3.dayOfMonth}일</span>
          <span class="fixedName">${r3.name}</span>
          <span class="fixedAmt">
            ${r3.amountVariable && !(r3.hit && r3.hit.status !== "scheduled") ? "약 " : ""}
            ₩${formatWon(r3.hit ? r3.hit.amount : r3.amount)}
          </span>
          <button class="del" onClick=${() => remove(r3.id)} aria-label="삭제">×</button>
        </div>
        ${r3.late && html`<div class="fixedLate">예정일이 지났는데 확인이 안 돼요. 통장 내역을 붙여넣으면 맞춰집니다.</div>`}`)}

      ${adding ? html`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="이름" value=${draft.name} onInput=${(e3) => setDraft({ ...draft, name: e3.target.value })} />
              <input class="inp" type="number" placeholder="금액" value=${draft.amount || ""} onInput=${(e3) => setDraft({ ...draft, amount: parseInt(e3.target.value || "0", 10) })} />
              <input class="inp" type="number" min="1" max="31" placeholder="며칠" value=${draft.dayOfMonth || ""} onInput=${(e3) => setDraft({ ...draft, dayOfMonth: parseInt(e3.target.value || "1", 10) })} />
            </div>
            <div class="chips">
              ${CATEGORIES.filter((c3) => c3.key !== "income").map((c3) => html`
                <button key=${c3.key} class=${"chip sm" + (draft.category === c3.key ? " on" : "")}
                  style=${draft.category === c3.key ? `background:${c3.color};border-color:${c3.color}` : `border-color:${c3.color}55;color:${c3.color}`}
                  onClick=${() => setDraft({ ...draft, category: c3.key })}>${c3.label}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${() => setAdding(false)}>취소</button>
              <button class="btn primary sm" disabled=${!draft.name || !draft.amount}
                onClick=${() => {
    patch((n3) => {
      n3.fixedExpenses = [...n3.fixedExpenses, { ...draft, id: uid(), normKey: normKey(draft.name), status: "active", source: "manual" }];
    });
    setAdding(false);
    flash("고정비를 등록했어요");
  }}>등록</button>
            </div>
          </div>` : html`<button class="tag dash addFixed" onClick=${() => {
    setDraft({ name: "", amount: 0, dayOfMonth: 1, category: "living", amountVariable: false });
    setAdding(true);
  }}>+ 직접 추가</button>`}
    </div>`;
}
function ReviewView({ entries, onApply, onApplyRules, userName, ruleCount, onClose }) {
  const [all, setAll] = d2(false);
  const [more, setMore] = d2(false);
  const groups = T2(() => {
    const g2 = groupForReview(entries, { userName });
    return all ? g2 : g2.filter((x2) => x2.needsReview || x2.mixed);
  }, [entries, all, userName]);
  const [done, setDone] = d2({});
  const [ruleOpen, setRuleOpen] = d2(false);
  const [ruleText, setRuleText] = d2("");
  const [ruleResult, setRuleResult] = d2(null);
  const parsed = T2(() => parseRuleLines(ruleText), [ruleText]);
  const preview = T2(() => previewRuleSet(entries, parsed.filter((r3) => !r3.error)), [entries, parsed]);
  const good = parsed.filter((r3) => !r3.error);
  const shown = more ? groups : groups.slice(0, 40);
  return html`
    <div class="card">
      <div class="cardLabel">가맹점별로 한 번에 분류하기 · ${groups.length}곳</div>
      <div class="hint sm">한 번 정하면 같은 곳의 지난 기록까지 바뀌고, 앞으로도 자동으로 분류됩니다.</div>
      <div class="row wrap" style="margin-top:8px">
        <button class=${"tag" + (!all ? " on" : "")} onClick=${() => setAll(false)}>정리할 것만</button>
        <button class=${"tag" + (all ? " on" : "")} onClick=${() => setAll(true)}>전체 보기</button>
        <button class=${"tag dash" + (ruleOpen ? " on" : "")} onClick=${() => setRuleOpen(!ruleOpen)}>규칙 한꺼번에 넣기</button>
      </div>

      ${ruleResult && !ruleOpen && html`
        <div class="tidyResult">규칙 <b>${ruleResult.rules}개</b>를 넣고 지난 기록 <b>${ruleResult.changed}건</b>을 바꿨어요. 앞으로 들어오는 것도 자동으로 분류됩니다.</div>`}
      ${ruleOpen && html`
        <div class="ruleBox">
          <div class="hint sm">
            한 줄에 하나씩 <b>이름 = 분류</b>로 적으세요. 오른쪽에 <b>제외</b>를 쓰면 합계에서 뺍니다(해외 서비스 확인용 결제 등).
            이 규칙은 이 기기에만 저장되고 코드나 외부로 나가지 않습니다. 지금 규칙 ${ruleCount || 0}개.
          </div>
          <textarea class="pasteArea ruleArea" value=${ruleText} onInput=${(e3) => setRuleText(e3.target.value)}
            placeholder=${"예)\n홍길동 = 경조사\n동네식당 = 식비\noracle = 제외"}></textarea>
          ${parsed.length > 0 && html`
            <div class="ruleList">
              ${parsed.map((r3, i3) => html`
                <div class=${"ruleRow" + (r3.error ? " bad" : "")} key=${i3}>
                  <span class="ruleName">${r3.name || r3.line}</span>
                  <span class="ruleTo">${r3.error ? r3.error : r3.kind === "exclude" ? "합계 제외" : CATEGORIES.find((c3) => c3.key === r3.category)?.label}</span>
                  ${!r3.error && html`<span class="ruleCnt">${preview.perRule.get(r3.normKey) || 0}건</span>`}
                </div>`)}
            </div>`}
          <div class="acts">
            <button class="btn primary sm" disabled=${!good.length}
              onClick=${() => {
    const n3 = onApplyRules(parsed);
    setRuleResult({ rules: good.length, changed: n3 });
    setRuleText("");
    setRuleOpen(false);
  }}>
              규칙 ${good.length}개 적용 · 기록 ${preview.changes.size}건 바뀜
            </button>
          </div>
        </div>`}

      <div class="groupList">
        ${groups.length === 0 && html`<div class="empty">정리할 게 없어요.<br />전체 보기로 이미 분류된 곳도 볼 수 있어요.</div>`}
        ${shown.map((g2) => html`
          <div class=${"groupRow" + (done[g2.normKey] ? " settled" : "")} key=${g2.normKey}>
            <div class="groupTop">
              <span class="gName">${g2.name}</span>
              <span class="gMeta">${g2.count}건 · ₩${formatWon(g2.total)}</span>
            </div>
            ${g2.suggest && !done[g2.normKey] && html`
              <button class="suggestPill" onClick=${() => {
    setDone((d3) => ({ ...d3, [g2.normKey]: g2.suggest }));
    onApply(g2, g2.suggest);
  }}>
                사람 이름 · 딱 떨어지는 금액 — ${CATEGORIES.find((c3) => c3.key === g2.suggest)?.label}일까요? 탭하면 정해져요
              </button>`}
            <div class="chips">
              ${CATEGORIES.filter((c3) => c3.key !== "income").map((c3) => html`
                <button key=${c3.key}
                  class=${"chip sm" + ((done[g2.normKey] || g2.category) === c3.key ? " on" : "")}
                  style=${(done[g2.normKey] || g2.category) === c3.key ? `background:${c3.color};border-color:${c3.color}` : `border-color:${c3.color}55;color:${c3.color}`}
                  onClick=${() => {
    setDone((d3) => ({ ...d3, [g2.normKey]: c3.key }));
    onApply(g2, c3.key);
  }}>${c3.label}</button>`)}
            </div>
          </div>`)}
        ${!more && groups.length > 40 && html`<button class="pickToggle" onClick=${() => setMore(true)}>나머지 ${groups.length - 40}곳 더 보기</button>`}
      </div>
      <div class="acts"><button class="btn ghost sm" onClick=${onClose}>닫기</button></div>
    </div>`;
}
function AssetView({ db, entries, patch, rowProps }) {
  const [adding, setAdding] = d2(false);
  const [name, setName] = d2("");
  const [kind, setKind] = d2("bank");
  const accounts = db.accounts;
  const transfers = T2(() => {
    const ym = todayISO().slice(0, 7);
    return entries.filter((e3) => !e3.deleted && e3.type === "transfer" && e3.date.slice(0, 7) === ym).sort((a3, b3) => a3.date < b3.date ? 1 : -1);
  }, [entries]);
  const nameOf = (id) => accounts.find((a3) => a3.id === id)?.name || "?";
  const KIND_LABEL2 = { bank: "통장", card: "카드", cash: "현금", fx: "외화", savings: "저축", invest: "투자" };
  return html`
    <div class="assetWrap">
      <div class="hint sm">계좌는 같은 거래를 두 번 넣지 않게 거르고, 계좌 사이에 옮긴 돈을 짝지을 때 씁니다. 잔액은 보여주지 않습니다.</div>

      ${accounts.length === 0 && html`<div class="empty">등록된 계좌가 없어요.<br />문자나 내역을 넣으면 알아서 찾아내고,<br />아래에서 직접 추가할 수도 있어요.</div>`}

      ${accounts.map((a3) => html`
          <div class="acctRow" key=${a3.id}>
            <span class="acctKind">${KIND_LABEL2[a3.kind] || a3.kind}</span>
            <span class="acctName">${a3.name}${a3.last4 ? html`<span class="acctLast4"> ${a3.last4}</span>` : ""}</span>
            <button class="del" onClick=${() => patch((n3) => {
    n3.accounts = n3.accounts.filter((x2) => x2.id !== a3.id);
  })} aria-label="삭제">×</button>
          </div>`)}

      ${adding ? html`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="계좌 이름 (예: 하나 주계좌)" value=${name} onInput=${(e3) => setName(e3.target.value)} />
            </div>
            <div class="chips">
              ${Object.entries(KIND_LABEL2).map(([k3, l3]) => html`
                <button key=${k3} class=${"tag" + (kind === k3 ? " on" : "")} onClick=${() => setKind(k3)}>${l3}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${() => setAdding(false)}>취소</button>
              <button class="btn primary sm" disabled=${!name.trim()} onClick=${() => {
    patch((n3) => {
      n3.accounts = [...n3.accounts, { id: uid(), name: name.trim(), kind, aliases: [] }];
    });
    setName("");
    setAdding(false);
  }}>추가</button>
            </div>
          </div>` : html`<button class="tag dash addFixed" onClick=${() => setAdding(true)}>+ 계좌 추가</button>`}

      ${transfers.length > 0 && html`
        <div class="transferBox">
          <div class="groupHead">이번 달 계좌 간 이동 ${transfers.length}건</div>
          ${transfers.slice(0, 10).map((t4) => html`
            <div class="tRow" key=${t4.id}>
              <span class="tDate">${t4.date.slice(5)}</span>
              <span class="tPath">
                ${t4.fromAccountId ? nameOf(t4.fromAccountId) : t4.accountId ? nameOf(t4.accountId) : "?"}
                → ${t4.toAccountId ? nameOf(t4.toAccountId) : t4.memo || "?"}
              </span>
              <span class="tAmt">₩${formatWon(t4.amount)}</span>
              ${!t4.pairedFrom && t4.transferKind === "internal" && html`<span class="tHalf">⟳</span>`}
            </div>`)}
        </div>`}
    </div>`;
}
function TidyPanel({ db, entries, patch, flash, onClose }) {
  const [result, setResult] = d2(null);
  const [plan, setPlan] = d2(null);
  const [undo, setUndo] = d2(null);
  const preview = () => {
    const opts = { accounts: db.accounts, userName: db.settings.userName, settings: db.settings };
    const kinds = {};
    for (const e3 of entries) {
      if (e3.deleted || e3.transferKind) continue;
      if (e3.category === "family" || e3.category === "travel") continue;
      const looksTransfer = e3.type === "transfer" || e3.type === "expense" && e3.paymentMethod === "account" && e3.direction === "out";
      if (!looksTransfer) continue;
      kinds[e3.id] = classifyTransfer(e3, opts);
    }
    const { pairs, review, halves } = pairTransfers(entries, opts);
    const refundPairs = findRefundPairs(entries);
    setPlan({
      kinds,
      pairs,
      review,
      halves,
      refundPairs,
      classified: Object.keys(kinds).length,
      pairedCount: pairs.length
    });
  };
  const revert = () => {
    if (!undo || !undo.length) return;
    const byId = new Map(undo.map((u3) => [u3.id, u3]));
    patch((n4) => {
      n4.entries = n4.entries.map((e3) => {
        const b3 = byId.get(e3.id);
        if (!b3) return e3;
        return {
          ...e3,
          type: b3.type,
          transferKind: b3.transferKind,
          isRefund: b3.isRefund,
          deleted: b3.deleted,
          mergedInto: b3.mergedInto,
          pairedFrom: b3.pairedFrom,
          fromAccountId: b3.fromAccountId,
          toAccountId: b3.toAccountId,
          fee: b3.fee,
          updatedAt: Date.now(),
          dirty: true
        };
      });
    });
    const n3 = undo.length;
    setUndo(null);
    setResult(null);
    flash(`${n3}건을 정리 전으로 되돌렸어요`);
  };
  const run = () => {
    if (!plan) return;
    const { kinds, pairs, review, halves, refundPairs, classified, pairedCount } = plan;
    const refundIds = new Set(refundPairs.map((p3) => p3.refund.id));
    const touched = /* @__PURE__ */ new Set([
      ...Object.keys(kinds),
      ...refundIds,
      ...pairs.map((p3) => p3.inn.id),
      ...pairs.map((p3) => p3.out.id)
    ]);
    const before = entries.filter((e3) => touched.has(e3.id) || e3.transferKind && (e3.category === "family" || e3.category === "travel")).map((e3) => ({
      id: e3.id,
      type: e3.type,
      transferKind: e3.transferKind || null,
      isRefund: !!e3.isRefund,
      deleted: !!e3.deleted,
      mergedInto: e3.mergedInto || null,
      pairedFrom: e3.pairedFrom || null,
      fromAccountId: e3.fromAccountId || null,
      toAccountId: e3.toAccountId || null,
      fee: e3.fee || 0
    }));
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => {
        const c3 = kinds[e3.id];
        let next = e3;
        if ((e3.category === "family" || e3.category === "travel") && e3.transferKind) {
          next = { ...next, type: "expense", transferKind: null, updatedAt: Date.now(), dirty: true };
        }
        if (c3) {
          next = { ...next, transferKind: c3.transferKind, toAccountId: c3.toAccountId || next.toAccountId || null, status: "confirmed", updatedAt: Date.now(), dirty: true };
          if (c3.transferKind === "external") next = { ...next, type: "expense" };
          else if (next.type === "expense") next = { ...next, type: "transfer" };
        }
        if (refundIds.has(e3.id)) {
          next = {
            ...next,
            type: "expense",
            isRefund: true,
            transferKind: null,
            status: "confirmed",
            confidence: 1,
            updatedAt: Date.now(),
            dirty: true
          };
        }
        const p3 = pairs.find((x2) => x2.inn.id === e3.id);
        if (p3) next = { ...next, deleted: true, mergedInto: p3.out.id, updatedAt: Date.now(), dirty: true };
        const po = pairs.find((x2) => x2.out.id === e3.id);
        if (po) next = {
          ...next,
          type: "transfer",
          transferKind: next.transferKind || "internal",
          fromAccountId: po.out.accountId || null,
          toAccountId: po.inn.accountId || null,
          pairedFrom: [po.out.id, po.inn.id],
          fee: po.fee || 0,
          updatedAt: Date.now(),
          dirty: true
        };
        return next;
      });
    });
    setUndo(before);
    setPlan(null);
    setResult({ classified, pairedCount, review: review.length, halves: halves.length, refunds: refundPairs.length });
    flash(`정리했어요 · ${before.length}건 바뀜`);
  };
  return html`
    <div class="card">
      <div class="cardLabel">자동 정리</div>
      <div class="hint sm">
        계좌 간 이체를 한 건으로 합치고, 카드 대금과 저축을 지출에서 빼고,
        지인 송금은 지출로 되돌립니다. <b>바꾸기 전에 무엇이 바뀌는지 먼저 보여주고, 실행 뒤에도 되돌릴 수 있습니다.</b>
      </div>
      ${plan && html`
        <div class="tidyResult">
          <div>이체 성격 판정 <b>${plan.classified}건</b></div>
          <div>반쪽 이체 짝짓기 <b>${plan.pairedCount}쌍</b></div>
          ${plan.refundPairs.length > 0 && html`<div>나갔다 돌아온 돈 <b>${plan.refundPairs.length}건</b> 환불 처리</div>`}
          ${plan.review.length > 0 && html`<div>확인 필요 <b>${plan.review.length}건</b></div>`}
          ${plan.halves.length > 0 && html`
            <div class="gapWarn">짝 못 찾음 ${plan.halves.length}건 — 나머지 통장 내역을 먼저 넣는 게 좋습니다</div>`}
        </div>`}
      ${result ? html`<div class="tidyResult">
            <div>이체 성격 판정 <b>${result.classified}건</b></div>
            <div>반쪽 이체 짝짓기 <b>${result.pairedCount}쌍</b></div>
            ${result.refunds > 0 && html`<div>나갔다 돌아온 돈 <b>${result.refunds}건</b> 환불 처리</div>`}
            ${result.review > 0 && html`<div>확인 필요 <b>${result.review}건</b></div>`}
            ${result.halves > 0 && html`<div>짝 못 찾음 <b>${result.halves}건</b> — 나머지 통장 내역을 넣으면 맞춰집니다</div>`}
          </div>` : ""}
      <div class="acts">
        <button class="btn ghost sm" onClick=${onClose}>닫기</button>
        ${undo && undo.length > 0 && html`<button class="btn ghost sm" onClick=${revert}>정리 전으로 되돌리기</button>`}
        ${plan ? html`<button class="btn primary sm" onClick=${run}>이대로 정리</button>` : html`<button class="btn primary sm" onClick=${preview}>무엇이 바뀌는지 보기</button>`}
      </div>
    </div>`;
}
function ImportPanel({ db, entries, onImport, onClose, flash }) {
  const fileRef = A2(null);
  const [preview, setPreview] = d2(null);
  const [fileName, setFileName] = d2("");
  const [acctId, setAcctId] = d2(db.accounts[0]?.id || "");
  const [busy, setBusy] = d2(false);
  const [asCard, setAsCard] = d2(false);
  const loadXLSX = () => new Promise((resolve, reject) => {
    if (window.XLSX) return resolve(window.XLSX);
    const el = document.createElement("script");
    el.src = "./xlsx.js";
    el.onload = () => resolve(window.XLSX);
    el.onerror = () => reject(new Error("엑셀 읽기 모듈을 불러오지 못했어요"));
    document.head.appendChild(el);
  });
  const loadPdfJs = async () => {
    if (window.pdfjsLib) return window.pdfjsLib;
    let lib;
    try {
      const url = new URL("./pdf.min.mjs", document.baseURI).href;
      lib = await import(
        /* @vite-ignore */
        url
      );
    } catch (err) {
      throw new Error("PDF 읽기 모듈을 불러오지 못했어요. pdf.min.mjs 파일을 올렸는지 확인해주세요");
    }
    if (lib.GlobalWorkerOptions) lib.GlobalWorkerOptions.workerSrc = new URL("./pdf.worker.min.mjs", document.baseURI).href;
    window.pdfjsLib = lib;
    return lib;
  };
  const pick = (e3) => {
    const f3 = e3.target.files && e3.target.files[0];
    if (!f3) return;
    setFileName(f3.name || "가져오기");
    const isExcel = /\.(xlsx?|xlsm)$/i.test(f3.name);
    const isPdf = /\.pdf$/i.test(f3.name) || f3.type === "application/pdf";
    const r3 = new FileReader();
    r3.onload = async () => {
      try {
        let rows;
        if (isPdf) {
          setBusy(true);
          const pdfjs = await loadPdfJs();
          const doc = await pdfjs.getDocument({ data: new Uint8Array(r3.result) }).promise;
          const pages = [];
          for (let i3 = 1; i3 <= doc.numPages; i3++) {
            const c3 = await (await doc.getPage(i3)).getTextContent();
            pages.push(c3.items.map((it) => ({ str: it.str, x: it.transform[4], y: it.transform[5], w: it.width })));
          }
          rows = pdfItemsToRows(pages);
          setBusy(false);
          if (!rows.length) {
            flash("PDF에서 거래내역을 찾지 못했어요");
            return;
          }
        } else if (isExcel) {
          setBusy(true);
          const XLSX = await loadXLSX();
          const wb = XLSX.read(new Uint8Array(r3.result), { type: "array" });
          const HEAD_RE = /거래|날짜|일자|입금|출금|찾으신|맡기신|가맹점|기재내용|적요|잔액|금액|원화금액|종류/;
          let best = null, bestScore = -1;
          for (const nm of wb.SheetNames) {
            const sh = wb.Sheets[nm];
            if (!sh) continue;
            const rs = XLSX.utils.sheet_to_json(sh, { header: 1, raw: false, defval: "" });
            const head = rs.slice(0, 30).map((r4) => (r4 || []).join(" ")).join(" ");
            const sc = rs.length + (HEAD_RE.test(head) ? 1e4 : 0);
            if (sc > bestScore) {
              bestScore = sc;
              best = nm;
            }
          }
          const ws = wb.Sheets[best || wb.SheetNames[0]];
          rows = XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: "" });
          setBusy(false);
        } else {
          const text = decodeCSVBuffer(new Uint8Array(r3.result));
          rows = parseCSV(text);
        }
        const info = detectSource(rows);
        const matched = matchAccount(info, db.accounts || []);
        const autoCard = info.kind === "card";
        const useCard = info.kind ? autoCard : asCard;
        const useAcct = matched ? matched.id : useCard ? null : acctId;
        let conv, map = null;
        if (isTravelWalletTable(rows)) {
          conv = travelWalletToEntries(rows, { rules: db.categoryRules, settings: db.settings });
          if (!conv.entries.length) {
            flash("트래블월렛 내역을 읽지 못했어요");
            return;
          }
        } else {
          map = detectColumns(rows);
          if (!map) {
            flash("어느 칸이 날짜·금액인지 못 찾았어요");
            return;
          }
          conv = csvToEntries(rows, map, {
            accountId: useAcct,
            paymentMethod: useCard ? "card" : "account",
            rules: db.categoryRules,
            settings: db.settings
          });
        }
        const alive = (entries || []).filter((x2) => !x2.deleted);
        const seen = new Set(alive.map((x2) => x2.sourceHash).filter(Boolean));
        const fresh = conv.entries.filter((x2) => !seen.has(x2.sourceHash));
        const rec = reconcile(fresh, alive);
        let gapMsg = "";
        if (!useCard) {
          const all = [...alive, ...fresh].filter((x2) => x2.accountId === useAcct);
          const rb = reconcileBalance(all, useAcct);
          gapMsg = describeGaps(rb.gaps);
        }
        setPreview({
          map,
          rows: rows.length,
          total: conv.entries.length,
          dupFile: conv.entries.length - fresh.length,
          info,
          matched,
          useCard,
          gapMsg,
          ...rec
        });
      } catch (err) {
        setBusy(false);
        flash(`파일을 읽지 못했어요: ${err.message}`);
      }
    };
    r3.readAsArrayBuffer(f3);
  };
  return html`
    <div class="card">
      <div class="cardLabel">명세서 파일 가져오기 (CSV)</div>
      <div class="hint sm">은행·카드사에서 받은 파일을 그대로 넣으세요. 엑셀(.xls, .xlsx), CSV, PDF 모두 됩니다.</div>

      <div class="row wrap">
        <button class=${"tag" + (!asCard ? " on" : "")} onClick=${() => setAsCard(false)}>통장</button>
        <button class=${"tag" + (asCard ? " on" : "")} onClick=${() => setAsCard(true)}>카드</button>
        ${!asCard && db.accounts.filter((a3) => a3.kind === "bank").map((a3) => html`
          <button key=${a3.id} class=${"tag" + (acctId === a3.id ? " on" : "")} onClick=${() => setAcctId(a3.id)}>${a3.name}</button>`)}
      </div>

      ${busy && html`<div class="hint sm">파일을 읽는 중이에요… (큰 파일은 조금 걸려요)</div>`}
      ${preview && html`
        <div class="tidyResult">
          ${preview.info && preview.info.kind && html`
            <div class="srcLine">
              ${preview.useCard ? "카드 명세서" : "통장 거래내역"}으로 읽었어요
              ${preview.info.accountNo ? ` · ${preview.info.accountNo}` : ""}
              ${preview.matched ? ` · ${preview.matched.name}` : ""}
            </div>`}
          <div>파일에서 읽은 것 <b>${preview.total}건</b></div>
          ${preview.dupFile > 0 && html`<div>전에 넣은 것 <b>${preview.dupFile}건</b> 제외</div>`}
          <div>새로 넣을 것 <b>${preview.added.length}건</b></div>
          ${preview.merged.length > 0 && html`<div>이미 있는 것 <b>${preview.merged.length}건</b> 제외</div>`}
          ${preview.review.length > 0 && html`<div>확인 필요 <b>${preview.review.length}건</b></div>`}
          ${preview.gapMsg && html`<div class="gapWarn">${preview.gapMsg}</div>`}
        </div>`}

      <input ref=${fileRef} type="file" accept=".csv,.xls,.xlsx,.xlsm,.pdf,text/csv,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style="display:none" onChange=${pick} />
      <div class="acts">
        <button class="btn ghost sm" onClick=${onClose}>닫기</button>
        <button class="btn ghost sm" onClick=${() => fileRef.current && fileRef.current.click()}>파일 고르기</button>
        ${preview && html`<button class="btn primary sm" onClick=${() => {
    onImport(preview.added, fileName);
    setPreview(null);
  }}>${preview.added.length}건 넣기</button>`}
      </div>
    </div>`;
}
function TripPicker({ trip, picked, toggle }) {
  const line = (e3, tag) => html`
    <label class=${"pickRow" + (picked[e3.id] ? " on" : "")} key=${e3.id}>
      <input type="checkbox" checked=${!!picked[e3.id]} onChange=${() => toggle(e3.id)} />
      <span class="pickDate">${e3.date.slice(5)}</span>
      <span class="pickMemo">${e3.memo}${tag ? html`<span class="pickTag"> ${tag}</span>` : ""}${e3.welfare ? html`<span class="pickTag welfare"> 복지카드</span>` : ""}</span>
      <span class="pickAmt">₩${formatWon(e3.amount)}</span>
    </label>`;
  return html`
    <div class="pickList">
      ${trip.booked.length > 0 && html`
        <div class="pickHead">미리 결제한 것 (항공·숙박·교통카드·체험)</div>
        ${trip.booked.map((e3) => line(e3, e3.sure ? "" : "여행인지 확인"))}`}
      <div class="pickHead">여행 기간 중 결제 ${trip.startDate.slice(5)} ~ ${trip.endDate.slice(5)}</div>
      ${trip.inside.map((e3) => line(e3, e3.currency && e3.currency !== "KRW" ? e3.currency : ""))}
    </div>`;
}
var localDay = (x2) => `${x2.getFullYear()}-${String(x2.getMonth() + 1).padStart(2, "0")}-${String(x2.getDate()).padStart(2, "0")}`;
var overlaps = (a3, b3, pad3 = 0) => {
  const sh = (iso, d3) => {
    const x2 = /* @__PURE__ */ new Date(iso + "T00:00:00");
    x2.setDate(x2.getDate() + d3);
    return localDay(x2);
  };
  return a3.startDate <= sh(b3.endDate, pad3) && b3.startDate <= sh(a3.endDate, pad3);
};
function TripFinder({ db, entries, patch, flash, onClose }) {
  const [open, setOpen] = d2({});
  const [picks, setPicks] = d2({});
  const [cal, setCal] = d2({ status: "idle", events: [], msg: "" });
  const sheetUrl = db.settings && db.settings.sheetUrl;
  h2(() => {
    if (!sheetUrl) return;
    let alive = true;
    setCal({ status: "loading", events: [], msg: "" });
    const shift2 = (days) => {
      const d3 = /* @__PURE__ */ new Date();
      d3.setDate(d3.getDate() + days);
      return localDay(d3);
    };
    fetchTripEvents(sheetUrl, db.settings.sheetToken, shift2(-400), shift2(400)).then((events) => {
      if (alive) setCal({ status: "done", events, msg: "" });
    }).catch((err) => {
      if (alive) setCal({ status: "error", events: [], msg: String(err && err.message || err) });
    });
    return () => {
      alive = false;
    };
  }, [sheetUrl]);
  const found = T2(() => {
    const d3 = detectTrips(entries);
    const knownTrips = db.trips.filter((t4) => t4.startDate && t4.endDate);
    const known = knownTrips.map((t4) => t4.startDate);
    const enrich = (t4) => buildTripCost(entries, t4, { allTrips: [...d3.trips, ...knownTrips], settings: db.settings });
    const today = todayISO();
    const calendar = calendarToTrips(cal.events, knownTrips);
    const enrichCal = (t4) => buildTripCost(entries, t4, { allTrips: knownTrips, settings: db.settings, preDays: t4.startDate > today ? 365 : 120 });
    const notCal = (t4) => !calendar.some((k3) => overlaps(k3, t4, 0));
    const topups = detectTopupTrips(entries, { settings: db.settings }).filter((t4) => !knownTrips.some((k3) => overlaps(k3, t4, 7)) && !d3.trips.some((k3) => overlaps(k3, t4, 7)));
    return {
      calendar: calendar.map(enrichCal),
      trips: d3.trips.filter((t4) => !known.includes(t4.startDate) && notCal(t4)).map(enrich),
      singles: d3.singles.filter((t4) => !known.includes(t4.startDate) && notCal(t4)).map(enrich),
      topups: topups.filter(notCal).map(enrich)
    };
  }, [entries, db.trips, db.settings, cal.events]);
  const initPicks = (t4) => {
    const p3 = {};
    for (const e3 of t4.inside) p3[e3.id] = true;
    for (const e3 of t4.booked) p3[e3.id] = !!e3.sure;
    return p3;
  };
  const pickOf = (t4) => picks[t4.startDate] || initPicks(t4);
  const toggle = (t4, id) => setPicks((prev) => {
    const cur = prev[t4.startDate] || initPicks(t4);
    return { ...prev, [t4.startDate]: { ...cur, [id]: !cur[id] } };
  });
  const totalOf = (t4) => {
    const p3 = pickOf(t4);
    return [...t4.inside, ...t4.booked].filter((e3) => p3[e3.id] && !e3.welfare).reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
  };
  const countOf = (t4) => [...t4.inside, ...t4.booked].filter((e3) => pickOf(t4)[e3.id]).length;
  const adopt = (t4) => {
    const p3 = pickOf(t4);
    const ids = new Set([...t4.inside, ...t4.booked].filter((e3) => p3[e3.id]).map((e3) => e3.id));
    if (!ids.size && !t4.fromCalendar) {
      flash("고른 항목이 없어요");
      return;
    }
    const id = uid();
    patch((n3) => {
      n3.trips = [...n3.trips, { id, name: t4.name, startDate: t4.startDate, endDate: t4.endDate, createdAt: Date.now() }];
      n3.entries = n3.entries.map((e3) => ids.has(e3.id) ? { ...e3, tripId: id, updatedAt: Date.now(), dirty: true } : e3);
    });
    flash(t4.approx ? `${t4.name} · ${ids.size}건을 묶었어요. 여행 탭에서 기간을 실제 일정으로 고치세요` : !ids.size ? `${t4.name} 여행을 만들었어요. 기간 안의 해외 결제는 들어오는 대로 묶입니다` : `${t4.name} · ${ids.size}건을 묶었어요`);
  };
  const card = (t4, dim) => html`
    <div class=${"foundTrip" + (dim ? " dim" : "")} key=${t4.startDate}>
      <div class="foundTop">
        <span class="foundName">${t4.name}</span>
        <span class="foundTotal">₩${formatWon(totalOf(t4))}</span>
      </div>
      <div class="foundSub">
        ${t4.startDate.slice(5)} ~ ${t4.endDate.slice(5)} · ${t4.days}일 · ${countOf(t4)}건
        ${t4.currencies.length ? ` · ${t4.currencies.join(", ")}` : ""}
      </div>
      <div class="foundBreak">
        ${t4.fromCalendar ? `캘린더 일정 · 기간 안 ${t4.inside.length}건` : t4.approx ? `여행 자금 충전 ${t4.count}건으로 추정한 기간` : `현지 ${t4.inside.length}건`}
        ${t4.booked.length > 0 ? ` · 사전결제 후보 ${t4.booked.length}건` : ""}
        ${t4.welfare ? ` · 복지카드 ₩${formatWon(t4.welfare)} 별도` : ""}
      </div>
      <button class="pickToggle" onClick=${() => setOpen((o3) => ({ ...o3, [t4.startDate]: !o3[t4.startDate] }))}>
        ${open[t4.startDate] ? "항목 접기" : "항목 확인하고 고치기"}
      </button>
      ${open[t4.startDate] && html`<${TripPicker} trip=${t4} picked=${pickOf(t4)} toggle=${(id) => toggle(t4, id)} />`}
      <div class="acts"><button class="btn primary sm" onClick=${() => adopt(t4)}>${t4.fromCalendar && !countOf(t4) ? "여행 만들기" : `${countOf(t4)}건으로 묶기`}</button></div>
    </div>`;
  const nothing = !found.calendar.length && !found.trips.length && !found.singles.length && !found.topups.length;
  return html`
    <div class="card">
      <div class="cardLabel">여행 자동 찾기</div>
      <div class="hint sm">
        현지 결제가 이어진 구간을 일정으로 봅니다. 미리 결제한 항공권·숙박·체험도 앞쪽에서 찾아 함께 올립니다.
        <b>항목 확인하고 고치기</b>를 눌러 빼거나 넣을 수 있습니다.
      </div>
      ${nothing && html`
        <div class="empty">새로 찾은 여행이 없어요.<br />해외 결제 표시가 있는 명세서(카드 해외이용)가 들어오면 여기 나타납니다.<br />
          아직 안 떠난 여행은 구글 캘린더에 "여행"이 들어간 일정으로 넣어두거나, 여행 탭의 <b>+ 여행 추가</b>로 만드세요.</div>`}
      ${cal.status === "loading" && html`<div class="hint sm">구글 캘린더에서 여행 일정을 찾는 중…</div>`}
      ${cal.status === "error" && html`<div class="hint sm">캘린더를 못 읽었어요 · ${cal.msg}</div>`}
      ${found.calendar.length > 0 && html`
        <div class="foundDivider">구글 캘린더 일정</div>
        ${found.calendar.map((t4) => card(t4, false))}`}
      ${found.trips.length > 0 && found.calendar.length > 0 && html`<div class="foundDivider">결제 기록으로 찾은 여행</div>`}
      ${found.trips.map((t4) => card(t4, false))}
      ${found.topups.length > 0 && html`
        <div class="foundDivider">충전 기록으로 추정한 여행 (기간은 만든 뒤 고치세요)</div>
        ${found.topups.map((t4) => card(t4, true))}`}
      ${found.singles.length > 0 && html`
        <div class="foundDivider">이것도 여행인가요? (하루짜리 결제)</div>
        ${found.singles.map((t4) => card(t4, true))}`}
      <div class="acts"><button class="btn ghost sm" onClick=${onClose}>닫기</button></div>
    </div>`;
}
var RANGES = [
  { key: "trip", label: "여행 기간만", pre: 0, post: 0 },
  { key: "m4", label: "앞뒤 4개월", pre: 120, post: 120 },
  { key: "y1", label: "앞뒤 1년", pre: 365, post: 365 },
  { key: "y2", label: "앞뒤 2년", pre: 730, post: 730 }
];
function TripAdjust({ db, entries, trip, patch, flash, onClose }) {
  const future = !!(trip && trip.startDate && trip.startDate > todayISO());
  const [range, setRange] = d2(future ? "y1" : "m4");
  const [wide, setWide] = d2(false);
  const rg = RANGES.find((r3) => r3.key === range) || RANGES[1];
  const noDates = !trip || !trip.startDate || !trip.endDate;
  const cost = T2(
    () => buildTripCost(entries, trip, { allTrips: db.trips, preDays: rg.pre, postDays: rg.post, wide, settings: db.settings }),
    [entries, trip, db.trips, rg, wide, db.settings]
  );
  const current = T2(() => entries.filter((e3) => trip && e3.tripId === trip.id), [entries, trip]);
  const reimbIds = T2(() => new Set(cost.reimb.map((e3) => e3.id)), [cost]);
  const all = T2(() => {
    const map = /* @__PURE__ */ new Map();
    for (const e3 of [...current, ...cost.inside, ...cost.booked, ...cost.reimb]) map.set(e3.id, e3);
    return Array.from(map.values()).sort((a3, b3) => a3.date < b3.date ? -1 : 1);
  }, [current, cost]);
  const isReimb = (e3) => !!e3.reimbFrom || reimbIds.has(e3.id);
  const isWelfare = (e3) => e3.transferKind === "welfare";
  const spend = all.filter((e3) => !isReimb(e3));
  const reimb = all.filter(isReimb);
  const [picks, setPicks] = d2(() => {
    const p3 = {};
    for (const e3 of all) p3[e3.id] = !!trip && e3.tripId === trip.id;
    return p3;
  });
  const [solo, setSolo] = d2(() => new Set(trip && trip.soloIds || []));
  const toggleSolo = (id) => setSolo((prev) => {
    const n4 = new Set(prev);
    if (n4.has(id)) n4.delete(id);
    else n4.add(id);
    return n4;
  });
  const check = (v3) => setPicks((prev) => {
    const p3 = { ...prev };
    for (const e3 of spend) p3[e3.id] = v3 === "all" ? true : v3 === "none" ? false : e3.date >= trip.startDate && e3.date <= trip.endDate;
    return p3;
  });
  const picked = all.filter((e3) => picks[e3.id]);
  const total = picked.filter((e3) => !isWelfare(e3)).reduce((s3, e3) => s3 + (isReimb(e3) || e3.isRefund ? -e3.amount : e3.amount), 0);
  const welfareSum = picked.filter(isWelfare).reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
  const n3 = picked.length;
  const save = () => {
    const now = Date.now();
    patch((db2) => {
      db2.entries = db2.entries.map((e3) => {
        if (!(e3.id in picks)) return e3;
        const on = !!picks[e3.id];
        if (on) {
          if (reimbIds.has(e3.id) && !e3.reimbFrom) {
            return {
              ...e3,
              tripId: trip.id,
              type: "expense",
              isRefund: true,
              category: "travel",
              transferKind: null,
              status: "confirmed",
              needsCheck: false,
              reimbFrom: { type: e3.type, transferKind: e3.transferKind ?? null, category: e3.category, status: e3.status, isRefund: !!e3.isRefund },
              updatedAt: now,
              dirty: true
            };
          }
          return e3.tripId === trip.id ? e3 : { ...e3, tripId: trip.id, updatedAt: now, dirty: true };
        }
        if (e3.tripId !== trip.id) return e3;
        if (e3.reimbFrom) {
          const { reimbFrom, ...rest } = e3;
          return { ...rest, ...reimbFrom, tripId: null, updatedAt: now, dirty: true };
        }
        return { ...e3, tripId: null, updatedAt: now, dirty: true };
      });
    });
    patch((db2) => {
      db2.trips = db2.trips.map((t4) => t4.id === trip.id ? { ...t4, soloIds: Array.from(solo).filter((id) => picks[id]) } : t4);
    });
    const sn = Array.from(solo).filter((id) => picks[id]).length;
    flash(`${n3}건으로 정리했어요${sn ? ` · 개인 비용 ${sn}건` : ""}`);
    onClose();
  };
  const row = (e3) => html`
    <label class=${"pickRow" + (picks[e3.id] ? " on" : "")} key=${e3.id}>
      <input type="checkbox" checked=${!!picks[e3.id]} onChange=${() => setPicks((p3) => ({ ...p3, [e3.id]: !p3[e3.id] }))} />
      ${e3.date.slice(0, 4) === trip.startDate.slice(0, 4) ? html`<span class="pickDate">${e3.date.slice(5)}</span>` : html`<span class="pickDate long">${e3.date.slice(2).replace(/-/g, ".")}</span>`}
      <span class="pickMemo">${e3.memo}
        ${!isReimb(e3) && e3.date < trip.startDate ? html`<span class="pickTag"> 사전결제</span>` : ""}
        ${!isReimb(e3) && e3.date > trip.endDate ? html`<span class="pickTag"> 여행 후</span>` : ""}
        ${isWelfare(e3) ? html`<span class="pickTag welfare"> 복지카드 · 합계 별도</span>` : ""}
        ${e3.currency && e3.currency !== "KRW" ? html`<span class="pickTag"> ${e3.currency}</span>` : ""}
      </span>
      <span class=${"pickAmt" + (isReimb(e3) ? " reimb" : "")}>${isReimb(e3) ? "−" : ""}₩${formatWon(e3.amount)}</span>
      ${!isReimb(e3) && html`
        <button class=${"soloTag" + (solo.has(e3.id) ? " on" : "")}
          onClick=${(ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    toggleSolo(e3.id);
  }}
          title="정산에서 빼고 나 혼자 쓴 것으로 봅니다">개인</button>`}
    </label>`;
  if (noDates) {
    return html`
      <div class="card">
        <div class="cardLabel">${trip ? trip.name : "여행"} · 항목 조정</div>
        <div class="empty">이 여행은 기간이 없어서 찾을 수 없어요.<br />아래 여행 정보에서 <b>기간</b>을 넣어주세요.</div>
        <div class="acts"><button class="btn ghost sm" onClick=${onClose}>닫기</button></div>
      </div>`;
  }
  return html`
    <div class="card">
      <div class="cardLabel">${trip.name} · 항목 조정</div>
      <div class="hint sm">여행 기간 안팎의 결제를 모아 보여줍니다. 왼쪽 체크로 여행에 넣고 빼세요. 오른쪽 <b>개인</b>은 나 혼자 쓴 돈이라 정산에서 빠집니다.${future ? " 아직 안 떠난 여행이라 1년 앞까지 찾습니다." : ""}</div>
      <div class="row wrap" style="margin-top:8px">
        ${RANGES.map((r3) => html`
          <button key=${r3.key} class=${"tag" + (range === r3.key ? " on" : "")} onClick=${() => setRange(r3.key)}>${r3.label}</button>`)}
      </div>
      <div class="row wrap" style="margin-top:6px">
        <button class=${"tag" + (wide ? " on" : "")} onClick=${() => setWide(!wide)}>
          ${wide ? "모든 지출 보기" : "여행 관련만 보기"}
        </button>
        <span class="hint sm">항공·숙박 말고 다른 항목도 찾으려면 켜세요</span>
      </div>
      <div class="foundTop">
        <span class="foundName">${n3}건</span>
        <span class="foundTotal">₩${formatWon(total)}</span>
      </div>
      ${welfareSum !== 0 && html`<div class="foundSub">복지카드 ₩${formatWon(welfareSum)}는 따로 셉니다 (위 금액에 안 들어감)</div>`}
      <div class="row wrap" style="margin:8px 0">
        <button class="tag" onClick=${() => check("all")}>전부 선택</button>
        <button class="tag" onClick=${() => check("inside")}>기간 안만</button>
        <button class="tag" onClick=${() => check("none")}>전부 해제</button>
      </div>
      <div class="pickList">
        ${spend.length === 0 && html`<div class="empty">조정할 항목이 없어요.<br />기간을 넓히거나 '여행 관련만 보기'를 눌러 모든 지출을 보세요.</div>`}
        ${spend.map(row)}
        ${reimb.length > 0 && html`
          <div class="pickHead">받은 돈 — 같이 가는 사람이 보내준 정산금이면 체크 (여행 경비에서 빠져요)</div>
          ${reimb.map(row)}`}
      </div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${onClose}>취소</button>
        <button class="btn primary sm" onClick=${save}>저장</button>
      </div>
    </div>`;
}
function QuotePanel({ db, carId, patch, flash, onClose, onAddEntry }) {
  const [text, setText] = d2("");
  const [parsed, setParsed] = d2(null);
  const [picks, setPicks] = d2({});
  const [asExpense, setAsExpense] = d2(true);
  const maint = db.maintenance.filter((m3) => m3.carId === carId);
  const run = (t4) => {
    const r3 = parseMaintenanceQuote(t4);
    if (!r3.items.length) {
      flash("정비 항목을 찾지 못했어요");
      return;
    }
    setParsed(r3);
    const p3 = {};
    for (const it of r3.items) p3[it.label] = true;
    setPicks(p3);
  };
  const apply = () => {
    const chosen = parsed.items.filter((it) => picks[it.label]);
    if (!chosen.length) {
      flash("고른 항목이 없어요");
      return;
    }
    patch((n3) => {
      n3.maintenance = n3.maintenance.map((m3) => {
        if (m3.carId !== carId) return m3;
        const hit = chosen.find((c3) => c3.label === m3.label);
        if (!hit) return m3;
        return { ...m3, lastDate: parsed.date, lastMileage: parsed.mileage ?? m3.lastMileage };
      });
      for (const c3 of chosen) {
        if (n3.maintenance.some((m3) => m3.carId === carId && m3.label === c3.label)) continue;
        n3.maintenance = [...n3.maintenance, {
          id: uid(),
          carId,
          label: c3.label,
          intervalKm: null,
          intervalMonths: null,
          lastDate: parsed.date,
          lastMileage: parsed.mileage ?? null
        }];
      }
      if (parsed.mileage) {
        n3.mileageLogs = [{ id: uid(), carId, date: parsed.date, mileage: parsed.mileage }, ...n3.mileageLogs];
      }
    });
    if (asExpense && parsed.total > 0) {
      onAddEntry({
        date: parsed.date,
        type: "expense",
        category: "transport",
        amount: parsed.total,
        memo: `정비 · ${chosen.map((c3) => c3.label).join(", ")}`.slice(0, 40),
        normKey: normKey("정비"),
        carId,
        paymentMethod: "card",
        source: "receipt",
        confidence: 1
      });
    }
    flash(`정비 ${chosen.length}건을 기록했어요`);
    setText("");
    setParsed(null);
    onClose();
  };
  return html`
    <div class="card">
      <div class="cardLabel">정비 견적서 넣기</div>
      <div class="hint sm">
        견적서나 영수증 사진을 아이폰에서 열어 글자를 길게 눌러 복사한 뒤 붙여넣으세요.
        항목·날짜·주행거리를 찾아 교환 이력에 반영합니다.
      </div>
      <textarea class="pasteArea" style="min-height:80px" value=${text}
        placeholder=${"○○카센터\n2026.03.15  주행거리 87,450km\n엔진오일 교환 45,000\n오일필터 8,000\n합계 53,000"}
        onInput=${(e3) => setText(e3.target.value)}
        onPaste=${(e3) => {
    const t4 = e3.clipboardData ? e3.clipboardData.getData("text") : "";
    if (t4) {
      setText(t4);
      setTimeout(() => run(t4), 0);
    }
  }} />

      ${parsed && html`
        <div class="quoteHead">
          ${parsed.date}
          ${parsed.mileage ? ` · ${parsed.mileage.toLocaleString()}km` : " · 주행거리 못 찾음"}
          ${parsed.total ? ` · 합계 ₩${formatWon(parsed.total)}` : ""}
        </div>
        <div class="pickList">
          ${parsed.items.map((it) => {
    const known = maint.some((m3) => m3.label === it.label);
    return html`
              <label class=${"pickRow" + (picks[it.label] ? " on" : "")} key=${it.label}>
                <input type="checkbox" checked=${!!picks[it.label]}
                  onChange=${() => setPicks((p3) => ({ ...p3, [it.label]: !p3[it.label] }))} />
                <span class="pickMemo">${it.label}${known ? "" : html`<span class="pickTag"> 새 항목</span>`}</span>
                <span class="pickAmt">${it.amount ? `₩${formatWon(it.amount)}` : ""}</span>
              </label>`;
  })}
        </div>
        <div class="row wrap" style="margin-top:8px">
          <button class=${"tag" + (asExpense ? " on" : "")} onClick=${() => setAsExpense(!asExpense)}>
            ${asExpense ? "지출로도 기록" : "이력만 남기기"}
          </button>
          ${asExpense && parsed.total > 0 && html`<span class="hint sm">₩${formatWon(parsed.total)}이 이 차량 지출로 들어갑니다</span>`}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${onClose}>닫기</button>
        ${!parsed && html`<button class="btn primary sm" disabled=${!text.trim()} onClick=${() => run(text)}>읽기</button>`}
        ${parsed && html`<button class="btn primary sm" onClick=${apply}>이력에 반영</button>`}
      </div>
    </div>`;
}

// src/stats.js
var html2 = htm_module_default.bind(k);
var AXIS = [
  { key: "variable", label: "변동비", color: "#8A6D3B" },
  { key: "fixed", label: "고정비", color: "#6B5A7A" },
  { key: "family", label: "가족 송금", color: "#5A7A8A" },
  { key: "familyExtra", label: "별도 송금", color: "#8A5A3B" },
  { key: "travel", label: "여행", color: "#3E7A6B" },
  { key: "cash", label: "현금", color: "#8A8A8A" }
];
var nf = (n3) => {
  const v3 = Math.abs(n3);
  if (v3 >= 1e8) return `${(n3 / 1e8).toFixed(1)}억`;
  if (v3 >= 1e4) return `${Math.round(n3 / 1e4).toLocaleString()}만`;
  return formatWon(n3);
};
function axisOf(e3) {
  if (e3.category === "family") return e3.isExtra ? "familyExtra" : "family";
  if (e3.category === "travel") return "travel";
  if (e3.fixedId) return "fixed";
  if (e3.paymentMethod === "cash") return "cash";
  return "variable";
}
function spends(e3) {
  if (e3.deleted || e3.type !== "expense") return false;
  if (e3.transferKind && e3.transferKind !== "external") return false;
  return true;
}
var amountOf = (e3) => e3.isRefund ? -e3.amount : e3.amount;
function ByAxis({ entries, range }) {
  const data = T2(() => {
    const sums = {};
    for (const e3 of entries) {
      if (!spends(e3)) continue;
      const k3 = axisOf(e3);
      sums[k3] = (sums[k3] || 0) + amountOf(e3);
    }
    const rows = AXIS.map((a3) => ({ ...a3, value: sums[a3.key] || 0 })).filter((r3) => r3.value > 0);
    const total = rows.reduce((s3, r3) => s3 + r3.value, 0);
    return { rows: rows.sort((a3, b3) => b3.value - a3.value), total };
  }, [entries]);
  if (!data.total) return html2`<div class="empty">이 기간 지출이 없어요.</div>`;
  let acc = 0;
  const segs = data.rows.map((r3) => {
    const from = acc;
    acc += r3.value / data.total;
    return { ...r3, from, to: acc };
  });
  return html2`
    <div class="chartWrap">
      <div class="donutRow">
        <svg viewBox="0 0 42 42" class="donut" role="img" aria-label="항목별 지출 비중">
          ${segs.map((s3) => {
    const len = (s3.to - s3.from) * 100;
    return html2`<circle key=${s3.key} cx="21" cy="21" r="15.9" fill="none"
              stroke=${s3.color} stroke-width="7"
              stroke-dasharray=${`${len} ${100 - len}`}
              stroke-dashoffset=${`${25 - s3.from * 100}`} />`;
  })}
          <text x="21" y="20" class="donutTop">지출</text>
          <text x="21" y="25.5" class="donutNum">${nf(data.total)}</text>
        </svg>
        <div class="legend">
          ${segs.map((s3) => html2`
            <div class="legendRow" key=${s3.key}>
              <span class="legendDot" style=${`background:${s3.color}`}></span>
              <span class="legendName">${s3.label}</span>
              <span class="legendPct">${Math.round(s3.value / data.total * 100)}%</span>
              <span class="legendVal">₩${formatWon(s3.value)}</span>
            </div>`)}
        </div>
      </div>
    </div>`;
}
function ByMonth({ all, months = 6 }) {
  const data = T2(() => {
    const now = todayISO().slice(0, 7);
    const keys = [];
    const [y3, m3] = now.split("-").map(Number);
    for (let i3 = months - 1; i3 >= 0; i3--) {
      const d3 = new Date(y3, m3 - 1 - i3, 1);
      keys.push(`${d3.getFullYear()}-${String(d3.getMonth() + 1).padStart(2, "0")}`);
    }
    const map = Object.fromEntries(keys.map((k3) => [k3, { income: 0, expense: 0 }]));
    for (const e3 of all) {
      const k3 = e3.date.slice(0, 7);
      if (!map[k3]) continue;
      if (e3.type === "income" && !e3.deleted) map[k3].income += e3.amount;
      else if (spends(e3)) map[k3].expense += amountOf(e3);
    }
    const rows = keys.map((k3) => ({ key: k3, label: k3.slice(5) + "월", ...map[k3] }));
    const peak = Math.max(1, ...rows.map((r3) => Math.max(r3.income, r3.expense)));
    return { rows, peak };
  }, [all, months]);
  const H2 = 96;
  return html2`
    <div class="chartWrap">
      <div class="barChart">
        ${data.rows.map((r3) => {
    const ih = Math.round(r3.income / data.peak * H2);
    const eh = Math.round(r3.expense / data.peak * H2);
    const left = r3.income - r3.expense;
    return html2`
            <div class="barCol" key=${r3.key}>
              <div class="barPair" style=${`height:${H2}px`}>
                <div class="bar income" style=${`height:${ih}px`} title=${`수입 ${formatWon(r3.income)}`}></div>
                <div class="bar expense" style=${`height:${eh}px`} title=${`지출 ${formatWon(r3.expense)}`}></div>
              </div>
              <div class="barLabel">${r3.label}</div>
              <div class=${"barDiff" + (left < 0 ? " minus" : "")}>
                ${r3.income || r3.expense ? `${left < 0 ? "−" : "+"}${nf(Math.abs(left))}` : ""}
              </div>
            </div>`;
  })}
      </div>
      <div class="legendInline">
        <span><span class="legendDot" style="background:#3D6B4F"></span>수입</span>
        <span><span class="legendDot" style="background:#B23A24"></span>지출</span>
      </div>
    </div>`;
}
function ByCategory({ entries }) {
  const data = T2(() => {
    const sums = {};
    for (const e3 of entries) {
      if (!spends(e3)) continue;
      sums[e3.category] = (sums[e3.category] || 0) + amountOf(e3);
    }
    const rows = Object.entries(sums).map(([k3, v3]) => ({ key: k3, label: CAT_MAP[k3]?.label || k3, color: CAT_MAP[k3]?.color || "#999", value: v3 })).filter((r3) => r3.value > 0).sort((a3, b3) => b3.value - a3.value);
    const peak = rows.length ? rows[0].value : 1;
    const total = rows.reduce((s3, r3) => s3 + r3.value, 0);
    return { rows, peak, total };
  }, [entries]);
  if (!data.rows.length) return html2`<div class="empty">이 기간 지출이 없어요.</div>`;
  return html2`
    <div class="chartWrap">
      ${data.rows.map((r3) => html2`
        <div class="catBarRow" key=${r3.key}>
          <span class="catBarName">${r3.label}</span>
          <div class="catBarTrack">
            <div class="catBarFill" style=${`width:${Math.max(2, r3.value / data.peak * 100)}%;background:${r3.color}`}></div>
          </div>
          <span class="catBarVal">₩${formatWon(r3.value)}</span>
        </div>`)}
      <div class="catBarFoot">합계 ₩${formatWon(data.total)}</div>
    </div>`;
}
function StatsView({ entries, all }) {
  const [mode2, setMode] = d2("axis");
  return html2`
    <div class="stats">
      <div class="statTabs">
        <button class=${"statTab" + (mode2 === "axis" ? " on" : "")} onClick=${() => setMode("axis")}>항목별</button>
        <button class=${"statTab" + (mode2 === "month" ? " on" : "")} onClick=${() => setMode("month")}>월별 추이</button>
        <button class=${"statTab" + (mode2 === "cat" ? " on" : "")} onClick=${() => setMode("cat")}>카테고리</button>
      </div>
      ${mode2 === "axis" && html2`<${ByAxis} entries=${entries} />`}
      ${mode2 === "month" && html2`<${ByMonth} all=${all} />`}
      ${mode2 === "cat" && html2`<${ByCategory} entries=${entries} />`}
    </div>`;
}

// src/report.js
var html3 = htm_module_default.bind(k);
var AXES = [
  { key: "variable", label: "변동비", color: "#8A6D3B" },
  { key: "fixed", label: "고정비", color: "#6B5A7A" },
  { key: "family", label: "가족 송금", color: "#5A7A8A" },
  { key: "familyExtra", label: "별도 송금", color: "#8A5A3B" },
  { key: "travel", label: "여행", color: "#3E7A6B" },
  { key: "cash", label: "현금", color: "#8A8A8A" }
];
var spends2 = (e3) => !e3.deleted && e3.type === "expense" && (!e3.transferKind || e3.transferKind === "external");
var amt = (e3) => e3.isRefund ? -e3.amount : e3.amount;
function axisOf2(e3) {
  if (e3.category === "family") return e3.isExtra ? "familyExtra" : "family";
  if (e3.category === "travel") return "travel";
  if (e3.fixedId) return "fixed";
  if (e3.paymentMethod === "cash") return "cash";
  return "variable";
}
function tally(entries, from, to) {
  const inRange = entries.filter((e3) => e3.date >= from && e3.date <= to);
  const axes = {}, cats = {}, merchants = {};
  let income = 0, expense = 0, welfare = 0;
  for (const e3 of inRange) {
    if (e3.type === "income" && !e3.deleted) {
      income += e3.amount;
      continue;
    }
    if (e3.deleted) continue;
    if (e3.transferKind === "welfare") {
      welfare += amt(e3);
      continue;
    }
    if (!spends2(e3)) continue;
    const v3 = amt(e3);
    expense += v3;
    const a3 = axisOf2(e3);
    axes[a3] = (axes[a3] || 0) + v3;
    cats[e3.category] = (cats[e3.category] || 0) + v3;
    const k3 = e3.normKey || e3.memo || "";
    if (k3) {
      if (!merchants[k3]) merchants[k3] = { name: e3.memo, total: 0, count: 0 };
      merchants[k3].total += v3;
      merchants[k3].count += 1;
    }
  }
  return { from, to, income, expense, welfare, axes, cats, merchants, count: inRange.length };
}
var pct = (now, before) => {
  if (!before) return now ? null : 0;
  return Math.round((now - before) / before * 100);
};
var Delta = ({ now, before, invert }) => {
  if (before === void 0 || before === null) return null;
  const d3 = now - before;
  if (!d3) return html3`<span class="dl same">변화 없음</span>`;
  const up = d3 > 0;
  const bad = invert ? !up : up;
  const p3 = pct(now, before);
  return html3`
    <span class=${"dl " + (bad ? "bad" : "good")}>
      ${up ? "▲" : "▼"} ${formatWon(Math.abs(d3))}${p3 !== null ? ` (${Math.abs(p3)}%)` : ""}
    </span>`;
};
var lastDay = (y3, m3) => new Date(y3, m3, 0).getDate();
var pad2 = (n3) => String(n3).padStart(2, "0");
function periods(mode2, cursor) {
  const [y3, m3] = cursor.split("-").map(Number);
  if (mode2 === "month") {
    const cur2 = { from: `${cursor}-01`, to: `${cursor}-${pad2(lastDay(y3, m3))}`, label: `${y3}년 ${m3}월` };
    const pm = new Date(y3, m3 - 2, 1);
    const py = pm.getFullYear(), pmm = pm.getMonth() + 1;
    const prev2 = { from: `${py}-${pad2(pmm)}-01`, to: `${py}-${pad2(pmm)}-${pad2(lastDay(py, pmm))}`, label: `${pmm}월` };
    const lastYear = { from: `${y3 - 1}-${pad2(m3)}-01`, to: `${y3 - 1}-${pad2(m3)}-${pad2(lastDay(y3 - 1, m3))}`, label: `작년 ${m3}월` };
    return { cur: cur2, prev: prev2, lastYear };
  }
  const cur = { from: `${y3}-01-01`, to: `${y3}-12-31`, label: `${y3}년` };
  const prev = { from: `${y3 - 1}-01-01`, to: `${y3 - 1}-12-31`, label: `${y3 - 1}년` };
  return { cur, prev, lastYear: null };
}
function findNotes(now, base2, baseLabel) {
  const notes = [];
  if (!base2 || !base2.count) return notes;
  for (const a3 of AXES) {
    const n3 = now.axes[a3.key] || 0, b3 = base2.axes[a3.key] || 0;
    const d3 = n3 - b3;
    if (Math.abs(d3) < 1e5) continue;
    const p3 = pct(n3, b3);
    if (b3 === 0 && n3 > 0) notes.push({ kind: "new", text: `${a3.label}가 새로 ${formatWon(n3)}원 발생했습니다` });
    else if (n3 === 0 && b3 > 0) notes.push({ kind: "gone", text: `${a3.label} ${formatWon(b3)}원이 이번에는 없습니다` });
    else if (p3 !== null && Math.abs(p3) >= 20) {
      notes.push({
        kind: d3 > 0 ? "up" : "down",
        text: `${a3.label}가 ${baseLabel}보다 ${formatWon(Math.abs(d3))}원 ${d3 > 0 ? "늘었습니다" : "줄었습니다"} (${Math.abs(p3)}%)`
      });
    }
  }
  const catDiff = [];
  const keys = /* @__PURE__ */ new Set([...Object.keys(now.cats), ...Object.keys(base2.cats)]);
  for (const k3 of keys) {
    const d3 = (now.cats[k3] || 0) - (base2.cats[k3] || 0);
    if (Math.abs(d3) >= 15e4) catDiff.push({ k: k3, d: d3 });
  }
  catDiff.sort((a3, b3) => Math.abs(b3.d) - Math.abs(a3.d));
  for (const c3 of catDiff.slice(0, 3)) {
    const name = CAT_MAP[c3.k]?.label || c3.k;
    notes.push({
      kind: c3.d > 0 ? "up" : "down",
      text: `${name}가 ${formatWon(Math.abs(c3.d))}원 ${c3.d > 0 ? "늘었습니다" : "줄었습니다"}`
    });
  }
  for (const [k3, v3] of Object.entries(now.merchants)) {
    if (base2.merchants[k3]) continue;
    if (v3.total < 3e5) continue;
    notes.push({ kind: "new", text: `${v3.name}에 ${formatWon(v3.total)}원을 썼습니다. ${baseLabel}에는 없던 지출입니다` });
  }
  const left = now.income - now.expense;
  if (now.income > 0) {
    notes.push({
      kind: left < 0 ? "warn" : "ok",
      text: left < 0 ? `수입보다 ${formatWon(-left)}원을 더 썼습니다` : `${formatWon(left)}원이 남았습니다`
    });
  }
  return notes.slice(0, 8);
}
function ReportView({ all, monthStartDay }) {
  const [mode2, setMode] = d2("month");
  const [cursor, setCursor] = d2(() => todayISO().slice(0, 7));
  const p3 = T2(() => periods(mode2, cursor), [mode2, cursor]);
  const now = T2(() => tally(all, p3.cur.from, p3.cur.to), [all, p3]);
  const prev = T2(() => tally(all, p3.prev.from, p3.prev.to), [all, p3]);
  const ly = T2(() => p3.lastYear ? tally(all, p3.lastYear.from, p3.lastYear.to) : null, [all, p3]);
  const base2 = prev.count ? prev : ly && ly.count ? ly : null;
  const baseLabel = prev.count ? p3.prev.label : ly && ly.count ? p3.lastYear.label : "";
  const notes = T2(() => findNotes(now, base2, baseLabel), [now, base2, baseLabel]);
  const shift2 = (d3) => {
    if (mode2 === "year") {
      setCursor(`${Number(cursor.slice(0, 4)) + d3}-01`);
      return;
    }
    const [y3, m3] = cursor.split("-").map(Number);
    const nd = new Date(y3, m3 - 1 + d3, 1);
    setCursor(`${nd.getFullYear()}-${pad2(nd.getMonth() + 1)}`);
  };
  const rows = AXES.map((a3) => ({ ...a3, now: now.axes[a3.key] || 0, before: base2 ? base2.axes[a3.key] || 0 : null })).filter((r3) => r3.now > 0 || (r3.before || 0) > 0);
  const peak = Math.max(1, ...rows.map((r3) => Math.max(r3.now, r3.before || 0)));
  const copy = () => {
    const L2 = [];
    L2.push(`${p3.cur.label} 결산`);
    L2.push("");
    L2.push(`수입   ${formatWon(now.income)}원`);
    L2.push(`지출   ${formatWon(now.expense)}원`);
    L2.push(`남은돈 ${formatWon(now.income - now.expense)}원`);
    L2.push("");
    for (const r3 of rows) L2.push(`${r3.label.padEnd(8)} ${formatWon(r3.now)}원`);
    if (notes.length) {
      L2.push("");
      L2.push(`[${baseLabel} 대비]`);
      for (const n3 of notes) L2.push(`· ${n3.text}`);
    }
    const txt = L2.join("\n");
    try {
      navigator.clipboard.writeText(txt);
    } catch (e3) {
      window.prompt("복사하세요", txt);
    }
  };
  const left = now.income - now.expense;
  return html3`
    <div class="report">
      <div class="repTabs">
        <button class=${"statTab" + (mode2 === "month" ? " on" : "")} onClick=${() => setMode("month")}>월 결산</button>
        <button class=${"statTab" + (mode2 === "year" ? " on" : "")} onClick=${() => setMode("year")}>연 결산</button>
      </div>

      <div class="repHead">
        <button class="nav" onClick=${() => shift2(-1)} aria-label="이전">‹</button>
        <span class="repTitle">${p3.cur.label} 결산</span>
        <button class="nav" onClick=${() => shift2(1)} aria-label="다음">›</button>
      </div>

      ${now.count === 0 ? html3`<div class="empty">이 기간 기록이 없어요.</div>` : html3`
        <div class="repTop">
          <div class="repTopRow">
            <span>수입</span>
            <b class="inc">₩${formatWon(now.income)}</b>
            <${Delta} now=${now.income} before=${base2 ? base2.income : null} invert=${true} />
          </div>
          <div class="repTopRow">
            <span>지출</span>
            <b class="exp">₩${formatWon(now.expense)}</b>
            <${Delta} now=${now.expense} before=${base2 ? base2.expense : null} />
          </div>
          <div class=${"repTopRow total" + (left < 0 ? " minus" : "")}>
            <span>${left < 0 ? "모자란 돈" : "남은 돈"}</span>
            <b>₩${formatWon(Math.abs(left))}</b>
          </div>
        </div>

        <div class="repSection">항목별${base2 ? html3`<span class="repBase">${baseLabel} 대비</span>` : ""}</div>
        ${rows.map((r3) => html3`
          <div class="repRow" key=${r3.key}>
            <div class="repRowTop">
              <span class="repName">${r3.label}</span>
              <span class="repVal">₩${formatWon(r3.now)}</span>
            </div>
            <div class="repBars">
              <div class="repBarTrack">
                <div class="repBarNow" style=${`width:${r3.now / peak * 100}%;background:${r3.color}`}></div>
              </div>
              ${base2 && html3`
                <div class="repBarTrack ghost">
                  <div class="repBarBefore" style=${`width:${(r3.before || 0) / peak * 100}%`}></div>
                </div>`}
            </div>
            ${base2 && html3`<div class="repDelta"><${Delta} now=${r3.now} before=${r3.before} /></div>`}
          </div>`)}

        ${now.welfare > 0 && html3`
          <div class="repNoteLine">복지카드 ₩${formatWon(now.welfare)}원은 합계에 넣지 않았습니다</div>`}

        ${notes.length > 0 && html3`
          <div class="repSection">특이사항</div>
          <ul class="repNotes">
            ${notes.map((n3, i3) => html3`
              <li class=${"repNote " + n3.kind} key=${i3}>${n3.text}</li>`)}
          </ul>`}

        <div class="repSection">많이 쓴 곳</div>
        <ol class="repTopList">
          ${Object.values(now.merchants).sort((a3, b3) => b3.total - a3.total).slice(0, 5).map((m3, i3) => html3`
            <li key=${i3}>
              <span class="repName">${m3.name}</span>
              <span class="repCnt">${m3.count}건</span>
              <span class="repVal">₩${formatWon(m3.total)}</span>
            </li>`)}
        </ol>

        <div class="acts">
          <button class="btn ghost sm" onClick=${copy}>글자로 복사</button>
        </div>`}
    </div>`;
}

// src/app.js
var html4 = htm_module_default.bind(k);
var {
  CATEGORIES: CATEGORIES2,
  CAT_MAP: CAT_MAP2,
  todayISO: todayISO2,
  toLocalISO: toLocalISO2,
  formatDateLabel: formatDateLabel2,
  formatWon: formatWon2,
  uid: uid2,
  parsePaste: parsePaste2,
  reconcile: reconcile2,
  normKey: normKey2
} = engine_exports;
var DB_KEY = "ledger:db";
var SCHEMA = 6;
var EMPTY_DB = {
  version: SCHEMA,
  entries: [],
  trips: [],
  vehicles: [],
  maintenance: [],
  mileageLogs: [],
  accounts: [],
  fixedExpenses: [],
  categoryRules: [],
  favorites: [],
  imports: [],
  settings: {
    userName: "",
    monthStartDay: 1,
    sheetUrl: "",
    sheetToken: "",
    lastSyncAt: "",
    // 직장 이름은 공개 저장소에 올라가므로 코드에 넣지 않는다. 설정에서 직접 넣는다.
    incomeSources: ["급여", "처우개선비", "상여"],
    excludedCounterparties: [],
    incomeOnlyFromSources: true,
    welfareCards: ["현대복지", "현대카드"],
    investKeywords: ["키움", "증권", "선물", "미래에셋", "한국투자", "NH투자"],
    welfareLimit: 0,
    welfarePeriodStart: "",
    familyTransferKeywords: ["하나머니충전", "하나머니 충전"],
    familyRegularAmount: 115e4,
    // 이 범위 안의 가족 송금만 생활비(지출)로 센다. 벗어나면 별도 송금으로 보고 합계에서 뺀다.
    familyAmountMin: 0,
    familyAmountMax: 0,
    familyExtraExcluded: true,
    travelKeywords: ["트래블월렛", "트래블 월렛"]
  }
};
function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) return { ...EMPTY_DB };
    const parsed = JSON.parse(raw);
    return { ...EMPTY_DB, ...parsed, settings: { ...EMPTY_DB.settings, ...parsed.settings || {} } };
  } catch (e3) {
    console.warn("저장된 데이터를 읽지 못했습니다", e3);
    return { ...EMPTY_DB };
  }
}
function saveDB(db) {
  try {
    const s3 = JSON.stringify(db);
    localStorage.setItem(DB_KEY, s3);
    return { ok: true, size: s3.length };
  } catch (e3) {
    return { ok: false, error: e3 };
  }
}
var COMMON_PRESETS = [
  { label: "타이어", intervalKm: 5e4, intervalMonths: 36 },
  { label: "브레이크패드", intervalKm: 4e4, intervalMonths: 24 },
  { label: "브레이크액", intervalKm: 4e4, intervalMonths: 24 },
  { label: "냉각수", intervalKm: 4e4, intervalMonths: 24 },
  { label: "에어컨필터", intervalKm: 15e3, intervalMonths: 12 },
  { label: "배터리", intervalKm: null, intervalMonths: 36 },
  { label: "와이퍼", intervalKm: null, intervalMonths: 12 },
  { label: "자동차보험", intervalKm: null, intervalMonths: 12 },
  { label: "정기검사", intervalKm: null, intervalMonths: 24 }
];
var ENGINE_PRESETS = [
  { label: "엔진오일", intervalKm: 1e4, intervalMonths: 6 },
  { label: "오일필터", intervalKm: 1e4, intervalMonths: 6 },
  { label: "에어필터", intervalKm: 4e4, intervalMonths: 24 },
  { label: "미션오일", intervalKm: 1e5, intervalMonths: null }
];
var FUEL_TYPES = [
  {
    key: "gasoline",
    label: "가솔린",
    presets: [...ENGINE_PRESETS, { label: "점화플러그", intervalKm: 16e4, intervalMonths: null }, ...COMMON_PRESETS]
  },
  {
    key: "diesel",
    label: "디젤",
    presets: [
      ...ENGINE_PRESETS,
      { label: "연료필터", intervalKm: 4e4, intervalMonths: 24 },
      { label: "DPF 점검", intervalKm: 1e5, intervalMonths: null },
      ...COMMON_PRESETS
    ]
  },
  {
    key: "lpg",
    label: "LPG",
    presets: [
      ...ENGINE_PRESETS,
      { label: "점화플러그", intervalKm: 16e4, intervalMonths: null },
      { label: "LPG 필터", intervalKm: 4e4, intervalMonths: 24 },
      ...COMMON_PRESETS
    ]
  },
  {
    key: "hybrid",
    label: "하이브리드",
    presets: [
      ...ENGINE_PRESETS,
      { label: "점화플러그", intervalKm: 16e4, intervalMonths: null },
      { label: "구동용 배터리 점검", intervalKm: null, intervalMonths: 24 },
      ...COMMON_PRESETS
    ]
  },
  {
    key: "ev",
    label: "전기",
    presets: [
      { label: "감속기 오일", intervalKm: 1e5, intervalMonths: null },
      { label: "고전압 배터리 점검", intervalKm: null, intervalMonths: 12 },
      ...COMMON_PRESETS
    ]
  }
];
var presetsFor = (fuel) => (FUEL_TYPES.find((f3) => f3.key === fuel) || FUEL_TYPES[0]).presets;
var MAINT_LABEL = { ok: "양호", warning: "곧 교체", overdue: "교체 필요", unknown: "기록 필요" };
function maintStatus(item, mileage) {
  if (!item.lastDate && item.lastMileage == null) return { status: "unknown", remKm: null, remMonths: null };
  let remKm = null, remMonths = null;
  if (item.intervalKm && item.lastMileage != null && mileage != null) remKm = item.intervalKm - (mileage - item.lastMileage);
  if (item.intervalMonths && item.lastDate) {
    const last = /* @__PURE__ */ new Date(item.lastDate + "T00:00:00"), now = /* @__PURE__ */ new Date();
    let m3 = (now.getFullYear() - last.getFullYear()) * 12 + (now.getMonth() - last.getMonth());
    if (now.getDate() < last.getDate()) m3 -= 1;
    remMonths = item.intervalMonths - m3;
  }
  let status = "ok";
  if (remKm != null && remKm <= 0 || remMonths != null && remMonths <= 0) status = "overdue";
  else if (remKm != null && remKm <= 1e3 || remMonths != null && remMonths <= 1) status = "warning";
  return { status, remKm, remMonths };
}
function periodRange(cursor, startDay = 1) {
  const [y3, m3] = cursor.split("-").map(Number);
  if (startDay <= 1) {
    const end2 = new Date(y3, m3, 0);
    return { start: `${cursor}-01`, end: toLocalISO2(end2) };
  }
  const start = new Date(y3, m3 - 2, startDay);
  const end = new Date(y3, m3 - 1, startDay - 1);
  return { start: toLocalISO2(start), end: toLocalISO2(end) };
}
function sign(type) {
  return type === "income" ? "+" : type === "transfer" ? "" : "−";
}
function makeEntry(draft) {
  const now = Date.now();
  return {
    id: uid2(),
    date: todayISO2(),
    type: "expense",
    category: "etc",
    amount: 0,
    memo: "",
    tripId: null,
    carId: null,
    currency: "",
    foreignAmount: null,
    isRefund: false,
    paymentMethod: "unknown",
    accountId: null,
    fixedId: null,
    normKey: "",
    source: "manual",
    confidence: 1,
    rawText: "",
    balanceAfter: null,
    transferKind: null,
    direction: null,
    createdAt: now,
    updatedAt: now,
    deleted: false,
    dirty: true,
    status: "confirmed",
    ...draft
  };
}
var Ico = (d3, extra) => (p3) => html4`
  <svg viewBox="0 0 24 24" width=${p3.size || 16} height=${p3.size || 16} fill="none"
       stroke="currentColor" stroke-width=${p3.sw || 2} stroke-linecap="round" stroke-linejoin="round"
       class=${p3.class || ""} aria-hidden="true">${d3}${extra || ""}</svg>`;
var IcoTrash = Ico(html4`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`);
var IcoLeft = Ico(html4`<polyline points="15 18 9 12 15 6"/>`);
var IcoRight = Ico(html4`<polyline points="9 18 15 12 9 6"/>`);
var IcoCheck = Ico(html4`<polyline points="20 6 9 17 4 12"/>`);
var IcoX = Ico(html4`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`);
var IcoPlane = Ico(html4`<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 3.9-2 2-2-.5a.5.5 0 0 0-.5.8L5 15l1.8 2 1.3-1.5 2 .5 2-2 3.9 3.2a.5.5 0 0 0 .8-.5Z"/>`);
var IcoCar = Ico(html4`<path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm18 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M3 17V9l2-4h14l2 4v8"/><path d="M3 11h18"/>`);
var IcoWrench = Ico(html4`<path d="M14.7 6.3a4 4 0 0 0 5 5L21 18a2 2 0 0 1-3 3l-6.7-1.3a4 4 0 0 0-5-5L3 8a2 2 0 0 1 3-3Z"/>`);
var IcoGauge = Ico(html4`<path d="M12 14 8 10"/><circle cx="12" cy="14" r="8"/><path d="M12 6V4"/>`);
var IcoSearch = Ico(html4`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.7" y2="16.7"/>`);
var IcoPlus = Ico(html4`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`);
var IcoInbox = Ico(html4`<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.5Z"/>`);
var IcoAlert = Ico(html4`<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`);
var IcoGear = Ico(html4`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>`);
var IcoClip = Ico(html4`<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`);
function EntryForm({ value, onChange, onSave, onCancel, saveLabel, trips, vehicles, onCreateTrip, onCreateVehicle }) {
  const [addTrip, setAddTrip] = d2(false);
  const [tripName, setTripName] = d2("");
  const [addCar, setAddCar] = d2(false);
  const [carName, setCarName] = d2("");
  const set = (patch) => onChange({ ...value, ...patch });
  return html4`
    <div class="form">
      <div class="row">
        <div class="seg">
          <button class=${"segBtn" + (value.type === "expense" ? " on expense" : "")}
            onClick=${() => set({ type: "expense", category: value.category === "income" ? "etc" : value.category })}>지출</button>
          <button class=${"segBtn" + (value.type === "income" ? " on income" : "")}
            onClick=${() => set({ type: "income", category: "income" })}>수입</button>
          <button class=${"segBtn" + (value.type === "transfer" ? " on transfer" : "")}
            onClick=${() => set({ type: "transfer", category: "etc" })}>이체</button>
        </div>
        <input type="date" class="inp date" value=${value.date} onInput=${(e3) => set({ date: e3.target.value })} />
      </div>

      ${value.type === "transfer" && html4`<div class="hint sm">본인 계좌 간 이체는 수입·지출 합계에서 빠지고 기록만 남아요.</div>`}

      <div class="row">
        <span class="won">₩</span>
        <input type="number" inputmode="numeric" class="amt" placeholder="0"
          value=${value.amount || ""} onInput=${(e3) => set({ amount: parseInt(e3.target.value || "0", 10) })} />
      </div>

      ${value.type === "expense" && html4`
        <div class="chips">
          ${CATEGORIES2.filter((c3) => c3.key !== "income").map((c3) => html4`
            <button key=${c3.key} class=${"chip" + (value.category === c3.key ? " on" : "")}
              style=${value.category === c3.key ? `background:${c3.color};border-color:${c3.color}` : `border-color:${c3.color}55;color:${c3.color}`}
              onClick=${() => set({ category: c3.key })}>${c3.label}</button>`)}
        </div>`}

      ${value.type === "expense" && html4`
        <div class="row wrap">
          <label class="miniLabel">결제수단</label>
          ${[["card", "카드"], ["account", "계좌"], ["cash", "현금"], ["unknown", "미상"]].map(([k3, l3]) => html4`
            <button key=${k3} class=${"tag" + (value.paymentMethod === k3 ? " on" : "")}
              onClick=${() => set({ paymentMethod: k3 })}>${l3}</button>`)}
          <button class=${"tag" + (value.isRefund ? " on" : "")} onClick=${() => set({ isRefund: !value.isRefund })}>취소·환불</button>
        </div>`}

      <div class="miniLabel">여행</div>
      <div class="chips">
        <button class=${"tag" + (!value.tripId ? " on" : "")} onClick=${() => set({ tripId: null, currency: "", foreignAmount: null })}>일반</button>
        ${trips.map((t4) => html4`<button key=${t4.id} class=${"tag" + (value.tripId === t4.id ? " on" : "")} onClick=${() => set({ tripId: t4.id })}><${IcoPlane} size=${11} /> ${t4.name}</button>`)}
        ${addTrip ? html4`<span class="inline">
              <input class="inp mini" autofocus placeholder="여행 이름" value=${tripName}
                onInput=${(e3) => setTripName(e3.target.value)}
                onKeyDown=${(e3) => {
    if (e3.key === "Enter" && tripName.trim()) {
      set({ tripId: onCreateTrip(tripName.trim(), value.date).id });
      setTripName("");
      setAddTrip(false);
    }
  }} />
              <button class="round" onClick=${() => {
    if (tripName.trim()) {
      set({ tripId: onCreateTrip(tripName.trim(), value.date).id });
      setTripName("");
      setAddTrip(false);
    }
  }}><${IcoCheck} size=${13} /></button>
            </span>` : html4`<button class="tag dash" onClick=${() => setAddTrip(true)}>+ 새 여행</button>`}
      </div>

      <div class="miniLabel">차량</div>
      <div class="chips">
        <button class=${"tag" + (!value.carId ? " on" : "")} onClick=${() => set({ carId: null })}>해당 없음</button>
        ${vehicles.map((v3) => html4`<button key=${v3.id} class=${"tag" + (value.carId === v3.id ? " on" : "")} onClick=${() => set({ carId: v3.id })}><${IcoCar} size=${11} /> ${v3.name}</button>`)}
        ${addCar ? html4`<span class="inline">
              <input class="inp mini" autofocus placeholder="차량 이름" value=${carName}
                onInput=${(e3) => setCarName(e3.target.value)}
                onKeyDown=${(e3) => {
    if (e3.key === "Enter" && carName.trim()) {
      set({ carId: onCreateVehicle(carName.trim()).id });
      setCarName("");
      setAddCar(false);
    }
  }} />
              <button class="round" onClick=${() => {
    if (carName.trim()) {
      set({ carId: onCreateVehicle(carName.trim()).id });
      setCarName("");
      setAddCar(false);
    }
  }}><${IcoCheck} size=${13} /></button>
            </span>` : html4`<button class="tag dash" onClick=${() => setAddCar(true)}>+ 새 차량</button>`}
      </div>

      ${value.tripId && html4`
        <div class="row">
          <input class="inp" placeholder="통화 (예: JPY)" value=${value.currency || ""} onInput=${(e3) => set({ currency: e3.target.value })} />
          <input class="inp" type="number" placeholder="외화 금액" value=${value.foreignAmount || ""}
            onInput=${(e3) => set({ foreignAmount: e3.target.value ? parseFloat(e3.target.value) : null })} />
        </div>`}

      <input class="inp" placeholder="상호 / 메모 (예: 조이텔)" value=${value.memo} onInput=${(e3) => set({ memo: e3.target.value })} />
      ${value.id && html4`
        <label class="learnRow">
          <input type="checkbox" class="entryCheck" checked=${!!value._learnMerchant}
            onChange=${(e3) => set({ _learnMerchant: e3.target.checked })} />
          <span>이 상호를 기억해서 같은 곳·같은 금액 문자에 쓰기</span>
        </label>`}

      <div class="acts">
        <button class="btn ghost" onClick=${onCancel}><${IcoX} size=${15} /> 취소</button>
        <button class="btn primary" onClick=${onSave} disabled=${!value.amount}><${IcoCheck} size=${15} /> ${saveLabel || "저장"}</button>
      </div>
    </div>`;
}
function EntryRow({ entry, trips, vehicles, onQuickCat, onEdit, onDelete, selecting, checked, onToggle }) {
  const [openCat, setOpenCat] = d2(false);
  const holdRef = A2(null);
  const movedRef = A2(false);
  const startHold = () => {
    movedRef.current = false;
    holdRef.current = setTimeout(() => {
      holdRef.current = null;
      onEdit(entry);
    }, 550);
  };
  const endHold = () => {
    if (holdRef.current) {
      clearTimeout(holdRef.current);
      holdRef.current = null;
      if (!movedRef.current) setOpenCat((v3) => !v3);
    }
  };
  const cancelHold = () => {
    movedRef.current = true;
    if (holdRef.current) {
      clearTimeout(holdRef.current);
      holdRef.current = null;
    }
  };
  const cat = CAT_MAP2[entry.category];
  const trip = entry.tripId && trips.find((t4) => t4.id === entry.tripId);
  const car = entry.carId && vehicles.find((v3) => v3.id === entry.carId);
  if (selecting) {
    return html4`
      <div class="rowWrap">
        <div class=${"entry pick" + (checked ? " on" : "")} onClick=${() => onToggle(entry.id)}>
          <input type="checkbox" class="entryCheck" checked=${!!checked} onClick=${(ev) => ev.stopPropagation()} onChange=${() => onToggle(entry.id)} />
          <div class="entryMain">
            <div class="entryCat">
              ${cat ? cat.label : "기타"}
              ${entry.isRefund ? html4`<span class="refund"> · 취소</span>` : ""}
              ${trip ? html4`<span class="seal"> · ${trip.name}</span>` : ""}
              ${car ? html4`<span class="seal"> · ${car.name}</span>` : ""}
            </div>
            <div class="entryMemo">${entry.memo || "-"}</div>
          </div>
          <div class="entryAmt">
            <div class=${"amtNum " + entry.type + (entry.isRefund ? " refunded" : "")}>
              ${sign(entry.type)}₩${formatWon2(entry.amount)}
            </div>
          </div>
        </div>
      </div>`;
  }
  return html4`
    <div class="rowWrap">
      <div class=${"entry" + (entry.status === "pending" ? " pending" : "")}
        onPointerDown=${startHold} onPointerUp=${endHold} onPointerLeave=${cancelHold} onPointerCancel=${cancelHold}>
        <span class="dot" style=${`background:${cat ? cat.color : "#999"}`}></span>
        <div class="entryMain">
          <div class="entryCat">
            ${cat ? cat.label : "기타"}
            ${entry.isRefund ? html4`<span class="refund"> · 취소</span>` : ""}
            ${trip ? html4`<span class="seal"> · ${trip.name}</span>` : ""}
            ${car ? html4`<span class="seal"> · ${car.name}</span>` : ""}
          </div>
          <div class="entryMemo">${entry.memo || "-"}</div>
        </div>
        <div class="entryAmt">
          <div class=${"amtNum " + entry.type + (entry.isRefund ? " refunded" : "")}>
            ${sign(entry.type)}₩${formatWon2(entry.amount)}
          </div>
          ${entry.foreignAmount ? html4`<div class="fx">${entry.currency} ${entry.foreignAmount}</div>` : ""}
        </div>
        <button class="del" onClick=${(e3) => {
    e3.stopPropagation();
    onDelete(entry.id);
  }} aria-label="삭제"><${IcoTrash} size=${15} /></button>
      </div>
      ${openCat && entry.type === "expense" && html4`
        <div class="quickCat">
          ${CATEGORIES2.filter((c3) => c3.key !== "income").map((c3) => html4`
            <button key=${c3.key} class=${"chip sm" + (entry.category === c3.key ? " on" : "")}
              style=${entry.category === c3.key ? `background:${c3.color};border-color:${c3.color}` : `border-color:${c3.color}55;color:${c3.color}`}
              onClick=${() => {
    onQuickCat(entry, c3.key);
    setOpenCat(false);
  }}>${c3.label}</button>`)}
          <button class="chip sm dash" onClick=${() => {
    setOpenCat(false);
    onEdit(entry);
  }}>자세히</button>
        </div>`}
    </div>`;
}
function DateGroups({ list, ...rest }) {
  const groups = T2(() => {
    const map = /* @__PURE__ */ new Map();
    for (const e3 of list) {
      if (!map.has(e3.date)) map.set(e3.date, []);
      map.get(e3.date).push(e3);
    }
    return Array.from(map.entries());
  }, [list]);
  return html4`${groups.map(([date, items]) => html4`
    <div class="group" key=${date}>
      <div class="groupHead">${formatDateLabel2(date)}</div>
      ${items.map((e3) => html4`<${EntryRow} key=${e3.id} entry=${e3} ...${rest} checked=${rest.selectedIds ? rest.selectedIds.includes(e3.id) : false} />`)}
    </div>`)}`;
}
function App() {
  const [db, setDb] = d2(loadDB);
  const [paste, setPaste] = d2("");
  const [draft, setDraft] = d2(null);
  const [multi, setMulti] = d2(null);
  const [ocrState, setOcrState] = d2(null);
  const [addOpen, setAddOpen] = d2(false);
  const capRef = A2(null);
  const [editing, setEditing] = d2(null);
  const [tab, setTab] = d2("month");
  const [query, setQuery] = d2("");
  const [showSettings, setShowSettings] = d2(false);
  const [panel, setPanel] = d2(null);
  const [inboxOpen, setInboxOpen] = d2(false);
  const [autoUndo, setAutoUndo] = d2(null);
  const [weirdOpen, setWeirdOpen] = d2(false);
  const [showChart, setShowChart] = d2(false);
  const [toast, setToast] = d2(null);
  const [tripId, setTripId] = d2(null);
  const [carId, setCarId] = d2(null);
  const [mileage, setMileage] = d2("");
  const [mileageDate, setMileageDate] = d2(todayISO2);
  const [maintEdit, setMaintEdit] = d2(null);
  const [cursor, setCursor] = d2(() => {
    const d3 = /* @__PURE__ */ new Date();
    return `${d3.getFullYear()}-${String(d3.getMonth() + 1).padStart(2, "0")}`;
  });
  const [sync, setSync] = d2({ state: "idle", fails: 0, msg: "" });
  const dbRef = A2(db);
  const busy = A2(false);
  h2(() => {
    dbRef.current = db;
  }, [db]);
  h2(() => {
    const r3 = saveDB(db);
    if (!r3.ok) setToast("저장 공간이 가득 찼어요. 설정에서 내보내기 후 정리해주세요.");
  }, [db]);
  const runSync = q2(async (loud) => {
    const cur = dbRef.current;
    if (!cur.settings.sheetUrl || busy.current) return;
    busy.current = true;
    setSync((s3) => ({ ...s3, state: "syncing" }));
    try {
      const r3 = await syncOnce(cur);
      let pulled = 0;
      setDb((prev) => {
        const out = applySync(prev, r3);
        pulled = out.pulled;
        return out.db;
      });
      setSync({ state: "ok", fails: 0, msg: "" });
      if (loud) setToast(`동기화 완료 · 보냄 ${r3.pushed.length}건 · 받음 ${pulled}건`);
    } catch (e3) {
      setSync((s3) => ({ state: "error", fails: s3.fails + 1, msg: e3.message || "연결 실패" }));
      if (loud) setToast(`동기화 실패: ${e3.message}`);
    } finally {
      busy.current = false;
      setTimeout(() => setToast(null), 2600);
    }
  }, []);
  h2(() => {
    runSync(false);
    const onVis = () => {
      if (!document.hidden) runSync(false);
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("online", onVis);
    const t4 = setInterval(() => {
      if (!document.hidden) runSync(false);
    }, 5 * 60 * 1e3);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("online", onVis);
      clearInterval(t4);
    };
  }, [runSync]);
  const pushTimer = A2(null);
  const schedulePush = q2(() => {
    clearTimeout(pushTimer.current);
    pushTimer.current = setTimeout(() => runSync(false), 2500);
  }, [runSync]);
  const flash = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };
  const shareText = async (title, text) => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text });
        return;
      }
    } catch (e3) {
      if (e3 && e3.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(text);
      flash("복사했어요 — 카카오톡에 붙여넣으세요");
    } catch (e3) {
      flash("복사하지 못했어요. 글을 길게 눌러 복사해 주세요");
    }
  };
  const patch = (fn) => setDb((prev) => {
    const next = { ...prev };
    fn(next);
    return next;
  });
  const live = T2(() => db.entries.filter((e3) => !e3.deleted), [db.entries]);
  h2(() => {
    if (!db.fixedExpenses.length) return;
    const drafts = buildScheduled(db.fixedExpenses, db.entries, {});
    const { settled } = settleScheduled(db.entries, db.fixedExpenses);
    if (!drafts.length && !settled.length) return;
    setDb((prev) => {
      let list = prev.entries;
      if (settled.length) {
        const drop = new Set(settled.map((x2) => x2.scheduledId));
        const realOf = new Map(settled.map((x2) => [x2.scheduledId, x2.realId]));
        list = list.map((e3) => drop.has(e3.id) ? { ...e3, deleted: true, mergedInto: realOf.get(e3.id), updatedAt: Date.now(), dirty: true } : e3);
      }
      const made = drafts.map((d3) => makeEntry(d3));
      return { ...prev, entries: [...made, ...list] };
    });
  }, [db.fixedExpenses, db.entries]);
  h2(() => {
    const opts = { rules: db.categoryRules || [], settings: db.settings };
    const found = /* @__PURE__ */ new Map();
    for (const e3 of db.entries) {
      if (e3.source !== "shortcut" || e3.localized) continue;
      const p3 = localizeShortcut(e3, opts);
      if (p3) found.set(e3.id, p3);
    }
    if (!found.size) return;
    setDb((prev) => ({
      ...prev,
      entries: prev.entries.map((e3) => {
        const p3 = found.get(e3.id);
        if (!p3 || e3.localized) return e3;
        let next = applyUserRules({ ...e3, ...p3 }, prev.categoryRules || []);
        const tid = tripForEntry(next, prev.trips || []);
        if (tid) next = { ...next, tripId: tid };
        return { ...next, updatedAt: Date.now(), dirty: true };
      })
    }));
    schedulePush();
  }, [db.entries]);
  const addEntries = (drafts, batch) => {
    const cur = dbRef.current;
    const made = drafts.map((d0) => {
      const d3 = applyUserRules(d0, cur.categoryRules || []);
      const bulk2 = d3.source === "statement";
      const ask = d3.needsCheck || !bulk2 && (d3.confidence ?? 1) < 0.6;
      const tid = tripForEntry(d3, cur.trips || []);
      return makeEntry({
        ...d3,
        ...tid ? { tripId: tid } : {},
        ...batch ? { importId: batch.id } : {},
        status: ask ? "pending" : "confirmed"
      });
    });
    patch((n3) => {
      n3.entries = [...made, ...n3.entries];
      if (batch && made.length) {
        const rec = { id: batch.id, at: Date.now(), name: batch.name || "가져오기", count: made.length, undone: false };
        n3.imports = [rec, ...n3.imports || []].slice(0, 20);
      }
    });
    schedulePush();
    return made;
  };
  const updateEntry = (id, p3) => (schedulePush(), patch((n3) => {
    n3.entries = n3.entries.map((e3) => e3.id === id ? { ...e3, ...p3, updatedAt: Date.now(), dirty: true } : e3);
  }));
  const removeEntry = (id) => (schedulePush(), patch((n3) => {
    n3.entries = n3.entries.map((e3) => e3.id === id ? { ...e3, deleted: true, updatedAt: Date.now(), dirty: true } : e3);
  }));
  const [bulk, setBulk] = d2(null);
  const bulkTimer = A2(null);
  const withRule = (list, key, category, add) => {
    const i3 = list.findIndex((r3) => r3.normKey === key);
    if (i3 >= 0) return list.map((r3, j3) => j3 === i3 ? { ...r3, category, kind: null, hitCount: (r3.hitCount || 1) + add } : r3);
    return [...list, { id: uid2(), normKey: key, category, hitCount: add, learnedAt: Date.now() }];
  };
  const snapshot = (e3) => ({ id: e3.id, category: e3.category, status: e3.status, confidence: e3.confidence, catBy: e3.catBy, transferKind: e3.transferKind });
  const recat = (e3, category, extra) => ({
    ...e3,
    category,
    confidence: 1,
    status: e3.needsCheck ? e3.status : "confirmed",
    transferKind: e3.transferKind === "verify" && e3.type === "expense" ? null : e3.transferKind,
    updatedAt: Date.now(),
    dirty: true,
    ...extra
  });
  const showBulk = (b3) => {
    clearTimeout(bulkTimer.current);
    if (!b3.applied && !b3.similar.length) {
      setBulk(null);
      return;
    }
    setBulk(b3);
    if (!b3.similar.length) bulkTimer.current = setTimeout(() => setBulk(null), 9e3);
  };
  const quickCat = (entry, category) => {
    const cur = dbRef.current;
    const key = entry.normKey || normKey2(entry.memo);
    const { same, similar } = findSimilarEntries(cur.entries, entry, category);
    const sameIds = new Set(same.map((e3) => e3.id));
    const rules = key.length >= 2 ? [{ key, prev: (cur.categoryRules || []).find((r3) => r3.normKey === key) || null }] : [];
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => e3.id === entry.id ? recat(e3, category, { status: "confirmed", catBy: "user" }) : sameIds.has(e3.id) ? recat(e3, category) : e3);
      if (key.length >= 2) n3.categoryRules = withRule(n3.categoryRules || [], key, category, 1);
    });
    schedulePush();
    showBulk({ category, applied: same.length, undo: [entry, ...same].map(snapshot), rules, similar });
  };
  const applySimilar = () => {
    const b3 = bulk;
    if (!b3) return;
    const ids = new Set(b3.similar.map((e3) => e3.id));
    const keys = [...new Set(b3.similar.map((e3) => e3.normKey || normKey2(e3.memo)).filter((k3) => k3.length >= 2))];
    const cur = dbRef.current;
    const addRules = keys.filter((k3) => !b3.rules.some((r3) => r3.key === k3)).map((k3) => ({ key: k3, prev: (cur.categoryRules || []).find((r3) => r3.normKey === k3) || null }));
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => ids.has(e3.id) ? recat(e3, b3.category) : e3);
      let list = n3.categoryRules || [];
      for (const k3 of keys) list = withRule(list, k3, b3.category, 1);
      n3.categoryRules = list;
    });
    schedulePush();
    showBulk({ ...b3, applied: b3.applied + b3.similar.length, undo: [...b3.undo, ...b3.similar.map(snapshot)], rules: [...b3.rules, ...addRules], similar: [] });
  };
  const undoBulk = () => {
    const b3 = bulk;
    if (!b3) return;
    const m3 = new Map(b3.undo.map((u3) => [u3.id, u3]));
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => m3.has(e3.id) ? { ...e3, ...m3.get(e3.id), updatedAt: Date.now(), dirty: true } : e3);
      let list = n3.categoryRules || [];
      for (const r3 of b3.rules) {
        list = list.filter((x2) => x2.normKey !== r3.key);
        if (r3.prev) list = [...list, r3.prev];
      }
      n3.categoryRules = list;
    });
    schedulePush();
    clearTimeout(bulkTimer.current);
    setBulk(null);
    flash("되돌렸어요");
  };
  const applyRuleSet = (parsed) => {
    const good = parsed.filter((r3) => !r3.error);
    if (!good.length) return 0;
    const { changes } = previewRuleSet(dbRef.current.entries, good);
    const keys = new Set(good.map((r3) => r3.normKey));
    patch((n3) => {
      n3.categoryRules = [
        ...(n3.categoryRules || []).filter((r3) => !keys.has(r3.normKey)),
        ...good.map((r3) => ({
          id: uid2(),
          normKey: r3.normKey,
          name: r3.name,
          category: r3.category,
          kind: r3.kind || null,
          hitCount: 1,
          learnedAt: Date.now(),
          source: "paste"
        }))
      ];
      n3.entries = n3.entries.map((e3) => changes.has(e3.id) ? { ...e3, ...changes.get(e3.id), confidence: 1, status: e3.needsCheck ? e3.status : "confirmed", updatedAt: Date.now(), dirty: true } : e3);
    });
    schedulePush();
    return changes.size;
  };
  const adoptFixed = (list) => patch((n3) => {
    n3.fixedExpenses = [...n3.fixedExpenses, ...list.map((r3) => ({
      id: uid2(),
      name: r3.name,
      normKey: r3.normKey,
      amount: r3.amount,
      amountVariable: r3.amountVariable,
      dayOfMonth: r3.dayOfMonth,
      category: r3.category,
      accountId: r3.accountId,
      paymentMethod: r3.paymentMethod,
      status: "active",
      source: "learned",
      learnedAt: Date.now()
    }))];
  });
  const applyGroup = (group, category) => {
    const ids = new Set(group.ids);
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => ids.has(e3.id) ? recat(e3, category, { status: "confirmed" }) : e3);
      if (group.normKey && group.normKey !== "__none") n3.categoryRules = withRule(n3.categoryRules || [], group.normKey, category, group.count);
    });
    schedulePush();
  };
  const broken = T2(
    () => db.entries.filter((e3) => !e3.deleted && !/^\d{4}-\d{2}-\d{2}$/.test(String(e3.date || ""))),
    [db.entries]
  );
  const fixDates = () => {
    let fixed = 0, dropped = 0;
    patch((n3) => {
      n3.entries = n3.entries.map((e3) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(String(e3.date || ""))) return e3;
        const s3 = String(e3.date || "");
        const m3 = s3.match(/^(\d{4})-(\d{2})-(\d{2})/);
        let d3 = m3 ? `${m3[1]}-${m3[2]}-${m3[3]}` : null;
        if (!d3) {
          const dt = new Date(s3);
          if (!isNaN(dt)) d3 = toLocalISO2(dt);
        }
        if (d3) {
          fixed++;
          return { ...e3, date: d3, updatedAt: Date.now(), dirty: true };
        }
        dropped++;
        return { ...e3, deleted: true, updatedAt: Date.now(), dirty: true };
      });
    });
    flash(`날짜 ${fixed}건을 고쳤어요${dropped ? ` · ${dropped}건은 못 살려서 지웠어요` : ""}`);
  };
  const addExcluded = (name) => {
    const key = String(name == null ? "" : name).trim();
    if (!key) return;
    patch((n3) => {
      const list = n3.settings.excludedCounterparties || [];
      if (!list.includes(key)) n3.settings = { ...n3.settings, excludedCounterparties: [...list, key] };
    });
  };
  const addTrip = (name, date) => {
    const d3 = /^\d{4}-\d{2}-\d{2}$/.test(String(date || "")) ? date : todayISO2();
    const t4 = { id: uid2(), name, startDate: d3, endDate: d3, createdAt: Date.now() };
    patch((n3) => {
      n3.trips = [...n3.trips, t4];
    });
    return t4;
  };
  const addVehicle = (name, fuel = "gasoline") => {
    const v3 = { id: uid2(), name, fuel, createdAt: Date.now() };
    patch((n3) => {
      n3.vehicles = [...n3.vehicles, v3];
      n3.maintenance = [...n3.maintenance, ...presetsFor(fuel).map((p3) => ({
        id: uid2(),
        carId: v3.id,
        label: p3.label,
        intervalKm: p3.intervalKm,
        intervalMonths: p3.intervalMonths,
        lastDate: null,
        lastMileage: null
      }))];
    });
    return v3;
  };
  const [sel, setSel] = d2({ on: false, ids: [] });
  const toggleSel = (id) => setSel((s0) => ({ ...s0, ids: s0.ids.includes(id) ? s0.ids.filter((x2) => x2 !== id) : [...s0.ids, id] }));
  const bulkPatch = (fn, msg) => {
    const ids = new Set(sel.ids);
    if (!ids.size) return;
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => ids.has(e3.id) ? { ...e3, ...fn(e3), updatedAt: Date.now(), dirty: true } : e3);
    });
    flash(`${ids.size}건 ${msg}`);
    setSel({ on: false, ids: [] });
  };
  const bulkTrip = (tripId2) => bulkPatch(
    () => ({ tripId: tripId2 === "__none" ? null : tripId2 }),
    tripId2 === "__none" ? "여행에서 뺐어요" : `${(db.trips.find((t4) => t4.id === tripId2) || {}).name || "여행"}에 넣었어요`
  );
  const bulkCar = (carId2) => bulkPatch(
    () => ({ carId: carId2 === "__none" ? null : carId2 }),
    carId2 === "__none" ? "차량을 뺐어요" : `${(db.vehicles.find((v3) => v3.id === carId2) || {}).name || "차량"}으로 지정했어요`
  );
  const bulkCat = (cat) => bulkPatch(
    () => ({ category: cat, type: "expense", status: "confirmed", catBy: "user", confidence: 1 }),
    `${(CAT_MAP2[cat] || {}).label || ""}(으)로 바꿨어요`
  );
  const bulkExclude = () => bulkPatch(() => ({ type: "transfer", transferKind: "excluded", status: "confirmed", confidence: 1 }), "합계에서 뺐어요");
  const bulkDelete = () => bulkPatch(() => ({ deleted: true }), "지웠어요");
  const [reclass, setReclass] = d2(null);
  const [reclassUndo, setReclassUndo] = d2(null);
  const planReclass = () => {
    const plan = planReclassify(live, { rules: db.categoryRules, settings: db.settings });
    setReclass(plan);
    if (!plan.changes.length) flash("바꿀 게 없어요. 이미 지금 규칙대로입니다");
  };
  const runReclass = () => {
    if (!reclass || !reclass.changes.length) return;
    const byId = new Map(reclass.changes.map((c3) => [c3.id, c3]));
    const undo = reclass.changes.map((c3) => ({ id: c3.id, before: c3.before }));
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => {
        const c3 = byId.get(e3.id);
        return c3 ? { ...e3, ...c3.patch, updatedAt: Date.now(), dirty: true } : e3;
      });
    });
    setReclassUndo(undo);
    setReclass(null);
    schedulePush();
    flash(`${undo.length}건을 다시 분류했어요`);
  };
  const undoReclass = () => {
    if (!reclassUndo) return;
    const byId = new Map(reclassUndo.map((u3) => [u3.id, u3.before]));
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => {
        const b3 = byId.get(e3.id);
        return b3 ? {
          ...e3,
          type: b3.type,
          category: b3.category,
          transferKind: b3.transferKind,
          updatedAt: Date.now(),
          dirty: true
        } : e3;
      });
    });
    const n3 = reclassUndo.length;
    setReclassUndo(null);
    schedulePush();
    flash(`${n3}건을 되돌렸어요`);
  };
  const undoImport = (rec) => {
    let n3 = 0;
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => {
        if (e3.importId !== rec.id || e3.deleted) return e3;
        n3++;
        return { ...e3, deleted: true, updatedAt: Date.now(), dirty: true };
      });
      d3.imports = (d3.imports || []).map((x2) => x2.id === rec.id ? { ...x2, undone: true } : x2);
    });
    schedulePush();
    flash(`${rec.name} · ${n3}건을 되돌렸어요`);
  };
  const assignCar = (entry, carIdSel) => {
    const key = entry.normKey || normKey2(entry.memo);
    let n3 = 0;
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => {
        if (e3.deleted || e3.carId) return e3;
        const ek = e3.normKey || normKey2(e3.memo);
        if (e3.id !== entry.id && !(key && ek && key === ek)) return e3;
        n3++;
        return { ...e3, carId: carIdSel, carBy: "user", updatedAt: Date.now(), dirty: true };
      });
    });
    const name = (db.vehicles.find((v3) => v3.id === carIdSel) || {}).name || "차량";
    flash(n3 > 1 ? `${name}으로 ${n3}건 지정했어요 (같은 곳 기록 포함)` : `${name}으로 지정했어요`);
  };
  const runParse = (text) => {
    if (!text.trim()) return;
    const tsv = text.split(/\r?\n/).filter((l3) => l3.trim()).map((l3) => l3.split("	"));
    if (tsv.length > 1 && tsv.some((r3) => r3.length >= 6) && isTravelWalletTable(tsv)) {
      const tw = travelWalletToEntries(tsv, { rules: db.categoryRules, settings: db.settings });
      if (tw.entries.length) {
        const seen = new Set(live.map((x2) => x2.sourceHash).filter(Boolean));
        const fresh = tw.entries.filter((x2) => !seen.has(x2.sourceHash));
        const rec = reconcile2(fresh, live);
        setMulti({ entries: fresh, gaps: [], ...rec, picked: rec.added.map(() => true), fromTravelWallet: tw.entries.length });
        setDraft(null);
        return;
      }
    }
    const res = parsePaste2(text, { rules: db.categoryRules, settings: db.settings });
    if (res.mode === "multi") {
      const rec = reconcile2(res.entries, live);
      setMulti({ ...res, ...rec, picked: rec.added.map(() => true) });
      setDraft(null);
    } else {
      setDraft(makeEntry(res.entries[0]));
      setMulti(null);
    }
  };
  const onCapture = async (ev) => {
    const files = Array.from(ev.target && ev.target.files || []).filter((f3) => !f3.type || f3.type.startsWith("image/"));
    if (ev.target) ev.target.value = "";
    if (!files.length) return;
    setOcrState({ text: "글자 인식 준비 중… (처음 한 번은 도구를 받느라 조금 걸려요)" });
    try {
      const pages = await readImages(files, (m3) => {
        if (m3.status === "recognizing text") {
          setOcrState({ text: `캡처 읽는 중 ${m3.page}/${m3.pages} · ${Math.round((m3.progress || 0) * 100)}%` });
        }
      });
      const res = parseCaptures(pages, { rules: db.categoryRules, settings: db.settings });
      setOcrState(null);
      if (!res.entries.length) {
        flash(res.skippedNoKrw ? "원화 금액이 보이는 부분까지 함께 캡처해주세요" : "캡처에서 내역을 찾지 못했어요. 가맹점과 금액이 보이게 잘라주세요");
        return;
      }
      const rec = reconcile2(res.entries, live);
      setMulti({ ...res, ...rec, picked: rec.added.map(() => true), fromCapture: files.length });
      setDraft(null);
    } catch (err) {
      setOcrState(null);
      flash(String(err && err.message || err));
    }
  };
  const onPaste = (e3) => {
    const t4 = e3.clipboardData ? e3.clipboardData.getData("text") : "";
    if (t4 && t4.trim()) {
      setPaste(t4);
      setTimeout(() => runParse(t4), 0);
    }
  };
  const dup = T2(() => {
    if (!draft || !draft.amount) return null;
    return live.find((e3) => e3.date === draft.date && e3.amount === draft.amount && e3.type === draft.type) || null;
  }, [draft, live]);
  const commitDraft = () => {
    if (!draft || !draft.amount) return;
    addEntries([draft]);
    setDraft(null);
    setPaste("");
    flash("기록했어요");
  };
  const commitMulti = () => {
    const picked = multi.added.filter((_2, i3) => multi.picked[i3]);
    if (picked.length) addEntries(picked);
    const skipped = multi.merged.length;
    setMulti(null);
    setPaste("");
    flash(`${picked.length}건 기록${skipped ? ` · 중복 ${skipped}건 제외` : ""}`);
  };
  const range = T2(() => periodRange(cursor, db.settings.monthStartDay), [cursor, db.settings.monthStartDay]);
  const inRange = T2(
    () => live.filter((e3) => e3.date >= range.start && e3.date <= range.end).sort((a3, b3) => a3.date < b3.date ? 1 : a3.date > b3.date ? -1 : b3.createdAt - a3.createdAt),
    [live, range]
  );
  const axes = T2(() => {
    let variable = 0, fixed = 0, family = 0, familyExtra = 0, travel = 0, cash = 0, income = 0, welfare2 = 0;
    for (const e3 of inRange) {
      if (e3.type === "income") {
        income += e3.amount;
        continue;
      }
      if (e3.type !== "expense") continue;
      const amt2 = e3.isRefund ? -e3.amount : e3.amount;
      if (e3.transferKind === "welfare") {
        welfare2 += amt2;
        continue;
      }
      if (e3.transferKind && e3.transferKind !== "external") continue;
      if (e3.category === "family") {
        if (e3.isExtra) familyExtra += amt2;
        else family += amt2;
      } else if (e3.category === "travel") travel += amt2;
      else if (e3.fixedId) fixed += amt2;
      else if (e3.paymentMethod === "cash") cash += amt2;
      else variable += amt2;
    }
    return {
      variable,
      fixed,
      family,
      familyExtra,
      travel,
      cash,
      welfare: welfare2,
      income,
      expense: variable + fixed + family + familyExtra + travel + cash
    };
  }, [inRange]);
  const inbox = T2(() => live.filter((e3) => e3.status === "pending"), [live]);
  const autoPlan = T2(() => {
    if (!inbox.length) return [];
    const opts = { settings: db.settings, rules: db.categoryRules || [] };
    const pend = new Set(inbox.map((e3) => e3.id));
    const refundIds = new Set(findRefundPairs(live).filter((p3) => pend.has(p3.refund.id)).map((p3) => p3.refund.id));
    const out = [];
    for (const e3 of inbox) {
      if (refundIds.has(e3.id)) {
        out.push({
          id: e3.id,
          why: "환불",
          memo: e3.memo,
          amount: e3.amount,
          patch: { type: "expense", isRefund: true, transferKind: null, status: "confirmed", needsCheck: false, confidence: 1 }
        });
        continue;
      }
      const r3 = applyUserRules({ ...e3, status: "pending", needsCheck: false }, db.categoryRules || []);
      if (r3 && r3.transferKind === "verify" && e3.transferKind !== "verify") {
        out.push({
          id: e3.id,
          why: "규칙",
          memo: e3.memo,
          amount: e3.amount,
          patch: { category: r3.category, transferKind: "verify", status: "confirmed", needsCheck: false, confidence: 1 }
        });
        continue;
      }
      const d3 = reclassifyOne(e3, opts);
      if (d3 && d3.status === "confirmed") {
        out.push({ id: e3.id, why: d3.type === "income" ? "수입" : "이체", memo: e3.memo, amount: e3.amount, patch: d3 });
      }
    }
    return out;
  }, [inbox, live, db.settings, db.categoryRules]);
  const runAutoFix = () => {
    if (!autoPlan.length) return;
    const byId = new Map(autoPlan.map((c3) => [c3.id, c3.patch]));
    const before = live.filter((e3) => byId.has(e3.id)).map((e3) => ({
      id: e3.id,
      type: e3.type,
      category: e3.category,
      transferKind: e3.transferKind || null,
      isRefund: !!e3.isRefund,
      status: e3.status,
      needsCheck: !!e3.needsCheck,
      confidence: e3.confidence
    }));
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => byId.has(e3.id) ? { ...e3, ...byId.get(e3.id), updatedAt: Date.now(), dirty: true } : e3);
    });
    setAutoUndo(before);
    schedulePush();
    flash(`${before.length}건을 처리했어요`);
  };
  const undoAutoFix = () => {
    if (!autoUndo) return;
    const byId = new Map(autoUndo.map((b3) => [b3.id, b3]));
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => byId.has(e3.id) ? { ...e3, ...byId.get(e3.id), updatedAt: Date.now(), dirty: true } : e3);
    });
    const n3 = autoUndo.length;
    setAutoUndo(null);
    schedulePush();
    flash(`${n3}건을 되돌렸어요`);
  };
  const weird = T2(() => live.filter((e3) => e3.amount >= 1e9), [live]);
  const dropWeird = () => {
    const ids = new Set(weird.map((e3) => e3.id));
    patch((d3) => {
      d3.entries = d3.entries.map((e3) => ids.has(e3.id) ? { ...e3, deleted: true, updatedAt: Date.now(), dirty: true } : e3);
    });
    setWeirdOpen(false);
    schedulePush();
    flash(`${ids.size}건을 지웠어요`);
  };
  h2(() => {
    if (tab === "trip" && !tripId && db.trips.length) setTripId(db.trips[0].id);
    if (tab === "car" && !carId && db.vehicles.length) setCarId(db.vehicles[0].id);
  }, [tab, tripId, carId, db.trips, db.vehicles]);
  const welfare = T2(() => {
    const start = db.settings.welfarePeriodStart || `${(/* @__PURE__ */ new Date()).getFullYear()}-01`;
    const list = live.filter((e3) => e3.transferKind === "welfare" && e3.date >= `${start}-01`).sort((a3, b3) => a3.date < b3.date ? 1 : -1);
    const used = list.reduce((s3, e3) => s3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
    const reported = list.find((e3) => e3.welfareBalance != null);
    const limit = db.settings.welfareLimit || 0;
    return {
      used,
      count: list.length,
      start,
      limit,
      left: reported ? reported.welfareBalance : limit ? limit - used : null,
      fromSms: !!reported,
      at: reported ? reported.date : null
    };
  }, [live, db.settings.welfareLimit, db.settings.welfarePeriodStart]);
  const searchHits = T2(() => {
    const q3 = query.trim().toLowerCase();
    if (!q3) return [];
    const qNum = q3.replace(/[^\d]/g, "");
    const md = q3.match(/(\d{1,2})\s*[월/.\-]\s*(\d{1,2})\s*일?/);
    const qDate = md ? `-${String(md[1]).padStart(2, "0")}-${String(md[2]).padStart(2, "0")}` : "";
    return live.filter((e3) => {
      const cat = CAT_MAP2[e3.category]?.label || "";
      const tn = e3.tripId ? db.trips.find((t4) => t4.id === e3.tripId)?.name || "" : "";
      const cn = e3.carId ? db.vehicles.find((v3) => v3.id === e3.carId)?.name || "" : "";
      return String(e3.memo ?? "").toLowerCase().includes(q3) || cat.toLowerCase().includes(q3) || String(e3.amount).includes(q3) || qNum.length >= 2 && String(e3.amount).includes(qNum) || qDate && String(e3.date || "").includes(qDate) || tn.toLowerCase().includes(q3) || cn.toLowerCase().includes(q3) || String(e3.rawText ?? "").toLowerCase().includes(q3) || String(e3.counterpartyRaw ?? "").toLowerCase().includes(q3) || String(e3.date ?? "").includes(q3);
    }).sort((a3, b3) => a3.date < b3.date ? 1 : a3.date > b3.date ? -1 : b3.createdAt - a3.createdAt);
  }, [live, query, db.trips, db.vehicles]);
  const shiftMonth = (d3) => {
    const [y3, m3] = cursor.split("-").map(Number);
    const nd = new Date(y3, m3 - 1 + d3, 1);
    setCursor(`${nd.getFullYear()}-${String(nd.getMonth() + 1).padStart(2, "0")}`);
  };
  const latestMileage = (id) => {
    const logs = db.mileageLogs.filter((l3) => l3.carId === id).sort((a3, b3) => a3.date < b3.date ? 1 : -1);
    return logs.length ? logs[0].mileage : null;
  };
  const car = db.vehicles.find((v3) => v3.id === carId);
  const carKm = carId ? latestMileage(carId) : null;
  const rowProps = {
    trips: db.trips,
    vehicles: db.vehicles,
    onQuickCat: quickCat,
    onEdit: (e3) => setEditing({ ...e3 }),
    onDelete: removeEntry,
    selecting: sel.on,
    selectedIds: sel.ids,
    onToggle: toggleSel
  };
  const [my, mm] = cursor.split("-");
  const pasteBox = html4`
    <div class="pasteBox">
      <div class="pasteHint"><${IcoClip} size=${13} /> 카드 문자, 자동이체 문자, 통장 거래내역을 붙여넣거나 앱 화면 캡처를 올리세요</div>
      <textarea class="pasteArea" value=${paste} onInput=${(e3) => setPaste(e3.target.value)} onPaste=${onPaste}
        placeholder=${"예) 신한카드(1234) 승인 5,000원 09/09 스타벅스강남점\n\n또는 통장 거래내역 여러 줄을 통째로"}></textarea>
      <div class="pasteActs">
        <button class="btn ghost sm" onClick=${() => setDraft(makeEntry({}))}><${IcoPlus} size=${14} /> 직접 입력</button>
        <button class="btn ghost sm capBtn" onClick=${() => capRef.current && capRef.current.click()} disabled=${!!ocrState}>캡처 올리기</button>
        <input ref=${capRef} type="file" accept="image/*" multiple style="display:none" onChange=${onCapture} />
        <button class="btn primary sm" onClick=${() => runParse(paste)} disabled=${!paste.trim()}>내역 확인</button>
      </div>
      ${ocrState && html4`<div class="ocrState">${ocrState.text}</div>`}
    </div>`;
  const selList = T2(() => live.filter((e3) => sel.ids.includes(e3.id)), [live, sel.ids]);
  const bulkBar = sel.on && html4`
    <div class="bulkBar">
      <div class="bulkTop">
        <b>${sel.ids.length}건</b> 골랐어요
        <button class="btn ghost sm" onClick=${() => setSel({ on: false, ids: [] })}>그만두기</button>
      </div>
      ${sel.ids.length > 0 && html4`
        <div class="bulkActs">
          ${db.trips.length > 0 && html4`
            <select class="bulkSel" value="" onChange=${(ev) => {
    if (ev.target.value) {
      bulkTrip(ev.target.value);
      ev.target.value = "";
    }
  }}>
              <option value="">여행에 넣기…</option>
              ${db.trips.map((t4) => html4`<option key=${t4.id} value=${t4.id}>${t4.name}</option>`)}
              <option value="__none">여행에서 빼기</option>
            </select>`}
          ${db.vehicles.length > 0 && html4`
            <select class="bulkSel" value="" onChange=${(ev) => {
    if (ev.target.value) {
      bulkCar(ev.target.value);
      ev.target.value = "";
    }
  }}>
              <option value="">차량 지정…</option>
              ${db.vehicles.map((v3) => html4`<option key=${v3.id} value=${v3.id}>${v3.name}</option>`)}
              <option value="__none">차량 해제</option>
            </select>`}
          <select class="bulkSel" value="" onChange=${(ev) => {
    if (ev.target.value) {
      bulkCat(ev.target.value);
      ev.target.value = "";
    }
  }}>
            <option value="">분류 바꾸기…</option>
            ${CATEGORIES2.filter((c3) => c3.key !== "income").map((c3) => html4`<option key=${c3.key} value=${c3.key}>${c3.label}</option>`)}
          </select>
          <button class="btn ghost sm" onClick=${bulkExclude}>합계에서 빼기</button>
          <button class="btn danger sm" onClick=${bulkDelete}>삭제</button>
        </div>`}
    </div>`;
  const monthHead = html4`
          <div class="monthBar">
            <button class="nav" onClick=${() => shiftMonth(-1)} aria-label="이전 달"><${IcoLeft} size=${18} /></button>
            <span class="monthLabel">${my}년 ${parseInt(mm, 10)}월</span>
            <button class="nav" onClick=${() => shiftMonth(1)} aria-label="다음 달"><${IcoRight} size=${18} /></button>
          </div>

          <div class="summaryToggle">
            <button class=${"sumTab" + (!showChart ? " on" : "")} onClick=${() => setShowChart(false)}>숫자</button>
            <button class=${"sumTab" + (showChart === "chart" ? " on" : "")} onClick=${() => setShowChart("chart")}>그래프</button>
            <button class=${"sumTab" + (showChart === "report" ? " on" : "")} onClick=${() => setShowChart("report")}>결산</button>
          </div>

          ${showChart === "report" ? html4`<${ReportView} all=${live} monthStartDay=${db.settings.monthStartDay} />` : showChart === "chart" ? html4`<${StatsView} entries=${inRange} all=${live} />` : html4`
          <div class="axes">
            ${[
    ["변동비", axes.variable],
    ["고정비", axes.fixed],
    ["가족 송금", axes.family],
    ["별도 송금", axes.familyExtra],
    ["여행", axes.travel],
    ["현금", axes.cash]
  ].filter(([, v3], i3) => v3 !== 0 || i3 === 0).map(([label, v3]) => html4`
                <div class="axis" key=${label}>
                  <span class="axisLabel">${label}</span>
                  <span class="axisVal">₩${formatWon2(v3)}</span>
                </div>`)}
            <div class="axis total">
              <span class="axisLabel">지출 합계</span>
              <span class="axisVal">₩${formatWon2(axes.expense)}</span>
            </div>
            ${(axes.welfare > 0 || welfare.used > 0) && html4`
              <div class="axis welfare">
                <span class="axisLabel">복지카드 <span class="axisNote">합계 제외</span></span>
                <span class="axisVal">₩${formatWon2(axes.welfare)}</span>
              </div>`}
            ${welfare.left != null && html4`
              <div class="welfareBar">
                <div class="welfareTop">
                  <span>복지카드 남은 금액</span>
                  <b class=${welfare.left < 0 ? "over" : ""}>₩${formatWon2(welfare.left)}</b>
                </div>
                ${welfare.limit > 0 && html4`
                  <div class="welfareGauge">
                    <div class="welfareFill" style=${`width:${Math.min(100, Math.max(0, welfare.used / welfare.limit * 100))}%`}></div>
                  </div>`}
                <div class="welfareSub">
                  ${welfare.start.replace("-", "년 ")}월부터 ${welfare.count}건 · ₩${formatWon2(welfare.used)} 사용
                  ${welfare.fromSms ? html4` · ${welfare.at} 문자 기준` : welfare.limit ? "" : ""}
                </div>
              </div>`}
            ${welfare.left == null && welfare.used > 0 && html4`
              <div class="welfareBar">
                <div class="welfareSub">복지카드 한도를 설정하면 남은 금액이 여기 보여요 · 지금까지 ₩${formatWon2(welfare.used)} 사용</div>
              </div>`}
            ${axes.income > 0 && html4`
              <div class="axis income">
                <span class="axisLabel">수입</span>
                <span class="axisVal">₩${formatWon2(axes.income)}</span>
              </div>`}
          </div>`}`;
  return html4`
    <div class="app">
      <header class="head">
        <button class="gear" onClick=${() => setShowSettings((v3) => !v3)} aria-label="설정"><${IcoGear} size=${17} /></button>
        ${db.settings.sheetUrl && html4`
          <button class=${"syncDot " + sync.state + (sync.fails >= 3 ? " bad" : "")} onClick=${() => runSync(true)}
            title=${sync.state === "error" ? sync.msg : "구글시트와 맞추기"} aria-label="동기화">
            ${sync.state === "syncing" ? "⋯" : sync.fails >= 3 ? "!" : "●"}
          </button>`}
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">붙여넣으면 알아서 적히는 장부</div>
      </header>

      ${showSettings && html4`<${Settings} db=${db} setDb=${setDb} onClose=${() => setShowSettings(false)} flash=${flash} onSync=${() => runSync(true)} onUndoImport=${undoImport} onOpenAccounts=${() => setTab("asset")}
        reclass=${reclass} reclassUndo=${reclassUndo} onPlanReclass=${planReclass} onRunReclass=${runReclass} onUndoReclass=${undoReclass} onCancelReclass=${() => setReclass(null)} />`}

      ${broken.length > 0 && html4`
        <div class="inbox">
          <div class="inboxHead"><${IcoAlert} size=${14} /> 날짜가 깨진 기록 ${broken.length}건</div>
          <div class="inboxBulk">
            구글시트가 날짜 칸을 바꿔버려 생긴 문제입니다. 눌러서 되돌릴 수 있어요.
            <button class="btn primary sm" onClick=${fixDates}>날짜 고치기</button>
          </div>
        </div>`}

      ${weird.length > 0 && html4`
        <div class="inbox warn">
          <div class="inboxHead"><${IcoAlert} size=${14} /> 금액이 이상한 기록 ${weird.length}건</div>
          <div class="inboxBulk">
            <span>통장 계좌번호가 금액으로 읽힌 기록입니다. 내용을 보고 지울 수 있어요.</span>
            <button class="btn ghost sm" onClick=${() => setWeirdOpen((v3) => !v3)}>${weirdOpen ? "접기" : "보기"}</button>
            <button class="btn primary sm" onClick=${dropWeird}>${weird.length}건 지우기</button>
          </div>
          ${weirdOpen && html4`
            <div class="inboxBody">
              ${weird.slice(0, 20).map((e3) => html4`
                <div class="inboxItem" key=${e3.id}>
                  <div class="inboxTop">
                    <span class="inboxMemo">${e3.memo || "메모 없음"}</span>
                    <span class="inboxAmt">₩${formatWon2(e3.amount)}</span>
                  </div>
                  <div class="inboxSub">${formatDateLabel2(e3.date)}</div>
                </div>`)}
            </div>`}
        </div>`}

      <div class="tabs">
        <button class=${"tab" + (tab === "month" ? " on" : "")} onClick=${() => setTab("month")}>월별</button>
        <button class=${"tab" + (tab === "trip" ? " on" : "")} onClick=${() => {
    setTab("trip");
    if (!tripId && db.trips.length) setTripId(db.trips[0].id);
  }}><${IcoPlane} size=${12} /> 여행</button>
        <button class=${"tab" + (tab === "car" ? " on" : "")} onClick=${() => {
    setTab("car");
    if (!carId && db.vehicles.length) setCarId(db.vehicles[0].id);
  }}><${IcoCar} size=${12} /> 차량</button>
      </div>

      ${tab === "month" && !query.trim() ? monthHead : ""}

      ${draft && html4`
        <div class="card">
          <div class="cardLabel">아래 내용으로 기록할게요</div>
          ${dup && html4`<div class="warn"><${IcoAlert} size=${13} /> ${formatDateLabel2(dup.date)}에 같은 금액(₩${formatWon2(dup.amount)}) 내역이 이미 있어요 — ${dup.memo || "메모 없음"}</div>`}
          <${EntryForm} value=${draft} onChange=${setDraft} onSave=${commitDraft} onCancel=${() => setDraft(null)}
            saveLabel="기록하기" trips=${db.trips} vehicles=${db.vehicles} onCreateTrip=${addTrip} onCreateVehicle=${addVehicle} />
        </div>`}

      ${multi && html4`
        <div class="card">
          <div class="cardLabel">${multi.fromCapture ? `캡처 ${multi.fromCapture}장에서 읽은 내역` : multi.fromTravelWallet ? "트래블월렛 이용내역" : "붙여넣은 내역"} ${multi.added.length + multi.merged.length + multi.review.length}건</div>
          ${multi.fromTravelWallet && html4`<div class="hint sm">결제·정산·현지 인출은 여행 지출로, 취소는 환불로 넣습니다.
            충전은 통장에서 이미 빠져나간 돈이라 <b>합계에서 뺍니다</b>(이중 계산 방지).</div>`}
          ${multi.fromCapture && html4`<div class="hint sm">글자 인식은 틀릴 수 있어요. 가맹점·금액을 한 번 훑어보고 이상한 줄은 체크를 빼주세요.
            ${multi.added.some((e3) => e3.dateGuessed) ? " 날짜를 못 읽은 줄은 빨간 날짜 칸을 눌러 여기서 바로 고칠 수 있어요." : ""}
            ${multi.skippedNoKrw ? ` 원화 금액이 안 보인 ${multi.skippedNoKrw}건은 뺐어요.` : ""}</div>`}
          ${multi.gaps.length > 0 && html4`
            <div class="warn"><${IcoAlert} size=${13} /> 잔액이 이어지지 않아요. ${multi.gaps[0].beforeDate} 부근에 안 보이는 거래 ₩${formatWon2(multi.gaps[0].missing)}이 있어요. 조금 더 위로 스크롤해서 다시 붙여넣어 주세요.</div>`}
          <div class="multiList">
            ${multi.added.map((e3, i3) => html4`
              <label class="multiRow" key=${i3}>
                <input type="checkbox" checked=${multi.picked[i3]}
                  onChange=${() => setMulti((m3) => ({ ...m3, picked: m3.picked.map((p3, j3) => j3 === i3 ? !p3 : p3) }))} />
                ${e3.dateGuessed || e3.dateFixed ? html4`<input type="date" class=${"multiDateFix" + (e3.dateGuessed ? "" : " done")} value=${e3.date} onClick=${(ev) => ev.stopPropagation()}
                      onInput=${(ev) => {
    const v3 = ev.target.value;
    if (v3) setMulti((m3) => ({ ...m3, added: m3.added.map((x2, j3) => j3 === i3 ? { ...x2, date: v3, dateGuessed: false, dateFixed: true, needsCheck: false } : x2) }));
  }} />` : html4`<span class="multiDate">${e3.date.slice(5)}</span>`}
                <span class="multiMemo">${e3.memo}${e3.currency ? html4` <span class="multiFx">${e3.currency} ${e3.foreignAmount}</span>` : ""}</span>
                ${multi.fromCapture && html4`<span class="multiCat">${e3.isRefund ? "취소" : e3.type === "income" ? "수입" : e3.type !== "expense" ? "이체" : (CAT_MAP2[e3.category] || {}).label || "기타"}</span>`}
                <span class="multiAmt">${e3.isRefund ? "+" : sign(e3.type)}₩${formatWon2(e3.amount)}</span>
              </label>`)}
            ${multi.merged.map((m3, i3) => html4`
              <div class="multiRow skip" key=${"m" + i3}>
                <span class="multiDate">${m3.incoming.date.slice(5)}</span>
                <span class="multiMemo">${m3.incoming.memo}</span>
                <span class="multiAmt">중복</span>
              </div>`)}
            ${multi.review.map((m3, i3) => html4`
              <div class="multiRow review" key=${"r" + i3}>
                <span class="multiDate">${m3.incoming.date.slice(5)}</span>
                <span class="multiMemo">${m3.incoming.memo} · ${m3.reasons.join(", ")}</span>
                <span class="multiAmt">확인</span>
              </div>`)}
          </div>
          <div class="acts">
            <button class="btn ghost" onClick=${() => setMulti(null)}>취소</button>
            <button class="btn primary" onClick=${commitMulti}>${multi.picked.filter(Boolean).length}건 기록</button>
          </div>
        </div>`}

      ${editing && html4`
        <div class="card">
          <div class="cardLabel">내역 수정</div>
          <${EntryForm} value=${editing} onChange=${setEditing}
            onSave=${() => {
    const orig = db.entries.find((x2) => x2.id === editing.id);
    const catChanged = orig && editing.type === "expense" && orig.type === "expense" && orig.category !== editing.category;
    const memo = String(editing.memo || "").trim();
    const learn = !!editing._learnMerchant;
    const { category, _learnMerchant, ...rest0 } = editing;
    const rest = { ...rest0, memo, normKey: normKey2(memo), counterpartyRaw: memo };
    updateEntry(editing.id, { ...catChanged ? rest : { ...rest, category }, status: "confirmed" });
    if (catChanged) quickCat(orig, category);
    if (learn && normKey2(memo).length >= 2) {
      const nk = normKey2(memo);
      patch((d3) => {
        const rules = d3.categoryRules || [];
        const i3 = rules.findIndex((r3) => r3.normKey === nk);
        const made = {
          id: i3 >= 0 ? rules[i3].id : uid2(),
          normKey: nk,
          name: memo,
          category: category || "etc",
          amountHint: editing.amount || null
        };
        d3.categoryRules = i3 >= 0 ? rules.map((r3, j3) => j3 === i3 ? { ...r3, ...made } : r3) : [...rules, made];
      });
      flash(`${memo}을(를) 기억했어요 · 같은 금액 문자에 씁니다`);
    }
    setEditing(null);
  }}
            onCancel=${() => setEditing(null)} saveLabel="수정 완료"
            trips=${db.trips} vehicles=${db.vehicles} onCreateTrip=${addTrip} onCreateVehicle=${addVehicle} />
        </div>`}

      <div class="search">
        <${IcoSearch} size=${14} class="searchIco" />
        <input class="searchInp" value=${query} onInput=${(e3) => setQuery(e3.target.value)} placeholder="검색 (가맹점, 문자 원문, 37,090, 7월 31일, 여행·차량)" />
        ${query && html4`<button class="clear" onClick=${() => setQuery("")}><${IcoX} size=${14} /></button>`}
      </div>

      <div class="toolRow">
        <button class="toolBtn" onClick=${() => setPanel(panel === "review" ? null : "review")}>분류 정리</button>
        <button class="toolBtn" onClick=${() => setPanel(panel === "tidy" ? null : "tidy")}>자동 정리</button>
        <button class="toolBtn" onClick=${() => setPanel(panel === "import" ? null : "import")}>명세서 파일</button>
      </div>

      ${panel === "review" && html4`<${ReviewView} entries=${live} onApply=${applyGroup} onApplyRules=${applyRuleSet}
        userName=${db.settings.userName} ruleCount=${(db.categoryRules || []).length} onClose=${() => setPanel(null)} />`}
      ${panel === "tidy" && html4`<${TidyPanel} db=${db} entries=${live} patch=${patch} flash=${flash} onClose=${() => setPanel(null)} />`}
      ${panel === "import" && html4`<${ImportPanel} db=${db} entries=${db.entries} flash=${flash}
        onImport=${(list, fileName) => {
    const made = addEntries(list, { id: uid2(), name: fileName });
    flash(`${made.length}건 넣었어요 · 잘못됐으면 설정에서 되돌릴 수 있어요`);
    setPanel(null);
  }}
        onClose=${() => setPanel(null)} />`}

      ${autoUndo && html4`
        <div class="undoBar">
          방금 <b>${autoUndo.length}건</b>을 처리했어요
          <button class="btn ghost sm" onClick=${undoAutoFix}>되돌리기</button>
        </div>`}

      ${inbox.length > 0 && html4`
        <div class=${"inbox" + (inboxOpen ? " open" : "")}>
          <button class="inboxHead" onClick=${() => setInboxOpen((v3) => !v3)}>
            <${IcoInbox} size=${14} /> 확인할 항목 ${inbox.length}건
            ${autoPlan.length > 0 ? html4`<span class="inboxHint">${autoPlan.length}건은 한 번에 처리돼요</span>` : ""}
            <span class="inboxCaret">${inboxOpen ? "▴" : "▾"}</span>
          </button>
          ${autoPlan.length > 0 && html4`
            <div class="inboxBulk">
              <span>환불·수입·규칙으로 답이 정해진 <b>${autoPlan.length}건</b>이 있어요.</span>
              <button class="btn primary sm" onClick=${runAutoFix}>한 번에 처리</button>
            </div>`}
          ${inboxOpen && html4`
          <div class="inboxBody">
            ${inbox.slice(0, 4).map((e3) => e3.direction === "in" || e3.transferKind === "excluded" ? html4`
              <div class="inboxItem" key=${e3.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${e3.memo || "메모 없음"}</span>
                  <span class="inboxAmt">+₩${formatWon2(e3.amount)}</span>
                </div>
                <div class="inboxSub">${formatDateLabel2(e3.date)} · 이 입금은 수입인가요?</div>
                <div class="chips">
                  <button class="chip sm" style="border-color:#3D6B4F55;color:#3D6B4F"
                    onClick=${() => updateEntry(e3.id, { type: "income", category: "income", transferKind: null, status: "confirmed", confidence: 1 })}>수입이에요</button>
                  <button class="chip sm" style="border-color:#B23A2455;color:#B23A24"
                    onClick=${() => updateEntry(e3.id, { type: "expense", isRefund: true, transferKind: null, status: "confirmed", confidence: 1 })}>환불이에요</button>
                  <button class="chip sm dash" onClick=${() => updateEntry(e3.id, { status: "confirmed" })}>수입 아님</button>
                  <button class="chip sm dash" onClick=${() => {
    addExcluded(e3.memo);
    updateEntry(e3.id, { status: "confirmed" });
  }}>
                    ${e3.memo ? `${e3.memo} 항상 제외` : "항상 제외"}
                  </button>
                </div>
              </div>` : html4`
              <div class="inboxItem" key=${e3.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${e3.memo || "메모 없음"}</span>
                  <span class="inboxAmt">₩${formatWon2(e3.amount)}</span>
                </div>
                <div class="inboxSub">${formatDateLabel2(e3.date)} · 분류가 애매해요</div>
                <div class="chips">
                  ${CATEGORIES2.filter((c3) => c3.key !== "income").slice(0, 6).map((c3) => html4`
                    <button key=${c3.key} class="chip sm" style=${`border-color:${c3.color}55;color:${c3.color}`}
                      onClick=${() => quickCat(e3, c3.key)}>${c3.label}</button>`)}
                  <button class="chip sm dash" onClick=${() => updateEntry(e3.id, { status: "confirmed" })}>이대로 두기</button>
                </div>
              </div>`)}
            ${inbox.length > 4 && html4`<div class="inboxMore">외 ${inbox.length - 4}건</div>`}
          </div>`}
        </div>`}

      ${query.trim() ? html4`<div class="results">
            <div class="resultHead">"${query.trim()}" 검색 결과 ${searchHits.length}건</div>
            ${searchHits.length === 0 ? html4`<div class="empty">일치하는 내역이 없어요.</div>` : html4`
              <div class="listHead">
                <span class="listCount">${searchHits.length}건</span>
                ${sel.on ? html4`<button class="linkBtn" onClick=${() => setSel({ on: true, ids: sel.ids.length === searchHits.length ? [] : searchHits.map((e3) => e3.id) })}>
                      ${sel.ids.length === searchHits.length ? "전체 해제" : "전체 고르기"}</button>` : html4`<button class="linkBtn" onClick=${() => setSel({ on: true, ids: [] })}>고르기</button>`}
              </div>
              <${DateGroups} list=${searchHits} ...${rowProps} />`}
          </div>` : tab === "month" ? html4`
          <${FixedView} db=${db} patch=${patch} entries=${live} flash=${flash} onAdopt=${adoptFixed} />

          ${inRange.length === 0 ? html4`
              <div class="listHead">
                <button class=${"linkBtn addToggle" + (addOpen ? " on" : "")} onClick=${() => setAddOpen((v3) => !v3)}>
                  ${addOpen ? "닫기" : "+ 기록 추가"}
                </button>
                <span class="listCount">0건</span>
              </div>
              ${addOpen && pasteBox}
              <div class="empty">이 기간 기록이 아직 없어요.<br /><b>+ 기록 추가</b>를 눌러 문자나 거래내역을 붙여넣어 보세요.</div>` : html4`
              <div class="listHead">
                <button class=${"linkBtn addToggle" + (addOpen ? " on" : "")} onClick=${() => setAddOpen((v3) => !v3)}>
                  ${addOpen ? "닫기" : "+ 기록 추가"}
                </button>
                <span class="listCount">${inRange.length}건</span>
                ${sel.on ? html4`<button class="linkBtn" onClick=${() => setSel({ on: true, ids: sel.ids.length === inRange.length ? [] : inRange.map((e3) => e3.id) })}>
                      ${sel.ids.length === inRange.length ? "전체 해제" : "전체 고르기"}</button>` : html4`<button class="linkBtn" onClick=${() => setSel({ on: true, ids: [] })}>고르기</button>`}
              </div>
              ${addOpen && pasteBox}
              <${DateGroups} list=${inRange} ...${rowProps} />`}` : tab === "asset" ? html4`<${AssetView} db=${db} entries=${live} patch=${patch} rowProps=${rowProps} />` : tab === "trip" ? html4`
          <div class="toolRow">
            <button class="toolBtn" onClick=${() => setPanel(panel === "tripFind" ? null : "tripFind")}>여행 자동 찾기</button>
            ${tripId && html4`<button class="toolBtn" onClick=${() => setPanel(panel === "tripAdj" ? null : "tripAdj")}>항목 조정</button>`}
          </div>
          ${panel === "tripFind" && html4`<${TripFinder} db=${db} entries=${live} patch=${patch} flash=${flash} onClose=${() => setPanel(null)} />`}
          ${panel === "tripAdj" && tripId && html4`<${TripAdjust} key=${tripId} db=${db} entries=${live}
            trip=${db.trips.find((t4) => t4.id === tripId)} patch=${patch} flash=${flash} onClose=${() => setPanel(null)} />`}
          <${TripView} db=${db} live=${live} tripId=${tripId} setTripId=${setTripId} rowProps=${rowProps} patch=${patch} flash=${flash} shareText=${shareText} />` : html4`
          ${carId && html4`
            <div class="toolRow">
              <button class="toolBtn" onClick=${() => setPanel(panel === "quote" ? null : "quote")}>정비 견적서 넣기</button>
            </div>`}
          ${panel === "quote" && carId && html4`<${QuotePanel} db=${db} carId=${carId} patch=${patch} flash=${flash}
            onAddEntry=${(d3) => addEntries([d3])} onClose=${() => setPanel(null)} />`}
          <${CarView} db=${db} live=${live} carId=${carId} setCarId=${setCarId} car=${car} carKm=${carKm} assignCar=${assignCar}
            mileage=${mileage} setMileage=${setMileage} mileageDate=${mileageDate} setMileageDate=${setMileageDate}
            maintEdit=${maintEdit} setMaintEdit=${setMaintEdit} patch=${patch} addVehicle=${addVehicle}
            latestMileage=${latestMileage} rowProps=${rowProps} />`}

      ${bulk && html4`
        <div class="bulkBar" role="status">
          ${bulk.applied > 0 && html4`
            <div class="bulkLine">
              <span>같은 곳 <b>${bulk.applied}건</b>도 ${CAT_MAP2[bulk.category]?.label}${ro(CAT_MAP2[bulk.category]?.label)} 바꿨어요</span>
              <button class="bulkBtn" onClick=${undoBulk}>되돌리기</button>
            </div>`}
          ${bulk.similar.length > 0 && html4`
            <div class="bulkLine">
              <span>비슷한 곳 <b>${bulk.similar.length}건</b>도 바꿀까요?
                <span class="bulkNames">${[...new Set(bulk.similar.map((e3) => e3.memo))].slice(0, 3).join(" · ")}</span></span>
              <span class="bulkActs">
                <button class="bulkBtn on" onClick=${applySimilar}>바꾸기</button>
                <button class="bulkBtn" onClick=${() => showBulk({ ...bulk, similar: [] })}>그대로</button>
              </span>
            </div>`}
          ${bulk.applied > 0 && !bulk.similar.length && html4`<button class="bulkX" onClick=${() => setBulk(null)} aria-label="닫기">×</button>`}
        </div>`}
      ${bulkBar}
      ${toast && html4`<div class="toast">${toast}</div>`}
    </div>`;
}
function ro(word) {
  const w3 = String(word || "");
  const c3 = w3.charCodeAt(w3.length - 1) - 44032;
  if (c3 < 0 || c3 > 11171) return "로";
  const jong = c3 % 28;
  return jong === 0 || jong === 8 ? "로" : "으로";
}
function TripView({ db, live, tripId, setTripId, rowProps, patch, flash, shareText }) {
  const [planOpen, setPlanOpen] = d2(false);
  const [planShareCost, setPlanShareCost] = d2(true);
  const [planText, setPlanText] = d2("");
  const [editCost, setEditCost] = d2(null);
  const [adding, setAdding] = d2(false);
  const [form, setForm] = d2({ name: "", startDate: todayISO2(), endDate: todayISO2() });
  const [editDates, setEditDates] = d2(null);
  const [askDelete, setAskDelete] = d2(false);
  const removeTrip = () => {
    const t4 = db.trips.find((x2) => x2.id === tripId);
    if (!t4) return;
    const n3 = live.filter((e3) => e3.tripId === t4.id).length;
    patch((d3) => {
      d3.trips = d3.trips.filter((x2) => x2.id !== t4.id);
      d3.entries = d3.entries.map((e3) => e3.tripId === t4.id ? { ...e3, tripId: null, updatedAt: Date.now(), dirty: true } : e3);
    });
    setAskDelete(false);
    setEditDates(null);
    setTripId(null);
    flash(n3 > 0 ? `${t4.name} 여행을 지웠어요 · ${n3}건은 기록으로 남았어요` : `${t4.name} 여행을 지웠어요`);
  };
  const stats = db.trips.map((t4) => {
    const sm = tripSummary(live, t4);
    return { ...t4, expense: sm.total, welfare: sm.welfare };
  });
  const sel = stats.find((t4) => t4.id === tripId);
  const list = live.filter((e3) => e3.tripId === tripId).sort((a3, b3) => a3.date < b3.date ? 1 : a3.date > b3.date ? -1 : b3.createdAt - a3.createdAt);
  const noDates = sel && (!sel.startDate || !sel.endDate);
  const dates = editDates || (noDates ? { id: sel.id, startDate: "", endDate: "", name: sel.name } : null);
  const saveDates = () => {
    if (!dates.startDate || !dates.endDate || dates.startDate > dates.endDate) return;
    patch((n3) => {
      n3.trips = n3.trips.map((t4) => t4.id === dates.id ? { ...t4, name: (dates.name || t4.name).trim(), startDate: dates.startDate, endDate: dates.endDate } : t4);
    });
    setEditDates(null);
    flash("여행 기간을 고쳤어요. '항목 조정'에서 지출을 넣으세요");
  };
  return html4`
    <div class="cards">
      ${stats.length === 0 && html4`<div class="empty">아직 만든 여행이 없어요.<br />아래 "+ 여행 추가"로 기간을 넣어 만들면 그 기간 지출을 찾아 묶어줍니다.</div>`}
      ${stats.map((t4) => html4`
        <button key=${t4.id} class=${"sumCard" + (tripId === t4.id ? " on" : "")} onClick=${() => {
    setTripId(t4.id);
    setEditDates(null);
  }}>
          <div class="sumName"><${IcoPlane} size=${12} /> ${t4.name}</div>
          <div class="sumAmt">₩${formatWon2(t4.expense)}</div>
        </button>`)}
      ${!adding && html4`<button class="tag dash" onClick=${() => setAdding(true)}>+ 여행 추가</button>`}
    </div>

    ${adding && html4`
      <div class="card">
        <div class="cardLabel">여행 추가</div>
        <div class="hint sm">기간을 넣으면 그 기간의 결제와 미리 결제한 항공·숙박을 찾아 묶을 수 있어요. 아직 안 떠난 여행도 됩니다.</div>
        <input class="inp" placeholder="여행 이름 (예: 오키나와 26.03)" value=${form.name}
          onInput=${(e3) => setForm((f3) => ({ ...f3, name: e3.target.value }))} />
        <div class="row wrap">
          <input type="date" class="inp date" value=${form.startDate} onInput=${(e3) => setForm((f3) => ({ ...f3, startDate: e3.target.value }))} />
          <span class="hint sm">~</span>
          <input type="date" class="inp date" value=${form.endDate} onInput=${(e3) => setForm((f3) => ({ ...f3, endDate: e3.target.value }))} />
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${() => setAdding(false)}>취소</button>
          <button class="btn primary sm" disabled=${!form.name.trim() || form.startDate > form.endDate}
            onClick=${() => {
    const id = uid2();
    patch((n3) => {
      n3.trips = [...n3.trips, { id, name: form.name.trim(), startDate: form.startDate, endDate: form.endDate, createdAt: Date.now() }];
    });
    setTripId(id);
    setAdding(false);
    setForm({ name: "", startDate: todayISO2(), endDate: todayISO2() });
    flash("여행을 만들었어요. '항목 조정'으로 지출을 넣으세요");
  }}>만들기</button>
        </div>
      </div>`}
    ${sel && html4`
      <div class="monthBar">
        <span class="monthLabel">${sel.name}</span>
        <span class="totals"><span class="exp">₩${formatWon2(sel.expense)}</span></span>
      </div>
      ${dates ? html4`
          <div class="card tripDates">
            <div class="cardLabel">${noDates && !editDates ? "이 여행은 기간이 없어요 — 기간을 넣어야 지출을 찾아 묶을 수 있어요" : "여행 기간 고치기"}</div>
            <input class="inp" placeholder="여행 이름" value=${dates.name} onInput=${(e3) => setEditDates({ ...dates, name: e3.target.value })} />
            <div class="row wrap">
              <input type="date" class="inp date" value=${dates.startDate} onInput=${(e3) => setEditDates({ ...dates, startDate: e3.target.value })} />
              <span class="hint sm">~</span>
              <input type="date" class="inp date" value=${dates.endDate} onInput=${(e3) => setEditDates({ ...dates, endDate: e3.target.value })} />
            </div>
            <div class="acts">
              ${editDates && !noDates && html4`<button class="btn ghost sm" onClick=${() => setEditDates(null)}>취소</button>`}
              <button class="btn primary sm" disabled=${!dates.startDate || !dates.endDate || dates.startDate > dates.endDate} onClick=${saveDates}>기간 저장</button>
            </div>
          </div>` : ""}
      ${(() => {
    const sm = tripSummary(live, sel);
    return html4`
          <div class="tripSum">
            <div class="tripSumTop">
              ${sm.from ? `${sm.from.replace(/-/g, ".").slice(2)} ~ ${sm.to.slice(5).replace("-", ".")}${sm.days ? ` · ${sm.days}일` : ""} · ` : ""}${sm.count}건
              ${!noDates && !editDates && html4`<button class="pickToggle" onClick=${() => setEditDates({ id: sel.id, name: sel.name, startDate: sel.startDate, endDate: sel.endDate })}>기간 고치기</button>`}
              ${!editDates && !askDelete && html4`<button class="pickToggle warn" onClick=${() => setAskDelete(true)}>여행 삭제</button>`}
            </div>
            ${askDelete && html4`
              <div class="delAsk">
                <div class="hint sm">${sm.count > 0 ? `"${sel.name}" 여행을 지울까요? 묶인 ${sm.count}건은 여행에서만 빠지고 기록은 그대로 남습니다.` : `"${sel.name}" 여행을 지울까요?`}</div>
                <div class="acts">
                  <button class="btn ghost sm" onClick=${() => setAskDelete(false)}>그만두기</button>
                  <button class="btn danger sm" onClick=${removeTrip}>여행 삭제</button>
                </div>
              </div>`}
            ${sm.days && sm.total > 0 && html4`<div class="tripSumTop">하루 평균 ₩${formatWon2(Math.round(sm.total / sm.days))}</div>`}
            <div class="tripCats">
              ${sm.cats.map(([k3, v3]) => html4`
                <span class="tripCat" key=${k3}>
                  <span class="dot" style=${`background:${CAT_MAP2[k3]?.color || "#999"}`}></span>
                  ${CAT_MAP2[k3]?.label || k3} ₩${formatWon2(v3)}
                </span>`)}
            </div>
            ${(sm.reimbursed > 0 || sm.welfare !== 0) && html4`
              <div class="tripFx">
                ${sm.reimbursed > 0 ? html4`<span>같이 간 사람에게 받은 정산금 ₩${formatWon2(sm.reimbursed)} 차감</span>` : ""}
                ${sm.reimbursed > 0 && sm.welfare !== 0 ? " · " : ""}
                ${sm.welfare !== 0 ? html4`<span>복지카드 ₩${formatWon2(sm.welfare)} <b>별도</b> (위 합계에 안 들어감)</span>` : ""}
              </div>`}
            ${Object.keys(sm.fx).length > 0 && html4`
              <div class="tripFx">${Object.entries(sm.fx).map(([c3, v3]) => `${c3} ${v3.toLocaleString()}`).join(" · ")}</div>`}
          </div>`;
  })()}
      ${(() => {
    const t4 = db.trips.find((x2) => x2.id === tripId);
    if (!t4) return "";
    const sm = tripSummary(live, t4);
    const soloIds = new Set(t4.soloIds || []);
    const items = live.filter((e3) => e3.tripId === t4.id && e3.type === "expense" && !e3.reimbFrom && e3.transferKind !== "welfare" && (!e3.transferKind || e3.transferKind === "external"));
    const solo = items.filter((e3) => soloIds.has(e3.id));
    const soloSum = solo.reduce((a3, e3) => a3 + (e3.isRefund ? -e3.amount : e3.amount), 0);
    const paid = sm.total + sm.reimbursed;
    const shared = paid - soloSum;
    const heads = Math.max(1, parseInt(t4.headcount, 10) || 1);
    const perHead = Math.round(shared / heads);
    const due = shared - perHead - sm.reimbursed;
    const byCat = {};
    for (const e3 of items) {
      if (soloIds.has(e3.id)) continue;
      byCat[e3.category] = (byCat[e3.category] || 0) + (e3.isRefund ? -e3.amount : e3.amount);
    }
    const catList = Object.entries(byCat).sort((a3, b3) => b3[1] - a3[1]);
    const W = (n3) => `₩${formatWon2(n3)}`;
    const settleText = [
      `${t4.name} 정산${sm.from ? ` · ${sm.from.slice(5).replace("-", "/")} ~ ${sm.to.slice(5).replace("-", "/")}` : ""}`,
      "",
      `같이 쓴 돈  ${W(shared)}`,
      ...catList.map(([k3, v3]) => `  ${(CAT_MAP2[k3] || {}).label || k3} ${W(v3)}`),
      ...soloSum > 0 ? ["", `개인 비용 ${solo.length}건  ${W(soloSum)} (제외)`] : [],
      "",
      `${heads}명이 나눔 → 1인 ${W(perHead)}`,
      ...sm.reimbursed > 0 ? [`이미 받음  ${W(sm.reimbursed)}`] : [],
      `보내주실 돈  ${W(Math.max(0, due))}`
    ].join("\n");
    return html4`
          <div class="card">
            <div class="cardLabel">
              정산
              <button class="pickToggle" onClick=${() => shareText(`${t4.name} 정산`, settleText)}>결산 보내기</button>
            </div>
            <div class="row wrap">
              <span class="hint sm">몇 명이서</span>
              <input class="inp num" type="number" inputmode="numeric" min="1" style="max-width:80px"
                value=${t4.headcount || 1}
                onInput=${(ev) => {
      const v3 = Math.max(1, parseInt(ev.target.value || "1", 10));
      patch((d3) => {
        d3.trips = d3.trips.map((x2) => x2.id === t4.id ? { ...x2, headcount: v3 } : x2);
      });
    }} />
              <span class="hint sm">명</span>
              <input class="inp" placeholder="동행자 (선택)" value=${t4.members || ""}
                onInput=${(ev) => {
      const v3 = ev.target.value;
      patch((d3) => {
        d3.trips = d3.trips.map((x2) => x2.id === t4.id ? { ...x2, members: v3 } : x2);
      });
    }} />
            </div>
            <div class="hint sm">내가 전부 내고 나중에 나누는 방식입니다. 나 혼자 쓴 돈은 <b>항목 조정</b>에서 '개인'을 눌러 빼세요.</div>
            <div class="axes">
              <div class="axis"><span class="axisLabel">같이 쓴 돈</span><span class="axisVal">₩${formatWon2(shared)}</span></div>
              ${soloSum > 0 && html4`<div class="axis"><span class="axisLabel">개인 비용 ${solo.length}건</span><span class="axisVal">₩${formatWon2(soloSum)}</span></div>`}
              <div class="axis"><span class="axisLabel">${heads}명 · 1인</span><span class="axisVal">₩${formatWon2(perHead)}</span></div>
              ${sm.reimbursed > 0 && html4`<div class="axis"><span class="axisLabel">이미 받음</span><span class="axisVal">₩${formatWon2(sm.reimbursed)}</span></div>`}
              <div class="axis total"><span class="axisLabel">받을 돈</span><span class="axisVal">₩${formatWon2(Math.max(0, due))}</span></div>
            </div>
          </div>`;
  })()}

      ${(() => {
    const t4 = db.trips.find((x2) => x2.id === tripId);
    if (!t4) return "";
    const plan = t4.plan || null;
    const today = todayISO2();
    const inTrip = t4.startDate && t4.endDate && today >= t4.startDate && today <= t4.endDate;
    const yenRate = parseFloat(db.settings.yenRate) || 9.2;
    const parsed = plan ? parseItinerary(plan.raw || "", { startDate: t4.startDate, yenRate }) : null;
    const days = parsed ? parsed.days : [];
    const costOverride = plan && plan.costs || {};
    const marks = plan && plan.marks || {};
    const cost = planCost(days, marks);
    const heads = Math.max(1, parseInt(t4.headcount, 10) || 1);
    const cycleMark = (dayNo, it) => {
      const k3 = itemKey(dayNo, it);
      const nextOf = { "": "done", done: "skip", skip: "" };
      patch((d3) => {
        d3.trips = d3.trips.map((x2) => {
          if (x2.id !== t4.id) return x2;
          const m3 = { ...x2.plan && x2.plan.marks || {} };
          const nv = nextOf[m3[k3] || ""];
          if (nv) m3[k3] = nv;
          else delete m3[k3];
          return { ...x2, plan: { ...x2.plan || {}, marks: m3 } };
        });
      });
    };
    for (const b3 of cost.byDay) {
      const o3 = costOverride[b3.dayNo];
      if (o3) {
        b3.total = Object.values(o3).reduce((a3, v3) => a3 + v3, 0);
        b3.kinds = { ...o3 };
      }
    }
    const planTotal = cost.byDay.reduce((a3, b3) => a3 + b3.total, 0);
    const todayDay = days.find((d3) => d3.date === today);
    const savePlan = (text) => {
      patch((d3) => {
        d3.trips = d3.trips.map((x2) => x2.id === t4.id ? { ...x2, plan: { raw: text, savedAt: Date.now(), costs: x2.plan && x2.plan.costs || {} } } : x2);
      });
      setPlanOpen(false);
      setPlanText("");
      flash("일정표를 저장했어요");
    };
    return html4`
          <div class="card planCard">
            <div class="cardLabel">
              일정표
              ${days.length > 0 && html4`
                <button class="pickToggle" onClick=${() => {
      const W = (n3) => `₩${formatWon2(n3)}`;
      const lines = [`${t4.name}${t4.startDate ? `   ${t4.startDate.slice(5).replace("-", "/")} ~ ${(t4.endDate || "").slice(5).replace("-", "/")}` : ""}`];
      for (const d3 of days) {
        const c3 = cost.byDay.find((b3) => b3.dayNo === d3.dayNo) || { total: 0 };
        lines.push("", `[${d3.dayNo}일차]${d3.date ? ` ${d3.date.slice(5).replace("-", "/")}` : ""}`);
        for (const it of d3.items) {
          if (marks[itemKey(d3.dayNo, it)] === "skip") continue;
          lines.push(`${it.time}  ${it.text}${planShareCost && it.cost ? `  ${W(it.cost)}` : ""}`);
        }
        if (planShareCost && c3.total) lines.push(`       예상 ${W(c3.total)}`);
      }
      if (planShareCost) {
        lines.push("", `합계 예상 ${W(planTotal)}${heads > 1 ? ` · 1인 ${W(Math.round(planTotal / heads))}` : ""}`);
      }
      shareText(`${t4.name} 일정`, lines.join("\n"));
    }}>일정 보내기</button>`}
              <button class="pickToggle" onClick=${() => {
      setPlanOpen((v3) => !v3);
      setPlanText(plan ? plan.raw : "");
    }}>
                ${plan ? "일정 고치기" : "일정 넣기"}
              </button>
            </div>
            ${days.length > 0 && html4`
              <label class="planShareOpt">
                <input type="checkbox" checked=${planShareCost} onChange=${() => setPlanShareCost((v3) => !v3)} />
                보낼 때 예상 비용도 함께
              </label>`}

            ${planOpen && html4`
              <div class="hint sm">여행 일정표를 붙여넣으세요. HTML이든 글이든 됩니다.
                <b>확정 전까지 언제든 바꿔도 됩니다.</b> 일정이 바뀌어도 지출 기록은 그대로입니다.</div>
              <textarea class="pasteArea planArea" value=${planText} onInput=${(e3) => setPlanText(e3.target.value)}
                placeholder=${"예)\n1일 차 (3월 10일, 수)\n10:35 나리타공항 도착\n13:10 점심 1,200엔"}></textarea>
              <div class="acts">
                ${plan && html4`<button class="btn ghost sm" onClick=${() => {
      savePlan("");
    }}>일정표 지우기</button>`}
                <button class="btn ghost sm" onClick=${() => setPlanOpen(false)}>그만두기</button>
                <button class="btn primary sm" onClick=${() => savePlan(planText)} disabled=${!planText.trim()}>저장</button>
              </div>`}

            ${!planOpen && !plan && html4`<div class="hint sm">일정표를 넣어두면 여행 중에 여기서 바로 볼 수 있어요.</div>`}

            ${!planOpen && plan && !days.length && html4`
              <div class="hint sm">날짜별로 가르지 못해 글 그대로 보여드려요.</div>
              <pre class="planRaw">${(plan.raw || "").slice(0, 4e3)}</pre>`}

            ${!planOpen && days.length > 0 && html4`
              ${inTrip && todayDay && html4`
                <div class="planToday">
                  <div class="planTodayHead">오늘 · ${todayDay.dayNo}일차</div>
                  ${todayDay.items.map((it, i3) => html4`
                    <button class=${"planItem mk-" + (marks[itemKey(todayDay.dayNo, it)] || "none")} key=${i3}
                      onClick=${() => cycleMark(todayDay.dayNo, it)}>
                      <span class="planMark">${marks[itemKey(todayDay.dayNo, it)] === "done" ? "✓" : marks[itemKey(todayDay.dayNo, it)] === "skip" ? "✗" : "○"}</span>
                      <span class="planTime">${it.time}</span>
                      <span class="planText">${it.text}</span>
                      ${it.cost ? html4`<span class="planCost">₩${formatWon2(it.cost)}</span>` : ""}
                    </button>`)}
                </div>`}

              <div class="planDays">
                ${days.map((d3) => {
      const c3 = cost.byDay.find((b3) => b3.dayNo === d3.dayNo) || { total: 0, kinds: {} };
      const spent = d3.date ? live.filter((e3) => e3.tripId === t4.id && e3.date === d3.date && e3.type === "expense" && !e3.isRefund && !e3.transferKind).reduce((a3, e3) => a3 + e3.amount, 0) : 0;
      return html4`
                    <details class="planDay" key=${d3.dayNo} open=${inTrip && d3.date === today}>
                      <summary>
                        <b>${d3.dayNo}일차</b> ${d3.date ? d3.date.slice(5) : ""}
                        <span class="planSum">예상 ₩${formatWon2(c3.total)}${spent > 0 ? ` · 실제 ₩${formatWon2(spent)}` : ""}</span>
                      </summary>
                      <div class="planKinds">
                        ${Object.entries(c3.kinds).map(([k3, v3]) => html4`
                          <button class="chip sm" key=${k3} onClick=${() => setEditCost({ dayNo: d3.dayNo, kind: k3, value: v3 })}>
                            ${KIND_LABEL[k3]} ₩${formatWon2(v3)}
                          </button>`)}
                        <button class="chip sm ghost" onClick=${() => setEditCost({ dayNo: d3.dayNo, kind: "etc", value: 0 })}>+ 고치기</button>
                      </div>
                      ${d3.items.map((it, i3) => html4`
                        <button class=${"planItem mk-" + (marks[itemKey(d3.dayNo, it)] || "none")} key=${i3}
                          onClick=${() => cycleMark(d3.dayNo, it)}>
                          <span class="planMark">${marks[itemKey(d3.dayNo, it)] === "done" ? "✓" : marks[itemKey(d3.dayNo, it)] === "skip" ? "✗" : "○"}</span>
                          <span class="planTime">${it.time}</span>
                          <span class="planText">${it.text}</span>
                          ${it.cost ? html4`<span class="planCost">₩${formatWon2(it.cost)}</span>` : ""}
                        </button>`)}
                    </details>`;
    })}
              </div>

              ${editCost && html4`
                <div class="box">
                  <div class="boxTop"><span class="maintName">${editCost.dayNo}일차 ${KIND_LABEL[editCost.kind]} 예상 비용</span></div>
                  <input class="inp" type="number" inputmode="numeric" value=${editCost.value}
                    onInput=${(e3) => setEditCost({ ...editCost, value: parseInt(e3.target.value || "0", 10) })} />
                  <div class="acts">
                    <button class="btn ghost sm" onClick=${() => setEditCost(null)}>그만두기</button>
                    <button class="btn primary sm" onClick=${() => {
      patch((d3) => {
        d3.trips = d3.trips.map((x2) => {
          if (x2.id !== t4.id) return x2;
          const base2 = x2.plan && x2.plan.costs || {};
          const cur = { ...(cost.byDay.find((b3) => b3.dayNo === editCost.dayNo) || {}).kinds, ...base2[editCost.dayNo] || {} };
          cur[editCost.kind] = editCost.value;
          return { ...x2, plan: { ...x2.plan || {}, costs: { ...base2, [editCost.dayNo]: cur } } };
        });
      });
      setEditCost(null);
      flash("예상 비용을 고쳤어요");
    }}>저장</button>
                  </div>
                </div>`}

              <div class="planTotal">
                예상 합계 <b>₩${formatWon2(planTotal)}</b>${heads > 1 ? html4` · 1인 <b>₩${formatWon2(Math.round(planTotal / heads))}</b>` : ""}
                ${sumAll(live, t4) > 0 ? html4` · 실제 <b>₩${formatWon2(sumAll(live, t4))}</b>` : ""}
              </div>`}
          </div>`;
  })()}

      ${list.length === 0 ? html4`<div class="empty">이 여행에 묶인 내역이 아직 없어요.<br />위의 <b>항목 조정</b>에서 항공권·숙박·현지 결제를 넣으세요.</div>` : html4`<${DateGroups} list=${list} ...${rowProps} />`}`}`;
}
function sumAll(live, trip) {
  return live.filter((e3) => e3.tripId === trip.id && e3.type === "expense" && !e3.isRefund && !e3.transferKind).reduce((a3, e3) => a3 + e3.amount, 0);
}
var CAR_RANGES = [
  { key: "y1", label: "최근 1년", days: 365 },
  { key: "y2", label: "최근 2년", days: 730 },
  { key: "all", label: "전체", days: null }
];
function CarView({ db, live, carId, setCarId, car, carKm, mileage, setMileage, mileageDate, setMileageDate, maintEdit, setMaintEdit, patch, addVehicle, latestMileage, rowProps, assignCar }) {
  const [adding, setAdding] = d2(false);
  const [name, setName] = d2("");
  const [span, setSpan] = d2("all");
  const [fuel, setFuel] = d2("gasoline");
  const from = T2(() => {
    const r3 = CAR_RANGES.find((x2) => x2.key === span);
    if (!r3 || !r3.days) return "0000-00-00";
    const d3 = /* @__PURE__ */ new Date();
    d3.setDate(d3.getDate() - r3.days);
    return toLocalISO2(d3);
  }, [span]);
  const inSpan = (e3) => e3.date >= from;
  const stats = db.vehicles.map((v3) => {
    let exp = 0;
    for (const e3 of live) if (e3.carId === v3.id && e3.type === "expense" && inSpan(e3)) exp += e3.isRefund ? -e3.amount : e3.amount;
    return { ...v3, expense: exp };
  });
  const maint = db.maintenance.filter((m3) => m3.carId === carId);
  const logs = db.mileageLogs.filter((l3) => l3.carId === carId).sort((a3, b3) => a3.date < b3.date ? 1 : -1).slice(0, 5);
  const list = live.filter((e3) => e3.carId === carId && inSpan(e3)).sort((a3, b3) => a3.date < b3.date ? 1 : a3.date > b3.date ? -1 : b3.createdAt - a3.createdAt);
  const breakdown = T2(() => {
    const by = /* @__PURE__ */ new Map();
    for (const e3 of list) {
      if (e3.type !== "expense") continue;
      const k3 = e3.category || "etc";
      by.set(k3, (by.get(k3) || 0) + (e3.isRefund ? -e3.amount : e3.amount));
    }
    return Array.from(by.entries()).filter(([, v3]) => v3 !== 0).sort((a3, b3) => b3[1] - a3[1]);
  }, [list]);
  const carTotal = breakdown.reduce((a3, [, v3]) => a3 + v3, 0);
  const unassigned = T2(() => live.filter((e3) => !e3.carId && e3.type === "expense" && e3.category === "car" && inSpan(e3)), [live]);
  const saveMaint = (id, p3) => patch((n3) => {
    n3.maintenance = n3.maintenance.map((m3) => m3.id === id ? { ...m3, ...p3 } : m3);
  });
  return html4`
    <div class="cards">
      ${stats.length === 0 && html4`<div class="empty">아직 등록한 차량이 없어요.</div>`}
      ${stats.map((v3) => html4`
        <button key=${v3.id} class=${"sumCard" + (carId === v3.id ? " on" : "")} onClick=${() => setCarId(v3.id)}>
          <div class="sumName"><${IcoCar} size=${12} /> ${v3.name}</div>
          <div class="sumAmt">₩${formatWon2(v3.expense)}</div>
        </button>`)}
      ${!adding && html4`<button class="tag dash" onClick=${() => setAdding(true)}>+ 새 차량</button>`}
    </div>

    ${adding && html4`
      <div class="card">
        <div class="cardLabel">차량 추가</div>
        <input class="inp" placeholder="차량 이름 (예: 아반떼)" value=${name} onInput=${(e3) => setName(e3.target.value)} />
        <div class="miniLabel">연료</div>
        <div class="chips">
          ${FUEL_TYPES.map((f3) => html4`
            <button key=${f3.key} class=${"tag" + (fuel === f3.key ? " on" : "")} onClick=${() => setFuel(f3.key)}>${f3.label}</button>`)}
        </div>
        <div class="hint sm">
          고른 연료에 맞는 정비 항목 ${presetsFor(fuel).length}개가 자동으로 등록됩니다.
          주기는 일반적인 값이라 차종에 따라 다를 수 있고, 등록 뒤 각 항목에서 고칠 수 있어요.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${() => setAdding(false)}>취소</button>
          <button class="btn primary sm" disabled=${!name.trim()}
            onClick=${() => {
    setCarId(addVehicle(name.trim(), fuel).id);
    setName("");
    setAdding(false);
  }}>만들기</button>
        </div>
      </div>`}

    <div class="row wrap" style="margin-top:10px">
      ${CAR_RANGES.map((r3) => html4`
        <button key=${r3.key} class=${"tag" + (span === r3.key ? " on" : "")} onClick=${() => setSpan(r3.key)}>${r3.label}</button>`)}
    </div>

    ${car && (() => {
    const total = stats.find((v3) => v3.id === carId)?.expense || 0;
    const dates = list.map((e3) => e3.date).sort();
    const months = dates.length ? Math.max(1, Math.round((new Date(dates[dates.length - 1]) - new Date(dates[0])) / 2592e6) + 1) : 1;
    return html4`
      <div class="monthBar">
        <span class="monthLabel">${car.name}${car.fuel ? html4`<span class="fuelTag">${(FUEL_TYPES.find((f3) => f3.key === car.fuel) || {}).label || ""}</span>` : ""}</span>
        <span class="totals"><span class="exp">유지비 ₩${formatWon2(total)}</span></span>
      </div>
      ${total > 0 && html4`
        <div class="carSpan">
          ${dates.length ? `${dates[0]} ~ ${dates[dates.length - 1]} · ${list.length}건` : ""}
          ${months > 1 ? ` · 월평균 ₩${formatWon2(Math.round(total / months))}` : ""}
          ${months >= 6 ? ` · 연환산 ₩${formatWon2(Math.round(total / months * 12))}` : ""}
        </div>`}
      `;
  })()}
    ${car && html4`

      <div class="box">
        <div class="boxTop"><${IcoGauge} size=${15} />
          ${carKm != null ? html4`<span>현재 ${carKm.toLocaleString("ko-KR")}km</span>` : html4`<span class="muted">기록된 주행거리가 없어요</span>`}
        </div>
        <div class="row wrap">
          <input type="number" class="inp" placeholder="계기판 거리(km)" value=${mileage} onInput=${(e3) => setMileage(e3.target.value)} />
          <input type="date" class="inp date" value=${mileageDate} onInput=${(e3) => setMileageDate(e3.target.value)} />
          <button class="btn primary sm" disabled=${!mileage}
            onClick=${() => {
    patch((n3) => {
      n3.mileageLogs = [{ id: uid2(), carId, date: mileageDate, mileage: parseInt(mileage, 10) }, ...n3.mileageLogs];
    });
    setMileage("");
  }}>
            <${IcoCheck} size=${14} /> 기록</button>
        </div>
        ${logs.length > 0 && html4`<div class="logList">${logs.map((l3) => html4`<span class="log" key=${l3.id}>${formatDateLabel2(l3.date)} · ${l3.mileage.toLocaleString("ko-KR")}km</span>`)}</div>`}
      </div>

      <div class="maintList">
        ${maint.map((item) => {
    const { status, remKm, remMonths } = maintStatus(item, carKm);
    const editing = maintEdit && maintEdit.id === item.id;
    return html4`
            <div class="box maint" key=${item.id}>
              <div class="boxTop">
                <span class="maintName"><${IcoWrench} size=${13} /> ${item.label}</span>
                <span class=${"badge " + status}>${MAINT_LABEL[status]}</span>
              </div>
              <div class="maintSub">
                ${status !== "unknown" ? html4`${remKm != null ? html4`<span>${remKm > 0 ? `${remKm.toLocaleString("ko-KR")}km 남음` : `${Math.abs(remKm).toLocaleString("ko-KR")}km 초과`}</span>` : ""}
                    ${remKm != null && remMonths != null ? html4`<span> · </span>` : ""}
                    ${remMonths != null ? html4`<span>${remMonths > 0 ? `${remMonths}개월 남음` : `${Math.abs(remMonths)}개월 초과`}</span>` : ""}` : html4`<span>마지막 처리 기록을 입력해주세요</span>`}
              </div>
              ${editing ? html4`<div class="row wrap">
                    <input type="date" class="inp date" value=${maintEdit.lastDate || ""} onInput=${(e3) => setMaintEdit({ ...maintEdit, lastDate: e3.target.value })} />
                    <input type="number" class="inp" placeholder="교체 당시 km" value=${maintEdit.lastMileage ?? ""} onInput=${(e3) => setMaintEdit({ ...maintEdit, lastMileage: e3.target.value ? parseInt(e3.target.value, 10) : null })} />
                    <input type="number" class="inp" placeholder="주기(km)" value=${maintEdit.intervalKm ?? ""} onInput=${(e3) => setMaintEdit({ ...maintEdit, intervalKm: e3.target.value ? parseInt(e3.target.value, 10) : null })} />
                    <input type="number" class="inp" placeholder="주기(개월)" value=${maintEdit.intervalMonths ?? ""} onInput=${(e3) => setMaintEdit({ ...maintEdit, intervalMonths: e3.target.value ? parseInt(e3.target.value, 10) : null })} />
                    <div class="acts">
                      <button class="btn ghost sm" onClick=${() => setMaintEdit(null)}>취소</button>
                      <button class="btn primary sm" onClick=${() => {
      saveMaint(item.id, maintEdit);
      setMaintEdit(null);
    }}>저장</button>
                    </div>
                  </div>` : html4`<div class="acts">
                    <button class="btn ghost sm" onClick=${() => setMaintEdit({ ...item })}>수정</button>
                    <button class="btn primary sm" onClick=${() => saveMaint(item.id, { lastDate: todayISO2(), lastMileage: latestMileage(carId) })}>오늘 처리함</button>
                  </div>`}
            </div>`;
  })}
      </div>

      ${breakdown.length > 0 && html4`
        <div class="box">
          <div class="boxTop"><span class="maintName">무엇에 들었나</span><span class="sumAmt">₩${formatWon2(carTotal)}</span></div>
          <div class="carBreak">
            ${breakdown.map(([k3, v3]) => html4`
              <div class="carBreakRow" key=${k3}>
                <span class="dot" style=${`background:${(CAT_MAP2[k3] || {}).color || "#999"}`}></span>
                <span class="carBreakName">${(CAT_MAP2[k3] || {}).label || "기타"}</span>
                <span class="carBreakBar"><i style=${`width:${Math.max(2, Math.round(v3 / carTotal * 100))}%;background:${(CAT_MAP2[k3] || {}).color || "#999"}`}></i></span>
                <span class="carBreakAmt">₩${formatWon2(v3)}</span>
              </div>`)}
          </div>
        </div>`}

      ${unassigned.length > 0 && db.vehicles.length > 0 && html4`
        <div class="box">
          <div class="boxTop"><span class="maintName">어느 차인지 안 정한 지출 ${unassigned.length}건</span></div>
          <div class="hint sm">한 번 정해두면 같은 곳에서 쓴 다음 기록은 자동으로 이 차에 붙습니다.</div>
          <div class="unassignList">
            ${unassigned.slice(0, 6).map((e3) => html4`
              <div class="unassignRow" key=${e3.id}>
                <span class="unassignMemo">${e3.memo}</span>
                <span class="unassignAmt">₩${formatWon2(e3.amount)}</span>
                <div class="chips">
                  ${db.vehicles.map((v3) => html4`
                    <button key=${v3.id} class="chip sm" onClick=${() => assignCar(e3, v3.id)}>${v3.name}</button>`)}
                </div>
              </div>`)}
          </div>
        </div>`}

      ${list.length > 0 && html4`<div class="carSpend"><div class="groupHead">이 차량으로 기록된 지출</div><${DateGroups} list=${list} ...${rowProps} /></div>`}`}`;
}
function NameList({ label, items, placeholder, onChange }) {
  const [val, setVal] = d2("");
  const add = () => {
    const v3 = val.trim();
    if (!v3 || items.includes(v3)) return;
    onChange([...items, v3]);
    setVal("");
  };
  return html4`
    <div class="nameList">
      <div class="miniLabel">${label}</div>
      <div class="chips">
        ${items.map((x2) => html4`
          <span class="tag on" key=${x2}>${x2}
            <button class="tagX" onClick=${() => onChange(items.filter((y3) => y3 !== x2))} aria-label="빼기">×</button>
          </span>`)}
      </div>
      <div class="row">
        <input class="inp" placeholder=${placeholder} value=${val}
          onInput=${(e3) => setVal(e3.target.value)} onKeyDown=${(e3) => e3.key === "Enter" && add()} />
        <button class="btn ghost sm" onClick=${add} disabled=${!val.trim()}>추가</button>
      </div>
    </div>`;
}
function labelOf(v3) {
  if (!v3) return "-";
  if (v3.transferKind) return "합계 제외";
  if (v3.type === "income") return "수입";
  if (v3.type === "transfer") return "이체";
  return (CAT_MAP2[v3.category] || {}).label || "지출";
}
function Settings({ db, setDb, onClose, flash, onSync, onUndoImport, onOpenAccounts, reclass, reclassUndo, onPlanReclass, onRunReclass, onUndoReclass, onCancelReclass }) {
  const fileRef = A2(null);
  const [confirm1, setConfirm1] = d2(false);
  const [cleaning, setCleaning] = d2(false);
  const size = T2(() => JSON.stringify(db).length, [db]);
  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a3 = document.createElement("a");
    a3.href = url;
    a3.download = `가계부-백업-${todayISO2()}.json`;
    document.body.appendChild(a3);
    a3.click();
    document.body.removeChild(a3);
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  };
  const importJSON = (e3) => {
    const f3 = e3.target.files && e3.target.files[0];
    if (!f3) return;
    const r3 = new FileReader();
    r3.onload = () => {
      try {
        const parsed = JSON.parse(r3.result);
        if (!parsed.entries) throw new Error("형식이 다릅니다");
        setDb({ ...EMPTY_DB, ...parsed, settings: { ...EMPTY_DB.settings, ...parsed.settings || {} } });
        flash(`${parsed.entries.length}건을 불러왔어요`);
        onClose();
      } catch (err) {
        flash("파일을 읽지 못했어요");
      }
    };
    r3.readAsText(f3);
  };
  return html4`
    <div class="card settings">
      <div class="cardLabel">설정</div>

      <label class="setRow">
        <span>본인 이름</span>
        <input class="inp" placeholder="이체 판정에 씁니다" value=${db.settings.userName}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, userName: e3.target.value } }))} />
      </label>

      <label class="setRow">
        <span>월 시작일</span>
        <input class="inp" type="number" min="1" max="28" value=${db.settings.monthStartDay}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, monthStartDay: Math.min(28, Math.max(1, parseInt(e3.target.value || "1", 10))) } }))} />
      </label>
      <div class="hint sm">급여일 기준으로 보고 싶으면 급여일을 넣으세요. 1이면 달력 기준입니다.</div>

      <div class="setDivider">수입으로 볼 것</div>
      <div class="hint sm">여기 적힌 곳에서 온 입금만 수입으로 셉니다. 나머지 입금은 기록만 남고 합계에서 빠집니다.</div>
      <${NameList} label="수입처" items=${db.settings.incomeSources || []} placeholder="예: 근무하는 회사 이름"
        onChange=${(v3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, incomeSources: v3 } }))} />
      <${NameList} label="항상 제외" items=${db.settings.excludedCounterparties || []} placeholder="예: 어머니 성함"
        onChange=${(v3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, excludedCounterparties: v3 } }))} />

      <div class="setDivider">합계에서 뺄 것</div>
      <div class="hint sm">복지카드는 회사 돈이라 기록만 하고 지출에는 안 넣습니다. 가족 송금은 보낸 시점에 지출로 잡습니다.</div>
      <${NameList} label="복지카드" items=${db.settings.welfareCards || []} placeholder="예: 현대카드"
        onChange=${(v3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, welfareCards: v3 } }))} />
      <label class="setRow">
        <span>복지 한도</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="연간 한도 (예: 1200000)"
          value=${db.settings.welfareLimit || ""}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, welfareLimit: parseInt(e3.target.value || "0", 10) } }))} />
      </label>
      <label class="setRow">
        <span>시작 시점</span>
        <input class="inp" placeholder="예: 2026-01" value=${db.settings.welfarePeriodStart || ""}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, welfarePeriodStart: e3.target.value.trim() } }))} />
      </label>
      <div class="hint sm">현대복지카드는 승인 문자에 잔여 한도가 찍혀 와서 따로 넣을 게 없습니다. 문자가 안 오는 카드만 한도를 넣으세요.</div>

      <${NameList} label="가족 송금" items=${db.settings.familyTransferKeywords || []} placeholder="예: 하나머니충전"
        onChange=${(v3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, familyTransferKeywords: v3 } }))} />
      <label class="setRow">
        <span>생활비 최소</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 800000"
          value=${db.settings.familyAmountMin || ""}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, familyAmountMin: parseInt(e3.target.value || "0", 10) } }))} />
      </label>
      <label class="setRow">
        <span>생활비 최대</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 1400000"
          value=${db.settings.familyAmountMax || ""}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, familyAmountMax: parseInt(e3.target.value || "0", 10) } }))} />
      </label>
      <div class="hint sm">이 범위 안의 송금만 <b>생활비(지출)</b>로 셉니다.
        범위를 벗어나면 <b>별도 송금</b>으로 보고 합계에서 뺍니다 — 받아서 그대로 넘기는 등록금 같은 돈에 씁니다.</div>
      <label class="setRow">
        <span>별도 송금 합계 제외</span>
        <input type="checkbox" checked=${db.settings.familyExtraExcluded !== false}
          onChange=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, familyExtraExcluded: e3.target.checked } }))} />
      </label>
      <${NameList} label="여행 자금" items=${db.settings.travelKeywords || []} placeholder="예: 트래블월렛"
        onChange=${(v3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, travelKeywords: v3 } }))} />

      <div class="setDivider">여행 일정표</div>
      <label class="setRow">
        <span>엔 환율 <span class="setNote">1엔당 원</span></span>
        <input class="inp num" type="number" inputmode="decimal" step="0.1" placeholder="9.2"
          value=${db.settings.yenRate || ""}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, yenRate: parseFloat(e3.target.value || "0") || 0 } }))} />
      </label>
      <div class="hint sm">일정표에 적은 엔화 금액을 원화로 바꿀 때 씁니다. 비우면 9.2로 봅니다.</div>

      <div class="setDivider">구글시트 연동</div>
      <label class="setRow">
        <span>시트 주소</span>
        <input class="inp" placeholder="https://script.google.com/.../exec" value=${db.settings.sheetUrl}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, sheetUrl: e3.target.value.trim() } }))} />
      </label>
      <label class="setRow">
        <span>연결 암호</span>
        <input class="inp" placeholder="Apps Script에 적은 값과 같게" value=${db.settings.sheetToken}
          onInput=${(e3) => setDb((d3) => ({ ...d3, settings: { ...d3.settings, sheetToken: e3.target.value.trim() } }))} />
      </label>
      <div class="acts">
        <button class="btn ghost sm" onClick=${async () => {
    try {
      await ping(db.settings.sheetUrl, db.settings.sheetToken);
      flash("연결됐어요");
    } catch (err) {
      flash(`연결 실패: ${err.message}`);
    }
  }} disabled=${!db.settings.sheetUrl}>연결 확인</button>
        <button class="btn ghost sm" onClick=${onSync} disabled=${!db.settings.sheetUrl}>지금 맞추기</button>
      </div>
      ${db.settings.lastSyncAt && html4`<div class="hint sm">마지막 동기화 ${new Date(db.settings.lastSyncAt).toLocaleString("ko-KR")}</div>`}

      <div class="setDivider">데이터</div>
      <div class="setStat">버전 <b>v31</b> · 기록 ${db.entries.filter((e3) => !e3.deleted).length}건 · 분류 규칙 ${(db.categoryRules || []).length}개 · 보낼 것 ${db.entries.filter((e3) => e3.dirty).length}건 · 저장 용량 ${(size / 1024).toFixed(0)}KB</div>

      <div class="acts">
        <button class="btn ghost sm" onClick=${() => fileRef.current && fileRef.current.click()}>가져오기</button>
        <button class="btn primary sm" onClick=${exportJSON}>백업 내보내기</button>
      </div>
      <input ref=${fileRef} type="file" accept="application/json" style="display:none" onChange=${importJSON} />

      <div class="setDivider danger">기록 지우기</div>
      <div class="hint sm">
        설정(시트 주소·수입처 등)과 학습한 분류 규칙은 남고 기록만 지웁니다.
        <b>지우기 전에 위에서 백업을 먼저 받으세요.</b>
      </div>
      ${confirm1 ? html4`
          <div class="dangerBox">
            <div>기록 ${db.entries.filter((e3) => !e3.deleted).length}건, 여행 ${db.trips.length}건, 고정비 ${db.fixedExpenses.length}건이 사라집니다.</div>
            <div class="dangerNote">
              구글시트를 쓰신다면 <b>시트의 entries 탭도 함께 비우셔야</b> 합니다.
              안 그러면 다음 동기화 때 되살아납니다.
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${() => setConfirm1(false)}>그만두기</button>
              <button class="btn danger sm" onClick=${() => {
    setDb((d3) => ({
      ...EMPTY_DB,
      categoryRules: d3.categoryRules || [],
      settings: { ...d3.settings, lastSyncAt: "" }
    }));
    setConfirm1(false);
    flash("기록을 지웠어요");
    onClose();
  }}>정말 지우기</button>
            </div>
          </div>` : html4`
          <div class="acts">
            <button class="btn ghost sm" onClick=${() => setConfirm1(true)}>기록 전체 지우기</button>
          </div>`}

      ${db.settings.sheetUrl && html4`
        <div class="setDivider">시트 청소</div>
        <div class="hint sm">시트에 남은 빈 줄을 치웁니다. 기록은 그대로 두고 쓸모없는 줄만 지웁니다.</div>
        <div class="acts">
          <button class="btn ghost sm" disabled=${cleaning} onClick=${async () => {
    setCleaning(true);
    try {
      const r3 = await cleanupSheet(db.settings.sheetUrl, db.settings.sheetToken);
      flash(r3.removed > 0 ? `빈 줄 ${r3.removed}개를 치웠어요 (남은 줄 ${r3.kept}개)` : "치울 빈 줄이 없어요");
    } catch (err) {
      flash(String(err && err.message || err));
    }
    setCleaning(false);
  }}>${cleaning ? "치우는 중…" : "시트 빈 줄 치우기"}</button>
        </div>`}

      <div class="setDivider">계좌</div>
      <div class="hint sm">명세서를 넣을 때 어느 통장인지 구분하는 데 씁니다.
        파일에 계좌번호가 찍혀 있으면 알아서 골라줍니다.</div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${() => {
    onOpenAccounts && onOpenAccounts();
    onClose();
  }}>계좌 관리</button>
      </div>

      <div class="setDivider">다시 분류하기</div>
      <div class="hint sm">기록은 그대로 두고 분류만 지금 규칙·설정으로 다시 계산합니다.
        파일을 다시 넣지 않아도 됩니다. <b>직접 고치신 건은 건드리지 않습니다.</b></div>
      ${reclass && reclass.changes.length > 0 ? html4`
          <div class="box">
            <div class="boxTop"><span class="maintName">${reclass.changes.length}건이 바뀝니다</span></div>
            <div class="reclassList">
              ${reclass.changes.slice(0, 8).map((c3) => html4`
                <div class="reclassRow" key=${c3.id}>
                  <span class="reclassMemo">${c3.memo}</span>
                  <span class="reclassChange">
                    ${labelOf(c3.before)} → <b>${labelOf(c3.after)}</b>
                  </span>
                </div>`)}
              ${reclass.changes.length > 8 && html4`<div class="hint sm">… 외 ${reclass.changes.length - 8}건</div>`}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${onCancelReclass}>그만두기</button>
              <button class="btn primary sm" onClick=${onRunReclass}>${reclass.changes.length}건 바꾸기</button>
            </div>
          </div>` : html4`
          <div class="acts">
            ${reclassUndo && html4`<button class="btn ghost sm" onClick=${onUndoReclass}>방금 바꾼 ${reclassUndo.length}건 되돌리기</button>`}
            <button class="btn ghost sm" onClick=${onPlanReclass}>무엇이 바뀌는지 보기</button>
          </div>`}

      ${(db.imports || []).length > 0 && html4`
        <div class="setDivider">가져온 파일 되돌리기</div>
        <div class="hint sm">파일 하나로 들어온 기록만 통째로 뺍니다. 다른 기록은 그대로 둡니다.</div>
        <div class="importList">
          ${(db.imports || []).map((rec) => html4`
            <div class=${"importRow" + (rec.undone ? " undone" : "")} key=${rec.id}>
              <div class="importMain">
                <div class="importName">${rec.name}</div>
                <div class="sub">${new Date(rec.at).toLocaleDateString("ko-KR")} · ${rec.count}건${rec.undone ? " · 되돌림" : ""}</div>
              </div>
              ${!rec.undone && html4`<button class="btn ghost sm" onClick=${() => onUndoImport(rec)}>되돌리기</button>`}
            </div>`)}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${onClose}>닫기</button>
      </div>
    </div>`;
}
function Root() {
  const [err, reset] = b2((e3) => {
    try {
      console.error("RENDER ERROR:", e3 && (e3.stack || e3.message || e3));
    } catch (x2) {
    }
  });
  if (!err) return html4`<${App} />`;
  const dump = () => {
    try {
      const raw = localStorage.getItem(DB_KEY) || "{}";
      const blob = new Blob([raw], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a3 = document.createElement("a");
      a3.href = url;
      a3.download = `가계부-백업-${todayISO2()}.json`;
      document.body.appendChild(a3);
      a3.click();
      document.body.removeChild(a3);
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
    } catch (e3) {
      alert("파일로 저장하지 못했어요. 아래 내용을 복사해 두세요.\n\n" + (localStorage.getItem(DB_KEY) || ""));
    }
  };
  const wipe = () => {
    if (!window.confirm("기록을 모두 지웁니다. 백업을 먼저 받으셨나요?")) return;
    try {
      const cur = JSON.parse(localStorage.getItem(DB_KEY) || "{}");
      localStorage.setItem(DB_KEY, JSON.stringify({ ...EMPTY_DB, categoryRules: cur.categoryRules || [], settings: { ...EMPTY_DB.settings, ...cur.settings || {}, lastSyncAt: "" } }));
    } catch (e3) {
      localStorage.removeItem(DB_KEY);
    }
    location.reload();
  };
  return html4`
    <div class="app">
      <header class="head">
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">화면을 그리다 문제가 생겼어요</div>
      </header>
      <div class="card">
        <div class="cardLabel">무엇을 하면 되나요</div>
        <div class="hint sm">
          먼저 <b>백업 내보내기</b>로 기록을 꺼내세요.
          그다음 <b>다시 시도</b>를 눌러보고, 그래도 안 되면 <b>기록 지우기</b>로 초기화하면 됩니다.
          설정은 지워지지 않습니다.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${dump}>백업 내보내기</button>
          <button class="btn primary sm" onClick=${() => reset()}>다시 시도</button>
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${wipe}>기록 지우기</button>
        </div>
      </div>
      <div class="card">
        <div class="cardLabel">오류 내용</div>
        <div class="errText">${String(err && (err.message || err))}</div>
      </div>
    </div>`;
}
R(html4`<${Root} />`, document.getElementById("root"));
