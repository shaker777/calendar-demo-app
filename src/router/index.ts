import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '@/components/ContentView.vue'

const router = createRouter({
    history: createWebHistory('/calendar-app'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ContentView,
        }
    ],
    linkActiveClass: '',
    linkExactActiveClass: '',
})

export default router
