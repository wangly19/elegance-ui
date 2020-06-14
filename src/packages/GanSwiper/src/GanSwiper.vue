<template>
  <div class="gan-swiper">
    <div class="gan-swiper-container">
      <slot></slot>
    </div>
    <gan-icon name="icon-leftarrow" class="tool-icon last-icon" bold
    @click="taggleSwiper('last')"></gan-icon>
    <gan-icon name="icon-Rightarrow" class="tool-icon next-icon" bold
    @click="taggleSwiper('next')"></gan-icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanSwiper',
  components: {
    GanIcon
  }
})
export default class GanSwiper extends Vue {
  private currentIndex: number = 0
  get setZindex () {
    return {
      zIndex: 1
    }
  }

  /**
   * 切换幻灯片
   */
  private taggleSwiper (state: string) {
    // 获取包容的组件
    const componentList: Vue[] = this.$children.filter((vue: any) => {
      return vue.setTerm !== undefined
    })
    if (state === 'last') {
      this.currentIndex === 0 ? this.currentIndex = componentList.length - 1 : this.currentIndex--
      console.log(this.currentIndex)
      componentList.forEach((vue: any, index: number) => {
        if (this.currentIndex === index) {
          vue.setTerm(true)
        } else {
          vue.setTerm(false)
        }
      })
    } else {
      this.currentIndex === componentList.length - 1 ? this.currentIndex = 0 : this.currentIndex++
      componentList.forEach((vue: any, index: number) => {
        if (this.currentIndex === index) {
          vue.setTerm(true)
        } else {
          vue.setTerm(false)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.gan-swiper {
  width: 200px;
  height: 200px;
  display: inline-block;
  position: relative;
  &-container {
    position: relative;
    .gan-swiper-item {
      @include position($position: absolute, $top: 0, $left: 0);
      text-align: left;
      height: 200px;
      width: 200px;
      background: #888;
    }
  }
  .tool-icon {
    z-index: 2;
    font-size: 15px;
    padding: 5px;
    border-radius: 50%;
    transition: all .5s;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, .2);
    }
  }
  .last-icon {
    @include position($position: absolute, $top: 50%, $left: 10px);
    transform: translateY(-50%);
  }
  .next-icon {
    @include position($position: absolute, $top: 50%, $right: 10px);
    transform: translateY(-50%);
  }
}
</style>