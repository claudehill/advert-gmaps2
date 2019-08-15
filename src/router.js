import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adblock from './views/Adblock.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/adblock',
      name: 'adblock',
      component: Adblock
    },
    {
      path:'/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/test',
      name: 'test',
      component: () => import( './views/Test.vue' )
    },
    { 
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue' )
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import(/* webpackChunkName: "subscribe" */ './views/Subscribe.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import(/* webpackChunkName: "confirm" */ './views/Confirm.vue' )
    },
    {
      path: '/error',
      name: 'error',
      component: () => import(/* webpackChunkName: "error" */ './views/Error.vue')
    },
    {
      /* Replace with 404 page? */
      path: '*',
      component: () => import(/* webpackChunkName: "error" */ './views/Error.vue')
    }
  ]
})
