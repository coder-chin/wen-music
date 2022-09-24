import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { forceCheck } from 'react-lazyload'
import { Outlet } from 'react-router-dom'

import { Content } from './style'
import Scroll from '../../UI/Scroll'
import Slider from '../../components/Slider'
import RecommendList from '../../components/RecommendList'
import Loading from '../../UI/Loading'
import * as actionTypes from './store/actionCreators'

const Recommend = (props) => {
  const { bannerList, recommendList, enterLoading, songsCount } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  useEffect(() => {
    if (!bannerList.size) {
      getBannerDataDispatch()
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch()
    }
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  return (
    <Content play={songsCount}>
      <Scroll onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
      <Loading show={enterLoading}></Loading>
      <Outlet />
    </Content>
  )
}

// 映射 state 到 props 上
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading']),
  songsCount: state.getIn(['player', 'playList']).size
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

// React.memo 提高渲染性能，直接用上一次渲染结果
// HOC 接收组件作为参数，返回一个新的组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend))
