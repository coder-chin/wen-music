import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
  data: {
    tapTimes: 0,
    btnMsg: {
      0: '点击查看谁是最可爱的人 🍉',
      1: '不如再点一下？！🌛',
      2: '不经历风雨，怎能见彩虹。想知道我是谁？🎨'
    },
    dialogMsg: {
      0: '到底谁才是最可爱的人呢？🎉',
      1: '再点！！坚持就是胜利！！🍓',
      2: '噔噔蹬蹬 ~ \n Ta 来啦！！！ 🌈'
    }
  },

  handleBtnClick() {
    Dialog.alert({
      message: this.data.dialogMsg[this.data.tapTimes],
      theme: 'round-button'
    }).then(() => {
      this.setData({
        tapTimes: this.data.tapTimes + 1
      })
    })
  },

  handleImgClick() {
    Dialog.alert({
      message: '别点我，要好好保护我哦~ ⛱️'
    })
  }
})