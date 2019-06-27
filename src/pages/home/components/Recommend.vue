<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
    <button class="seeAll">
      查看全部产品
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
.item
  overflow hidden
  display flex
  height 2.1rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.2rem
  .item-info
    flex 1
    padding 0.2rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius $borderRadius
      color #fff
      font-family '微软雅黑'
.seeAll
  background #fff
  height 1rem
  width 100%
  color #00afc7
  font 0.35rem '微软雅黑'
</style>
