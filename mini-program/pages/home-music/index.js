import { getBanners, getSongMenu } from '../../api/music'
import { rankingMap, rankingStore } from '../../store/index'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect, 1000)

Page({
  data: {
    swiperHeight: 0,
    banners: [],
    recommendSongs: [],    // 推荐歌曲
    hotSoneMenu: [],       // 热门歌单
    recommendSongMenu: [], // 推荐歌单
    rankings: { 0: {}, 2: {}, 3: {} } // 巅峰榜
  },

  onLoad: function() {
    this.getPageData()

    // 发起共享数据的请求
    rankingStore.dispatch('getRankingDataAction')

    // 从store获取共享的数据
    rankingStore.onState("hotRanking", (res) => {
      if (!res.tracks) return
      const recommendSongs = res.tracks.slice(0, 6)
      this.setData({ recommendSongs })
    })
    // 取出 state 中的数据
    rankingStore.onState("newRanking", this.getRankingHandler(0))
    rankingStore.onState("originRanking", this.getRankingHandler(2))
    rankingStore.onState("upRanking", this.getRankingHandler(3))
  },

  getPageData() {
    // 轮播图数据
    getBanners().then(res => {
      this.setData({ banners: res.banners })
    })

    getSongMenu().then(res => {
      this.setData({ hotSongMenu: res.playlists })
    })

    getSongMenu("华语").then(res => {
      this.setData({ recommendSongMenu: res.playlists })
    })
  },

  // 图片加载完，获取图片高度
  handleSwiperImageLoaded() {
    throttleQueryRect(".swiper-image").then(res => {
      const rect = res[0]
      this.setData({ swiperHeight: rect.height })
    })
  },

  getRankingHandler: function(idx) {
    return (res) => {
      if (Object.keys(res).length === 0) return
      const name = res.name
      const coverImgUrl = res.coverImgUrl
      const playCount = res.playCount
      const songList = res.tracks.slice(0, 3)
      const rankingObj = {name, coverImgUrl, playCount, songList}
      const newRankings = { ...this.data.rankings, [idx]: rankingObj}
      this.setData({ 
        rankings: newRankings
      })
    }
  },

  // 点击回调
  handleSearchClick() {
    wx.navigateTo({
      url: '/pages/detail-search/index'
    })
  },

  handleMoreClick() {
    this.navigateToDetailSongsPage('hotRanking')
  },

  handleRankingItemClick(event) {
    const idx = event.currentTarget.dataset.idx
    const rankingName = rankingMap[idx]
    this.navigateToDetailSongsPage(rankingName)
  },

  navigateToDetailSongsPage(rankingName) {
    wx.navigateTo({
      url: `/pages/detail-songs/index?ranking=${rankingName}&type=rank`,
    })
  },
})