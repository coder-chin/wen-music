import {
  getHotSingerListRequest,
  getSingerListRequest
} from '../../../api/request'
import * as actionTypes from './constants'
import { fromJS } from 'immutable'

const changeSingerList = (data) => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  data: fromJS(data)
})

export const changePageCount = (data) => ({
  type: actionTypes.CHANGE_PAGE_COUNT,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

//滑动最底部loading
export const changePullUpLoading = (data) => ({
  type: actionTypes.CHANGE_PULLUP_LOADING,
  data
})

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
  type: actionTypes.CHANGE_PULLDOWN_LOADING,
  data
})

// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0)
      .then((res) => {
        const data = res.artists
        dispatch(changeSingerList(data))
        dispatch(changeEnterLoading(false))
        dispatch(changePullDownLoading(false))
      })
      .catch((e) => {
        console.log('hot singers error', e)
      })
  }
}

// 加载更多热门个数
export const getMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    getHotSingerListRequest(pageCount)
      .then((res) => {
        const data = [...singerList, ...res.artists]
        dispatch(changeSingerList(data))
        dispatch(changePullUpLoading(false))
      })
      .catch((e) => {
        console.log('hot singers error', e)
      })
  }
}

// 第一次加载具体类别歌手
export const getSingerList = (category, alpha) => {
  return (dispatch) => {
    getSingerListRequest(category, alpha, 0)
      .then((res) => {
        const data = res.artists
        dispatch(changeSingerList(data))
        dispatch(changeEnterLoading(false))
        dispatch(changePullDownLoading(false))
      })
      .catch((e) => {
        console.log('hot singers error', e)
      })
  }
}

export const getMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    getSingerListRequest(category, alpha, pageCount)
      .then((res) => {
        const data = [...singerList, ...res.artists]
        dispatch(changeSingerList(data))
        dispatch(changePullUpLoading(false))
      })
      .catch((e) => {
        console.log('hot singers error', e)
      })
  }
}
