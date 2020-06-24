import Vue from 'vue'
// 导包
import ElementUI from 'element-ui'
// 引入样式
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// 导入路由度睇下
// import router from './router/index.js'
// 可以直接这样写 默认会去加载索引文件 index.js index.vue index.json 优先级就是这样的顺序
// 在vue-cil创建的项目中 会有@的前缀，代表的是根路径 src路劲
// import router from './router'
import router from '@/router'
// 全局注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 路由对象挂载在全局
  router
}).$mount('#app')
