<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-info></detail-info>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
export default {
  name: 'Deatil',
  data () {
    return {
      list: [
        { title: '故宫礼物', children: [{ title: '【上午场】成人票+故宫全景手绘地图', minPrice: 69.9 }, { title: '【中午场】成人票+故宫全景手绘地图', minPrice: 39.9 }, { title: '【下午场】成人票+故宫全景手绘地图', minPrice: 69.9 }] },
        { title: '热销联票', children: [{ title: '故宫门票（上午场）+珍宝馆+天坛公园联票+人工导游讲解服务成人票', minPrice: 60 }, { title: '故宫门票（上午场）+珍宝馆+天坛公园联票+人工导游讲解服务学生票', minPrice: 80 }] },
        { title: '热销组合产品', children: [{ title: '故宫门票+大城小像联票优待票（儿童/学生/老人）', minPrice: 99 }] },
        { title: '秀才说·网红导游讲解', children: [{ title: '秀才说网红导游讲解（不含门票）', minPrice: 68 }, { title: '故宫成人票+珍宝馆+秀才说网红导游+定制礼物+无线耳麦', minPrice: 108 }] }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailList
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  background #eee
</style>
