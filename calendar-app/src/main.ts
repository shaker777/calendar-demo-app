import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import ru from 'element-plus/es/locale/lang/ru';
import {messages} from '@/assets/messages'

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages: messages
})
const app = createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(ElementPlus)
    .mount('#app')
