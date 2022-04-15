import { request } from '../network/index'

// 歌曲详情
export function getSongDetail(ids) {
  return request.get("/song/detail", {
    ids
  })
}

// 歌词
export function getSongLyric(id) {
  return request.get("/lyric", {
    id
  })
}
