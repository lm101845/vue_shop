import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 在入口文件中导入全局样式表
import './assets/css/global.css'

// 在入口文件中导入字体图标
import './assets/fonts/iconfont.css'

// 导入axios这个包
import axios from 'axios'
// 为axios设置一下请求的根路径
// 我觉得最好不要在这里写，在这里写就有点乱了，最好封装一下
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 给axios设置拦截器
axios.interceptors.request.use(config=>{
  // 这个config就是请求对象
  // 在这个请求对象身上会包含N多的属性
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后必须要return这个config，这个是固定写法
  return config
})

// 接下来把这个包挂载到Vue的原型对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
