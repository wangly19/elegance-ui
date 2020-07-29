import { Plugin, ComponentOptions } from 'vue';
import Button from './src/gButton.vue';
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(Button), Button);
  }
}

export default install
