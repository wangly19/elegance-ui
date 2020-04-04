import Vue from 'vue'
import './src/loading.scss'
import { DirectiveBinding } from 'vue/types/options'

Vue.directive('loading', {
  bind: function (el: any, binding: DirectiveBinding) {
    /**
     * 创建虚拟dom，插入当前HTMLElement
     * 插入对应class
     */
    const tempDiffDom: HTMLDivElement = document.createElement('div')
    tempDiffDom.className = 'custom-loading'
    const roundDiffDom: HTMLDivElement = document.createElement('div')
    roundDiffDom.className = 'custom-loading-round'
    // 插入dom
    tempDiffDom.appendChild(roundDiffDom)
    el.loadingElement = tempDiffDom
    // 获取dom style
    const curStyle: CSSStyleDeclaration = window.getComputedStyle(el)
    // 获取position value
    const position: string = curStyle.position
    switch (position) {
      case 'absolute' : el.style.position = position
        break
      case 'relative' : el.style.position = position
        break
      default: el.style.position = 'relative'
    }
    // 插入当前dom
    if (binding.value) {
      el.appendChild(tempDiffDom)
    }
  },
  /**
   * 更新状态监视
   */
  update: function (el: any, binding: DirectiveBinding) {
    if (binding.value) {
      if (el.loadingElement.parentNode === null) {
        el.appendChild(el.loadingElement)
      } else {
        if (el === el.loadingElement.parentNode) {
          el.removeChild(el.loadingElement)
        }
      }
    }
  },
  /**
   * 解绑指令
   */
  unbind: function (el: any) {
    if (el.loadingElement.parentNode === el) el.removeChild(el.loadingElement)
    el.loadingElement = null
  }
})
