import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Button from './button/index'
import sheepui from '../build'
createApp(App)
.use(sheepui)
.use(Button)
.mount('#app')
