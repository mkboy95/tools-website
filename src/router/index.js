import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cover',
    name: 'Cover',
    component: () => import('../views/Cover.vue')
  },
  {
    path: '/image',
    name: 'Image',
    component: () => import('../views/Image.vue')
  },
  {
    path: '/watermark',
    name: 'Watermark',
    component: () => import('../views/Watermark.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
