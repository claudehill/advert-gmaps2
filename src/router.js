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
      path: '/adblock',
      name: 'adblock',
      component: Adblock
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
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
      path: '/contact',
      name: 'contact',
      component: ContactSubscribe
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: ContactSubscribe
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
