import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
console.log('1');
const app = createApp(App)
console.log('2');

app.use(createPinia())
console.log('3');
app.use(router)
console.log('4');

app.mount('#app')
