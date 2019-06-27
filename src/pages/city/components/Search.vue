<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'

.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    padding 0 0.1rem
    line-height 0.62rem
    border-radius $borderRadius
    text-align center
    font-family '微软雅黑'
    color #666
</style>
