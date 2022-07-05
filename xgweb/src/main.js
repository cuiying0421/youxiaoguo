import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import '@/assets/fonts/iconfont.css'
// 引入全局css样式
import '@/assets/style/global.less'
// 引入 lib-flexible
import 'lib-flexible/flexible.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
