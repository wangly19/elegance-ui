import { createApp } from 'vue';
import App from './App.vue';
import gButton from 'components/gButton';
import gIcon from 'components/gIcon';
import gTbas from 'components/gTabs';
import gRow from 'components/gRow';
import gSpan from 'components/gSpan';
import gInput from 'components/gInput';

createApp(App)
.use(gInput)
.use(gButton)
.use(gIcon)
.use(gTbas)
.use(gRow)
.use(gSpan)
.mount('#app')
