import axios from 'axios'
import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { vuetify } from './plugins/vuetify'

// AOS
import 'aos/dist/aos.css'
import 'leaflet/dist/leaflet.css'

// Axios
axios.defaults.baseURL = String(import.meta.env.VITE_API_URL)

// App
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')