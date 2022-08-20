import React, { useState, useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import LazyLoad, { forceCheck } from 'react-lazyload'

import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer, ListContainer, List, ListItem } from './style'
import {
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  getMoreSingerList,
  changePullUpLoading,
  changePullDownLoading,
  getMoreHotSingerList
} from './store/actionCreators'
import Horizen from '../../UI/Horizen'
import Scroll from '../../UI/Scroll'
import Loading from '../../UI/Loading'
import { CategoryDataContext } from './context'

const Singers = (props) => {
  const { data, dispatch } = useContext(CategoryDataContext)
  const { category, alpha } = data.toJS()

  const {
    singerList,
    enterLoading,
    pullUpLoading,
    pullDownLoading,
    pageCount
  } = props
  const {
    getHotSingerDispatch,
    updateDispatch,
    pullUpRefreshDispatch,
    pullDownRefreshDispatch
  } = props

  useEffect(() => {
    if (!singerList.size) {
      getHotSingerDispatch()
    }
  }, [])

  let handleUpdateAlpha = (val) => {
    if (alpha !== val) {
      dispatch({ type: CHANGE_ALPHA, data: val })
      updateDispatch(category, val)
    }
  }
  let handleUpdateCategory = (val) => {
    // 重复请求只发送一次
    if (category !== val) {
      dispatch({ type: CHANGE_CATEGORY, data: val })
      updateDispatch(val, alpha)
    }
  }
  let handlePullUp = () => {
    pullUpRefreshDispatch(category, alpha, category === '', pageCount)
  }
  const handlePullDown = () => {
    pullDownRefreshDispatch(category, alpha)
  }

  const singerListJS = singerList ? singerList.toJS() : []

  return (
    <div>
      <NavContainer>
        <Horizen
          list={categoryTypes}
          title={'分类:'}
          currentVal={category}
          handleClick={handleUpdateCategory}
        ></Horizen>
        <Horizen
          list={alphaTypes}
          title={'首字母:'}
          currentVal={alpha}
          handleClick={handleUpdateAlpha}
        ></Horizen>
      </NavContainer>

      <ListContainer>
        <Scroll
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
          onScroll={forceCheck}
        >
          <List>
            {singerListJS.map((item) => {
              return (
                <ListItem key={item.picId}>
                  <div className="img_wrapper">
                    <LazyLoad
                      placeholder={
                        <img
                          width="100%"
                          height="100%"
                          src={new URL('./singer.png', import.meta.url).href}
                          alt="music"
                        />
                      }
                    >
                      <img
                        src={`${item.picUrl}?param=300x300`}
                        width="100%"
                        height="100%"
                        alt="music"
                      />
                    </LazyLoad>
                  </div>
                  <span className="name">{item.name}</span>
                </ListItem>
              )
            })}
          </List>
        </Scroll>
        <Loading show={enterLoading}></Loading>
      </ListContainer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  // 歌手列表
  singerList: state.getIn(['singers', 'singerList']),
  // 进入loading效果
  enterLoading: state.getIn(['singers', 'enterLoading']),
  // 上划到底动画触发
  pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
  // 下拉到顶动画触发
  pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
  // 页数
  pageCount: state.getIn(['singers', 'pageCount'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    // 获取初始歌手
    getHotSingerDispatch() {
      dispatch(getHotSingerList())
    },
    // 改变歌手类别
    updateDispatch(category, alpha) {
      dispatch(changePageCount(0))
      dispatch(changeEnterLoading(true))
      dispatch(getSingerList(category, alpha))
    },
    // 滑到最底部刷新部分的处理
    pullUpRefreshDispatch(category, alpha, hot, count) {
      dispatch(changePullUpLoading(true))
      dispatch(changePageCount(count + 1))
      if (hot) {
        dispatch(getMoreHotSingerList())
      } else {
        dispatch(getMoreSingerList(category, alpha))
      }
    },
    //顶部下拉刷新
    pullDownRefreshDispatch(category, alpha) {
      dispatch(changePullDownLoading(true))
      dispatch(changePageCount(0)) //属于重新获取数据
      if (category === '' && alpha === '') {
        dispatch(getHotSingerList())
      } else {
        dispatch(getSingerList(category, alpha))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))
