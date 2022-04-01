//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nickname:' ',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list_my: [
      {
        lianj: '../huiyuan/huiyuan',
        tupisn: '../../images/wode_se.png',
        text_S: '会员中心'
      },
      {
        lianj: '../guz/guz',
        tupisn: '../../images/wode_se1.png',
        text_S: '故障上报'
      },
      {
        lianj: '../my_fank/my_fank',
        tupisn: '../../images/wode_se2.png',
        text_S: '意见反馈'
      },
      {
        lianj: '../gywm/gywm',
        tupisn: '../../images/wode_se3.png',
        text_S: '关于我们'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    
    if(app.globalData.isLoggedin==false){
      wx.navigateTo({
        url: '../logs/logs'
      })
    }
  },
  onLoad: function () {
    if(app.globalData.isLoggedin==true){
      console.log("my.js"+app.globalData.username)
      this.setData({
        nickname:app.globalData.username
      })
    }
    

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getScancode: function () {
    var _this = this;
    wx.scanCode({
      success: (res) => {
        var result = res.result;

        _this.setData({
          result: result,
        })
      }
    })
  }
})
