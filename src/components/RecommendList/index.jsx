import React from 'react'
import LazyLoad from 'react-lazyload'
import { withRouter } from 'react-router-dom'

import { ListWrapper, ListItem, List } from './style'
import { getCount } from '../../utils'

const RecommendList = (props) => {
  const enterDetail = (id) => {
    props.history.push(`recommend/${id}`)
  }

  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item) => {
          return (
            <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={new URL('./music.png', import.meta.url).href}
                      alt="music"
                    />
                  }
                >
                  <img
                    src={item.picUrl + '?param=300x300'}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>

                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>

              <div className="desc">{item.name}</div>
            </ListItem>
          )
        })}
      </List>
    </ListWrapper>
  )
}

export default React.memo(withRouter(RecommendList))
