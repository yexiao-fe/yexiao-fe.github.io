import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
  path: '/about',
  name: 'about',
  component: () => import('../views/about.vue')
},
{
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  }]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router