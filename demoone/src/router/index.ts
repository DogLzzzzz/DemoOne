import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // 登录
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/login/serviceAgree',
    component: () => import('@/views/login/serviceAgree.vue')
  },
  {
    path: '/login/privacyPolicy',
    component: () => import('@/views/login/privacyPolicy.vue')
  },
  // 任务
  {
    path: '/task',
    component: () => import('@/views/task/index.vue')
  },
  {
    path: '/task/search',
    component: () => import('@/views/task/search.vue')
  },
  {
    path: '/task/details/:id',
    component: () => import('@/views/task/details.vue')
  },
  {
    path: '/task/companySource:id',
    component: () => import('@/views/task/companySource.vue')
  },
  // 合约
  {
    path: '/contract',
    component: () => import('@/views/contract/index.vue')
  },
  {
    path: '/contract/details/:id',
    component: () => import('@/views/contract/details.vue')
  },
  {
    path: '/contract/progress/:id',
    component: () => import('@/views/contract/progress.vue')
  },
  // 消息
  {
    path: '/message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/message/systemList',
    component: () => import('@/views/message/systemList.vue')
  },
  {
    path: '/message/systemDetails/:id',
    component: () => import('@/views/message/systemDetails.vue')
  },
  {
    path: '/message/talk/:id',
    component: () => import('@/views/message/talk.vue')
  },
  // 我的
  {
    path: '/personal',
    component: () => import('@/views/personal/index.vue')
  },
  {
    path: '/personal/user',
    component: () => import('@/views/personal/user/index.vue')
  },
  {
    path: '/personal/user/authReal',
    component: () => import('@/views/personal/user/authReal.vue')
  },
  {
    path: '/personal/user/certified',
    component: () => import('@/views/personal/user/certified.vue')
  },
  {
    path: '/personal/user/identitySwitch',
    component: () => import('@/views/personal/user/identitySwitch.vue')
  },
  {
    path: '/personal/setting',
    component: () => import('@/views/personal/setting/index.vue')
  },
  {
    path: '/personal/feedback',
    component: () => import('@/views/personal/feedback/index.vue')
  },
  {
    path: '/personal/account',
    component: () => import('@/views/personal//account/index.vue')
  },
  {
    path: '/personal/account/advance',
    component: () => import('@/views/personal/account/advance.vue')
  },
  {
    path: '/personal/account/coinExplain',
    component: () => import('@/views/personal/account/coinExplain.vue')
  },
  {
    path: '/personal/account/depositExplain',
    component: () => import('@/views/personal/account/depositExplain.vue')
  },
  {
    path: '/personal/resume',
    component: () => import('@/views/personal/resume/index.vue')
  },
  {
    path: '/personal/resume/preview',
    component: () => import('@/views/personal/resume/preview.vue')
  },
  {
    path: '/personal/collect',
    component: () => import('@/views/personal/collect/index.vue')
  },
  // 人才
  {
    path: '/talent',
    component: () => import('@/views/talent/index.vue')
  },
  {
    path: '/talent/details/:id',
    component: () => import('@/views/talent/details.vue')
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView,
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue'),
  //   },
  // ],
})

export default router
