import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: '聚合API',
    meta: { title: '聚合API', icon: 'example' },
    children: [
      {
        path: 'table',
        name: '聚合API',
        component: () => import('@/views/table/index'),
        meta: { title: '聚合API' }
      },
      {
        path: 'tree',
        name: '详情',
        component: () => import('@/views/tree/index'),
        meta: { title: '详情',}
        //  icon: 'tree' 
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

