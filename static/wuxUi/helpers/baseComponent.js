var e=require("../../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../../../@babel/runtime/helpers/objectSpread2"),a=require("../../../@babel/runtime/helpers/toConsumableArray"),o=e(require("./computedBehavior")),t=e(require("./relationsBehavior")),s=e(require("./safeAreaBehavior")),i=e(require("./safeSetDataBehavior")),u=e(require("./eventsBehavior")),l=e(require("./funcBehavior")),n=e(require("./compareVersion")),c=wx.getSystemInfoSync(),v=c.platform,d=c.SDKVersion;"devtools"===v&&(0,n.default)(d,"2.6.6")<0&&wx&&wx.showModal&&wx.showModal({title:"提示",content:"当前基础库版本（".concat(d,"）过低，无法使用 Wux Weapp 组件库，请更新基础库版本 >=").concat("2.6.6"," 后重试。")});var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.externalClasses=["wux-class","wux-hover-class"].concat(a(e.externalClasses=e.externalClasses||[])),e.behaviors=[t.default,o.default,i.default].concat(a(e.behaviors=e.behaviors||[])),e.useSafeArea&&(e.behaviors=[].concat(a(e.behaviors),[s.default]),delete e.useSafeArea),e.useEvents&&(e.behaviors=[].concat(a(e.behaviors),[u.default]),delete e.useEvents),e.useFunc&&(e.behaviors=[].concat(a(e.behaviors),[l.default]),delete e.useFunc),e.useField&&(e.behaviors=[].concat(a(e.behaviors),["wx://form-field"]),delete e.useField),e.useExport&&(e.behaviors=[].concat(a(e.behaviors),["wx://component-export"]),e.methods=r({export:function(){return this}},e.methods),delete e.useExport),e.options=r({multipleSlots:!0,addGlobalClass:!0},e.options),Component(e)};exports.default=h;