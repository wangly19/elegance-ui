import Vue from 'vue'
import { DirectiveBinding } from 'vue/types/options'
import { VNode } from 'vue/types/umd'

interface IEl extends HTMLElement {
  __clickOut: any
}
Vue.directive('gan-out', {
  // 绑定指令
  bind: function (el: HTMLElement | Node, bind: DirectiveBinding, vnode: VNode) {
    function documentSide(event: Event) {
      if (el.contains((event.target) as Node | null)) {
        return false
      }
      if (bind.expression) {
        bind.value(event)
      }
    }
    const $el: any = el
    $el.__documentOutSide = documentSide
    // 添加点击事件
    document.addEventListener('click', documentSide)
  },

  // 更新
  update: function () {},

  // 指令解除绑定
  unbind: function (el: HTMLElement | Node, bind: DirectiveBinding) {
    // bind解除
    const $el: any = el
    document.removeEventListener('click', $el.__documentOutSide)
    delete $el.__documentOutSide
  }
})