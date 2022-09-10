import { musicApi } from './config'

export const getBannerListRequest = () => {
  return musicApi.get('/banner')
}
export const getRecommendListRequest = () => {
  return musicApi.get('/personalized')
}
export const getHotSingerListRequest = (count) => {
  return musicApi.get(`/top/artists?offset=${count}`)
}
export const getSingerListRequest = (category, alpha, count) => {
  return musicApi.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
  )
}
export const getRankListRequest = () => {
  return musicApi.get(`/toplist/detail`)
}

export const getAlbumDetailRequest = (id) => {
  return musicApi.get(`/playlist/detail?id=${id}`)
}
export const getSingerInfoRequest = (id) => {
  return musicApi.get(`/artists?id=${id}`)
}
export const getLyricRequest = (id) => {
  return musicApi.get(`/lyric?id=${id}`)
}
export const getHotKeyWordsRequest = () => {
  return musicApi.get(`/search/hot`)
}
export const getSuggestListRequest = (query) => {
  return musicApi.get(`/search/suggest?keywords=${query}`)
}
export const getResultSongsListRequest = (query) => {
  return musicApi.get(`/search?keywords=${query}`)
}
export const getSongDetailRequest = (id) => {
  return musicApi.get(`/song/detail?ids=${id}`)
}
