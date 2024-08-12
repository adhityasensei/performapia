// 🔴
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import './assets/css/tailwind.css';
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(App);
const pinia = createPinia();
import 'animate.css';

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
