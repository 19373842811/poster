var e = require("../../../@babel/runtime/helpers/interopRequireDefault"),
  t = require("../../../@babel/runtime/helpers/defineProperty"),
  a = e(require("../helpers/baseComponent")),
  i = e(require("../helpers/classNames")),
  s = e(require("../helpers/styleToCssString")),
  o = require("../index");
(0, a.default)({
  useSafeArea: !0,
  externalClasses: ["wux-content-class", "wux-header-class", "wux-body-class", "wux-footer-class", "wux-close-class"],
  properties: {
    prefixCls: {
      type: String,
      value: "wux-popup"
    },
    animationPrefixCls: {
      type: String,
      value: "wux-animate"
    },
    title: {
      type: String,
      value: ""
    },
    content: {
      type: String,
      value: ""
    },
    extra: {
      type: String,
      value: ""
    },
    position: {
      type: String,
      value: "center",
      observer: "getTransitionName"
    },
    wrapStyle: {
      type: [String, Object],
      value: "",
      observer: function (e) {
        this.setData({
          extStyle: (0, s.default)(e)
        })
      }
    },
    closable: {
      type: Boolean,
      value: !1
    },
    mask: {
      type: Boolean,
      value: !0
    },
    maskClosable: {
      type: Boolean,
      value: !0
    },
    visible: {
      type: Boolean,
      value: !1,
      observer: "setPopupVisible"
    },
    zIndex: {
      type: Number,
      value: 1e3
    },
    hasHeader: {
      type: Boolean,
      value: !0
    },
    hasFooter: {
      type: Boolean,
      value: !0
    }
  },
  data: {
    transitionName: "",
    popupVisible: !1,
    extStyle: ""
  },
  computed: {
    classes: ["prefixCls, position, safeAreaConfig, isIPhoneX", function (e, a, s, o) {
      var n;
      return {
        wrap: (0, i.default)("".concat(e, "-position"), (t(n = {}, "".concat(e, "-position--").concat(a), a), t(n, "".concat(e, "-position--is-iphonex"), s.bottom && o), n)),
        content: "".concat(e, "__content"),
        hd: "".concat(e, "__hd"),
        title: "".concat(e, "__title"),
        bd: "".concat(e, "__bd"),
        ft: "".concat(e, "__ft"),
        extra: "".concat(e, "__extra"),
        close: "".concat(e, "__close"),
        x: "".concat(e, "__close-x")
      }
    }]
  },
  methods: {
    close: function () {
      this.triggerEvent("close")
    },
    onMaskClick: function () {
      this.data.maskClosable && this.close()
    },
    onExited: function () {
      this.triggerEvent("closed")
    },
    getTransitionName: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data.position,
        t = this.data.animationPrefixCls,
        a = "";
      switch (e) {
        case "top":
          a = "".concat(t, "--slideInDown");
          break;
        case "right":
          a = "".concat(t, "--slideInRight");
          break;
        case "bottom":
          a = "".concat(t, "--slideInUp");
          break;
        case "left":
          a = "".concat(t, "--slideInLeft");
          break;
        default:
          a = "".concat(t, "--fadeIn")
      }
      this.setData({
        transitionName: a
      })
    },
    setPopupVisible: function (e) {
      this.data.popupVisible !== e && (this.setData({
        popupVisible: e
      }), this.setBackdropVisible(e))
    },
    setBackdropVisible: function (e) {
      this.data.mask && this.$wuxBackdrop && this.$wuxBackdrop[e ? "retain" : "release"]()
    }
  },
  created: function () {
    this.data.mask && (this.$wuxBackdrop = (0, o.$wuxBackdrop)("#wux-backdrop", this))
  },
  attached: function () {
    this.setPopupVisible(this.data.visible), this.getTransitionName()
  }
});