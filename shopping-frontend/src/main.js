import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import '@/styles/common.scss'
import imgLazy from './directives/imgLazy';

const pinia = createPinia()
const app = createApp(App)
app.directive('img-lazy', imgLazy);

app.use(pinia)  
app.use(router)
app.mount('#app')