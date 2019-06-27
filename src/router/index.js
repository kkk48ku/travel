import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)
// TODO:路由懒加载
/* function loadPage(page){
  return ()=> import (`@/pages/${page}/${page}.vue`)
} */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }]
})
