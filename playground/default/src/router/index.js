import { createRouter, createWebHistory } from 'vue-router'
import { setTitle } from '@router/guards/SetTitleGuard.mjs'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@views/HomePage.vue'),
      meta: {
        requiresAuth: false,
        title: 'Főoldal'
      }
    }
  ]
})

router.beforeEach(setTitle)
