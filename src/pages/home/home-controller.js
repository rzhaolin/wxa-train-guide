export default {
  name: 'home',
  data () {
    return {
      subTitle: '温馨提示',
      nextPage: '转跳到下一个界面'
    }
  },
  methods: {
    clickText () {
      wx.navigateTo({
        url: '/pages/counter/main?id=11&size=4'
      })
    }
  }
}
