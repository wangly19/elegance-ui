<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanRadioGroup'
})
export default class GanRadioGroup extends Vue {
  @Prop() value!: string

  /**
   * 我需要对子组件插槽中的值进行深度操作
   */
  private commitChildren(value: string) {
    this.$children.forEach((child: any) => {
      child.checkIsActive(value)
    })
  }

  /**
   * radio被修改了。触发v-model绑定
   */
  private radioChange(value: string) {
    this.$emit('input', value)
    this.commitChildren(value)
  }

  mounted() {
    if (this.value) this.commitChildren(this.value)
    this.$on('change', this.radioChange)
  }

  render(h: any) {
    return h('div', {
    }, this.$slots.default)
  }
}
</script>
