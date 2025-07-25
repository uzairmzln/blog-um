import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/pages/Home.vue'

const routes = [
    { 
        path: '/',
        name: 'home',
        component: HomeView 
    },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router