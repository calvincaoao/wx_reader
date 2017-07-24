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
      var collected = false
      wx.getStorage({
        key: 'collected',
        success: function(res) {
          console.log(res.data)
          collected = res.data
        
          if (collected) {
            console.log("already collected")
          } else {
            wx.showModal({
              title: '提示',
              content: '这是一个模态弹窗',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
            wx.setStorage({
              key: 'collected',
              data: 'true',
            })
          }
        },
      })

     

      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var postId = options.id
     var postData = postsdata.postList[postId]
     this.setData(postData)
     
     var collected = wx.getStorage({
       key: 'collected',
       success: function(res) {},
     })

     if(collected == undefined){
          wx.setStorage({
          key: 'collected',
          data: 'false',
        })
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