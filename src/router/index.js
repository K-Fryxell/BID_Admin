import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TOP',
    component: () =>
      import('@/views/admin/top.vue')
  },
  {
    path: '/user_details',
    name: 'userDetails',
    component: () =>
      import('@/views/public/userDetails.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () =>
      import('../views/public/regist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
