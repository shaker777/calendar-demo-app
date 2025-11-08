import { createRouter, createWebHistory } from 'vue-router'
import CalendarView from '@/components/CalendarView.vue'

const router = createRouter({
    history: createWebHistory('/calendar-app'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CalendarView,
        }
    ],
    linkActiveClass: '',
    linkExactActiveClass: '',
})

export default router
