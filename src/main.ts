import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import {
    // create naive ui
    create,
    // component
    NButton, NDatePicker, NInput, NInputNumber,NSelect,NGradientText
} from 'naive-ui'


import App from './App.vue'
import router from '@/router'
import { resize } from '@/directives'
const app = createApp(App)
const pinia = createPinia()

const naive = create({
    components: [NButton, NDatePicker,NInput,NInputNumber,NSelect,NGradientText]
})

app.use(pinia)
app.use(naive)
app.use(router)
app.directive('resize', resize)
app.mount('#app')
