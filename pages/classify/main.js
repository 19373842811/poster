require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([32],{PJnL:function(t,i){},QxJy:function(t,i,e){var n=e("gyMJ");i.a={name:"Classify",data:function(){return{navBarHeight:0,queryList:[],list:[],trickList:[],fieldIndex:0,scrollIndex:"scroll0",scrollTop:0,tabIndex:1}},onShow:function(){this.getList()},methods:{goBack:function(){wx.navigateBack({delta:1})},handleTab:function(t){this.tabIndex=t,this.getList()},getList:function(){var t=this;wx.showLoading({title:"请求中...",mask:!0,success:function(t){}}),1===this.tabIndex?Object(n.e)().then((function(i){0===i.code&&(t.list=i.data,setTimeout((function(){t.getHeight()}),100))})):2===this.tabIndex&&Object(n.A)().then((function(i){0===i.code&&(t.trickList=i.data,wx.hideLoading())}))},getHeight:function(){var t=this,i=this;i.queryList=[];var e=wx.createSelectorQuery();e.selectAll(".label-list").boundingClientRect(),e.exec((function(e){i.queryList=e[0].map((function(i,e){return t.list[e].top=i.top,i})),wx.hideLoading()}))},navigateToList:function(t,i){i?wx.navigateTo({url:"../list/main?rname="+t.name+"&rid="+i.id+"&typeId="+t.id}):wx.navigateTo({url:"../list/main?rname="+t.name+"&trickId="+t.id})},location:function(t){var i=this;this.scrollIndex="scroll"+t,setTimeout((function(){i.fieldIndex=t}),100)},scroll:function(t){this.scrollTop=t.mp.detail.scrollTop;var i=null;0!==this.scrollTop?(this.queryList.map((function(e,n){t.mp.detail.scrollTop>=e.top-90&&(i=e.id.split("scroll")[1])})),this.fieldIndex=i):this.fieldIndex=0}}}},b5th:function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var n=e("5nAL"),a=e.n(n),s=e("tSeN");new a.a(s.a).$mount()},"m+0Q":function(t,i,e){i.a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-wrapper"},[e("header",[e("div",{staticClass:"tab-item",class:1==t.tabIndex?"active-tab":"",attrs:{eventid:"0"},on:{click:function(i){t.handleTab(1)}}},[t._v("按分类")]),t._v(" "),e("div",{staticClass:"tab-item",class:2==t.tabIndex?"active-tab":"",attrs:{eventid:"1"},on:{click:function(i){t.handleTab(2)}}},[t._v("按玩法")])]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),1==t.tabIndex?e("section",[e("div",{staticClass:"left-wrapper"},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"field-item",class:t.fieldIndex==n?"active-field":"",attrs:{eventid:"2_"+n},on:{click:function(i){t.location(n)}}},[e("span",[t._v(t._s(i.name))]),t._v(" "),e("div",{staticClass:"flag"})])}))),t._v(" "),e("scroll-view",{staticClass:"right-wrapper",attrs:{"scroll-y":"",enhanced:"","scroll-into-view":t.scrollIndex,eventid:"4"},on:{scroll:t.scroll}},t._l(t.list,(function(i,n){return e("div",{key:n,staticClass:"label-list",attrs:{id:"scroll"+n,"data-id":i}},[e("div",{staticClass:"field-title"},[e("div",[t._v(t._s(i.name))])]),t._v(" "),e("div",{staticClass:"label-wrapper flex-box-start",staticStyle:{"flex-wrap":"wrap"}},t._l(i.realmList,(function(a,s){return e("div",{key:s,staticClass:"label-item",class:1==a.isHot?"actived-label":"",attrs:{eventid:"3_"+n+"-"+s},on:{click:function(e){t.navigateToList(i,a)}}},[t._v(t._s(a.name))])})))])})))],1):t._e(),t._v(" "),2==t.tabIndex?e("section",[e("div",{staticClass:"trick-section"},t._l(t.trickList,(function(i,n){return e("block",{key:n},[e("div",{staticClass:"trick-item",attrs:{eventid:"5_"+n},on:{click:function(e){t.navigateToList(i)}}},[e("img",{attrs:{src:i.icon,alt:""}}),t._v(" "),e("div",[t._v(t._s(i.name))]),t._v(" "),e("span",[t._v("模板量："+t._s(i.templateNum))])])])})))]):t._e()],1)},staticRenderFns:[]}},tSeN:function(t,i,e){var n=e("QxJy"),a=e("m+0Q"),s=e("ybqe")(n.a,a.a,(function(t){e("PJnL")}),"data-v-2684f061",null);i.a=s.exports}},["b5th"]);