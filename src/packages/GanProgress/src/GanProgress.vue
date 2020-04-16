<template>
<div class="g-progress">
  <div class="bar" :style="progressWidth">
    <div class="bar__pub" :style="roteStyle" :class="pubClass">
      {{ inLine ? roteStyle.width : '' }}
    </div>
  </div>
  <span class="text" v-if="showText && !inLine && !icon">{{roteStyle.width}}</span>
  <gan-icon :name="`icon-${type}`" :class="`g-color-${type}`" v-else/>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanProgress',
  components: {
    GanIcon
  }
})
export default class GanProgress extends Vue {
  @Prop({ required: true, type: Number, validator: val => (val >= 0 && val <= 100), default: 0 })
  private rote!: number

  @Prop({ required: false, type: String, default: 'primary' })
  private type!: string

  @Prop({ required: false, type: [String, Number], default: 300 })
  private width!: string | number

  @Prop({ required: false, type: Boolean, default: false })
  private icon!: boolean

  @Prop({ required: false, type: Boolean, default: true })
  private showText!: boolean

  @Prop({ required: false, type: Boolean, default: false })
  private inLine!: boolean

  /**
   * 计算比率
   */
  get roteStyle() {
    let { rote } = this
    if (rote > 100) rote = 100
    if (rote < 0) rote = 0
    this.rote = rote
    return {
      width: `${rote}%`
    }
  }

  /**
   * 获取class
   */
  get pubClass() {
    const { type, inLine } = this
    return [
      `g-bg-${type}`,
      inLine && 'bar__pub-inline'
    ]
  }

  /**
   * 计算进度条宽度
   */
  get progressWidth() {
    const { width } = this
    return {
      width: typeof width === 'number' ? `${width}px` : width
    }
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
$progress-text: 12px;
.g-progress{
  @include flex($justify: flex-start);
  .bar{
    width: 500px;
    min-height: $progress-text;
    border-radius: 3px;
    background: $border-color-base;
    &__pub{
      min-height: $progress-text;
      height: 100%;
      transition: width .8s;
      &-inline{
        padding: 5px 0;
      }
    }
  }
  .text{
    font-size: $progress-text;
    padding: 0 5px 0 5px;
    @include padding(0 5px 0 5px);
  }
}
</style>
