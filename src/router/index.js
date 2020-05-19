// 可以根据路由模式的不同，后面俩可以只引用一个
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 构建我们的页面路由配置，可以看到，这里和原来的写法并无二致。
const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: '首页-响应式数据计数器 Demo' }
  }, {
    path: '/about',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于我们-响应式对象数据 Demo' }
  }, {
    path: '/life',
    component: () => import('@/views/Life.vue'),
    meta: { title: '生命周期 Demo' }
  }, {
    path: '/computed',
    component: () => import('@/views/Computed.vue'),
    meta: { title: '计算属性 Demo' }
  }, {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
    meta: { title: '普通组件 Demo' }
  }, {
    path: '/father',
    component: () => import('@/views/Father.vue'),
    meta: { title: '函数组件 Demo' }
  }, {
    path: '/dad',
    component: () => import('@/views/Dad.vue'),
    meta: { title: '具名插槽组件 Demo' }
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
