import Vue from 'vue'
import VueRouter from 'vue-router'
// 首先导入登陆组件
import Login from '../components/Login'
Vue.use(VueRouter)

const routes = [
  // 添加重定向的规则
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    // 我之前写的是path:'./login'，多加了一个点
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
