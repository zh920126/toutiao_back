// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import Login from '@/views/login.vue'
// use
Vue.use(VueRouter)
// 创建路由实例
const router = new VueRouter({
  routes: [
    // 配置详细的路由信息
    {
      name: 'default',
      path: '/',
      redirect: { name: 'Login' }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
})
// 暴露
export default router
