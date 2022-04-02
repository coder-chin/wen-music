const BASE_URL = 'https://netease-cloud-music-api-coder-chin.vercel.app'
const realIP = '116.25.146.177'

class ERequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data: {
          ...params,
          realIP
        },
        success: function(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

export default new ERequest()