<template>
  <div class="wrapper">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :imgList="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-info></detail-info>
    <detail-list :list="categoryList"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailInfo from './components/Info'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      lastId: '',
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailInfo,
    DetailList
  },
  methods: {
    getDetailInfo () {
      this.axios.get('/api/detail.json', {
        params: { id: this.$route.params.id }
      })
        .then(this.handleGetDetailInfoSuc)
        .catch((err) => { console.log(err) })
    },
    handleGetDetailInfoSuc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  background #eee
</style>
