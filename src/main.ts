import { createApp } from 'vue';
import App from './App.vue';
import gButton from 'components/gButton';
import gIcon from 'components/gIcon';
import gTbas from 'components/gTabs';

createApp(App)
.use(gButton)
.use(gIcon)
.use(gTbas)
.mount('#app')
