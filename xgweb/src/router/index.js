import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/token.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        path: '/home',
        name: 'Main',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Main')
      },
      {
        path: '/club',
        name: 'Club',
        component: () => import(/* webpackChunkName: "club" */ '@/views/Club')
      },
      {
        path: '/factory',
        name: 'Factory',
        component: () => import(/* webpackChunkName: "factory" */ '@/views/Factory')
      },
      {
        path: '/jokescalendar',
        name: 'Jokescalendar',
        component: () => import(/* webpackChunkName: "jokescalendar" */ '@/views/Jokescalendar')
      },

      {
        path: '/trainingcamp',
        name: 'Trainingcamp',
        component: () => import(/* webpackChunkName: "trainingcamp" */ '@/views/Trainingcamp')
      }
    ],
    redirect: 'trainingcamp'
  },
  {
    path: '/showcalendar',
    name: 'Showcalendar',
    component: () => import(/* webpackChunkName: "showcalendar" */ '@/views/Showcalendar')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login')
    /* beforeEnter: (to, from, next) => {
      // 需求：如果已经登录，不要切换到登录页面
      if (getToken()?.length > 0 && to.path === '/login') {
        // next(false) // 留在原地
        // 想要进登录页不留在原地了，而是返回首页
        next('/club')
      } else {
        next() // 其他情况全部放行
      }
    } */
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = getToken('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
