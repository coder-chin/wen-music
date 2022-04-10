import { loginRequest } from '../network/index'

export function getLoginCode() {
  return new Promise((resolve, reject) => {
    wx.login({
      timeout: 1000,
      success: res => {
        resolve(res.code)
      },
      fail: reject
    })
  })
}

export function sendCodeToServer(code) {
  return loginRequest.post('/login', { code })
}

export function checkToken(token) {
  return loginRequest.post('/auth', {}, { token })
}

export function checkSession() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success: () => { resolve(true) },
      fail: () => { resolve(false) }
    })
  })
}