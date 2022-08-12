import '@/视图/_公共样式'

import Vue from 'vue'
import vue路由器实例 from './视图之路由系统'
import 应用根 from './视图/应用根.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router: vue路由器实例,
    render: h => h(应用根),
}).$mount('#vue-应用根占位-div')
