import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import './style.css'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import { createPinia } from 'pinia';
import "@/styles/index.scss";

const pinia = createPinia();

const app = createApp(App)

app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.use(router);
app.use(pinia);

app.mount('#app')
