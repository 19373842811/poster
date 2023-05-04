var _state = require("./state");Component({
  properties: {
    certificateType: {
      type: String,
      value: 'idCard',
      observer: function observer(newVal, oldVal, changedPath) {}
    },
    opposite: {
      type: Boolean,
      value: true,
      observer: function observer(newVal, oldVal, changedPath) {}
    },
    selectedOptions: {
      type: Array,
      value: ['allOptions'],
      observer: function observer(newVal, oldVal, changedPath) {}
    }
  },
  methods: {
    nav: function nav() {
      var _this = this;

      var callbackId = encodeURIComponent(String(Date.now() + Math.random()));
      _state.processState.callbackId = callbackId;

      _state.processState.cb = function (_callbackId, result, formData) {
        if (callbackId !== _callbackId) return;
        setTimeout(function () {
          if (result === 'success') _this.triggerEvent('onSuccess', formData);else if (result === 'fail') _this.triggerEvent('onFail', formData);else _this.triggerEvent('onCancel');
        }, 500);
      };
    }
  }
});