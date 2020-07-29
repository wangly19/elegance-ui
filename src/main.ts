import { createApp } from 'vue';
import App from './App.vue';
import gButton from 'components/gButton';

createApp(App)
.use(gButton)
.mount('#app')
