import { getTopMV } from '../../api/video'

Page({
  data: {
    topMVs: [],
    hasMore: true
  },

  onLoad: function (options) {
    this.getTopMVData(0)
  },

  getTopMVData: async function(offset) {
    // 如果没有更多数据，就不再获取
    if(!this.data.hasMore) return 

    wx.showNavigationBarLoading()

    const res = await getTopMV(offset)
    let newData = this.data.topMVs

    if(offset === 0) {
      newData = res.data
    } else {
      // 追加到末尾
      newData = newData.concat(res.data)
    }

    this.setData({ 
      topMVs: newData,
      hasMore: res.hasMore
    })
    wx.hideNavigationBarLoading()
    if(offset === 0) {
      wx.stopPullDownRefresh()
    }
  },

  handleVideoItemClick(event) {
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`
    })
  },
  
  onPullDownRefresh: function () {
    this.getTopMVData(0)
  },

  onReachBottom: function () {
    this.getTopMVData(this.data.topMVs.length)
  }
})