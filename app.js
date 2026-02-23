// app.js
App({
  onLaunch() {
    const history = wx.getStorageSync('history')
    this.globalData.history = history ? history : []
  },
  globalData: {
    history: [],
    lanList: [
      { chs: '英文', lang: 'en' },
      { chs: '中文', lang: 'zh' },
      { chs: '日语', lang: 'jp' },
      { chs: '韩语', lang: 'kor' },
      { chs: '法语', lang: 'fra' },
      { chs: '德语', lang: 'de' },
      { chs: '俄语', lang: 'ru' },
      { chs: '泰语', lang: 'th' },
      { chs: '西班牙语', lang: 'spa' },
      { chs: '阿拉伯语', lang: 'ara' },
      { chs: '意大利语', lang: 'it' },
      { chs: '葡萄牙语', lang: 'pt' },
      { chs: '荷兰语', lang: 'nl' }
    ],
    currentLan: 'en'
  }
})
