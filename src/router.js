import { createRouter, createWebHistory } from 'vue-router'

import pageHome from './pages/index.vue'
import pageButton from './pages/pageButton.vue'

const routes = [
    {
        path:'/',
        component:pageHome
    },
    {
        path:'/button',
        component:pageButton
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router