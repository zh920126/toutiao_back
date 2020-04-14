import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/route/index.js'
// 引入初始化样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
