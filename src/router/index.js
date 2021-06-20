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
}, {
  path: '/blog-classic',
  name: 'BlogClassic',
  component: () => import('@/views/childPages/blog/BlogClassic.vue'),
  meta: {
    requiresAuth: false
  }
}, {
  path: '/blog-single',
  name: 'BlogSingle',
  component: () => import('@/views/childPages/blog-single/BlogSingle.vue'),
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
