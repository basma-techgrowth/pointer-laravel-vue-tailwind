import { createApp } from 'vue'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
// import { vuetify } from './plugins/vuetify'
import router from './router'
import store from './store'
import './style.css'

createApp(App).use(store).use(router).mount('#app')
