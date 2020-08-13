import { Plugin } from 'vue';
import gChecked from './src/gChecked.vue';
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(gChecked), gChecked);
  }
}

export default install
