<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"
        alt="故宫"
      />
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6eb;</span>
          {{ images.length }}
        </div>
      </div>
    </div>
    <common-gallary
      :images="images"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '$common/gallary/Gallary'
export default {
  name: 'DeatilBanner',
  data () {
    return {
      showGallary: false,
      images: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg', 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped lang="stylus">
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    height 1rem
    line-height 1rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      padding 0 0.2rem
      margin 0.35rem 0.1rem 0 0
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.5)
      font-size 0.24rem
    .banner-icon
      font-size 0.24rem
</style>
