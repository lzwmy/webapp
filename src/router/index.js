import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:"home",
      meta: {
        title: "首页",
        index:1
      },
      component: resolve => require(['@/views/home/home.vue'], resolve)
    },
    {
      path: '/category',
      name:"category",
      meta: {
        title: "分类",
        index:2
      },
      component: resolve => require(['@/views/category/category.vue'], resolve)
    },
    {
      path: '/cart',
      name:"cart",
      meta: {
        title: "购物车",
        index:3
      },
      component: resolve => require(['@/views/cart/cart.vue'], resolve)
    },
    {
      path: '/mine',
      name:"mine",
      meta: {
        title: "我的",
        index:4
      },
      component: resolve => require(['@/views/mine/mine.vue'], resolve)
    },
    {
      path: '/proDetail',
      name:"proDetail",
      meta: {
        title: "产品详情",
        index:5
      },
      component: resolve => require(['@/components/home/proDetail.vue'], resolve)
    },
    {
      path: '/search',
      name:"search",
      meta: {
        title: "搜索",
        index:6
      },
      component: resolve => require(['@/components/home/search.vue'], resolve)
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})
