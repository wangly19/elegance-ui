<template>
  <div class="g-message" v-if="isStart" :class="cellClass">
    <gan-icon :name="`icon-${type}`" class="g-message__icon"/>
    <span class="sub-text">{{message}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanMessage',
  components: { GanIcon }
})
export default class GanMessage extends Vue {
  private type: string = 'primary'
  private message: string = ''
  private time: number = 1000
  private isStart: boolean = false
  private timeor:null | number = null
  /**
   * 绑定样式
   */
  get cellClass() {
    return [
      `g-bg-${this.type}`
    ]
  }

  /**
   * 关闭Message, 并回调
   */
  closeMessage() {
    console.log('click')
    this.isStart = !this.isStart
  }

  /**
   * 切换定时器
   */
  toggleTimout() {
    if (isNaN(this.time)) return
    if (this.timeor !== null) {
      clearTimeout(this.timeor)
    } else {
      this.timeor = setTimeout(this.closeMessage, this.time)
    }
  }

  mounted() {
    this.toggleTimout()
  }

  destroyed() {
    this.toggleTimout()
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-message{
    border-radius: 2px;
    @include position($position: fixed, $top: 10px, $left: 50%);
    transform: translate(-50%, 0);
    @include flex($align: center);
    padding: 15px 15px 15px 15px;
    color: white;
    box-shadow: 0 2px 14px 0;
    .sub-text{
      display: inline-block;
      padding: 0 10px 0 10px;
      min-width: 200px;
    }
    &__icon{
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>
