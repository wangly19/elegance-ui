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
  private gutter!: number

  get space(): IGutter {
    const result: IGutter = {}
    /**
     * 如果当前存在gutter,那么设置左右边距为gutter一般
     */
    if (this.gutter) {
      result.marginLeft = `-${this.gutter / 2}px`
      result.marginRight = result.marginLeft
    }
    return result
  }

  /**
   * gutter下发到col方法
   */
  setChildrenGutter(): void {
    this.$children.forEach((col: any) => {
      col.gutter = this.gutter
    })
  }

  mounted() {
    this.$nextTick(() => this.setChildrenGutter())
  }

  /**
   * 渲染元素
   */
  render(h: any) {
    return h('div', {
      class: ['g-row'],
      style: this.space
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
  .g-row{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    text-align: left;
  }
</style>
