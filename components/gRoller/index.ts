import { Plugin } from 'vue';
import Roller from './src/gRoller.vue';
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(Roller), Roller);
  }
}

export default install;
