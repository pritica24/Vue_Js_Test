import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/UserRegistration',
    name: 'UserRegistration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserRegistration.vue')
  },
  {
    path: '/parent',
    name: 'ParentComponent',
    component: () => import(/* webpackChunkName: "about" */ '../components/ParentComponent.vue')
  },
  {
    path: '/usersList',
    name: 'UsersList',
    component: () => import(/* webpackChunkName: "about" */ '../components/UsersList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
