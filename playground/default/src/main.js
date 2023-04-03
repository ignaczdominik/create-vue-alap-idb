import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index.js'
import App from '@/App.vue'
import BSAlert from '@/components/bootstrap/BSAlert.vue'
import { createI18n } from 'vue-i18n'

import hu from '@/locales/hu.mjs'
import en from '@/locales/en.mjs'

import 'bootstrap'
import '@/assets/app.scss'

const messages = { hu, en }

const i18n = createI18n({
  messages,
  locale: localStorage.getItem('localhost') ?? 'hu',
  fallbackLocal: 'en'
})

const app = createApp(App)

app.component('Alert', BSAlert)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
