const routerList = [
  {
    path: '/',
    title: 'JS小知识',
    meta: {
      title: 'JS小知识',
    },
    component: (resolve) => require(['../views/JavaScriptTest.vue'], resolve),
  },
  {
    path: '/home',
    title: '首页',
    meta: {
      title: '首页',
    },
    component: (resolve) => require(['../views/HomePage.vue'], resolve),
  },
  {
    path: '/phishing',
    title: '钓鱼测试',
    meta: {
      title: '钓鱼测试',
    },
    component: (resolve) => require(['../views/PhishingTest.vue'], resolve),
  },
  {
    path: '/login',
    title: '登录',
    meta: {
      title: '登录',
    },
    component: (resolve) => require(['../views/Login.vue'], resolve),
  },
  {
    path: '/screenshot',
    title: '截图测试',
    meta: {
      title: '截图测试',
    },
    component: (resolve) => require(['../views/Screenshot.vue'], resolve),
  },
  {
    path: '/lodash',
    title: 'lodash测试',
    meta: {
      title: 'lodash测试',
    },
    component: (resolve) => require(['../views/LodashTest.vue'], resolve),
  },
]
export default routerList
