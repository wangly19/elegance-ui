import { createApp } from 'vue';
import App from './App.vue';
import gButton from 'components/gButton';
import gIcon from 'components/gIcon';

createApp(App)
.use(gButton)
.use(gIcon)
.mount('#app')
