// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 引入组件
import Login from '@/views/login.vue'
import Index from '@/views/index.vue'
import Wel from '@/views/wel.vue'
import AddPost from '@/views/addPost.vue'
import PostList from '@/views/postList.vue'
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
    },
    {
      name: 'Index',
      path: '/index',
      component: Index,
      // 已经入后台就需要显示欢迎页面
      redirect: { name: 'Wel' },
      children: [
        // 嵌套路由：文章发布与文章列表
        {
          name: 'Wel',
          path: 'wel',
          component: Wel
        },
        {
          name: 'AddPost',
          path: 'addPost',
          component: AddPost
        },
        {
          name: 'PostList',
          path: 'postList',
          component: PostList
        }
      ]
    }
  ]
})
// 暴露
export default router
