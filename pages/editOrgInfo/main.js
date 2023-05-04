require("../../@babel/runtime/helpers/Arrayincludes"),require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([30],{"3dZv":function(t,s,e){Object.defineProperty(s,"__esModule",{value:!0});var o=e("5nAL"),a=e.n(o),i=e("h+iv");new a.a(i.a).$mount()},"5R0r":function(t,s,e){s.a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-wrapper"},["orgInfo"==t.type?e("section",[e("form",{attrs:{eventid:"7"},on:{submit:t.formSubmit}},[e("div",{staticClass:"form-item flex-box-start"},[e("div",{staticClass:"form-item_label"},[t._v("\n          机构logo\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content flex-space",attrs:{eventid:"0"},on:{click:function(s){t.chooseImg("logo")}}},[t.logo||t.form.logo?e("img",{attrs:{src:t.logo||t.form.logo,mode:"heightFix"}}):t._e(),t._v(" "),t.logo||t.form.logo?e("div",{staticClass:"flex-box-start",staticStyle:{color:"#999"}},[e("span",[t._v("修改")]),t._v("  \n            "),e("img",{staticStyle:{width:"12rpx",height:"24rpx"},attrs:{src:"../../../static/images/Icons/right-arrow.png"}})]):e("div",{staticClass:"noImg noImg_square"},[t._v("+")])])]),t._v(" "),e("div",{staticClass:"form-item flex-box-start"},[e("div",{staticClass:"form-item_label"},[t._v("\n          机构简称\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.orgName,expression:"form.orgName"}],attrs:{type:"text",placeholder:"如：新东方教育","placeholder-class":"placeholderStyle",eventid:"1"},domProps:{value:t.form.orgName},on:{input:function(s){s.target.composing||(t.form.orgName=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-item flex-box-start"},[e("div",{staticClass:"form-item_label"},[t._v("\n          咨询手机号\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"textareaStyle",attrs:{type:"number",placeholder:"请输入手机号","placeholder-class":"placeholderStyle",eventid:"2"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-item flex-box-start",attrs:{eventid:"4"},on:{click:t.getLocation}},[e("div",{staticClass:"form-item_label"},[t._v("\n          校区地址\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content flex-space"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticStyle:{width:"95%"},attrs:{"auto-height":"",disabled:"",placeholder:"请选择校区地址","placeholder-class":"placeholderStyle",eventid:"3"},domProps:{value:t.form.address},on:{input:function(s){s.target.composing||(t.form.address=s.target.value)}}}),t._v(" "),e("img",{staticStyle:{width:"12rpx",height:"24rpx"},attrs:{src:"../../../static/images/Icons/right-arrow.png"}})])]),t._v(" "),e("div",{staticClass:"form-item flex-box-start"},[e("div",{staticClass:"form-item_label"},[t._v("\n          联系方式\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"textareaStyle",attrs:{"auto-height":"",placeholder:"如：张三老师 18888888888(微信同号)","placeholder-class":"placeholderStyle",eventid:"5"},domProps:{value:t.form.phone},on:{input:function(s){s.target.composing||(t.form.phone=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-item margin-top-20"},[e("div",{staticClass:"form-item_label"},[t._v("\n          开设课程\n        ")]),t._v(" "),e("div",{staticClass:"form-item_content margin-top-20",staticStyle:{width:"100%"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.course,expression:"form.course"}],staticClass:"textareaStyle",staticStyle:{width:"96%",height:"130rpx"},attrs:{maxlength:"100",placeholder:"如：少儿美术 | 书法 | 围棋 | 专注力 | ...","placeholder-class":"placeholderStyle",eventid:"6"},domProps:{value:t.form.course},on:{input:function(s){s.target.composing||(t.form.course=s.target.value)}}}),t._v(" "),e("div",{staticClass:"margin-top-20 flex-box-end",staticStyle:{color:"#999","font-size":"24rpx","padding-right":"20rpx"}},[t._v(t._s(t.form.course.length||0)+" / 100")])])]),t._v(" "),e("button",{staticClass:"submit-btn btn-liner",staticStyle:{margin:"50rpx auto 0"},attrs:{formType:"submit"}},[t._v("保存")])],1)],1):t._e(),t._v(" "),"school"==t.type?e("section",[e("div",{staticClass:"flex-space image-wrapper"},[e("div",{staticClass:"image-item",attrs:{eventid:"8"},on:{click:function(s){t.cropperImg("school1")}}},[t.form.school1?t._e():e("span",[t._v("+"+t._s(t.title)+"1")]),t._v(" "),t.form.school1?e("img",{attrs:{src:t.form.school1,alt:""}}):t._e(),t._v(" "),t.form.school1?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"9"},on:{click:function(s){t.cropperImg("school2")}}},[t.form.school2?t._e():e("span",[t._v("+"+t._s(t.title)+"2")]),t._v(" "),t.form.school2?e("img",{attrs:{src:t.form.school2,alt:""}}):t._e(),t._v(" "),t.form.school2?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"10"},on:{click:function(s){t.cropperImg("school3")}}},[t.form.school3?t._e():e("span",[t._v("+"+t._s(t.title)+"3")]),t._v(" "),t.form.school3?e("img",{attrs:{src:t.form.school3,alt:""}}):t._e(),t._v(" "),t.form.school3?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"11"},on:{click:function(s){t.cropperImg("school4")}}},[t.form.school4?t._e():e("span",[t._v("+"+t._s(t.title)+"4")]),t._v(" "),t.form.school4?e("img",{attrs:{src:t.form.school4,alt:""}}):t._e(),t._v(" "),t.form.school4?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()])])]):t._e(),t._v(" "),"class"==t.type?e("section",[e("div",{staticClass:"flex-space image-wrapper"},[e("div",{staticClass:"image-item",attrs:{eventid:"12"},on:{click:function(s){t.cropperImg("class1")}}},[t.form.class1?t._e():e("span",[t._v("+"+t._s(t.title)+"1")]),t._v(" "),t.form.class1?e("img",{attrs:{src:t.form.class1,alt:""}}):t._e(),t._v(" "),t.form.class1?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"13"},on:{click:function(s){t.cropperImg("class2")}}},[t.form.class2?t._e():e("span",[t._v("+"+t._s(t.title)+"2")]),t._v(" "),t.form.class2?e("img",{attrs:{src:t.form.class2,alt:""}}):t._e(),t._v(" "),t.form.class2?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"14"},on:{click:function(s){t.cropperImg("class3")}}},[t.form.class3?t._e():e("span",[t._v("+"+t._s(t.title)+"3")]),t._v(" "),t.form.class3?e("img",{attrs:{src:t.form.class3,alt:""}}):t._e(),t._v(" "),t.form.class3?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"15"},on:{click:function(s){t.cropperImg("class4")}}},[t.form.class4?t._e():e("span",[t._v("+"+t._s(t.title)+"4")]),t._v(" "),t.form.class4?e("img",{attrs:{src:t.form.class4,alt:""}}):t._e(),t._v(" "),t.form.class4?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"16"},on:{click:function(s){t.cropperImg("class5")}}},[t.form.class5?t._e():e("span",[t._v("+"+t._s(t.title)+"5")]),t._v(" "),t.form.class5?e("img",{attrs:{src:t.form.class5,alt:""}}):t._e(),t._v(" "),t.form.class5?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()]),t._v(" "),e("div",{staticClass:"image-item",attrs:{eventid:"17"},on:{click:function(s){t.cropperImg("class6")}}},[t.form.class6?t._e():e("span",[t._v("+"+t._s(t.title)+"6")]),t._v(" "),t.form.class6?e("img",{attrs:{src:t.form.class6,alt:""}}):t._e(),t._v(" "),t.form.class6?e("div",{staticClass:"btn"},[t._v("更换")]):t._e()])])]):t._e(),t._v(" "),e("bottom-toast",{ref:"bottomToast",attrs:{mpcomid:"0"}})],1)},staticRenderFns:[]}},Rssf:function(t,s,e){var o=e("mvHQ"),a=e.n(o),i=e("woOf"),c=e.n(i),n=e("Dd8w"),l=e.n(n),r=e("0xDb"),m=e("uzBN"),d=e("p5Kd"),f=e("NYxO"),h=e("E4LH"),p=e("YELd"),u={logo:"",orgName:"",address:"",phone:"",course:"",school1:"",school2:"",school3:"",school4:"",class1:"",class2:"",class3:"",class4:"",class5:"",class6:""};s.a={name:"EditOrgInfo",components:{bottomToast:p.a},data:function(){return{btnFlag:0,type:"orgInfo",title:"教学环境照片",phone:"",isWindow:!1,latitude:null,longitude:null,form:{logo:"",orgName:"",address:"",phone:"",course:"",school1:"",school2:"",school3:"",school4:"",class1:"",class2:"",class3:"",class4:"",class5:"",class6:""},logo:"",imageType:""}},computed:l()({},Object(f.b)(["baseInfo"])),onLoad:function(t){var s=this;this.type=t.type,"orgInfo"===this.type?wx.setNavigationBarTitle({title:"基本信息"}):"school"===this.type?(wx.setNavigationBarTitle({title:"教学环境照片"}),this.title="教学环境照片"):"class"===this.type&&(wx.setNavigationBarTitle({title:"课堂风采照片"}),this.title="课堂风采照片"),this.initForm(),Object(d.j)(this.baseInfo.org.id).then((function(t){if(0===t.code&&t.data){s.phone=t.data.phone||"",s.latitude=t.data.latitude||null,s.longitude=t.data.longitude||null;var e=JSON.parse(t.data.descJson)||{};s.form=c()(u,e),s.form.address=t.data.address||"",s.logo=t.data.logo||""}})),wx.getSystemInfo({success:function(t){t.system.indexOf("Windows")>-1||t.system.indexOf("windows")>-1?s.isWindow=!0:s.isWindow=!1}})},onShow:function(){var t=this;this.$store.state.imageUrl&&(this.form[this.imageType]=this.$store.state.imageUrl,this.logo=this.$store.state.imageUrl,setTimeout((function(){t.submit()}),500))},methods:{formSubmit:function(t){var s=this;if(1!==this.btnFlag){if(this.btnFlag=1,this.phone&&!Object(h.b)(this.phone))return this.$refs.bottomToast.showToast("咨询电话请输入正确的手机号"),void(this.btnFlag=0);var e={id:this.baseInfo.org.id,descJson:a()(this.form),logo:this.logo||this.form.logo,shortName:this.form.orgName,address:this.form.address,addressName:this.form.addressName,phone:this.phone,latitude:this.latitude,longitude:this.longitude};Object(d.e)(e).then((function(t){0===t.code?(wx.showToast({icon:"success",title:"操作成功",mask:!0,duration:1500}),s.btnFlag=0):(wx.showToast({icon:"none",title:"网络异常"}),s.btnFlag=0)})).catch((function(){wx.showToast({icon:"none",title:"网络异常"}),s.btnFlag=0}))}},submit:function(){var t=this;if(1!==this.btnFlag){this.btnFlag=1;var s={id:this.baseInfo.org.id,descJson:a()(this.form)};Object(d.e)(s).then((function(s){0===s.code?(wx.showToast({icon:"success",title:"成功更新",mask:!0,duration:1500}),t.btnFlag=0):(wx.showToast({icon:"none",title:"网络异常"}),t.btnFlag=0)})).catch((function(){wx.showToast({icon:"none",title:"网络异常"}),t.btnFlag=0}))}},cropperImg:function(t){var s={wd:300,ht:200,selectType:"",imageType:"image"};this.imageType=t,this.$store.commit("SET_IMAGEURL",""),wx.showActionSheet({itemList:["拍照","从手机相册中选择"],itemColor:"#000000",success:function(t){0===t.tapIndex?(s.selectType="camera",wx.navigateTo({url:"../uploadPic/main?cropperOption="+a()(s)})):1===t.tapIndex&&(s.selectType="album",wx.navigateTo({url:"../uploadPic/main?cropperOption="+a()(s)}))}})},chooseImg:function(t){var s=this;wx.chooseImage({count:"1",sizeType:["original"],sourceType:["album","camera"],success:function(e){var o=e.tempFiles[0].size/1024/1024;if(o>8)wx.showToast({title:"请上传8M以内的图片",icon:"none",mask:!0,success:function(t){}});else{var a=e.tempFilePaths[0],i=e.tempFilePaths[0].split("."),c=i[i.length-1].toLowerCase();"jpg"===c||"png"===c||"jpeg"===c?o>1?s.uploadImg(e.tempFiles[0].path,t,"0"):wx.uploadFile({url:"https://orgapi.miaogeban.com/org/home/checkImg",filePath:a,name:"file",success:function(o){var a=JSON.parse(o.data);0===a.data.errcode?s.uploadImg(e.tempFiles[0].path,t):87014===a.data.errcode&&wx.showToast({title:"您上传的图片含敏感内容，请重新上传！",icon:"none",mask:!0,success:function(t){}})},fail:function(){},complete:function(){}}):wx.showToast({title:"请上传jpg，jpeg，png格式图片",icon:"none",mask:!0,success:function(t){}})}},fail:function(){},complete:function(){}})},getLocation:function(){var t=this;this.isWindow?this.$refs.bottomToast.showToast("抱歉！请用手机操作"):wx.getLocation({type:"gcj02",success:function(s){console.info("getLocation success: ",s);var e=s.latitude,o=s.longitude;wx.chooseLocation({latitude:e,longitude:o,success:function(s){t.form.address=s.address,t.form.addressName=s.name,t.latitude=s.latitude,t.longitude=s.longitude}})},fail:function(){wx.getSetting({success:function(t){t.authSetting["scope.userLocation"]||wx.showModal({title:"提示",content:"请允许位置消息以填写默认校区地址",showCancel:!0,cancelText:"取消",cancelColor:"#000000",confirmText:"确定",confirmColor:"#ff9900",success:function(t){t.confirm?wx.openSetting({success:function(t){}}):t.cancel&&console.log("用户点击取消")}})}})}})},uploadImg:function(t,s,e){var o=this,a=Object(r.b)();wx.getImageInfo({src:t,success:function(i){"unknown"!==i.type?(wx.showLoading({title:"上传中..."}),Object(m.b)().then((function(c){var n=c;wx.uploadFile({url:n.host,filePath:t,name:"file",formData:{key:n.dir+"/"+a+"."+i.type,policy:n.policy,OSSAccessKeyId:n.accessid,callback:n.callback,signature:n.signature},success:function(t){if(200===t.statusCode){var a=JSON.parse(t.data);"0"!==e?(wx.hideLoading(),o.form[s]=a.filename,o.logo=a.filename):o.reCheckImg(a.filename,s)}else wx.showToast({title:"上传失败",icon:"none"})},fail:function(t){wx.hideLoading(),console.log(t)}})}))):wx.showToast({title:"请上传jpg，jpeg，png格式图片",icon:"none",mask:!0,success:function(t){}})}})},reCheckImg:function(t,s){var e=this;wx.getImageInfo({src:t+"?x-oss-process=image/resize,p_10",success:function(o){wx.uploadFile({url:"https://orgapi.miaogeban.com/org/home/checkImg",filePath:o.path,name:"file",success:function(o){var a=JSON.parse(o.data);0===a.data.errcode?(wx.hideLoading(),e.form[s]=t,e.logo=t):87014===a.data.errcode?(t&&t.includes("https://img.miaogeban.com")&&Object(m.c)({path:t.split("?")[0]}),wx.hideLoading(),wx.showToast({title:"您上传的图片含敏感内容，请重新上传！",icon:"none",mask:!0,success:function(t){}})):(wx.hideLoading(),wx.showToast({title:"网络异常",icon:"none",mask:!0,success:function(t){}}))},fail:function(){},complete:function(){}})},fail:function(){},complete:function(){}})},initForm:function(){u={logo:"",orgName:"",address:"",phone:"",course:"",school1:"",school2:"",school3:"",school4:"",class1:"",class2:"",class3:"",class4:"",class5:"",class6:""},this.form={logo:"",orgName:"",address:"",phone:"",course:"",school1:"",school2:"",school3:"",school4:"",class1:"",class2:"",class3:"",class4:"",class5:"",class6:""},this.phone=""}},onHide:function(){this.$store.commit("SET_IMAGEURL","")},onUnload:function(){this.$store.commit("SET_IMAGEURL","")}}},"h+iv":function(t,s,e){var o=e("Rssf"),a=e("5R0r"),i=e("ybqe")(o.a,a.a,(function(t){e("yC5l")}),"data-v-178d9a61",null);s.a=i.exports},yC5l:function(t,s){}},["3dZv"]);