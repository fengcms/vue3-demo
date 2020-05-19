// 可以根据路由模式的不同，后面俩可以只引用一个
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 构建我们的页面路由配置，可以看到，这里和原来的写法并无二致。
const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: () => import('@/views/About.vue'),
  }, {
    path: '/life',
    component: () => import('@/views/Life.vue'),
  }, {
    path: '/computed',
    component: () => import('@/views/Computed.vue'),
  }, {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
  }
]

// 用 history 模式构建路由
// const routerHistory = createWebHistory()

const router = createRouter({
  // 使用 hash 模式构建路由（ url中带 # 号的那种)
  history: createWebHashHistory(),
  // 使用 history 模式构建路由 （ url 中没有 # 号，但生产环境需要特殊配置）
  // history: createWebHistory(),
  routes
})
export default router
