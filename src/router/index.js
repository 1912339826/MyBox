import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
// 构想
import conçu from '../pages/conçu/index.vue'
import notFound from '../pages/notFound/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/conçu',
      name: 'conçu',
      component: conçu
    },
    {
      path: "/404",
      name: "notFound",
      component: notFound
    }, {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404"
    }
  ]
})
