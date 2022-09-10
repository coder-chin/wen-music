import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import LazyLoad, { forceCheck } from 'react-lazyload'
import { Container, ShortcutWrapper, HotKey } from './style'
import { List, ListItem, SongItem } from './style'
import SearchBox from '../../UI/SearchBox'
import Scroll from '../../UI/scroll'
import Loading from '../../UI/Loading'
import {
  getHotKeyWords,
  getSuggestList,
  changeEnterLoading
} from './store/actionCreators'
import { getSongDetail } from '../Player/store/actionCreators'
import { getName } from '../../utils'

function Search(props) {
  const {
    hotList,
    enterLoading,
    suggestList: immutableSuggestList,
    songsCount,
    songsList: immutableSongsList
  } = props
  const {
    getHotKeyWordsDispatch,
    changeEnterLoadingDispatch,
    getSuggestListDispatch,
    getSongDetailDispatch
  } = props

  const suggestList = immutableSuggestList.toJS()
  const songsList = immutableSongsList.toJS()

  const [show, setShow] = useState(false)
  const [query, setQuery] = useState('')

  // 控制动画显示
  useEffect(() => {
    setShow(true)
  }, [])
  // 获取热词
  useEffect(() => {
    setShow(true)
    // 用了 redux 缓存，不再赘述
    if (!hotList.size) getHotKeyWordsDispatch()
  }, [])

  const searchBack = () => {
    setShow(false)
  }
  const handleQuery = (query) => {
    setQuery(query)
    if (!query) return
    changeEnterLoadingDispatch(true)
    getSuggestListDispatch(query)
  }
  // 当搜索框为空时
  const renderHotKey = () => {
    let list = hotList ? hotList.toJS() : []
    return (
      <ul>
        {list.map((item) => {
          return (
            <li
              className="item"
              key={item.first}
              onClick={() => setQuery(item.first)}
            >
              <span>{item.first}</span>
            </li>
          )
        })}
      </ul>
    )
  }
  const renderSingers = () => {
    let singers = suggestList.artists
    if (!singers || !singers.length) return
    return (
      <List>
        <h1 className="title"> 相关歌手 </h1>
        {singers.map((item, index) => {
          return (
            <ListItem
              key={item.accountId + '' + index}
              onClick={() => props.history.push(`/singers/${item.id}`)}
            >
              <div className="img_wrapper">
                <LazyLoad
                  placeholder={
                    <img
                      width="100%"
                      height="100%"
                      src={new URL('./music.png', import.meta.url).href}
                      alt="singer"
                    />
                  }
                >
                  <img
                    src={item.picUrl}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              <span className="name"> 歌手: {item.name}</span>
            </ListItem>
          )
        })}
      </List>
    )
  }
  const renderAlbum = () => {
    let albums = suggestList.playlists
    if (!albums || !albums.length) return
    return (
      <List>
        <h1 className="title"> 相关歌单 </h1>
        {albums.map((item, index) => {
          return (
            <ListItem
              key={item.accountId + '' + index}
              onClick={() => props.history.push(`/album/${item.id}`)}
            >
              <div className="img_wrapper">
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
                    src={item.coverImgUrl}
                    width="100%"
                    height="100%"
                    alt="music"
                  />
                </LazyLoad>
              </div>
              <span className="name"> 歌单: {item.name}</span>
            </ListItem>
          )
        })}
      </List>
    )
  }
  const renderSongs = () => {
    return (
      <SongItem style={{ paddingLeft: '20px' }}>
        {songsList.map((item) => {
          return (
            <li key={item.id} onClick={(e) => selectItem(e, item.id)}>
              <div className="info">
                <span>{item.name}</span>
                <span>
                  {getName(item.artists)} - {item.album.name}
                </span>
              </div>
            </li>
          )
        })}
      </SongItem>
    )
  }

  const selectItem = (e, id) => {
    getSongDetailDispatch(id)
  }

  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExited={() => props.history.goBack()}
    >
      <Container play={songsCount}>
        <SearchBox
          newQuery={query}
          back={searchBack}
          handleQuery={handleQuery}
        ></SearchBox>
        <ShortcutWrapper show={!query}>
          <Scroll>
            <div>
              <HotKey>
                <h1 className="title"> 热门搜索 </h1>
                {renderHotKey()}
              </HotKey>
            </div>
          </Scroll>
        </ShortcutWrapper>
        <ShortcutWrapper show={query}>
          <Scroll onScorll={forceCheck}>
            <div>
              {renderSingers()}
              {renderAlbum()}
              {renderSongs()}
            </div>
          </Scroll>
        </ShortcutWrapper>
        {enterLoading ? <Loading></Loading> : null}
      </Container>
    </CSSTransition>
  )
}

const mapStateToProps = (state) => ({
  hotList: state.getIn(['search', 'hotList']),
  enterLoading: state.getIn(['search', 'enterLoading']),
  suggestList: state.getIn(['search', 'suggestList']),
  songsCount: state.getIn(['player', 'playList']).size,
  songsList: state.getIn(['search', 'songsList'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getHotKeyWordsDispatch() {
      dispatch(getHotKeyWords())
    },
    changeEnterLoadingDispatch(data) {
      dispatch(changeEnterLoading(data))
    },
    getSuggestListDispatch(data) {
      dispatch(getSuggestList(data))
    },
    getSongDetailDispatch(id) {
      dispatch(getSongDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))
