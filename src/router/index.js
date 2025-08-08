import { createWebHistory , createRouter } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
// import Page1 from '@/views/page1/index.vue'
import Page1 from '@/views/page1/page1.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/page1', component: Page1 },
//   { path: '/page1', component: Page1 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router