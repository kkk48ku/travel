<template>
  <div class="wrapper">
    <div class="item" v-for="(item, index) of newList" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-childern">
        <!-- TODO: 点击展开全部item计算显示两个展开速度慢-->
        <div
          v-for="(item, index) of item.children.slice(
            0,
            item.children.filterNumber
          )"
          :key="index"
        >
          <div class="item-info">
            <div class="item-title">
              {{ item.title }}
            </div>
            <div class="item-price" v-if="item.minPrice">
              <span class="price-icon">￥</span>
              <span class="number">{{ item.minPrice }}</span
              >起
              <span class="iconfont arrow-down-icon">&#xe612;</span>
            </div>
          </div>
        </div>
        <div
          class="seeAll"
          v-show="isShowBtn(item.children)"
          @click="showAll(item)"
        >
          查看剩余产品
          <span class="iconfont arrow-down-icon">&#xe612;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  /* data () {
    return {
      filterNumber: 2
    }
  }, */
  computed: {
    newList () {
      let newList = []
      this.list.forEach(element => {
        this.$set(element['children'], 'filterNumber', 2)
        newList.push(element)
      })
      return newList
    }
  },
  methods: {
    isShowBtn (item) {
      return item.length > 2 && item.length !== item.filterNumber
    },
    showAll (item) {
      this.$set(item.children, 'filterNumber', item.children.length)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/mixins.styl'

.item
  line-height 0.8rem
  padding-left 0.2rem
  font-size 0.32rem
  margin-bottom 0.2rem
  background #fff
  .item-title
    .item-title-icon
      position relative
      top 0.08rem
      left 0.11rem
      display inline-block
      width 0.36rem
      height 0.36rem
      background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
      margin-right 0.1rem
      background-size 0.4rem 3rem
  .item-childern
    .item
      height 1rem
      line-height 1rem
    .item-title-icon
      position relative
      top 0.08rem
      left 0.11rem
      display inline-block
      width 0.36rem
      height 0.36rem
      background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
      margin-right 0.1rem
      background-size 0.4rem 3rem
    .item-info
      height 1rem
      line-height 1rem
      .item-title
        max-width 70%
        float left
        ellipsis()
      .item-price
        max-width 25%
        max-height 1rem
        text-align right
        float right
        margin-right 0.2rem
        font-size 0.2rem
        color #9e9e9e
        ellipsis()
        .price-icon
          color #ff9800
          font-size 0.24rem
          margin-right -0.05rem
        .number
          color #ff9800
          font-size 0.42rem
          margin-right 0.03rem
  .seeAll
    height 0.8rem
    line-height 0.6rem
    text-align center
    color #616161
</style>
