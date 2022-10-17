import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * Layout 页面结构组件
 * 可以引用不同的Layout
 */
import Layout from '@/layout'

/**
 * Router Modules 
 * 
 */


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes 固定的路由
 * a base page that does not have permission requirements 不需要权限访问
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' }
      },
      {
        path: 'drivingBehavior',
        component: () => import('@/views/drivingBehavior/index'),
        name: 'DrivingBehavior',
        meta: { title: 'DrivingBehavior', icon: 'drivingBehavior' }
      },
      {
        path: 'userPortrait',
        component: () => import('@/views/userPortrait/index'),
        name: 'UserPortrait',
        meta: { title: 'UserPortrait', icon: 'userPortrait' }
      },
      {
        path: 'chargeFeature',
        component: () => import('@/views/chargeFeature/index'),
        name: 'ChargeFeature',
        meta: { title: 'ChargeFeature', icon: 'ChargeFeature' }
      },
      {
        path: 'thermoPicture',
        component: () => import('@/views/thermoPicture/index'),
        name: 'thermoPicture',
        meta: { title: 'thermoPicture', icon: 'thermoPicture' }
      },
    ]
  },
]



const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
