import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 将创建的 App 搞个别名
const app = createApp(App)

// 使用路由配置
app.use(router)

// 挂载运行
app.mount('#app')
