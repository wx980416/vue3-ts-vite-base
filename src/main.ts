import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "@/styles/index.scss";
import router from './router'
import pinia from '@/store/index'

createApp(App).use(router).use(pinia).mount("#app");
