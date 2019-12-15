// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'flame',
    age: 21,
    students: [{
        id: 1,
        name: '1',
        age: 1
      },
      {
        id: 2,
        name: '2',
        age: 2
      },
      {
        id: 3,
        name: '3',
        age: 3
      },
      {
        id: 4,
        name: '4',
        age: 4
      }
    ],
    count: 0
  },
  add() {
    //界面不会刷新
    //  this.data.count+=1
    //双向绑定
    this.setData({
      count: this.data.count +1
    })
  },
  sub() {
    //界面不会刷新
    //  this.data.count+=1
    //双向绑定
    this.setData({
      count: this.data.count - 1
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})