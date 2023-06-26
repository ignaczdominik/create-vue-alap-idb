import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '~bootstrap': fileURLToPath(new URL('node_modules/bootstrap', import.meta.url)),
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@assets': fileURLToPath(new URL('src/assets', import.meta.url)),
      '@views': fileURLToPath(new URL('src/views', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@router': fileURLToPath(new URL('src/router', import.meta.url)),
      '@utils': fileURLToPath(new URL('src/utils', import.meta.url)),
      '@stores': fileURLToPath(new URL('src/stores', import.meta.url))
    }
  }
})
