import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import ComingSoon from '@/views/ComingSoon'
import NotFound from '@/views/NotFound'
import CompetitionPage from '@/views/CompetitionPage'

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
      path: '/home',
      name: 'Home',
      component: LandingPage
    },
    {
      path: '/competition/:id',
      name: 'Competition',
      component: CompetitionPage,
      props: true
    },
    // { 
    //   path: '/search', 
    //   component: SearchUser, 
    //   props: (route) => ({ query: route.query.q }) ;;;; route.params.years
    // },
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