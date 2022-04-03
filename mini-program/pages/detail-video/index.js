import { getMVDetail, getMVURL, getRelatedVideo } from '../../api/video'

Page({
  data: {
    mvInfo: {},
    mvURL: {},
    realtedMV: [],
    danmuList: [{
      text: '大美女王净雯',
      color: '#ff0000',
      time: 1
    }, {
      text: '守护最好的王净雯',
      color: '#ff00ff',
      time: 3
    },
    {
      text: '祝她永远快乐',
      color: '#1aad19',
      time: 5
    }]
  },

  onLoad: function (options) {
    const id = options.id
    this.getVideoInfo(id)
  },

  getVideoInfo: function(id) {
    getMVDetail(id).then(res => {
      this.setData({ mvInfo: res.data })
    })

    getMVURL(id).then(res => {
      this.setData({ mvURL: res.data})
    })

    getRelatedVideo(id).then(res => {
      this.setData({ realtedMV: res.data })
    })
  }
})