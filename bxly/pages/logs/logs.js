import {request} from "../../request/index.js"

Page({
  data: {
    // logs: []
    disabled: false,
    userPhone:'',
    userPwd:''
  },
  goGetCode:function(){
    var that = this;
    var time = 60;
    that.setData({
      code: '60秒后重发',
      disabled: true
    })
    var Interval = setInterval(function() {
      time--;
      if (time>0){
        that.setData({
          code: time + '秒后重发'
        })
      }else{
        clearInterval(Interval);
        that.setData({
          code: '获取验证码',
          disabled: false
        })
      }
    },1000)

},
  userphoneInput:function(e){
    this.setData({
      userPhone:e.detail.value
    })
  },
  userpwdInput:function(e){
    this.setData({
      userPwd:e.detail.value
    })
  },
  login_func:function(){
    const app =  getApp();
    console.log("进入登录程序");
    
    if (this.data.userPhone.length == 0 || this.data.userPwd.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } 
    else{
      request({
        //url:"https://d589d788-1973-452d-913f-a4a79c6323b2.mock.pstmn.io",   
        url:"http://localhost:8080/user",
        data:{
          phone:this.data.userPhone,
          pwd:this.data.userPwd
        },
        method:"POST"
      })
      .then(result=>{
        if(result.data.id!=null){
          //打印返回信息
          console.log(result.data)
          //设置全局变量-用户名
          app.globalData.username=result.data.username
          //设置全局变量-登录
          app.globalData.isLoggedin=true
          //打印用户名信息
          console.log(app.globalData.username)
          //显示登录成功弹窗
          wx.showToast({
            title: '登录成功',
            icon: 'succes',
            duration: 1000,
            mask:true
          })
          setTimeout(function () {
            //跳转界面
            wx.navigateTo({
              url: '../index/index'
            })
            //要延时执行的代码
          }, 800) //延迟时间
        }
        else{
          //若返回空信息，表示没有查询到，则账号或密码错误
          console.log("查询错误");
          wx.showToast({
            title: '密码或账号错误',
            icon: 'none',
            duration: 1000,
            mask:true
          })
        }
        
      })
    }
  }
})
