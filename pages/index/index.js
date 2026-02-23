import { translate } from '../../utils/util'

const app = getApp()

Page({
  data: {
    targetLan: app.globalData.lanList.find(lan => lan.lang === app.globalData.currentLan),
    source: '',
    result: ''
  },
  onShow() {
    this.setData({
      targetLan: app.globalData.lanList.find(lan => lan.lang === app.globalData.currentLan)
    })
  },
  noop() { },
  async tanslate() { 
    try {
      const { source } = this.data
      const result = await translate(source, this.data.targetLan.lang)
      this.setData({ result })
      app.globalData.history.unshift({ source, result })
      wx.setStorageSync('history', app.globalData.history)
    } catch (error) {
      console.log(error)
    }
  },
  changeDest() {
    wx.navigateTo({
      url: '/pages/list/list'
    })
  }
})
