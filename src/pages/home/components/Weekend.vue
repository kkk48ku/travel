<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        </div>
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'
@import '~$styles/mixins.styl'

.title
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
.item-info
  padding 0.2rem
  .item-title
    line-height 0.54rem
    font-size 0.32rem
  .item-desc
    line-height 0.4rem
    color #ccc
</style>
