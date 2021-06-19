import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('@/views/Home.vue'),
  meta: {
    requiresAuth: false
  }
}, {
  path: '/about',
  name: 'About',
  component: () => import('@/views/About.vue'),
  meta: {
    requiresAuth: false
  }
}, {
  path: '/service',
  name: 'Service',
  component: () => import('@/views/Service.vue'),
  meta: {
    requiresAuth: false
  }
}, {
  path: '/contact',
  name: 'Contact',
  component: () => import('@/views/Contact.vue'),
  meta: {
    requiresAuth: false
  }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
