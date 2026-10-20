import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Vue DevTools priamo v aplikácii (Alt+Shift+D) – strom komponentov, props, stav
    vueDevTools(),
  ],
})
