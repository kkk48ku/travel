<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe682;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
}
</script>

<style lang="stylus" scoped>
@import '~$styles/varibles.styl'

.header
  position relative
  overflow hidden
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .back-icon
    position absolute
    left 0
    top 0
    width $headerLeftWidth
    font-size 0.4rem
    color #fff
</style>
