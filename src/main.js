// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import api from './api/api'
import req from './api/req'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// normalize.css（css样式初始化）
import marked from 'marked'
import 'normalize.css/normalize.css'
import './assets/css/github-markdown.css'
Vue.prototype.$req = req
window.api = api
Vue.use(Antd);
Vue.prototype.$marked = marked


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log('%c Gancia na starting success','color: #02ff81;')
