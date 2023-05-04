var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../common/utils"),
  o = require("../common/component"),
  i = require("../common/validator"),
  r = require("../mixins/page-scroll");
(0, o.VantComponent)({
  props: {
    zIndex: {
      type: Number,
      value: 99
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: "onScroll"
    },
    disabled: {
      type: Boolean,
      observer: "onScroll"
    },
    container: {
      type: null,
      observer: "onScroll"
    },
    scrollTop: {
      type: null,
      observer: function (t) {
        this.onScroll({
          scrollTop: t
        })
      }
    }
  },
  mixins: [(0, r.pageScrollMixin)((function (t) {
    null == this.data.scrollTop && this.onScroll(t)
  }))],
  data: {
    height: 0,
    fixed: !1,
    transform: 0
  },
  mounted: function () {
    this.onScroll()
  },
  methods: {
    onScroll: function () {
      var o = this,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = r.scrollTop,
        s = this.data,
        a = s.container,
        l = s.offsetTop,
        f = s.disabled;
      f ? this.setDataAfterDiff({
        fixed: !1,
        transform: 0
      }) : (this.scrollTop = n || this.scrollTop, "function" != typeof a ? (0, e.getRect)(this, ".van-sticky").then((function (t) {
        (0, i.isDef)(t) && (l >= t.top ? (o.setDataAfterDiff({
          fixed: !0,
          height: t.height
        }), o.transform = 0) : o.setDataAfterDiff({
          fixed: !1
        }))
      })) : Promise.all([(0, e.getRect)(this, ".van-sticky"), this.getContainerRect()]).then((function (e) {
        var i = t(e, 2),
          r = i[0],
          n = i[1];
        l + r.height > n.height + n.top ? o.setDataAfterDiff({
          fixed: !1,
          transform: n.height - r.height
        }) : l >= r.top ? o.setDataAfterDiff({
          fixed: !0,
          height: r.height,
          transform: 0
        }) : o.setDataAfterDiff({
          fixed: !1,
          transform: 0
        })
      })))
    },
    setDataAfterDiff: function (t) {
      var e = this;
      wx.nextTick((function () {
        var o = Object.keys(t).reduce((function (o, i) {
          return t[i] !== e.data[i] && (o[i] = t[i]), o
        }), {});
        Object.keys(o).length > 0 && e.setData(o), e.$emit("scroll", {
          scrollTop: e.scrollTop,
          isFixed: t.fixed || e.data.fixed
        })
      }))
    },
    getContainerRect: function () {
      var t = this.data.container();
      return new Promise((function (e) {
        return t.boundingClientRect(e).exec()
      }))
    }
  }
});