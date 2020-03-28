import Vue from 'vue'
import GanMessage from './src/GanMessage.vue'

interface IMessageOption {
  type: string
  message: string
  time: number
  [prop: string] : any
}

const GMessages = function(options: IMessageOption) {
  const action: IMessageOption = {
    type: 'info',
    message: '一般的文字信息，默认左对齐，可以带图标。',
    time: 3000
  }

  const Component = Vue.extend(GanMessage)
  for (const key in options) {
    action[key] = options[key]
  }

  /**
   * 渲染DOM
   */
  const { type, message, time } = action
  const vm: Vue = new Component({
    el: document.createElement('div'),
    data: () => ({
      type,
      message,
      time,
      isStart: true
    })
  })
  document.body.appendChild(vm.$el)
}

export default GMessages