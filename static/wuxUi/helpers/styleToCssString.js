Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.default = void 0;
var e = {
  boxFlex: !0,
  boxFlexGroup: !0,
  columnCount: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  strokeDashoffset: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
var r = ["Webkit", "ms", "Moz", "O"];
Object.keys(e).forEach((function (t) {
  r.forEach((function (r) {
    e[function (e, r) {
      return e + r.charAt(0).toUpperCase() + r.substring(1)
    }(r, t)] = e[t]
  }))
}));
var t = /^ms-/,
  o = /([A-Z])/g;

function n(e) {
  return function (e) {
    return e.replace(o, "-$1").toLowerCase()
  }(e).replace(t, "-ms-")
}
var i = Array.isArray,
  a = Object.keys,
  s = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

function f(r, t) {
  return e[r] || "number" != typeof t ? "content" !== r || s.test(t) || (t = "'" + t.replace(/'/g, "\\'") + "'") : t += "px", n(r) + ": " + t + ";  "
}
var l = function (e) {
  var r = "";
  if ("string" == typeof e) return e;
  if (!e || 0 === a(e).length) return r;
  for (var t = a(e), o = 0, n = t.length; o < n; o++) {
    var s = t[o],
      l = e[s];
    if (i(l))
      for (var u = 0, c = l.length; u < c; u++) r += f(s, l[u]);
    else r += f(s, l)
  }
  return r
};
exports.default = l;