<template>
  <div class="gan-swiper-item fragment" v-show="isTerm" :style="itemBoxSize">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanSwiperItem'
})
export default class GanSwiperItem extends Vue {
  @Prop() term!: any
  private width: string = ''
  private height: string = ''
  private isTerm: boolean = false

  private setTerm (bool: boolean) {
    this.isTerm = bool
  }

  /**
   * 设置大小
   */
  get itemBoxSize () {
    const { width, height } = this
    console.log({
      width,
      height
    })
    return {
      width,
      height
    }
  }

  created() {
    const parentVue: any = this.$parent
    const { width, height } = parentVue
    this.width = `${width}px`
    this.height = `${height}px`
  }
}
</script>

<style lang="scss" scoped>
.fragment {
  z-index: 2;
  animation: swiper-taggle 2s;
}
@keyframes swiper-taggle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>