// pages/guizi/guizi.js
Page({

    /**
     * 页面的初始数据
     */
   
    data: {
        isfull:[1,1,1,0,0,0,1,0,1,1,0,0],   //柜子状态
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
     // this.data.parameter[0].checked = true;
    //  this.setData({
     //   parameter: this.data.parameter
     // })
       
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

        this.setData({
            
             } ) 
    },

})