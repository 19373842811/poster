var t = require("../../../@babel/runtime/helpers/interopRequireDefault"),
  e = require("../../../@babel/runtime/helpers/typeof"),
  a = t(require("../helpers/baseComponent")),
  n = t(require("../helpers/styleToCssString")),
  i = "exited";
(0, a.default)({
  properties: {
    in: {
      type: Boolean,
      value: !1,
      observer: function (t) {
        this.data.isMounting && this.updated(t)
      }
    },
    classNames: {
      type: null,
      value: {
        enter: "",
        enterActive: "",
        enterDone: "",
        exit: "",
        exitActive: "",
        exitDone: ""
      }
    },
    duration: {
      type: null,
      value: null
    },
    type: {
      type: String,
      value: "transition"
    },
    appear: {
      type: Boolean,
      value: !1
    },
    enter: {
      type: Boolean,
      value: !0
    },
    exit: {
      type: Boolean,
      value: !0
    },
    mountOnEnter: {
      type: Boolean,
      value: !0
    },
    unmountOnExit: {
      type: Boolean,
      value: !0
    },
    wrapCls: {
      type: String,
      value: ""
    },
    wrapStyle: {
      type: [String, Object],
      value: "",
      observer: function (t) {
        this.setData({
          extStyle: (0, n.default)(t)
        })
      }
    },
    disableScroll: {
      type: Boolean,
      value: !1
    }
  },
  data: {
    animateCss: "",
    animateStatus: i,
    isMounting: !1,
    extStyle: ""
  },
  methods: {
    addEventListener: function () {
      var t = this.data.animateStatus,
        e = this.getTimeouts(),
        a = e.enter,
        n = e.exit;
      "entering" === t && !a && this.data.enter && this.performEntered(), "exiting" === t && !n && this.data.exit && this.performExited()
    },
    onTransitionEnd: function () {
      "transition" === this.data.type && this.addEventListener()
    },
    onAnimationEnd: function () {
      "animation" === this.data.type && this.addEventListener()
    },
    updateStatus: function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      null !== t && (this.cancelNextCallback(), this.isAppearing = e, "entering" === t ? this.performEnter() : this.performExit())
    },
    performEnter: function () {
      var t = this,
        e = this.getClassNames("enter"),
        a = e.className,
        n = e.activeClassName,
        i = this.getTimeouts().enter,
        s = {
          animateStatus: "enter",
          animateCss: a
        },
        r = {
          animateStatus: "entering",
          animateCss: "".concat(a, " ").concat(n)
        };
      if (!this.isAppearing && !this.data.enter) return this.performEntered();
      this.safeSetData(s, (function () {
        t.triggerEvent("change", {
          animateStatus: "enter"
        }), t.triggerEvent("enter", {
          isAppearing: t.isAppearing
        }), t.delayHandler(1e3 / 60, (function () {
          t.safeSetData(r, (function () {
            t.triggerEvent("change", {
              animateStatus: "entering"
            }), t.triggerEvent("entering", {
              isAppearing: t.isAppearing
            }), i && t.delayHandler(i, t.performEntered)
          }))
        }))
      }))
    },
    performEntered: function () {
      var t = this,
        e = {
          animateStatus: "entered",
          animateCss: this.getClassNames("enter").doneClassName
        };
      this.safeSetData(e, (function () {
        t.triggerEvent("change", {
          animateStatus: "entered"
        }), t.triggerEvent("entered", {
          isAppearing: t.isAppearing
        })
      }))
    },
    performExit: function () {
      var t = this,
        e = this.getClassNames("exit"),
        a = e.className,
        n = e.activeClassName,
        i = this.getTimeouts().exit,
        s = {
          animateStatus: "exit",
          animateCss: a
        },
        r = {
          animateStatus: "exiting",
          animateCss: "".concat(a, " ").concat(n)
        };
      if (!this.data.exit) return this.performExited();
      this.safeSetData(s, (function () {
        t.triggerEvent("change", {
          animateStatus: "exit"
        }), t.triggerEvent("exit"), t.delayHandler(1e3 / 60, (function () {
          t.safeSetData(r, (function () {
            t.triggerEvent("change", {
              animateStatus: "exiting"
            }), t.triggerEvent("exiting"), i && t.delayHandler(i, t.performExited)
          }))
        }))
      }))
    },
    performExited: function () {
      var t = this,
        e = this.getClassNames("exit").doneClassName,
        a = {
          animateStatus: i,
          animateCss: e
        };
      this.safeSetData(a, (function () {
        t.triggerEvent("change", {
          animateStatus: i
        }), t.triggerEvent(i), t.data.unmountOnExit && t.setData({
          animateStatus: "unmounted"
        }, (function () {
          t.triggerEvent("change", {
            animateStatus: "unmounted"
          })
        }))
      }))
    },
    getClassNames: function (t) {
      var e = this.data.classNames;
      return {
        className: "string" != typeof e ? e[t] : "".concat(e, "-").concat(t),
        activeClassName: "string" != typeof e ? e["".concat(t, "Active")] : "".concat(e, "-").concat(t, "-active"),
        doneClassName: "string" != typeof e ? e["".concat(t, "Done")] : "".concat(e, "-").concat(t, "-done")
      }
    },
    getTimeouts: function () {
      var t = this.data.duration;
      return null !== t && "object" === e(t) ? {
        enter: t.enter,
        exit: t.exit
      } : "number" == typeof t ? {
        enter: t,
        exit: t
      } : {}
    },
    updated: function (t) {
      var e = this,
        a = (this.pendingData || this.data).animateStatus,
        n = null;
      t ? ("unmounted" === a && (a = i, this.setData({
        animateStatus: i
      }, (function () {
        e.triggerEvent("change", {
          animateStatus: i
        })
      }))), "enter" !== a && "entering" !== a && "entered" !== a && (n = "entering")) : "enter" !== a && "entering" !== a && "entered" !== a || (n = "exiting"), this.updateStatus(n)
    },
    delayHandler: function (t, e) {
      t && (this.setNextCallback(e), setTimeout(this.nextCallback, t))
    },
    onTap: function () {
      this.triggerEvent("click")
    },
    noop: function () {}
  },
  attached: function () {
    var t = this,
      e = null,
      a = null;
    this.data.in ? this.data.appear ? (e = i, a = "entering") : e = "entered" : e = this.data.unmountOnExit || this.data.mountOnEnter ? "unmounted" : i, this.safeSetData({
      animateStatus: e,
      isMounting: !0
    }, (function () {
      t.triggerEvent("change", {
        animateStatus: e
      }), t.updateStatus(a, !0)
    }))
  }
});