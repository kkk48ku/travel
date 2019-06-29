<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-back-icon">&#xe682;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-back-icon">&#xe682;</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DeatilHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleWindowScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.opacityStyle = { opacity: 0 }
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleWindowScroll)
  },
  /*
    解绑scroll全局事件
    deactivated生命周期函数表示离开组件
   */
  deactivated () {
    window.removeEventListener('scroll', this.handleWindowScroll)
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'

.header-abs
  position absolute
  top 0.2rem
  left 0.2rem
  width 0.8rem
  height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.7)
  .header-back-icon
    line-height 0.8rem
    font-size 0.4rem
    color #fff
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-back-icon
    position absolute
    left 0
    top 0
    width $headerLeftWidth
    font-size 0.4rem
    color #fff
</style>
