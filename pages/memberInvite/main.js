require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([14],{"7MRs":function(t,a,e){Object.defineProperty(a,"__esModule",{value:!0});var i=e("5nAL"),s=e.n(i),n=e("vEEB");new s.a(n.a).$mount()},BBUJ:function(t,a,e){var i=e("Dd8w"),s=e.n(i),n=e("0xDb"),o=e("uzBN"),r=e("p5Kd"),c=e("gyMJ"),l=e("NYxO");a.a={name:"memberInvite",data:function(){return{flag:0,isEffective:!0,hasAuthen:!1,isConfirm:0,isSmsSend:!1,avatar:"",userName:"",orgName:"",orgId:"",form:{nickName:"",avatarUrl:""}}},computed:s()({},Object(l.b)(["baseInfo"])),onLoad:function(t){var a=JSON.parse(t.inviterInfo);this.userName=a.userName,this.orgId=a.orgId,this.orgName=a.orgName,this.avatar=a.avatar,this.handleInviteTime(a.inviteDate)},onShow:function(){var t=this;wx.hideHomeButton(),this.$store.dispatch("baseInfo/login").then((function(a){a.data.org&&"1"===a.data.org.memberStatus?t.isConfirm=1:a.data.org&&"2"===a.data.org.memberStatus?wx.switchTab({url:"../index/main"}):a.org||(t.isConfirm=0)}))},methods:{handleInviteTime:function(t){var a;a=!(Date.parse(new Date)-t>864e5),this.isEffective=a},onChooseAvatar:function(t){var a=this;wx.showLoading({title:"上传中...",mask:!0,success:function(t){}}),wx.getImageInfo({src:t.mp.detail.avatarUrl,success:function(e){a.policy(t.mp.detail.avatarUrl,e)},fail:function(){},complete:function(){}})},policy:function(t,a){var e=this,i=Object(n.b)();Object(o.b)().then((function(s){var n=s;wx.uploadFile({url:n.host,filePath:t,name:"file",formData:{key:n.dir+"/"+i+"."+a.type,policy:n.policy,OSSAccessKeyId:n.accessid,callback:n.callback,signature:n.signature},success:function(t){if(wx.hideLoading(),200===t.statusCode){var a=JSON.parse(t.data);e.form.avatarUrl=a.filename,console.log("nickName",e.form.nickName)}else wx.showToast({title:"上传失败",icon:"none"})},fail:function(t){wx.hideLoading(),console.log(t)}})}))},acceptInvite:function(t){var a=this;1!==a.flag&&(a.flag=1,t.mp.detail.value.nickName?a.form.avatarUrl?wx.login({success:function(e){var i={avatarUrl:a.form.avatarUrl,nickName:encodeURIComponent(t.mp.detail.value.nickName),code:e.code,pid:"",mobileType:""};Object(c.p)(i).then((function(t){0===t.code&&(a.$store.commit("SET_TOKEN",t.data.token),a.$store.commit("SET_ID",t.data.id),a.$store.commit("SET_SIGNTRICKS",t.data.signTricks),a.$store.commit("SET_LOGINSTATUS",1),a.$store.commit("SET_USERINFO",t.data),a.$store.commit("SET_ORG",t.data.org),a.$store.commit("SET_ISADMIN",t.data.isAdmin),a.$store.commit("SET_ISPROMOTER",t.data.isPromoter),wx.setStorageSync("token",t.data.token),Object(r.h)({oid:a.orgId}).then((function(t){0===t.code?a.isConfirm=1:wx.showToast({title:"您已绑定其他机构",icon:"none",mask:!0,success:function(t){}})})))}))}}):wx.showToast({title:"请上传用户头像",icon:"none",mask:!0,success:function(t){}}):wx.showToast({title:"请填写您的用户昵称",icon:"none",mask:!0,success:function(t){}}))},navigateToMp:function(){wx.switchTab({url:"../index/main"})}}}},bVOG:function(t,a){},krIL:function(t,a){},qT21:function(t,a,e){a.a={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"staff-invite-wrapper"},[t.isEffective?t._e():e("div",{staticClass:"invite-invalid-wrapper"},[e("img",{staticClass:"errorImg",attrs:{src:"/static/images/Icons/fail.png",alt:""}}),t._v(" "),e("span",{staticClass:"tips"},[t._v("此邀请页面已失效，请联系机构管理员重新邀请！")]),t._v(" "),e("div",{staticClass:"text-btn",attrs:{eventid:"0"},on:{click:t.goIndex}},[t._v("了解更多 >")])]),t._v(" "),t.isEffective&&0==t.isConfirm?e("div",{staticClass:"invite-wrapper"},[e("img",{staticClass:"orgAvatar",attrs:{src:t.avatar,alt:""}}),t._v(" "),e("div",{staticClass:"org-name"},[e("span",[t._v(t._s(t.userName))]),t._v("邀请你")]),t._v(" "),e("p",{staticClass:"org-intro"},[t._v("管理“"),e("span",{staticStyle:{color:"#ffac00"}},[t._v(t._s(t.orgName))]),t._v("”在线招生课程")]),t._v(" "),e("form",{attrs:{eventid:"2"},on:{submit:t.acceptInvite}},[e("section",{staticClass:"form-wrapper"},[e("div",{staticClass:"form-item flex-box-start",staticStyle:{"border-bottom":"1px solid #f2f2f2"}},[e("span",{staticClass:"form-item_label"},[t._v("昵称")]),t._v(" "),e("input",{staticStyle:{width:"80%"},attrs:{name:"nickName",type:"nickname",placeholder:"请输入昵称","placeholder-class":"placeholderStyle"}})]),t._v(" "),e("button",{staticClass:"form-item flex-box-start",attrs:{"open-type":"chooseAvatar",eventid:"1"},on:{chooseavatar:t.onChooseAvatar}},[e("span",{staticClass:"form-item_label"},[t._v("头像")]),t._v(" "),t.form.avatarUrl?e("img",{staticClass:"avatar",attrs:{src:t.form.avatarUrl}}):e("div",{staticClass:"upload-avatar-btn"},[e("span",[t._v("+")]),t._v(" "),e("div",[t._v("请上传")])])])],1),t._v(" "),e("button",{staticClass:"btn-liner",attrs:{formType:"submit"}},[t._v("接受邀请")])],1),t._v(" "),e("div",{staticClass:"text-btn",attrs:{eventid:"3"},on:{click:t.navigateToMp}},[t._v("访问小程序 >")])],1):t._e(),t._v(" "),1==t.isConfirm?e("div",{staticClass:"accept-invite-wrapper"},[e("icon",{attrs:{type:"success",size:"40"}}),t._v(" "),e("p",{staticClass:"tips margin-top-20"},[t._v("成功接受邀请,请等待管理员"),e("span",{staticStyle:{"text-decoration":"underline"}},[t._v(t._s(t.userName))]),t._v("确认...")]),t._v(" "),e("div",{staticClass:"text-btn-wrapper"},[e("div",{staticClass:"text-btn",attrs:{eventid:"4"},on:{click:t.navigateToMp}},[t._v("访问小程序 >")])])],1):t._e()])},staticRenderFns:[]}},vEEB:function(t,a,e){var i=e("BBUJ"),s=e("qT21"),n=e("ybqe")(i.a,s.a,(function(t){e("krIL"),e("bVOG")}),"data-v-c3806740",null);a.a=n.exports}},["7MRs"]);