import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@router/index.js'
import { plugin, defaultConfig } from '@formkit/vue'

import App from '@/App.vue'
import BSAlert from '@components/bootstrap/BSAlert.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'bootstrap'
import '@assets/app.scss'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

/* Create application instance */
const app = createApp(App)

/* Set global components */
app.component('Alert', BSAlert)

/* Setup and configure plugins */
app.use(plugin, defaultConfig)
app.use(pinia)
app.use(router)

/* Mount the app instance to the DOM */
app.mount('#app')
