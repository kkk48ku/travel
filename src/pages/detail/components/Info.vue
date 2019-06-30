<template>
  <div class="wrapper">
    <div class="section border-bottom">
      <div class="section-left">
        <span class="iconfont location-icon">&#xe61e;</span>
      </div>
      <div class="section-center">北京市东城区景山前街4号</div>
      <div class="section-right">
        <span class="iconfont scinic-icon">&#xe61f;</span>
      </div>
    </div>
    <div class="section">
      <div class="section-left">
        <span class="iconfont scinic-icon">&#xe626;</span>
      </div>
      <div class="section-center">查看景点简介及开放时间</div>
      <div class="section-right">
        <span class="iconfont scinic-icon">&#xe61f;</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailInfo'
}
</script>

<style scoped lang="stylus">
@import '~$styles/mixins.styl'

.wrapper
  position relative
  top -0.05rem
  height 1.6rem
  border-radius 0.12rem 0.12rem 0 0
  margin-bottom 0.2rem
  background #fff
  .section
    display flex
    height 0.8rem
    line-height 0.8rem
    .section-left
      width 0.85rem
      float left
      text-align center
      .iconfont
        font-size 0.4rem
    .section-center
      flex 1
      ellipsis()
    .section-right
      width 0.85rem
      float right
      padding 0 0.1rem
      text-align center
      ellipsis()
</style>
