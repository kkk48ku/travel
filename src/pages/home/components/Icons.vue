<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HeaderIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        /* 分页器设置 */
        pagination: '.swiper-pagination',
        /* 圆点点击切换 */
        paginationClickable: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'
@import '~$styles/mixins.styl'

.icons >>> .swiper-container
  padding-top 1.3%
  padding-bottom 58%
  height 0
.icon
  overflow hidden
  float left
  width 25%
  height 0
  position relative
  padding-bottom 25%
  .icon-img
    position absolute
    top 0
    left 0
    right 0
    bottom 0.44rem
    box-sizing border-box
    padding 0.12rem
    .icon-img-content
      height 100%
      display block
      margin 0 auto
  .icon-desc
    position absolute
    left 0
    right 0
    bottom 0
    height 0.44rem
    line-height 0.44rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
