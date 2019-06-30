<template>
  <div class="footer">
    <div class="container">
      <div class="link-group-wrapper">
        <ul class="link-group">
          <li
            class="item"
            v-for="item of linkList.slice(0, filterNumber)"
            :key="item.id"
          >
            <div
              class="item-icon"
              :style="{ 'background-position': item.bgPositon }"
            ></div>
            <span class="item-title">{{ item.name }}</span>
          </li>
          <li class="more-btn-wrapper">
            <span class="line">|</span>
            <span class="more-btn" @click="handleMoreBtnClick">
              <div class="iconfont unfold-icon" v-show="unfold">&#xe74a;</div>
              <div class="iconfont unfold-icon" v-show="!unfold">&#xe749;</div>
              <div class="text" v-show="unfold">更多</div>
              <div class="text" v-show="!unfold">收起</div>
            </span>
          </li>
        </ul>
      </div>
      <div class="nav-menu">
        <ul>
          <li class="menu-btn">
            登录
          </li>
          <li class="menu-btn">
            我的订单
          </li>
          <li class="menu-btn">
            最近浏览
          </li>
          <li class="menu-btn">
            关于我们
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright border-top">
      <div class="change-btn">
        <span class="item active">触屏版</span>
        <span class="item">电脑版</span>
      </div>
      <div class="content">YuMi 学习仿制08940984 <span>意见反馈</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  data () {
    return {
      linkList: [
        { id: '0001', bgPositon: '0 0', name: '机票' },
        { id: '0002', bgPositon: '-25px  0', name: '酒店' },
        { id: '0003', bgPositon: '-150px 0', name: '公寓' },
        { id: '0004', bgPositon: '-50px 0', name: '团购' },
        { id: '0005', bgPositon: '-50px -25px', name: '火车票' },
        { id: '0006', bgPositon: '-75px 0', name: '景点' },
        { id: '0007', bgPositon: '-100px 0', name: '接送机' },
        { id: '0008', bgPositon: '0 -25px', name: '度假' },
        { id: '0009', bgPositon: '-75px -25px', name: '攻略' },
        { id: '0010', bgPositon: '-100px -25px', name: '旅图' },
        { id: '0011', bgPositon: '-125px 0', name: '车车' },
        { id: '0012', bgPositon: '-125px -25px', name: '当地人' }
      ],
      filterNumber: 3,
      unfold: true
    }
  },
  methods: {
    handleMoreBtnClick () {
      this.filterNumber = this.filterNumber === this.linkList.length ? 3 : this.linkList.length
      this.unfold = !this.unfold
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~$styles/varibles.styl'

.border-top
  &:before
    border-color #999
.footer
  width 100%
  min-height 2.4rem
  background #f3f3f3
  .container
    width 6rem
    margin 0 auto
    padding 0.2rem 0
    .link-group-wrapper
      overflow hidden
      .item
        width 25%
        height 0.62rem
        float left
        text-align center
        .item-icon
          float left
          width 0.44rem
          height 0.44rem
          background url('http://source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png') top left no-repeat
          background-size 3.5rem 1rem
        .item-title
          float left
          display inline-block
          color #9e9e9e
          margin 0.06rem 0 0 0.1rem
          border-bottom 0.02rem solid #acacac
          font-size 0.24rem
      .more-btn-wrapper
        height 0.39rem
        line-height 0.39rem
        color #999
        float right
        padding-right 0.35rem
        .line
          float left
          margin-right 0.15rem
        .more-btn
          .unfold-icon
            float left
          .text
            float left
    .nav-menu
      overflow hidden
      .menu-btn
        height 0.5rem
        line-height 0.5rem
        margin-top 0.1rem
        padding 0 0.23rem
        float left
        color $blueColor
        text-align center
  .copyright
    padding 0.15rem 0
    text-align center
    font-size 0.3rem
    .change-btn
      padding-top 0.12rem
      .item
        padding 0 0.15rem
      .item.active
        color $blueColor
    .content
      height 0.7rem
      line-height 0.7rem
      color #9e9e9e
</style>
