import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'title',
    component: () =>
      import('@/views/public/title.vue')
  },
  {
    path: '/top',
    name: 'top',
    component: () =>
      import('@/views/public/top.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/views/public/login.vue')
  },
  {
    path: '/measures',
    name: 'Measures',
    component: () =>
      import('@/views/public/measures.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () =>
      import('@/views/public/details.vue')
  },
  {
    path: '/change_details',
    name: 'changeDetails',
    component: () =>
      import('@/views/public/changeDetails.vue')
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () =>
      import('@/views/admin/methods.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () =>
      import('@/views/admin/regist.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
