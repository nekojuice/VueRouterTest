import {
  createRouter,
  createWebHistory
  //createWebHashHistory,
  //createMemoryHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // HTML5 模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // Hash 模式 用domain/#/...號接上網址不會傳送到伺服端
  //history: createWebHashHistory(import.meta.env.BASE_URL),
  // Memory 模式 不會有歷史紀錄
  //history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // 別名，可設巢狀規則外路徑
      // 也可以用陣列設定 alias: ['/people', 'list'...]
      alias: '/home'
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
      path: '/regex/:pathMatch(\\d+)',
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
    },
    {
      // 巢狀父子嵌套路由
      path: '/parent/:id',
      name: 'parent',
      component: () => import('@/views/4_ParentView.vue'),
      children: [
        { path: '', component: () => import('@/views/4_ChildrenView.vue') },
        { path: 'add404', component: () => import('@/views/NotFound.vue') }
      ]
    },
    {
      //
      path: '/namedroutes/:username',
      name: 'namedroutes',
      component: () => import('@/views/6_named-routes.vue')
    },
    {
      // 比如 sidebar 和 main 為兩個 view 需同級渲染
      path: '/namedviews/',
      name: 'namedviews',
      // 注意s
      components: {
        default: () => import('@/views/7_named-views.vue'),
        // LeftSidebar: LeftSidebar 的缩写
        LeftSidebar: () => import('@/views/OrderCheck1.vue'),
        // 它们与 `<router-view>` 上的 `name` 属性匹配
        RightSidebar: () => import('@/views/OrderCheck2.vue')
      }
    },
    {
      // 重新導向
      // 可以用來抓錯?
      path: '/cat',
      redirect: '/'
      // 也可以用命名視圖
      //,redirect: { name: 'homepage' }
      // beforeEnter 不會被觸發?
      // `/`開頭: 絕對位置， 沒有`/`開頭: 相對位置
    }
  ]
})

export default router
