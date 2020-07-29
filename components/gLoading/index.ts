import gLoading from './src/gLoading.vue';
import { getComponentName } from '@/utils';
import { Plugin } from 'vue';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(gLoading), gLoading);
  }
};

export default install
