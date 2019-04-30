import Vue from 'vue'
import App from './App.vue'

// 导入全局样式
// 如果只是导入 不使用 可以省略 xxx from
// import baseCss from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
