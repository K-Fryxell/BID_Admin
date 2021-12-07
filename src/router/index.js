import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: () =>
        import('@/views/admin/top.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () =>
        import('@/views/public/regist.vue')
  },
  {
      path: '/user_details',
      name: 'userDetails',
      component: () =>
          import('@/views/admin/userDetails.vue')
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
  {
    path: '/message',
    name: 'message',
    component: () =>
        import('@/views/public/message.vue')
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
