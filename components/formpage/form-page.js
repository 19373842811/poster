var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");var _state = require("./../state");var _chooseImage = require("./../choose-image");var _logger = _interopRequireDefault(require("../../common/logger"));var _constants = require("../../common/constants");var logger = new _logger.default('form-page.js');Page({
  data: {
    step: 'result',
    opposite: true,
    skipphotoStatus: "0",
    selectedOptions: ['allOptions'],
    flash: true,
    bottom: 125,
    windowWidth: 300,
    touchPadding: 36,
    windowHeight: 200,
    isShowImage: true,
    isChooseIngImg: false,
    chooseImgPath: '',
    showCamera: false,
    path: '',
    cameraAuth: true,
    certificateType: 'idCard',
    top: 386,
    left: 24,
    width: 666,
    height: 464
  },
  onLoad: function onLoad(opt) {
    var _this = this;

    logger.info('onLoad opt:', opt);
    opt.certificateType ? this.setData({
      certificateType: opt.certificateType
    }) : null;
    opt.opposite == 'true' ? opt.opposite = true : null;
    opt.opposite == 'false' ? opt.opposite = false : null;

    var certificateInComming = _constants.CERTIFICATE_TYPE.filter(function (item) {
      return _this.data.certificateType == item.value;
    });

    this.data.certificateType == 'idCard' ? this.setData({
      opposite: opt.opposite
    }) : null;
    opt.selectedOptions ? this.setData({
      selectedOptions: opt.selectedOptions.split(",")
    }) : null;
    this._callbackId = _state.processState.callbackId;
    this._cb = _state.processState.cb;
    _state.processState.cb = null;
    this.ctx = wx.createCameraContext();
    this.showPhoto(); // driversLicense platenum

    var title = '身份证正面识别';

    if (certificateInComming.length < 1) {
      console.warn('certificateType参数传入有误，请检查！！');
    } else {
      if (certificateInComming[0].value !== 'idCard') {
        title = certificateInComming[0].name + '识别';

        if (certificateInComming[0].value == 'businessLicense' || certificateInComming[0].value == 'menu') {
          this.setData({
            top: 242,
            left: 60,
            width: 532,
            height: 752
          });
        }
      } else if (opt.opposite) {
        title = '身份证反面识别';
      }
    } // if (opt.certificateType == 'drivingLicense') {
    //   title = '行驶证识别'
    // }else if(opt.certificateType == 'bankCard'){
    //   title = '银行卡识别'
    // }else if(opt.certificateType == 'driverslicense'){
    //   title = '驾驶证识别'
    // }else if(opt.certificateType == 'businessLicense'){
    //   title = '营业执照识别'
    //   this.setData({
    //     top: 242,
    //     left: 60,
    //     width: 532,
    //     height: 752
    //   })
    // }else if(opt.certificateType == 'platenum'){
    //   title = '车牌号识别'
    // }else if(opt.certificateType == 'menu'){
    //   title = '菜单识别'
    //   this.setData({
    //     top: 242,
    //     left: 60,
    //     width: 532,
    //     height: 752
    //   })
    // }else if(opt.opposite){
    //   title = '身份证反面识别'
    // }


    this.setData({
      title: title
    });
    wx.setNavigationBarTitle({
      title: title
    });
    logger.info('certificateType:', this.data.certificateType, 'opposite:', this.data.opposite);
    this.initData();
  },
  onShow: function onShow() {// this.askAuth()
  },
  showTool: function showTool() {
    this.setData({
      showCamera: true
    });
  },
  error: function error(e) {
    console.log('camera加载失败');
    this.setData({
      cameraAuth: false
    });
  },
  handleSetting: function handleSetting() {
    var that = this; // 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮

    if (!e.detail.authSetting['scope.camera']) {
      wx.showModal({
        title: '',
        content: '若不打开授权，则无法拍照！',
        showCancel: false
      });
    } else {
      this.setData({
        cameraAuth: true
      });
      wx.navigateBack();
    }
  },
  showPhoto: function showPhoto() {},
  initData: function initData() {
    var _this2 = this;

    wx.getSystemInfo({
      success: function success(res) {
        var ios = !!(res.system.toLowerCase().search('ios') + 1);
        var model = res.model >= 'iPhone X';
        var rate = res.windowHeight < 800 ? (res.windowHeight - 110) / 698 : 1;
        var bottom = _this2.data.bottom * rate;
        var globalStatusBarHeight = res.statusBarHeight ? res.statusBarHeight * 2 : 0;
        var top = _this2.data.top + globalStatusBarHeight;
        var temp = (top - globalStatusBarHeight) * rate - 88 - 48 - 60;

        if (temp < 20) {
          top = (60 + 20 + 88 + 48) / rate + globalStatusBarHeight;
          bottom = bottom - (20 - temp) * rate;
        }

        _this2.setData({
          globalStatusBarHeight: globalStatusBarHeight,
          globalIos: true,
          bottom: bottom,
          touchPadding: _this2.data.touchPadding * rate,
          top: top * rate,
          height: _this2.data.height * rate / 4 * 4,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      }
    });
  },
  success: function success(e) {
    wx.navigateBack();

    if (this._cb) {
      this._cb(this._callbackId, 'success', e);
    }
  },
  //改变是是否闪光
  changeFlash: function changeFlash() {
    this.setData({
      flash: !this.data.flash
    });
  },
  goPre: function goPre() {
    wx.navigateBack({
      delta: 1
    });
  },
  chooseImg: function chooseImg(e) {
    var _this3 = this;

    var dataset = e.currentTarget.dataset;
    var isFore = true;
    var that = this;
    this.setData({
      isChooseIngImg: true
    });
    (0, _chooseImage.takePhoto)(!this.data.opposite, this.data.certificateType, ['album'], '', function (result, imagePath) {
      _this3.setData({
        isChooseIngImg: false,
        chooseImgPath: ''
      });

      result.image_path = imagePath;

      _this3.success(result);
    }, function (err) {
      _this3.setData({
        isChooseIngImg: false,
        chooseImgPath: ''
      });

      _this3.fail(err);
    }, function (imagePath) {
      wx.showLoading({
        title: '数据处理中...',
        icon: 'loading',
        duration: 10000
      });
    });
  },
  takePhotoAction: function takePhotoAction(e) {
    var _this4 = this;

    var that = this;
    that.setData({
      isShowImage: true
    });
    that.ctx.takePhoto({
      quality: 'high',
      //高质量
      success: function success(res) {
        _this4.loadTempImagePath(res.tempImagePath);
      }
    });
  },
  cancel: function cancel() {
    wx.navigateBack();

    if (this._cb) {
      this._cb(this._callbackId, 'cancel');
    }
  },
  loadTempImagePath: function loadTempImagePath(options) {
    var that = this;
    that.path = options;
    var _this$data = this.data,
        windowWidth = _this$data.windowWidth,
        windowHeight = _this$data.windowHeight;
    that.setData({
      path: options
    });
    var rate = windowWidth / 375;
    var image_x = that.data.left / 2 * rate;
    var image_y = that.data.top / 2 * rate;
    var image_width = (375 - 2 * that.data.left / 2) * rate;
    var image_height = that.data.height / 2 * rate; // (image_height < 700) && (image_height > 380) && (image_height = 380)

    wx.getImageInfo({
      src: that.path,
      success: function success(res) {
        that.canvas = wx.createCanvasContext("image-canvas", that); //过渡页面中，图片的路径座标和大小

        that.canvas.drawImage(that.path, 0, 0, that.data.windowWidth, that.data.windowHeight);
        wx.showLoading({
          title: '数据处理中...',
          icon: 'loading',
          duration: 10000
        }); // 这里有一些很神奇的操作,总结就是MD拍出来的照片规格居然不是统一的过渡页面中，对裁剪框的设定

        that.canvas.setStrokeStyle('rgba(0, 0, 0, 0)');
        that.canvas.strokeRect(image_x, image_y, image_width, image_height);
        that.canvas.draw();
        setTimeout(function () {
          wx.canvasToTempFilePath({
            //裁剪对参数
            canvasId: "image-canvas",
            x: image_x,
            //画布x轴起点
            y: image_y,
            //画布y轴起点
            width: image_width,
            //画布宽度
            height: image_height,
            //画布高度
            destWidth: image_width,
            //输出图片宽度
            destHeight: image_height,
            //输出图片高度
            success: function success(res) {
              that.setData({
                image: res.tempFilePath,
                isShowImage: false
              }); //清除画布上在该矩形区域内的内容。
              // that.canvas.clearRect(0, 0, that.data.width, that.data.height)
              // that.canvas.drawImage(res.tempFilePath, image_x, image_y, image_width, image_height)
              // that.canvas.draw()

              wx.hideLoading();
              var isFore = true;
              (0, _chooseImage.takePhoto)(!that.data.opposite, that.data.certificateType, 'camera', res.tempFilePath, function (result, imagePath) {
                result.image_path = that.data.image;
                that.success(result);
              }, function (err) {
                that.setData({
                  isShowImage: true
                });
                that.fail(err);
              }, function (result) {
                that.setData({
                  isShowImage: true
                });
              });
            },
            fail: function fail(e) {
              wx.hideLoading();
              wx.showToast({
                title: '出错啦...',
                icon: 'loading'
              });

              if (this.data.skipphotoStatus == 1) {
                wx.navigateBack({
                  delta: 1
                });
              } else {
                wx.navigateBack({
                  delta: 1
                });
              }
            }
          });
        }, 1000);
      }
    });
  },
  fail: function fail(e) {
    if (this._cb) {
      this._cb(this._callbackId, 'fail', e);
    }
  }
});