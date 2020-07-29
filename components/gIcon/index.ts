import { Plugin } from 'vue';
import gIcon from './src/gIcon.vue';
import { getComponentName } from '@/utils';

// DONE 引入字体图标文件文件
import '@/assets/icons/iconfont/iconfont.css';

const install: Plugin = {
  install (app) {
    app.component(getComponentName(gIcon), gIcon)
  }
}

export default install
