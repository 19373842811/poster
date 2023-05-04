var t = require("../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../common/component"),
  i = require("../mixins/touch"),
  n = require("../common/utils"),
  a = require("../common/validator"),
  r = require("../common/relation");
(0, e.VantComponent)({
  mixins: [i.touch],
  classes: ["nav-class", "tab-class", "tab-active-class", "line-class", "wrap-class"],
  relation: (0, r.useChildren)("tab", (function () {
    this.updateTabs()
  })),
  props: {
    sticky: Boolean,
    border: Boolean,
    swipeable: Boolean,
    titleActiveColor: String,
    titleInactiveColor: String,
    color: String,
    animated: {
      type: Boolean,
      observer: function () {
        var t = this;
        this.children.forEach((function (e, i) {
          return e.updateRender(i === t.data.currentIndex, t)
        }))
      }
    },
    lineWidth: {
      type: null,
      value: 40,
      observer: "resize"
    },
    lineHeight: {
      type: null,
      value: -1
    },
    active: {
      type: null,
      value: 0,
      observer: function (t) {
        t !== this.getCurrentName() && this.setCurrentIndexByName(t)
      }
    },
    type: {
      type: String,
      value: "line"
    },
    ellipsis: {
      type: Boolean,
      value: !0
    },
    duration: {
      type: Number,
      value: .3
    },
    zIndex: {
      type: Number,
      value: 1
    },
    swipeThreshold: {
      type: Number,
      value: 5,
      observer: function (t) {
        this.setData({
          scrollable: this.children.length > t || !this.data.ellipsis
        })
      }
    },
    offsetTop: {
      type: Number,
      value: 0
    },
    lazyRender: {
      type: Boolean,
      value: !0
    },
    useBeforeChange: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    tabs: [],
    scrollLeft: 0,
    scrollable: !1,
    currentIndex: 0,
    container: null,
    skipTransition: !0,
    scrollWithAnimation: !1,
    lineOffsetLeft: 0,
    inited: !1
  },
  mounted: function () {
    var t = this;
    (0, n.requestAnimationFrame)((function () {
      t.swiping = !0, t.setData({
        container: function () {
          return t.createSelectorQuery().select(".van-tabs")
        }
      }), t.resize(), t.scrollIntoView()
    }))
  },
  methods: {
    updateTabs: function () {
      var t = this.children,
        e = void 0 === t ? [] : t,
        i = this.data;
      this.setData({
        tabs: e.map((function (t) {
          return t.data
        })),
        scrollable: this.children.length > i.swipeThreshold || !i.ellipsis
      }), this.setCurrentIndexByName(i.active || this.getCurrentName())
    },
    trigger: function (t, e) {
      var i = this.data.currentIndex,
        n = this.getChildData(i, e);
      (0, a.isDef)(n) && this.$emit(t, n)
    },
    onTap: function (t) {
      var e = this,
        i = t.currentTarget.dataset.index,
        a = this.children[i];
      a.data.disabled ? this.trigger("disabled", a) : this.onBeforeChange(i).then((function () {
        e.setCurrentIndex(i), (0, n.nextTick)((function () {
          e.trigger("click")
        }))
      }))
    },
    setCurrentIndexByName: function (t) {
      var e = this.children,
        i = (void 0 === e ? [] : e).filter((function (e) {
          return e.getComputedName() === t
        }));
      i.length && this.setCurrentIndex(i[0].index)
    },
    setCurrentIndex: function (t) {
      var e = this,
        i = this.data,
        r = this.children,
        s = void 0 === r ? [] : r;
      if (!(!(0, a.isDef)(t) || t >= s.length || t < 0) && ((0, n.groupSetData)(this, (function () {
          s.forEach((function (i, n) {
            var a = n === t;
            a === i.data.active && i.inited || i.updateRender(a, e)
          }))
        })), t !== i.currentIndex)) {
        var o = null !== i.currentIndex;
        this.setData({
          currentIndex: t
        }), (0, n.requestAnimationFrame)((function () {
          e.resize(), e.scrollIntoView()
        })), (0, n.nextTick)((function () {
          e.trigger("input"), o && e.trigger("change")
        }))
      }
    },
    getCurrentName: function () {
      var t = this.children[this.data.currentIndex];
      if (t) return t.getComputedName()
    },
    resize: function () {
      var e = this;
      if ("line" === this.data.type) {
        var i = this.data,
          a = i.currentIndex,
          r = i.ellipsis,
          s = i.skipTransition;
        Promise.all([(0, n.getAllRect)(this, ".van-tab"), (0, n.getRect)(this, ".van-tabs__line")]).then((function (i) {
          var n = t(i, 2),
            o = n[0],
            l = void 0 === o ? [] : o,
            u = n[1],
            c = l[a];
          if (null != c) {
            var h = l.slice(0, a).reduce((function (t, e) {
              return t + e.width
            }), 0);
            h += (c.width - u.width) / 2 + (r ? 0 : 8), e.setData({
              lineOffsetLeft: h,
              inited: !0
            }), e.swiping = !0, s && setTimeout((function () {
              e.setData({
                skipTransition: !1
              })
            }), e.data.duration)
          }
        }))
      }
    },
    scrollIntoView: function () {
      var e = this,
        i = this.data,
        a = i.currentIndex,
        r = i.scrollable,
        s = i.scrollWithAnimation;
      r && Promise.all([(0, n.getAllRect)(this, ".van-tab"), (0, n.getRect)(this, ".van-tabs__nav")]).then((function (i) {
        var r = t(i, 2),
          o = r[0],
          l = r[1],
          u = o[a],
          c = o.slice(0, a).reduce((function (t, e) {
            return t + e.width
          }), 0);
        e.setData({
          scrollLeft: c - (l.width - u.width) / 2
        }), s || (0, n.nextTick)((function () {
          e.setData({
            scrollWithAnimation: !0
          })
        }))
      }))
    },
    onTouchScroll: function (t) {
      this.$emit("scroll", t.detail)
    },
    onTouchStart: function (t) {
      this.data.swipeable && (this.swiping = !0, this.touchStart(t))
    },
    onTouchMove: function (t) {
      this.data.swipeable && this.swiping && this.touchMove(t)
    },
    onTouchEnd: function () {
      var t = this;
      if (this.data.swipeable && this.swiping) {
        var e = this.direction,
          i = this.deltaX,
          n = this.offsetX;
        if ("horizontal" === e && n >= 50) {
          var a = this.getAvaiableTab(i); - 1 !== a && this.onBeforeChange(a).then((function () {
            return t.setCurrentIndex(a)
          }))
        }
        this.swiping = !1
      }
    },
    getAvaiableTab: function (t) {
      for (var e = this.data, i = e.tabs, n = e.currentIndex, a = t > 0 ? -1 : 1, r = a; n + r < i.length && n + r >= 0; r += a) {
        var s = n + r;
        if (s >= 0 && s < i.length && i[s] && !i[s].disabled) return s
      }
      return -1
    },
    onBeforeChange: function (t) {
      var e = this;
      return this.data.useBeforeChange ? new Promise((function (i, n) {
        e.$emit("before-change", Object.assign(Object.assign({}, e.getChildData(t)), {
          callback: function (t) {
            return t ? i() : n()
          }
        }))
      })) : Promise.resolve()
    },
    getChildData: function (t, e) {
      var i = e || this.children[t];
      if ((0, a.isDef)(i)) return {
        index: i.index,
        name: i.getComputedName(),
        title: i.data.title
      }
    }
  }
});