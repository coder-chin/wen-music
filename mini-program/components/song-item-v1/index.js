Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleSongItemClick: function() {
      console.log(this.properties.item);
      // const id = this.properties.item.id
      // wx.navigateTo({
      //   url: '/pages/music-player/index?id=' + id,
      // })
    }
  }
})
