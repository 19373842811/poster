Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return r.length?e.apply(t,r):e.call(t)}},t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(t))},n=Behavior({properties:{visible:{type:Boolean,value:!1}},methods:{$$mergeOptionsAndBindMethods:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.fns,r=Object.assign({},t);for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(n[o]=e(r[o],this),delete r[o]);return r},$$setData:function(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=t.apply(void 0,[{}].concat(r));return new Promise((function(t){e.setData(i,t)}))},$$requestAnimationFrame:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3/60;return new Promise((function(e){return setTimeout(e,t)})).then(e)}},created:function(){this.fns={}},detached:function(){this.fns={}}});exports.default=n;