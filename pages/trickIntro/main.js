require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([23],{"1qg/":function(i,t,s){var n=s("9P+1"),c=s("W7Vp"),e=s("ybqe")(n.a,c.a,(function(i){s("VWz8")}),"data-v-2ffe89f6",null);t.a=e.exports},"9P+1":function(i,t,s){var n=s("gyMJ");t.a={name:"Classify",data:function(){return{trickList:[],popupWindowVisible:!1,trickInfo:{}}},onShow:function(){this.getList()},onHide:function(){this.popupWindowVisible=!1},onUnload:function(){this.popupWindowVisible=!1},methods:{getList:function(){var i=this;Object(n.A)().then((function(t){0===t.code&&(i.trickList=t.data,wx.hideLoading())}))},chooseTrick:function(i){this.trickInfo=i,this.popupWindowVisible=!0},navigateToList:function(){wx.navigateTo({url:"../list/main?rname="+this.trickInfo.name+"&trickId="+this.trickInfo.id})}}}},HjXw:function(i,t,s){Object.defineProperty(t,"__esModule",{value:!0});var n=s("5nAL"),c=s.n(n),e=s("1qg/");new c.a(e.a).$mount()},VWz8:function(i,t){},W7Vp:function(i,t,s){t.a={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"container-wrapper"},[s("section",[s("div",{staticClass:"trick-section"},i._l(i.trickList,(function(t,n){return s("block",{key:n},[s("div",{staticClass:"trick-item",attrs:{eventid:"0_"+n},on:{click:function(s){i.chooseTrick(t)}}},[s("img",{attrs:{src:t.icon,alt:""}}),i._v(" "),s("div",[i._v(i._s(t.name))])])])})))]),i._v(" "),i.popupWindowVisible?s("div",{staticClass:"popup-window flex-box"},[s("div",{staticClass:"popup-window_shadow",attrs:{eventid:"1"},on:{click:function(t){i.popupWindowVisible=!1}}}),i._v(" "),s("div",{staticClass:"popup-window_body trick-popupWindow"},[s("div",{staticClass:"popup-window_content"},[s("div",{staticClass:"popup-window_header"},[s("img",{attrs:{src:"../template/images/landscapeIcon.png",alt:""}}),i._v(" "),s("div",[i._v("“"+i._s(i.trickInfo.name)+"”玩法介绍")])]),i._v(" "),s("div",{staticClass:"popup-window_section"},[s("div",{staticClass:"trick-desc_wrapper"},[s("div",{staticClass:"trick-desc_item"},[s("p",[i._v("01")]),i._v(" "),s("div",[i._v(i._s(i.trickInfo.desc1))])],1),i._v(" "),i.trickInfo.desc2?s("div",{staticClass:"trick-desc_item"},[s("p",[i._v("02")]),i._v(" "),s("div",[i._v(i._s(i.trickInfo.desc2))])],1):i._e(),i._v(" "),i.trickInfo.desc3?s("div",{staticClass:"trick-desc_item"},[s("p",[i._v("03")]),i._v(" "),s("div",[i._v(i._s(i.trickInfo.desc3))])],1):i._e(),i._v(" "),i.trickInfo.desc4?s("div",{staticClass:"trick-desc_item"},[s("p",[i._v("04")]),i._v(" "),s("div",[i._v(i._s(i.trickInfo.desc4))])],1):i._e()]),i._v(" "),s("p",{staticClass:"trick-desc_tips margin-top-15",attrs:{eventid:"2"},on:{click:i.navigateToList}},[i._v("查看相关模板("+i._s(i.trickInfo.templateNum)+") >")])],1)]),i._v(" "),s("div",{staticClass:"popup-window_footer"},[s("img",{attrs:{src:"../../../static/images/Icons/landscape_close.png",eventid:"3"},on:{click:function(t){i.popupWindowVisible=!1}}})])])]):i._e()],1)},staticRenderFns:[]}}},["HjXw"]);