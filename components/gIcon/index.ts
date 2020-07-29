import { Plugin } from 'vue';
import gButton from './src/gButton.vue';

const install: Plugin = {
  install (app) {
    app.component('g-button', gButton)
  }
}

export default install
