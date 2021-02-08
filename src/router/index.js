import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
// 首先导入登陆组件
import Home from '../components/Home.vue'

import Welcome from '../components/Welcome.vue'

import Users from '../components/user/Users.vue'

import Rights from '../components/power/Rights.vue'

import Roles from '../components/power/Roles.vue'

import Cate from '../components/goods/Cate.vue'

import Params from '../components/goods/Params.vue'

import GoodsList from '../components/goods/List.vue'

import Add from '../components/goods/Add.vue'

import Order from '../components/order/Order.vue'
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
  },
  {
    path:'/home',
    component:Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        component:Welcome
      },
      {
        path:'/users',
        component:Users
      },
      {
        path:'/rights',
        component:Rights
      },
      {
        path:'/roles',
        component:Roles
      },
      {
        path:'/categories',
        component:Cate
      },
      {
        path:'/params',
        component:Params
      },
      {
        path:'/goods',
        component:GoodsList
      },
      {
        path:'/goods/add',
        component:Add 
      },
      {
        path:'/orders',
        component:Order
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to代表将要访问的路径
  // from代表从哪个路径跳转而来
  // next表示一个函数，表示放行
  // 两种放行方式：
  //      next()  直接放行    next('/login)：强制跳转
  if(to.path ==='/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
