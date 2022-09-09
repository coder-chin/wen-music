import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import Scroll from '../../UI/Scroll'
import { getRankList } from './store'
import { filterIndex } from '../../utils'
import { Container, List, ListItem, SongList } from './style'

const Rank = (props) => {
  const { rankList, loading, songsCount } = props
  const { getRankListDataDispatch } = props

  let rankListJS = rankList ? rankList.toJS() : []
  let displayStyle = loading ? { display: 'none' } : { display: '' }

  useEffect(() => {
    getRankListDataDispatch()
  }, [])
  const enterDetail = (detail) => {
    console.log(detail)
    props.history.push(`/rank/${detail.id}`)
  }

  let globalStartIndex = filterIndex(rankListJS)
  let officialList = rankListJS.slice(0, globalStartIndex)
  let globalList = rankListJS.slice(globalStartIndex)

  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {list.map((item) => {
          return (
            <ListItem
              key={item.coverImgId}
              tracks={item.name}
              onClick={() => enterDetail(item)}
            >
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="" />
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>
          )
        })}
      </List>
    )
  }
  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {list.map((item, index) => {
          return (
            <li key={item.second}>
              {index + 1}. {item.first} - {item.second}
            </li>
          )
        })}
      </SongList>
    ) : null
  }

  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>
            官方榜
          </h1>
          {renderRankList(officialList)}
          <h1 className="global" style={displayStyle}>
            全球榜
          </h1>
          {renderRankList(globalList, true)}
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  rankList: state.getIn(['rank', 'rankList']),
  loading: state.getIn(['rank', 'loading']),
  songsCount: state.getIn(['player', 'playList']).size
})
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))
