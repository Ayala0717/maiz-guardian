import { createApp } from 'vue'
import './style.css'
// Windi CSS
import 'windi.css'

import App from './App.vue'
import i18n from './modules/i18n'
import router from './modules/route'

createApp(App).use(i18n).use(router).mount('#app')
