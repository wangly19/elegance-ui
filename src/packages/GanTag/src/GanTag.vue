<template>
  <span :class="tagClass" @click.stop="bindActiveClick">
    {{value}}
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import colors from '@/tools/colors'

@Component({
  name: 'GanTag'
})
export default class GanTag extends Vue {
  /**
   * 传入tag需要显示的值
   */
  @Prop({ default: '' })
  private value!: any

  /**
   * 传入类型
   */
  @Prop({ default: '' })
  private type!: string

  /**
   * 是否开启边框
   */
  @Prop({ default: false })
  private hit!: boolean

  /**
   * tag大小
   */
  @Prop({ default: 'regulur' })
  private size!: string

  /**
   * 是否启动点击事件
   */
  @Prop()
  private check!: string | boolean

  private tagActive: boolean = true
  /**
   * 计算当前class
   */
  get tagClass() {
    const { hit, type, tagSize, tagActive } = this
    return [
      'g-tag',
      hit && 'g-tag-hit',
      type && !hit && tagActive && `g-bg-${type} g-color-light`,
      `g-tag-${tagSize}`
    ]
  }

  /**
   * 获取tag大小
   */
  get tagSize() {
    switch (this.size) {
      case 'regulur': return ''
      case 'small': return 'small'
      case 'medium': return 'big'
    }
  }

  /**
   * 绑定check事件
   */
  @Emit('onActive')
  bindActiveClick() {
    if (this.check === undefined) return
    this.tagActive = !this.tagActive
    return this.tagActive
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.g-tag{
  display: inline-block;
  padding: 0 10px;
  text-align: center;
  border-radius: 2px;
  line-height: 30px;
  &-hit {
    border: 1px solid $border-color-base;
  }
  &-small {
    line-height: 20px;
  }
  &-big {
    line-height: 40px;
  }
}

</style>