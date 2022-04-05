import {request} from "../../request/index.js"

// pages/guizi/guizi.js
Page({

    /**
     * 页面的初始数据
     */
   
    data: {
        isfull:[1,1,1,0,0,0,1,0,1,1,0,0],   //柜子状态   1空 0满
        isDamaged:[1,0,0,0,0,0,0,0,0,0,0],
        nowSelect:1,

        parameter:[
            { name:'01柜',value:'0' },
            { name:'02柜',value:'1' },
            { name:'03柜',value:'2' },
            { name:'04柜',value:'3' },
            { name:'05柜',value:'4' },
            { name:'06柜',value:'5' },
            { name:'07柜',value:'6' },
            { name:'08柜',value:'7' },
            { name:'09柜',value:'8' },
            { name:'10柜',value:'9' },
            { name:'11柜',value:'10' },
            { name:'12柜',value:'11' },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      /**
       * 功能：向后台请求柜子信息，并动态渲染显示
       * 时间：2022.4.2
       * 作者：Jin
       * 备注：写页面时可以忽略不记
       */
      request({
        //url:"https://d7aa063d-6169-493a-97a4-f91e56c45fde.mock.pstmn.io",  
        url:"http://localhost:8080/cupboard",
        method:"POST"
      })
      .then(result=>{
        console.log(result.data)
        this.setData({
          'isfull':result.data
        })
      })
      
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
       
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    parameterTap:function(e){
        var that=this
        var this_checked = e.currentTarget.dataset.id
        var parameterList = this.data.parameter
        for (var i = 0; i < parameterList.length;i++){
          if (parameterList[i].id == this_checked){
            parameterList[i].checked = true;//当前点击的位置为true即选中  ？？？
          }
          else{
            parameterList[i].checked = false;//其他的位置为false
          }
        }
        this.setData({
          parameter: parameterList,
          nowSelect:this_checked
        })

        switch (this_checked) {  
          case 1:
            ;
          case 2:
            ;
            break;
          case 3:
            ;
          case 4:
            ;
          case 5:
            ;
          case 6:
            ;
          case 7:
            ;
          case 8:
            ;
          case 9:
            ;
          case 10:
            ;
          case 11:
            ;
          case 12:
            ;
          default:
            ;
        }
      },
   

    /*选好柜子后点击下一步*/
    nextStep:function(){
      if(this.data.isfull[this.data.nowSelect-1]&&this.data.isDamaged[this.data.nowSelect-1]==0){  //如果用户选中的是可用箱子      
        wx.showModal({               // this.data.isDamaged==1为停用 0为正常
          title: '提示',             //this.data.nowSelect为柜子编号（从1开始）
          content: '是否打开'+this.data.nowSelect.toString()+'号柜',
          success: function (res) {
            if (res.confirm) {    //确认打开柜子
              console.log('用户点击确定')
            } else {              //取消打开柜子
              console.log('用户点击取消')
            }
          }
        })
      }else{                                                                                       //如果用户选中的是停用箱子
        wx.showModal({
          title: '提示',
          content: '此柜子暂停使用',
          success: function (res) {
            if (res.confirm) {    //确认打开柜子
              console.log('用户点击确定')
            } else {              //取消打开柜子
              console.log('用户点击取消')
            }
          }
        })
      }
      


        this.setData({
            
             } ) 
    },

})