import Vue from 'vue'
import App from './App.vue'

// 导入路由
import VueRouter from 'vue-router'
// Vue.use一下
Vue.use(VueRouter)
// 写组件
import index from './components/index.vue'
// 写规则
const routes = [
  {
    path: '/index',
    component: index
  }
]
// 实例化路由对象
const router = new VueRouter({
  routes
})

// 导入全局样式
// 如果只是导入 不使用 可以省略 xxx from
// import baseCss from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载到vue实例上
  router
}).$mount('#app')
