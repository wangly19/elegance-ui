<template>
  <div class="g-scroll-view" @scroll.passive="touchScroll" ref="scrollStart" :style="listStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanScrollView'
})
export default class GanScrollView extends Vue {
  @Prop() height!: number

  get listStyle() {
    return {
      height: `${this.height}px`
    }
  }

  @Ref('scrollStart') scrollStart!: any

  @Emit('handleScroll')
  callback() {}

  touchScroll(event: Event) {
    console.log()
    const target: any = event.target
    const { scrollStart } = this
    console.log(target.scrollTop, scrollStart.clientHeight, target.scrollHeight)
    target.scrollTop + 1 + scrollStart.clientHeight >= target.scrollHeight && this.callback()
  }
}
</script>

<style lang="scss" scoped>
.g-scroll-view{
  min-height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
