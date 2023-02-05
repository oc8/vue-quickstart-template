import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import '@/styles/default.scss'
import '@/styles/lib.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
