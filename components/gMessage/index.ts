import { Plugin } from 'vue'
import gMessage from './src/gMessage.vue'
import { getComponentName } from '@/utils';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(gMessage), gMessage)
  }
}

export default install
