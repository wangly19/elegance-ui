<template>
  <div class="gan-swiper" :style="swiperSize">
    <div class="gan-swiper-container">
      <slot></slot>
    </div>
    <gan-icon name="icon-leftarrow" class="tool-icon last-icon" bold
      @click="taggleSwiper('last')"></gan-icon>
    <gan-icon name="icon-Rightarrow" class="tool-icon next-icon" bold
      @click="taggleSwiper('next')"></gan-icon>
    <ul class="radius-menu">
      <template v-for="item in listSize">
        <li class="radius-menu__item" :class="[currentIndex === item - 1 && 'radius-menu__item-active']" />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanSwiper',
  components: {
    GanIcon
  }
})
export default class GanSwiper extends Vue {
  @Prop({ default: 200 }) width!: number | string
  @Prop({ default: 200 }) height!: number | string

  private currentIndex: number = 0
  private listSize: number = 0

  get swiperSize () {
    const { width, height } = this
    return {
      width: `${width}px`,
      height: `${height}px`
    }
  }

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
    /**
     * 初始化
     */
    if (state === 'init') {
      componentList.forEach((vue: any, index: number) => {
        if (this.currentIndex === index) {
          vue.setTerm(true)
        } else {
          vue.setTerm(false)
        }
      })
    }
    /**
     * 前进，后退
     */
    if (state === 'last') {
      this.currentIndex === 0 ? this.currentIndex = componentList.length - 1 : this.currentIndex--
      componentList.forEach((vue: any, index: number) => {
        if (this.currentIndex === index) {
          vue.setTerm(true)
        } else {
          vue.setTerm(false)
        }
      })
      this.$emit('change', this.currentIndex)
    }
    if (state === 'next') {
      this.currentIndex === componentList.length - 1 ? this.currentIndex = 0 : this.currentIndex++
      componentList.forEach((vue: any, index: number) => {
        if (this.currentIndex === index) {
          vue.setTerm(true)
        } else {
          vue.setTerm(false)
        }
      })
      this.$emit('change', this.currentIndex)
    }
  }

  mounted() {
    this.$nextTick(() => {
      const componentList: Vue[] = this.$children.filter((vue: any) => {
        return vue.setTerm !== undefined
      })
      this.listSize = componentList.length
      this.taggleSwiper('init')
    })
  }

  @Watch('currentIndex')
  changeIndex(newVal: number, oldVal: number) {
    console.log(newVal, oldVal)
    this.$emit('onChange', { newVal, oldVal });
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.gan-swiper {
  display: inline-block;
  position: relative;
  &-container {
    position: relative;
    .gan-swiper-item {
      @include position($position: absolute, $top: 0, $left: 0);
      text-align: left;
      background: #888;
      overflow: hidden;
    }
  }
  .tool-icon {
    z-index: 2;
    font-size: 15px;
    padding: 5px;
    border-radius: 50%;
    transition: all .5s;
    background: rgba(0, 0, 0, .5);
    color: #FFF;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, .2);
      color: #000;
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
  .radius-menu {
    @include position($position: absolute, $bottom: 10px, $left: 50%);
    z-index: 2;
    transform:translateX(-50%);
    list-style: none;
    padding: 0;
    margin: 0;
    @include flex($justify: center, $align: center);
    &__item {
      width: 4px;
      height: 4px;
      background: rgba(0, 0, 0, 0.5);
      margin-left: 5px;
      border-radius: 50%;
    }
    &__item-active {
      width: 10px;
      background: #000;
      border-radius: 100px;
      animation: radiusFragment 5s linear;
    }
  }
  @keyframes radiusFragment {
    from {
      width: 10px;
      background: rgba(0, 0, 0, 0.5);
    }
    to {
      width: 10px;
      background: #000;
    }
  }
}
</style>