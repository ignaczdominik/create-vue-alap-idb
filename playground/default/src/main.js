import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index.js'

import App from '@/App.vue'

import 'bootstrap'
import '@assets/app.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.mount('#app')
