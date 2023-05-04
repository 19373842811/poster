var _interopRequireDefault = require("../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", {
  value: true
});exports.takePhoto = void 0;var _logger = _interopRequireDefault(require("../common/logger"));var logger = new _logger.default('choose-image.js');var uploadPhoto = function uploadPhoto(filePath, isForePhoto, certificateType, cb, errCb) {
  wx.showLoading({
    title: '正在处理'
  });
  var uploadUrl = 'action=idcard&type=photo';

  if (certificateType == 'bankCard') {
    uploadUrl = 'action=bankcard';
  } else if (certificateType == 'drivingLicense') {
    uploadUrl = 'action=driving';
  } else if (certificateType == 'businessLicense') {
    uploadUrl = 'action=biz_license&type=photo';
  } else if (certificateType == 'driverslicense') {
    uploadUrl = 'action=driving_license&type=photo';
  } else if (certificateType == 'platenum') {
    uploadUrl = 'action=platenum&type=photo';
  } else if (certificateType == 'menu') {
    uploadUrl = 'action=menu&type=photo';
  }

  logger.info('uploadUrl is ----', uploadUrl);
  wx.uploadFile({
    url: "https://mp.weixin.qq.com/wxamusic/ocr/idcard?".concat(uploadUrl),
    filePath: filePath,
    name: 'file',
    complete: function complete() {
      wx.hideLoading();
    },
    success: function success(res) {
      var data = {};

      try {
        data = JSON.parse(res.data);
      } catch (e) {// empty
      }

      if (data.base_resp.err_code == 101002) {
        wx.showModal({
          title: '市场份额不足',
          showCancel: false,
          success: function success(res) {
            if (res.confirm) {
              return cb(true, data);
            }
          }
        });
        cb(false, data.bankcard_result);
        return;
      }

      logger.info('cgi data is -----');
      console.log(data);
      var ret = data.base_resp ? data.base_resp.err_code : -1;
      logger.info('certificateType:', certificateType, 'ret:', ret);

      switch (certificateType) {
        case 'bankCard':
          if (ret || !data.bankcard_result) {
            console.log("错误就走到这里");
            wx.showModal({
              title: '未能识别银行卡',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            }); // return cb(true, data)
          }

          cb(false, data.bankcard_result);
          break;

        case 'businessLicense':
          if (ret || !data.biz_license_result) {
            console.log("错误就走到这里");
            wx.showModal({
              title: '未能识营业执照',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            }); // return cb(true, data)
          }

          cb(false, data.biz_license_result);
          break;

        case 'platenum':
          if (ret || !data.platenum_result) {
            console.log("ret");
            wx.showModal({
              title: '未能识别车牌号',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            }); // return cb(true, data)
          }

          cb(false, data.platenum_result);
          break;

        case 'driverslicense':
          if (ret || !data.driving_license_result) {
            console.log("错误就走到这里");
            wx.showModal({
              title: '未能识别驾驶证',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            }); // return cb(true, data)
          }

          cb(false, data.driving_license_result);
          break;

        case 'drivingLicense':
          if (ret || !data.driving_result || data.driving_result.type == 3) {
            console.log("错误就走到这里");
            var tempValue = 3;

            if (ret != 0) {
              tempValue = ret;
            }

            wx.showModal({
              title: '未能识别行驶证',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            });
          }

          cb(false, data.driving_result);
          break;

        case 'menu':
          if (ret || !data.menu_result) {
            console.error('菜单数据错误');
            var _tempValue = 3;

            if (ret != 0) {
              _tempValue = ret;
            }

            wx.showModal({
              title: '未能识别菜单',
              content: '请重新拍摄或上传',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            });
          }

          cb(false, data.menu_result);
          break;

        default:
          if (ret || !data.result) {
            return wx.showModal({
              title: '未能识别身份证',
              content: "\u8BF7\u91CD\u65B0\u62CD\u6444\u6216\u4E0A\u4F20[".concat(ret, "]"),
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  return cb(true, data);
                }
              }
            }); // return cb(true, data)
          }

          cb(false, data.result);
      }
    }
  });
};var takePhoto = function takePhoto(isFore, certificateType, type, path, successCb, errCb, imgCb) {
  logger.info('takePhoto', isFore, certificateType, type, path); // ['album', 'camera']

  if (type == 'camera') {
    uploadPhoto(path, isFore, certificateType, function (err, result) {
      if (err) {
        errCb(result);
        return;
      }

      logger.info('result.type', result && result.type);

      if (typeof result === 'undefined') {
        errCb('result is empty');
        return;
      }

      result.image_source = 'camera';

      switch (certificateType) {
        case 'bankCard':
          break;

        case 'drivingLicense':
          break;

        case 'businessLicense':
          break;

        case 'driverslicense':
          break;

        case 'platenum':
          break;

        case 'menu':
          break;

        default:
          if (isFore) {
            if (result.type !== 0) {
              wx.showModal({
                title: '请将身份证翻面拍摄',
                content: '请拍摄身份证的人像面',
                showCancel: false,
                success: function success(res) {
                  if (res.confirm) {
                    errCb(result);
                  }
                }
              });
              return;
            }
          } else {
            if (result.type !== 1) {
              wx.showModal({
                title: '请将身份证翻面拍摄',
                content: '请拍摄身份证的国徽面',
                showCancel: false,
                success: function success(res) {
                  if (res.confirm) {
                    errCb(result);
                  }
                }
              });
              return;
            }
          }

      }

      successCb(result, path);
    }, errCb);
  } else {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: type,
      success: function success(res) {
        var path = res.tempFilePaths[0];
        imgCb(path);
        uploadPhoto(path, isFore, certificateType, function (err, result) {
          if (err) {
            logger.error('errCb err:', err, 'result:', result);
            errCb(result);
            return;
          }

          logger.info('result.type', result && result.type);

          if (typeof result === 'undefined') {
            errCb('result is empty');
            return;
          }

          result.image_source = 'album';

          switch (certificateType) {
            case 'bankCard':
              break;

            case 'drivingLicense':
              break;

            case 'businessLicense':
              break;

            case 'driverslicense':
              break;

            case 'platenum':
              break;

            case 'menu':
              break;

            default:
              if (isFore) {
                if (result.type !== 0) {
                  wx.showModal({
                    title: '请将身份证翻面拍摄',
                    content: '请拍摄身份证的人像面',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {
                        errCb(result);
                      }
                    }
                  });
                  return;
                }
              } else {
                if (result.type !== 1) {
                  wx.showModal({
                    title: '请将身份证翻面拍摄',
                    content: '请拍摄身份证的国徽面',
                    showCancel: false,
                    success: function success(res) {
                      if (res.confirm) {
                        errCb(result);
                      }
                    }
                  });
                  return;
                }
              }

          }

          successCb(result, path);
        }, errCb);
      },
      fail: function fail(res) {
        logger.error(res);
      }
    });
  }
};exports.takePhoto = takePhoto;