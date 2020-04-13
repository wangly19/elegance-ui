<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({
  name: 'GanIcon'
})
export default class GanIcon extends Vue {
  /**
   * Props参数
   */
  @Prop({ type: String, required: true, default: '' })
  private name!: string

  @Emit('click')
  handleClick() {
  }

  /**
   * 渲染iconfont标签
   */
  render(h: any) {
    return h('i', {
      class: ['iconfont', this.name, 'g-icon'],
      on: {
        click: this.handleClick
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.g-icon {
  &[bold] {
    font-weight: bold;
  }
  &[point] {
    cursor: pointer;
  }
}
</style>