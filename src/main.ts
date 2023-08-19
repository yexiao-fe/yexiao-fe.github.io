import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from '@/router'
import { resize } from '@/directives'
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.directive('resize', resize)
app.mount('#app')
