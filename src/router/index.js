import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // :表示變數
      // :xxx? 表示非必填，參數不足時 含?的路由區段會直接消失，參數傳遞對象會是下一個區段
      path: '/page2/:userid?/:subid',
      name: 'page2',
      component: () => import('../views/page2View.vue')
    },
    {
      // 可搭配 regex
      // # regex 基礎不好
      //path: '/:pathMatch(.*)*',
      path: '/:pathMatch(\\d+)',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    },
    {
      // 路徑設定完全相同衝突時 上方的優先
      path: '/order/:a',
      name: 'order1',
      component: () => import('@/views/OrderCheck1.vue')
    },
    {
      // 部分衝突時 多個參數優先
      //path: '/order/:x/:y?',
      path: '/order/:x',
      name: 'order2',
      component: () => import('@/views/OrderCheck2.vue')
    },
    {
      // 通常一律使用小寫路徑
      path: '/case/UPPER',
      //sensitive: true,
      //strict: true,
      name: 'case1',
      component: () => import('@/views/CaseSensitiveView.vue')
    }
  ]
})

export default router
