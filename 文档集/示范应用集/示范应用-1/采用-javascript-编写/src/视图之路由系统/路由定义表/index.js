/**
 * @typedef {import('vue-router').RouteConfig } RouteConfig
 */

import 示范页1_表单 from '@/视图/页面/示范页1-表单.vue'

/** @type {Array<RouteConfig>} */
export const 路由定义总表 = [
    {
        path: '/',
        name: '首页',
        redirect: '/examples/1-form',
    },

    {
        path: '/examples/1-form',
        name: '示范页1-表单',
        component: 示范页1_表单,
    },
]
