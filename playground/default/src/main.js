import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index.js'
import App from '@/App.vue'
import BSAlert from '@/components/bootstrap/BSAlert.vue'

import 'bootstrap'
import '@/assets/app.scss'

const app = createApp(App)

app.component('Alert', BSAlert)

app.use(createPinia())
app.use(router)

app.mount('#app')
