<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface IGutter {
  marginLeft?: string
  marginRight?: string
}

@Component({
  name: 'GanRow'
})
export default class GanRow extends Vue {
  /**
   * col间距
   * @param { number } gutter 间距
   */
  @Prop({ type: Number, required: false, default: 0 })
  private gutter!: string

  get space(): IGutter {
    const result: IGutter = {}
    /**
     * 如果当前存在gutter,那么设置左右边距为gutter一般
     */
    if (this.gutter) {
      result.marginLeft = `-${this.gutter}px`
      result.marginRight = result.marginLeft
    }
    return result
  }

  /**
   * 渲染元素
   */
  render(h: any) {
    return h('div', {
      style: this.space
    }, this.$slots.default)
  }
}
</script>
