import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home_m.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/m/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about_m" */ './views/About_m.vue')
    },
    {
        path: '/m/info',
        name: 'info',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about_m" */ './views/Info_m.vue')
      }

  ]
})
