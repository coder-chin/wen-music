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
