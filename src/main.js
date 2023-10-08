import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './registerServiceWorker'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
