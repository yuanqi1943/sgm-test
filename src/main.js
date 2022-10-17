
import Vue from 'vue';

/**
 * 引入element-ui
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/**
 * 引入公共样式
 * 必须要安装对应的loader 否则会报错 cant find moudle 'xxx.vue?lang=less...'
 */
import '@/style/index.less' 
import '@/style/common.less' 

import App from './App.vue';



/**
 * 引入路由配置
 */
import router from './router'

Vue.use(ElementUI, {
  // size: Cookies.get('size') || 'medium', // set element-ui default size
  size: 'medium', // set element-ui default size
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});