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
    path: '/user_regist',
    name: 'userRegist',
    component: () =>
        import('@/views/public/regist.vue')
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
