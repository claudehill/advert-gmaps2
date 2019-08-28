import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adblock from './views/Adblock.vue'
// import Contact from './views/Contact.vue'
import ContactSubscribe from './views/Contact-Subscribe.vue'

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
      path: '/contact/success',
      name: 'contact-success',
      component: ContactSubscribe
    },
    {
      path: '/contact/fail',
      name: 'contact-fail',
      component: ContactSubscribe
    },
    {
      path: '/contact-us/success',
      name: 'contact-us-success',
      component: ContactSubscribe
    },
    {
      path: '/contact-us/fail',
      name: 'contact-us-fail',
      component: ContactSubscribe
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import( /*webpackChunkName: "contact-us" */ './views/Contact-Subscribe.vue' )
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( /*webpackChunkName: "contact-us" */ './views/Contact-Subscribe.vue' )
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: () => import(/* webpackChunkName: "subscribe" */ './views/Subscribe.vue')
    },
    {
      path: '/subscribe-to',
      name: 'subscribe-to',
      component: () => import( /* webpackChunkName: "subscribe-to" */ './views/Contact-Subscribe.vue' )
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
