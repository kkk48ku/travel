<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="this.bannerImg" alt="故宫" />
      <div class="banner-info">
        <div class="banner-title"></div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6eb;</span>
          {{ imgList.length }}
        </div>
      </div>
    </div>
    <common-gallary
      :images="imgList"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '$common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    imgList: Array
  },
  data () {
    return {
      showGallary: false,
      images: []
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
