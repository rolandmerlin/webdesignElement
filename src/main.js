import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'

const AppVue = createApp(App)
    .use(router)
    .mount('body')

