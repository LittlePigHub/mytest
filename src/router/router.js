import Vue from 'vue'
import VueRouter from 'vue-router'
import routerList from './routerList'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routerList,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const originalPush = VueRouter.prototype.push
// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
export default router
