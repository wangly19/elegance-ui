import { Plugin } from 'vue';
import Row from './src/gRow.vue';
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(Row), Row);
  }
}

export default install;
