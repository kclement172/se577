import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/repoinfo',
      name: 'repoinfo',
      component: () => import('../pages/RepoInfo.vue')
    },
    {
      path: '/urlinfo',
      name: 'GithubURLPage',
      component: () => import('../pages/GithubURLPage.vue')
    },
    {
      path: '/userdata',
      name: 'GithubUserDataPage',
      component: () => import('../pages/GithubUserDataPage.vue')
    },
    {
      path: '/weather',
      name: 'WeatherAppPage',
      component: () => import('../pages/WeatherAppPage.vue')
    }
  ]
})

export default router
