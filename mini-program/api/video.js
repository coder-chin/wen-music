import request from '../network/index'

/**
 * @param {number} offset 偏移量
 * @param {number} limit 限制获取数量
 */
export function getTopMV(offset, limit = 10) {
  return request.get('/top/mv', {
    offset, 
    limit
  })
}

/**
 * 请求MV播放地址
 * @param {number} id MV的id
 */
export function getMVURL(id) {
  return request.get('/mv/url', {
    id
  })
}

/**
 * 
 * @param {number} mvid MV的id
 */
export function getMVDetail(mvid) {
  return request.get('/mv/detail', {
    mvid
  })
}

export function getRelatedVideo(id) {
  return request.get('/related/allvideo', {
    id
  })
}