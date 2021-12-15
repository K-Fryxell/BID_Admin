import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'adminTop',
    component: () =>
      import('@/views/admin/top.vue')
  },
  {
    path: '/regist_admin',
    name: 'regist',
    component: () =>
      import('@/views/admin/registAdmin.vue')
  },
  {
    path: '/regist_user',
    name: 'registUser',
    component: () =>
      import('@/views/admin/registUser.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('@/views/public/login.vue')
  },
  {
    path: '/user_measures',
    name: 'userMeasures',
    component: () =>
      import('@/views/public/userMeasures.vue')
  },
  {
    path: '/user_measuresDetail',
    name: 'userMeasuresDetail',
    component: () =>
      import('@/views/public/userMeasuresDetail.vue')
  },
  {
    path: '/top',
    name: 'top',
    component: () =>
      import('@/views/public/top.vue')
  },
  {
    path: '/user_detail',
    name: 'detail',
    component: () =>
      import('@/views/public/detail.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
