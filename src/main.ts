import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Button from './button/index'
import tianui from '../build'
createApp(App)
.use(tianui)
.use(Button)
.mount('#app')
