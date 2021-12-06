import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/user_details',
      name: 'userDetails',
      component: () =>
          import('@/views/userDetails.vue')
  },
  {
    path: '/user_regist',
    name: 'userRegist',
    component: () =>
        import('@/views/user/userRegist.vue')
},
  {
    path: '/user_measures',
    name: 'userMeasures',
    component: () =>
        import('@/views/user/userMeasures.vue')
},
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
