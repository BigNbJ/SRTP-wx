Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      isConnect:null
    },
   
    startClick: function(even) {
      wx.connectSocket({
        url: 'ws://192.168.43.98:8080/ws/asset',
        method: 'GET',
        success: function(){
          isConnect: true
          console.log("连接成功...")
        },
        fail: function(){
          isConnect: false
          console.log("连接失败...")
        }
      });
   
      wx.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！')
        wx.showToast({
          title: '连接成功',
          icon: 'success',
          duration: 2000
        })
      });
   
      wx.onSocketError(function (res) {
        console.log('WebSocket连接打开失败，请检查！')
        wx.showToast({
          title: '请重试',
          icon: 'loading',
          duration: 2000
        })
      })
    },
   
    sendClick: function (even) {
      wx.sendSocketMessage({
        data: "web socket from wechat"
      })
      wx.showToast({
        title: '发送成功',
        icon: 'success',
        duration: 2000
      })

    },
   
    closeClick: function (even) {
      wx.closeSocket({
        success: function(){
          console.log("关闭成功...")
        },
        fail: function(){
          console.log("关闭失败...")
        }
      });
      wx.onSocketClose(function(res) {
        console.log("WebSocket连接已关闭")
      })
    },
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.onSocketMessage(function(res){
        console.log(res.data)
      })
    }
  })