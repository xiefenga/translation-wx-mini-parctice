const app = getApp()

Page({
 
  data: {
    history: app.globalData.history
  },

  onShow() {
    this.setData({
      history: app.globalData.history
    })
  }

})