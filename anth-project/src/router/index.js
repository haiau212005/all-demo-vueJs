import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Detail from '@/components/HomePage'
import DetailHref from '@/components/DetailHref'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/DetailHref/:id',
      name: 'DetailHref',
      component: DetailHref
    },
  ]
})
