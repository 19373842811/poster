var e = require("../../../@babel/runtime/helpers/interopRequireDefault"),
  o = require("../../../@babel/runtime/helpers/defineProperty"),
  a = e(require("../helpers/baseComponent")),
  s = e(require("../helpers/classNames"));
(0, a.default)({
  properties: {
    prefixCls: {
      type: String,
      value: "wux-landscape"
    },
    visible: {
      type: Boolean,
      value: !1
    },
    mask: {
      type: Boolean,
      value: !0,
      observer: function (e) {
        this.setData({
          showMask: e
        })
      }
    },
    maskClosable: {
      type: Boolean,
      value: !1
    },
    closable: {
      type: Boolean,
      value: !0
    }
  },
  data: {
    showMask: !0
  },
  computed: {
    classes: ["prefixCls, showMask", function (e, a) {
      return {
        wrap: (0, s.default)(e, o({}, "".concat(e, "--has-mask"), a)),
        popup: "".concat(e, "__popup"),
        popupBody: "".concat(e, "__popup-body"),
        popupClose: "".concat(e, "__popup-close"),
        inner: "".concat(e, "__inner"),
        close: "".concat(e, "__close"),
        x: "".concat(e, "__close-x")
      }
    }]
  },
  methods: {
    onClose: function () {
      this.triggerEvent("close", {
        visible: !this.data.visible
      })
    }
  },
  attached: function () {}
});