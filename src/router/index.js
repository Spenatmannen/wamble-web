import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComingSoon from '@/components/ComingSoon' // this is the import line to add

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    }
    // {
    //   path: '/HelloWorld',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})