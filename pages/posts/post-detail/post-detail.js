var postsdata = require('../../../data/post-data.js')
// post-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * self defined funtion
   */

  onCollectTap : function(event){
    var that = this
    var postscollected = wx.getStorageSync("posts_collected")
    var postcollected = postscollected[this.data.currentPostId]
    if(!postcollected){
      postscollected[this.data.currentPostId] = !postcollected
      
      wx.showModal({
        title: "收藏",
        content: postcollected ? "收藏该文章？" : "取消收藏该文章？",
        showCancel: "true",
        cancelText: "取消",
        cancelColor: "#333",
        confirmText: "确认",
        confirmColor: "#405f80",
        success: function(res){
            if(res.confirm){
              that.setData({
                collected: !postcollected
              })
              wx.setStorageSync("posts_collected", postscollected)
            }
        }
      })
    }
      // var collected = ""
      // wx.getStorage({
      //   key: 'collected',
      //   success: function(res) {
      //     console.log(res.data)
      //     collected = res.data
        
      //     if (collected == "true") {
      //       console.log("already collected")
      //       wx.setStorage({
      //         key: 'collected',
      //         data: 'false',
      //       })
      //     } else {
      //       wx.showModal({
      //         title: '提示',
      //         content: '这是一个模态弹窗',
      //         success: function (res) {
      //           if (res.confirm) {
      //             console.log('用户点击确定')
      //           } else if (res.cancel) {
      //             console.log('用户点击取消')
      //           }
      //         }
      //       })
      //       wx.setStorage({
      //         key: 'collected',
      //         data: 'true',
      //       })
      //     }
      //   },
      // })
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var postId = options.id
     this.data.currentPostId = postId
     var postData = postsdata.postList[postId]
     this.setData(postData)

    //  var posts_collected = {
    //    "1": true,
    //    "2": false,
    //    "3": true
    //  }
     
    var postscollected = wx.getStorageSync("posts_collected")
    if(postscollected){
      var collected = postscollected[postId]
      this.setData({
        collected: collected
      })
    }else{
      var postscollected = {}
      postscollected[postId] = false
      wx.setStorageSync("posts_collected", postscollected)
    }
 
     
     //console.log(postData)
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
  
  }
})