import * as actionTypes from './constant'
import { fromJS } from 'immutable'
import {
  getBannerListRequest,
  getRecommendListRequest
} from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})
export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})
export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerListRequest()
      .then((data) => {
        const action = changeBannerList(data.banners)
        dispatch(action)
      })
      .catch((e) => {
        console.log('banners error', e)
      })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        const recommendAction = changeRecommendList(data.result)
        dispatch(recommendAction)
        const loadingAction = changeEnterLoading(false)
        dispatch(loadingAction)
      })
      .catch((e) => {
        console.log('recommend error', e)
      })
  }
}
