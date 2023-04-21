import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      title: '首页',
      component: (resolve) =>
        require(['./views/HomePage.vue'], resolve),
    },
    {
      path: '/home',
      title: '首页',
      component: (resolve) =>
        require(['./views/HomePage.vue'], resolve),
    },
    {
      path: '/phishing',
      title: '钓鱼测试',
      component: (resolve) =>
        require(['./views/PhishingTest.vue'], resolve),
    },
    {
      path: '/login',
      title: '登陆',
      component: (resolve) =>
        require(['./views/Login.vue'], resolve),
    },
    {
      path: '/screenshot',
      title: '截图测试',
      component: (resolve) =>
        require(['./views/Screenshot.vue'], resolve),
    },
    {
      path: '/lodash',
      title: 'lodash测试',
      component: (resolve) =>
        require(['./views/LodashTest.vue'], resolve),
    },
  ],
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
