import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
// 导入弹框提示组件
import {Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$message = Message
// message和button.form，input这些都不一样，它需要进行全局挂载
// 这个代表把弹框组件挂载到了Vue的原型对象上
