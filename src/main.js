import './assets/main.css'
import './assets/base.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
