import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'
import FermentCreationView from '../views/FermentCreationView.vue'
import FermentDetailsView from '@/views/FermentDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/create',
      name: 'ferment-creation',
      component: FermentCreationView
    },
    {
      path: '/ferment/:id',
      name: 'ferment-details',
      props: true,
      component: FermentDetailsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
