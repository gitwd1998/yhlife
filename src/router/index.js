import Vue from 'vue'
import VueRouter from 'vue-router'
import Lead from '../views/Lead.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Lead },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/home', component: () => import('../views/Home') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
