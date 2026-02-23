import md5 from './md5.min'

const appid = "20230410001636433"
const key = "0RYOi6oqymg12mSn5ngh"

/**
 * 
 * @param {*} q 要翻译的文本
 * @param {*} from 原来的语言
 * @param {*} to 目标语言
 */
export function translate(q, to, from = "auto",) {
  return new Promise((resolve, reject) => {
    const salt = Date.now()
    // 制作签名 appid+q+salt+密钥的MD5值
    const sign = md5(`${appid}${q}${salt}${key}`)

    const apiData = { appid, salt, sign }

    // q 要翻译的文本 
    // from 原来的语言
    // to 目标语言
    const translateData = { q, from, to }

    // 发送请求进行翻译
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: { ...apiData, ...translateData },
      success(res) {
        if (res.data && res.data.trans_result) {
          // 返回翻译的文本
          resolve(res.data.trans_result[0].dst)
        }
      },
      fail() {
        wx.showToast({
          title: '网络异常',
          icon: "error",
          duration: 2000
        })
        reject({
          status: "error",
          msg: "翻译失败"
        })
      }
    })
  })
}
