import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from './store'
import router from './route'

createApp(App).use(pinia).use(router).mount('#app')
