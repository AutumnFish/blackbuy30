import Vue from 'vue'
import App from './App.vue'
// 导入饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入路由
import VueRouter from 'vue-router'
// Vue.use一下
Vue.use(VueRouter)
// 首页组件
import index from './components/index.vue'
// 详情组件
import detail from './components/detail.vue'
// 会员中心容器
import centerContainer from './components/centerContainer.vue'
// 导入组件
import vipgls from './components/vipgls.vue'
//  订单详情
import vipOrderDetail from './components/vipOrderDetail.vue'
// 写规则
const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  },
  {
    // path: '/detail',
    // 动态路由匹配
    path: '/detail/:id',
    // path: '/detail/:cd',
    component: detail
  },
  // 会员中心容器
  {
    path:"/centerContainer",
    component:centerContainer,
    // 嵌套路由
    children:[
      { 
        // 嵌套路由不需要写 /
        // 匹配的是 /centerContainer/vipgls
        path:'vipgls',
        component:vipgls
      },
      { 
        // 嵌套路由不需要写 /
        // 匹配的是 /centerContainer/vipOrderDetail
        path:'vipOrderDetail',
        component:vipOrderDetail
      },
      // 重定向 根目录 去看鼓励师 
      {
        path:'',// 等同于 /
        redirect:'vipgls'
      }
    ]
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

// 设置axios到原型上 方便共享
import axios from 'axios'
Vue.prototype.$axios = axios;

// 设置axios的基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';



// 定义全局过滤器
// 导入moment
import moment from 'moment'
Vue.filter('formatTime',(value)=>{
  // 处理时间并返回
  return moment(value).format('YYYY年MM月DD日')
})

new Vue({
  render: h => h(App),
  // 挂载到vue实例上
  router
}).$mount('#app')
