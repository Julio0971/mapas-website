import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import { vuetify } from './plugins/vuetify'

// App
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')