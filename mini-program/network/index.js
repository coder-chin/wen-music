const BASE_URL = 'https://wen-music.vercel.app'
// const BASE_URL = 'http://123.207.32.32:9001'
const LOGIN_BASE_URL = 'http://123.207.32.32:3000'
const realIP = '116.25.146.177'

class ERequest {
  constructor(base_url) {
    this.base_url = base_url
  }
  request(url, method, params, header = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.base_url + url,
        method,
        data: {
          ...params,
          realIP
        },
        header,
        success: function(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params, header) {
    return this.request(url, "GET", params, header)
  }

  post(url, data, header) {
    return this.request(url, 'POST', data, header)
  }
}

const request = new ERequest(BASE_URL)
const loginRequest = new ERequest(LOGIN_BASE_URL)

export {
  request,
  loginRequest,
  LOGIN_BASE_URL
}