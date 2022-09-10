import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import MiniPlayer from './miniPlayer'
import NormalPlayer from './normalPlayer'
import Toast from './../../UI/Toast'
import {
  changePlayingState,
  changeShowPlayList,
  changeCurrentIndex,
  changeCurrentSong,
  changePlayList,
  changePlayMode,
  changeFullScreen
} from './store/actionCreators'
import { getSongUrl, isEmptyObject, shuffle, findIndex } from '../../utils'
import { playMode } from '../../constant'
import PlayList from './playList'
import { getLyricRequest } from '../../api/request'

function Player(props) {
  const {
    fullScreen,
    playing,
    currentIndex,
    currentSong: immutableCurrentSong,
    playList: immutablePlayList,
    mode, //播放模式
    sequencePlayList: immutableSequencePlayList //顺序列表
  } = props
  const {
    toggleFullScreenDispatch, // 控制是否全屏
    togglePlayingDispatch, // 改变播放状态
    togglePlayListDispatch, //控制播放列表的显示和隐藏
    changeCurrentIndexDispatch,
    changeCurrentDispatch,
    changePlayListDispatch, //改变playList
    changeModeDispatch //改变mode
  } = props

  const currentSong = immutableCurrentSong.toJS()
  const playList = immutablePlayList.toJS()
  const sequencePlayList = immutableSequencePlayList.toJS()

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [preSong, setPreSong] = useState({})
  const [songReady, setSongReady] = useState(true)
  const [modeText, setModeText] = useState('')

  const toastRef = useRef()
  const audioRef = useRef()
  const currentLyric = useRef()

  let percent = isNaN(currentTime / duration) ? 0 : currentTime / duration

  useEffect(() => {
    changeCurrentIndexDispatch(0)
  }, [])

  useEffect(() => {
    if (
      !playList.length ||
      currentIndex === -1 ||
      !playList[currentIndex] ||
      playList[currentIndex].id === preSong.id ||
      !songReady
    )
      return
    let current = playList[currentIndex]
    setSongReady(false)
    changeCurrentDispatch(current) //赋值currentSong
    setPreSong(current)
    audioRef.current.src = getSongUrl(current.id)
    setTimeout(() => {
      audioRef.current.play().then(() => {
        setSongReady(true)
      })
    })
    togglePlayingDispatch(true) //播放状态
    getLyric(current.id)
    setCurrentTime(0) //从头开始播放
    setDuration((current.dt / 1000) | 0) //时长
  }, [currentIndex])

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  const clickPlaying = (e, state) => {
    // 阻止冒泡
    e.stopPropagation()
    togglePlayingDispatch(state)
  }
  const updateTime = (e) => {
    // console.log('playing')
    setCurrentTime(e.target.currentTime)
  }
  const onProgressChange = (curPercent) => {
    const newTime = curPercent * duration
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
    if (!playing) {
      togglePlayingDispatch(true)
    }
  }
  //一首歌循环
  const handleLoop = () => {
    audioRef.current.currentTime = 0
    togglePlayingDispatch(true)
    audioRef.current.play()
  }
  const handlePrev = () => {
    //播放列表只有一首歌时单曲循环
    if (playList.length === 1) {
      handleLoop()
      return
    }
    let index = currentIndex - 1
    if (index < 0) index = playList.length - 1
    if (!playing) togglePlayingDispatch(true)
    changeCurrentIndexDispatch(index)
  }
  const handleNext = () => {
    //播放列表只有一首歌时单曲循环
    if (playList.length === 1) {
      handleLoop()
      return
    }
    let index = currentIndex + 1
    // 如果最后一首歌
    if (index === playList.length) index = 0
    if (!playing) togglePlayingDispatch(true)
    changeCurrentIndexDispatch(index)
  }
  const changeMode = () => {
    let newMode = (mode + 1) % 3
    if (newMode === 0) {
      //顺序模式
      changePlayListDispatch(sequencePlayList)
      let index = findIndex(currentSong, sequencePlayList)
      changeCurrentIndexDispatch(index)
      setModeText('顺序循环')
    } else if (newMode === 1) {
      //单曲循环
      changePlayListDispatch(sequencePlayList)
      setModeText('单曲循环')
    } else if (newMode === 2) {
      //随机播放
      let newList = shuffle(sequencePlayList)
      let index = findIndex(currentSong, newList)
      changePlayListDispatch(newList)
      changeCurrentIndexDispatch(index)
      setModeText('随机播放')
    }
    changeModeDispatch(newMode)
    toastRef.current.show()
  }
  const handleEnd = () => {
    if (mode === playMode.loop) {
      handleLoop()
    } else {
      handleNext()
    }
  }
  const getLyric = (id) => {
    let lyric = ''
    getLyricRequest(id)
      .then((data) => {
        console.log(data)
        lyric = data.lrc.lyric
        if (!lyric) {
          currentLyric.current = null
          return
        }
      })
      .catch(() => {
        songReady.current = true
        audioRef.current.play()
      })
  }

  return (
    <div>
      {isEmptyObject(currentSong) ? null : (
        <MiniPlayer
          song={currentSong}
          fullScreen={fullScreen}
          playing={playing}
          percent={percent}
          clickPlaying={clickPlaying}
          toggleFullScreen={toggleFullScreenDispatch}
          togglePlayList={togglePlayListDispatch}
        />
      )}
      {isEmptyObject(currentSong) ? null : (
        <NormalPlayer
          song={currentSong}
          fullScreen={fullScreen}
          playing={playing}
          duration={duration}
          currentTime={currentTime}
          percent={percent}
          clickPlaying={clickPlaying}
          toggleFullScreen={toggleFullScreenDispatch}
          togglePlayList={togglePlayListDispatch}
          onProgressChange={onProgressChange}
          handlePrev={handlePrev}
          handleNext={handleNext}
          mode={mode}
          changeMode={changeMode}
        />
      )}

      <audio
        ref={audioRef}
        onTimeUpdate={updateTime}
        onEnded={handleEnd}
      ></audio>
      <Toast ref={toastRef} text={modeText}></Toast>
      <PlayList></PlayList>
    </div>
  )
}

const mapStateToProps = (state) => ({
  fullScreen: state.getIn(['player', 'fullScreen']),
  playing: state.getIn(['player', 'playing']),
  currentSong: state.getIn(['player', 'currentSong']),
  showPlayList: state.getIn(['player', 'showPlayList']),
  mode: state.getIn(['player', 'mode']),
  currentIndex: state.getIn(['player', 'currentIndex']),
  playList: state.getIn(['player', 'playList']),
  sequencePlayList: state.getIn(['player', 'sequencePlayList'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    togglePlayingDispatch(data) {
      dispatch(changePlayingState(data))
    },
    toggleFullScreenDispatch(data) {
      dispatch(changeFullScreen(data))
    },
    togglePlayListDispatch(data) {
      dispatch(changeShowPlayList(data))
    },
    changeCurrentIndexDispatch(index) {
      dispatch(changeCurrentIndex(index))
    },
    changeCurrentDispatch(data) {
      dispatch(changeCurrentSong(data))
    },
    changeModeDispatch(data) {
      dispatch(changePlayMode(data))
    },
    changePlayListDispatch(data) {
      dispatch(changePlayList(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))
