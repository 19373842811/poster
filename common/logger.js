Object.defineProperty(exports, "__esModule", {
  value: true
});exports.default = void 0;var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");var _createClass2 = require("../@babel/runtime/helpers/createClass");var label = '[ocr plugin]';var logger;if (typeof wx.getRealtimeLogManager === 'function') {
  var logManager = wx.getRealtimeLogManager();
  logger = logManager.tag('ocr-plugin');
}var Logger = /*#__PURE__*/function () {
  function Logger(key) {
    _classCallCheck2(this, Logger);

    this.key = key;
  }

  _createClass2(Logger, [{
    key: "_log",
    value: function _log(level) {
      var _console;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console = console)[level].apply(_console, [label].concat(args));

      logger && logger[level](this.key, args.reduce(function (acc, arg) {
        return acc + (typeof arg === 'string' ? arg : JSON.stringify(arg)) + ' ';
      }, ''));
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this._log.apply(this, ['info'].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this._log.apply(this, ['warn'].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this._log.apply(this, ['error'].concat(args));
    }
  }]);

  return Logger;
}();exports.default = Logger;