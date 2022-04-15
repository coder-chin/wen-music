// pages/detail-search/index.js
import { getSearchHot, getSearchSuggest, getSearchResult } from '../../api/search'
import debounce from '../../utils/debounce'
import stringToNodes from '../../utils/string2nodes'

const debounceGetSearchSuggest = debounce(getSearchSuggest, 300)

Page({
  data: {
    hotKeywords: [],
    suggestSongs: [],
    suggestSongsNodes: [],
    resultSongs: [],
    searchValue: ""
  },

  onLoad: function () {
    this.getPageData()
  },

  getPageData: async function() {
    const res = await getSearchHot()
    this.setData({
      hotKeywords: res.result.hots
    })
  },

  // 输入内容改变回调
  handleSearchChange: function(event) {
    const searchValue = event.detail
    this.setData({ searchValue })

    if (!searchValue.length) {
      this.setData({ suggestSongs: [], resultSongs: [] })
      debounceGetSearchSuggest.cancel()
      return
    }

    debounceGetSearchSuggest(searchValue).then(res => {
      // 1.获取建议的关键字歌曲
      const suggestSongs = res.result.allMatch
      this.setData({ suggestSongs })
      if (!suggestSongs) return

      // 2.转成nodes节点
      const suggestKeywords = suggestSongs.map(item => item.keyword)
      const suggestSongsNodes = []
      for (const keyword of suggestKeywords) {
        const nodes = stringToNodes(keyword, searchValue)
        suggestSongsNodes.push(nodes)
      }
      this.setData({ suggestSongsNodes })
    })
  },

  // 点击搜索回调
  handleSearchAction: function() {
    const searchValue = this.data.searchValue
    getSearchResult(searchValue).then(res => {
      this.setData({ resultSongs: res.result.songs })
    })
  },

  // 点击推荐热词
  handleKeywordItemClick: function(event) {
    const keyword = event.currentTarget.dataset.keyword
    this.setData({ searchValue: keyword })
    this.handleSearchAction()
  }
})