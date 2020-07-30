import { Plugin } from 'vue';
import gTabs from './src/gTabs.vue';
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(gTabs), gTabs)
  }
}

export default install
