import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import 'uno.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

const orginalWarn = console.warn
console.warn = (...args: any[]) => {
  if (!args[0].includes('Component is missing template or render function')) {
    orginalWarn.apply(console, args)
  }
}
