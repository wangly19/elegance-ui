import { Plugin, ComponentOptions } from 'vue'
import gButton from './gButton/src/gButton.vue'

const componentMap: ComponentOptions[] = [gButton]

const elegance: Plugin = {
  install(app) {
    componentMap.forEach((el: ComponentOptions) => {
      app.component(el.name as string, el)
    })
  }
}

export default elegance
