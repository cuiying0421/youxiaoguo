import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
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
        path: '/showcalendar',
        name: 'Showcalendar',
        component: () => import(/* webpackChunkName: "showcalendar" */ '@/views/Showcalendar')
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
    path: '/login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login')
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
