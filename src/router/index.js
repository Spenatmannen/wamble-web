import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import ComingSoon from '@/views/ComingSoon' // this is the import line to add
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/ComingSoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})