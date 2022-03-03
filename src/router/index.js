import Vue from 'vue'
import VueRouter from 'vue-router'
import Recycle from '../views/Recycle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Recycle',
    component: Recycle
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic.vue')
  },
  {
    path: '/handWrite',
    name: 'HandWrite',
    component: () => import('../views/HandWrite.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
