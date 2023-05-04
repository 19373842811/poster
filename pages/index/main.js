require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([29],{"5vTQ":function(t,e,i){var a=i("mvHQ"),s=i.n(a),n=i("Dd8w"),o=i.n(n),c=i("NYxO"),r=i("gyMJ");e.a={data:function(){return{isIos:!1,bannerList:[],navList:[],scrollFlag:0,recruitList:[],schemeList:[],landscapeVisible:!1,noticeVisible:!1,promoterInfo:{},noticeInfo:{},scale:"scale(1)",timer:null,uid:null,pid:null,scrollTop:"",noticeFlag:0,noticeCheckedIds:[]}},computed:o()({},Object(c.b)(["baseInfo"]),{validityTime:function(){if(this.baseInfo.org&&this.baseInfo.org.passTime){var t=new Date,e=(new Date(this.baseInfo.org.passTime.replace(/-/g,"/"))-t)/1e3/60/60/24;return Math.ceil(e)}return 0}}),watch:{landscapeVisible:function(t){t?wx.hideTabBar():wx.showTabBar()}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(t){var e=this;if(wx.getSystemInfo({success:function(t){(t.system.indexOf("iOS")>-1||t.system.indexOf("IOS")>-1||t.system.indexOf("ios")>-1)&&(e.isIos=!0)}}),t.scene){var i=decodeURIComponent(t.scene);this.uid=i}else t.uid&&(this.uid=t.uid)},onShow:function(){var t=this;this.noticeCheckedIds=wx.getStorageSync("noticeCheckedIds")?JSON.parse(wx.getStorageSync("noticeCheckedIds")):[],this.$store.dispatch("baseInfo/login").then((function(e){t.getNotice()})).catch((function(){t.getNotice()})),this.$store.dispatch("getSysParams"),this.getHomeData(),this.getClassifyList(),this.getBannerList()},methods:{getBannerList:function(){var t=this;Object(r.a)().then((function(e){t.bannerList=e.data})),Object(r.x)().then((function(e){t.schemeList=e.data}))},getNotice:function(){var t=this;Object(r.k)().then((function(e){e.data&&"1"===e.data.page?(t.noticeInfo=e.data,"1"===e.data.pauseFlag?t.noticeVisible=!0:t.uid?t.checkPromoter(t.uid):0===(t.noticeCheckedIds.length>0?t.noticeCheckedIds.filter((function(t){return t&&t===e.data.id})):[]).length?"1"===e.data.type||"2"===e.data.type&&t.validityTime>0||"3"===e.data.type&&t.validityTime<1?t.noticeVisible=!0:("2"===e.data.type&&t.validityTime<1||"3"===e.data.type&&t.validityTime>0)&&(t.noticeVisible=!1):t.noticeVisible=!1):(t.checkPromoter(t.uid),t.noticeVisible=!1)}))},checkNotice:function(t){var e=this;if(1!==this.noticeFlag)if(this.noticeFlag=1,"0"===t.pauseFlag&&t.url){if(this.baseInfo.id){var i=this.noticeCheckedIds.length>0?this.noticeCheckedIds.filter((function(e){return e&&e.id!==t.id})):[];i.push(t.id),wx.setStorageSync("noticeCheckedIds",s()(i))}wx.navigateTo({url:t.url})}else"1"===t.pauseFlag&&Object(r.k)().then((function(t){e.noticeFlag=0,t.data&&"1"===t.data.page?(e.noticeInfo=t.data,"1"===t.data.pauseFlag?wx.showToast({title:"升级未完成，请耐心等候",icon:"none",mask:!0,success:function(t){}}):e.uid?e.checkPromoter(e.uid):e.noticeVisible=!0):(e.checkPromoter(e.uid),e.noticeVisible=!1)}))},checkPromoter:function(t){var e=this;t?Object(r.r)({uid:t}).then((function(t){0===t.code&&t.data?(e.promoterInfo={avatarUrl:t.data.avatarUrl,nickName:t.data.nickName},e.pid=t.data.pid,e.landscapeVisible=!0,e.timer=setInterval((function(){"scale(1)"===e.scale?e.scale="scale(1.1)":"scale(1.1)"===e.scale&&(e.scale="scale(1)")}),500)):(e.landscapeVisible=!1,wx.showTabBar())})):wx.showTabBar()},getCoupon:function(){var t=this;this.$store.dispatch("baseInfo/login",this.pid).then((function(e){t.landscapeVisible=!1,wx.showTabBar(),clearInterval(t.timer),t.scale="scale(1)"}))},getClassifyList:function(){var t=this;Object(r.e)().then((function(e){t.navList=e.data}))},getHomeData:function(){var t=this;Object(r.l)().then((function(e){t.recruitList=e.data.map((function(t){var e=t;return e.showMore=!1,e}))}))},showMoreField:function(t,e){this.recruitList[e].showMore=!this.recruitList[e].showMore},chooseTemplate:function(t){1===this.baseInfo.loginStatus?wx.navigateTo({url:"../template/main?id="+t.id}):this.$store.dispatch("baseInfo/login").then((function(e){wx.navigateTo({url:"../template/main?id="+t.id})}))},navigateToList:function(t,e){e?wx.navigateTo({url:"../list/main?rname="+t.name+"&typeId="+t.id+"&rid="+e.id}):wx.navigateTo({url:"../list/main?rname="+t.name+"&typeId="+t.id})},navigateTo:function(t){"classify"!==t?wx.navigateTo({url:"../"+t+"/main"}):wx.switchTab({url:"../classify/main"})},clickBanner:function(t){var e=this;"2"===t.gainType?wx.navigateToMiniProgram({appId:t.appId,path:t.appPath,envVersion:"release",success:function(t){}}):"1"===t.loginSign?this.$store.dispatch("baseInfo/login").then((function(i){wx.navigateTo({url:e.isIos?t.iosUrl:t.url})})):wx.navigateTo({url:this.isIos?t.iosUrl:t.url})},scrolltoupper:function(){this.scrollFlag=0},scrolltolower:function(){this.scrollFlag=1},toTop:function(){wx.pageScrollTo({scrollTop:0,duration:300})}},onShareAppMessage:function(){return{title:""+this.$store.state.sysParams.shareText,path:"/pages/index/main",imageUrl:""+this.$store.state.sysParams.sharePic,success:function(t){},fail:function(){},complete:function(){}}},onHide:function(){this.noticeVisible=!1}}},AxeX:function(t,e){},"Dq+u":function(t,e,i){e.a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-wrapper"},[i("header",{staticStyle:{position:"sticky",top:"0"}},[i("div",{staticClass:"flex-space"},[i("div",{staticClass:"search-input-wrapper"},[i("div",{staticClass:"flex-box-start",attrs:{eventid:"0"},on:{click:function(e){t.navigateTo("searchTemplate")}}},[i("img",{staticClass:"search-icon",attrs:{src:"../../../static/images/Icons/search.png"}}),t._v(" "),i("span",[t._v("试试手气")])])]),t._v(" "),i("img",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"./images/classify.png",eventid:"1"},on:{click:function(e){t.navigateTo("classify")}}})])]),t._v(" "),i("div",{staticClass:"banner-wrapper flex-space"},[t.bannerList.length>0?i("swiper",{staticClass:"background-wrapper",attrs:{"indicator-dots":"","indicator-color":"rgba(255, 255, 255, 0.5)","indicator-active-color":"#ffffff",autoplay:"",circular:""}},t._l(t.bannerList,(function(e,a){return i("swiper-item",{key:a,attrs:{mpcomid:"0_"+a}},[i("img",{attrs:{src:e.banner+"?x-oss-process=image/resize,p_80",eventid:"2_"+a},on:{click:function(i){t.clickBanner(e)}}})])}))):t._e()],1),t._v(" "),i("div",{staticClass:"nav-wrapper flex-box-start"},t._l(t.navList,(function(e,a){return i("block",{key:a},[a<5?i("div",{staticClass:"nav-item",attrs:{eventid:"3_"+a},on:{click:function(i){t.navigateToList(e)}}},[i("img",{staticClass:"nav-icon",attrs:{src:e.icon}}),t._v(" "),i("div",[t._v(t._s(e.name))])]):t._e()])}))),t._v(" "),i("scroll-view",{staticClass:"nav-wrapper scroll-nav-wrapper",attrs:{"scroll-x":"true",enhanced:"true","show-scrollbar":!1,eventid:"6"},on:{scrolltoupper:t.scrolltoupper,scrolltolower:t.scrolltolower}},[t._l(t.navList,(function(e,a){return i("block",{key:a},[a>=5?i("div",{staticClass:"nav-item",attrs:{eventid:"4_"+a},on:{click:function(i){t.navigateToList(e)}}},[i("img",{staticClass:"nav-icon",attrs:{src:e.icon}}),t._v(" "),i("div",[t._v(t._s(e.name))])]):t._e()])})),t._v(" "),t.navList.length>0?i("div",{staticClass:"nav-item",attrs:{eventid:"5"},on:{click:function(e){t.navigateTo("classify")}}},[i("img",{staticClass:"nav-icon",attrs:{src:"https://img.miaogeban.com/images_miaogeban/iquanbu.png"}}),t._v(" "),i("div",[t._v("全部")])]):t._e()],2),t._v(" "),t.navList.length>=10?i("div",{staticClass:"scrollFlag-wrapper"},[i("span",{class:0==t.scrollFlag?"active-flag":""}),t._v(" "),i("span",{class:1==t.scrollFlag?"active-flag":""})]):t._e(),t._v(" "),i("div",{staticClass:"note-wrapper flex-space"},[i("navigator",{staticClass:"note-item",attrs:{url:"../A-package/pages/operationHelp/main","hover-class":"none"}},[i("img",{attrs:{src:"./images/note01.png"}})]),t._v(" "),i("navigator",{staticClass:"note-item",attrs:{url:"../trickIntro/main","hover-class":"none"}},[i("img",{attrs:{src:"./images/note02.png"}})]),t._v(" "),i("navigator",{staticClass:"note-item",attrs:{url:"../A-package/pages/realCase/main?type=1","hover-class":"none"}},[i("img",{attrs:{src:"./images/note04.png"}})])],1),t._v(" "),i("div",{staticClass:"special-wrapper"},[i("p",[t._v("近期推荐")]),t._v(" "),i("scroll-view",{staticClass:"scheme-list margin-top-20",attrs:{"scroll-x":"",enhanced:"true","show-scrollbar":!1}},t._l(t.schemeList,(function(e,a){return i("block",{key:a},[e.url?e.url?i("navigator",{staticClass:"scheme-item",attrs:{url:e.url,"open-type":"navigate","hover-class":"none"}},[i("img",{attrs:{src:e.homeIcon,mode:"widthFix"}})]):t._e():i("navigator",{staticClass:"scheme-item",attrs:{url:"../scheme/main?id="+e.id,"open-type":"navigate","hover-class":"none"}},[i("img",{attrs:{src:e.homeIcon,mode:"widthFix"}})])],1)})))],1),t._v(" "),i("div",t._l(t.recruitList,(function(e,a){return i("block",{key:a},[i("section",{staticClass:"section-item"},[i("div",{staticClass:"section-title flex-space margin-bottom-10"},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"more flex-box-end",attrs:{eventid:"7_"+a},on:{click:function(i){t.navigateToList(e)}}},[i("span",[t._v("更多")]),t._v(" "),i("img",{attrs:{src:"../../../static/images/Icons/right-arrow.png",alt:""}})])]),t._v(" "),i("div",{staticClass:"section-nav-wrapper"},[i("scroll-view",{style:{"white-space":e.showMore?"wrap":"nowrap"},attrs:{"scroll-x":!e.showMore,enhanced:"true","show-scrollbar":!1}},t._l(e.realmList,(function(s,n){return i("div",{key:n,staticClass:"section-nav-item",attrs:{eventid:"8_"+a+"-"+n},on:{click:function(i){t.navigateToList(e,s,n)}}},[t._v("\n              "+t._s(s.name)+"\n            ")])}))),t._v(" "),e.realmList.length>6?i("div",{staticClass:"arrow-shadow"}):t._e(),t._v(" "),e.realmList.length>6?i("div",{staticClass:"bottom-arrow",style:{transform:e.showMore?"rotate(180deg)":""},attrs:{eventid:"9_"+a},on:{click:function(i){t.showMoreField(e,a)}}},[i("img",{attrs:{src:"../../../static/images/Icons/bottomArrow.png",alt:""}})]):t._e()],1),t._v(" "),e.realmList[0]?i("div",{staticClass:"imageList-wrapper flex-space margin-top-20"},t._l(e.realmList[0].templateList,(function(e,s){return i("div",{key:s,staticClass:"image-item",attrs:{eventid:"10_"+a+"-"+s},on:{click:function(i){t.chooseTemplate(e)}}},[i("img",{attrs:{src:e.thumbnail+"?x-oss-process=image/resize,p_80",mode:"widthFix"}}),t._v(" "),i("div",[t._v("["+t._s(e.tagName||e.realmName)+"] "+t._s(e.trickName))])])}))):t._e()])],1)}))),t._v(" "),t.landscapeVisible?i("div",{staticClass:"tips-wrapper"},[i("div",{staticClass:"shadow",attrs:{eventid:"11"},on:{touchmove:function(t){t.stopPropagation()}}}),t._v(" "),i("div",{staticClass:"coupon-container"},[i("img",{staticClass:"promoter-avatar",attrs:{src:t.promoterInfo.avatarUrl}}),t._v(" "),i("div",{staticClass:"promoter-name"},[t._v(t._s(t.promoterInfo.nickName))]),t._v(" "),i("p",{staticClass:"promoter-coupon"},[i("img",{attrs:{src:"./images/yinhao_left.png"}}),t._v("\n        真心向您推荐[喵个班]小程序，"),i("br"),t._v("祝您工作顺利，生活幸福!\n        "),i("img",{attrs:{src:"./images/yinhao_right.png"}})],1),t._v(" "),i("div",{staticClass:"promoter-btn",style:{transform:t.scale}},[i("div",{attrs:{eventid:"12"},on:{click:t.getCoupon}},[t._v("开始激动人心的招生引流之旅")])])],1)]):t._e(),t._v(" "),t.noticeVisible?i("div",{staticClass:"notice-wrapper flex-box",attrs:{eventid:"15"},on:{touchmove:function(t){t.stopPropagation(),(!1)(t)}}},[i("div",[i("img",{staticClass:"notice-image",attrs:{src:t.noticeInfo.image,mode:"widthFix",eventid:"13"},on:{click:function(e){t.checkNotice(t.noticeInfo)}}}),t._v(" "),0==t.noticeInfo.pauseFlag?i("img",{staticStyle:{width:"70rpx",height:"70rpx",padding:"20rpx"},attrs:{src:"../../../static/images/Icons/editor_deletefff.png",eventid:"14"},on:{click:function(e){t.noticeVisible=!1}}}):t._e()])]):t._e(),t._v(" "),t.scrollTop>100?i("div",{staticClass:"float-btn",attrs:{eventid:"16"},on:{click:t.toTop}},[i("img",{attrs:{src:"../../../static/images/Icons/toTop_fff.png",alt:""}})]):t._e()],1)},staticRenderFns:[]}},MhDc:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var a=i("5nAL"),s=i.n(a),n=i("Qt9A");new s.a(n.a).$mount()},Qt9A:function(t,e,i){var a=i("5vTQ"),s=i("Dq+u"),n=i("ybqe")(a.a,s.a,(function(t){i("AxeX")}),"data-v-010494eb",null);e.a=n.exports}},["MhDc"]);