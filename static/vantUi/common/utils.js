Object.defineProperty(exports,"__esModule",{value:!0}),exports.addUnit=function(t){if(!(0,e.isDef)(t))return;return t=String(t),(0,e.isNumber)(t)?"".concat(t,"px"):t},exports.getAllRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).selectAll(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r(e[0])}))}))},exports.getCurrentPage=function(){var e=getCurrentPages();return e[e.length-1]},exports.getRect=function(e,t){return new Promise((function(r){wx.createSelectorQuery().in(e).select(t).boundingClientRect().exec((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r(e[0])}))}))},Object.defineProperty(exports,"getSystemInfoSync",{enumerable:!0,get:function(){return t.getSystemInfoSync}}),exports.groupSetData=function(e,r){(0,t.canIUseGroupSetData)()?e.groupSetData(r):r()},Object.defineProperty(exports,"isDef",{enumerable:!0,get:function(){return e.isDef}}),exports.nextTick=function(e){(0,t.canIUseNextTick)()?wx.nextTick(e):setTimeout((function(){e()}),1e3/30)},exports.pickExclude=function(t,r){if(!(0,e.isPlainObject)(t))return{};return Object.keys(t).reduce((function(e,n){return r.includes(n)||(e[n]=t[n]),e}),{})},exports.range=function(e,t,r){return Math.min(Math.max(e,t),r)},exports.requestAnimationFrame=function(e){return setTimeout((function(){e()}),1e3/30)},exports.toPromise=function(t){if((0,e.isPromise)(t))return t;return Promise.resolve(t)},require("../../../@babel/runtime/helpers/Arrayincludes");var e=require("./validator"),t=require("./version");