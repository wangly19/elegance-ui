<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanIcon'
})
export default class GanIcon extends Vue {
  /**
   * Props参数
   */
  @Prop({ type: String, required: true, default: '' })
  private name!: string

  /**
   * 渲染iconfont标签
   */
  render(h: any) {
    return h('i', {
      class: ['iconfont', this.name]
    })
  }
}
</script>
