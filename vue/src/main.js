import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/index.js'

library.add(fas)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .mount('#app')


