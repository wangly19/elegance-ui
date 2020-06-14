<template>
  <div class="gan-swiper-item" :class="isTerm && 'is-index'">
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
  private isTerm: boolean = false

  private setTerm (bool: boolean) {
    this.isTerm = bool
  }
}
</script>

<style lang="scss" scoped>
.is-index {
  z-index: 2;
}
</style>