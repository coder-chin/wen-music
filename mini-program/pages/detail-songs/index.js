import { getSoneMenuDetail } from '../../api/music'
import { rankingStore } from '../../store/index'

Page({
  data: {
    type: '',
    ranking: '',
    songInfo: {}
  },

  onLoad: function (options) {
    const type = options.type
    this.setData({ type })

    if (type === "menu") {
      const id = options.id
      getSoneMenuDetail(id).then(res => {
        this.setData({ songInfo: res.playlist })
      })
    } else if (type === "rank") {
      const ranking = options.ranking
      this.setData({ ranking })

      // 1.获取数据
      rankingStore.onState(ranking, this.getRankingDataHanlder)
    }
  },

  onUnload: function () {
    if (this.data.ranking) {
      rankingStore.offState(this.data.ranking, this.getRankingDataHanlder)
    }
  },

  getRankingDataHanlder: function(res) {
    this.setData({ songInfo: res })
  } 
})