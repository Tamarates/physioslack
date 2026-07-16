import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { trackPageView } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre-nosotros',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/servicios',
    name: 'services',
    component: () => import('@/views/ServicesView.vue')
  },
  {
    path: '/contactanos',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 90 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  trackPageView(to.fullPath, to.name ? String(to.name) : to.fullPath)
})

export default router
