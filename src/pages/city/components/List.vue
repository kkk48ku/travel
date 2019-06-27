<template>
  <div class="list" ref="listWrappper">
    <div>
      <section class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </section>
      <section class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </section>
      <section class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.listWrappper)
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'

.border-topbottom, .border-bottom
  &:before, &:after
    border-color $borderColor
.list
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height 0.54rem
    background $titleBgColor
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid $borderColor
        border-radius $borderRadius
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
