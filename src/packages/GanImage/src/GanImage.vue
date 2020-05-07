<template>
  <div class="gan-image" :style="{ width: `${width}px`, height: `${height}px` }">
    <div class="over" v-if="state !== 'resolve'">{{cellText}}</div>
    <img :src="src" class="gan-image-box"
    :width="width" :height="height" :style="{ objectFit: fit }"
    @load.prevent="onImageResolve" @error.prevent="onImageReject()" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanImage'
})
export default class GanImage extends Vue {
  @Prop({ required: true }) src!: string
  @Prop({ default: 'fill' }) fit!: string
  @Prop() width!: number
  @Prop() height!: number

  private state = 'pending'
  // 图片加载中
  private onImageResolve(): void {
    this.state = 'resolve'
    this.$emit('resolve', this.state)
  }

  // 图片加载失败
  private onImageReject(): void {
    this.state = 'reject' // 错误
    this.$emit('reject', this.state)
  }

  get cellText(): string {
    const { state } = this
    let message = '加载中'
    switch (state) {
      case 'pending': message = '加载中'
        break
      case 'reject': message = '加载失败'
        break
      case 'resolve': message = '加载成功'
        break
    }
    return message
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
$imageDefault: 100px;
.gan-image {
  display: inline-block;
  border-radius: 4px;
  position: relative;
  .over {
    @include position($position: absolute, $left: 0, $top: 0);
    @include flex($justify: center, $align: center);
    z-index: 1;
    height: 100%;
    width: 100%;
    background: $border-color-base;
  }
  &-box {
    @include position($position: absolute, $left: 0, $top: 0);
  }
}
</style>
