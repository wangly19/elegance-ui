import { Plugin } from 'vue';
import Media from './src/gMedia.vue';
import { getComponentName } from '@/utils';

// DONE 引入字体图标文件文件
import '@/assets/icons/iconfont/iconfont.css';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(Media), Media);
  }
}

export default install;
