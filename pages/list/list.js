const app = getApp()

Page({
  data: {
    lanList: app.globalData.lanList,
    currentLan: app.globalData.currentLan,
  },
  onShow() {
    this.setData({
      currentLan: app.globalData.currentLan
    })
  },
  selectHandle(options) {
    const targetLan = options.currentTarget.dataset.lang
    app.globalData.currentLan = targetLan
    this.setData({ currentLan: targetLan })
  }
})