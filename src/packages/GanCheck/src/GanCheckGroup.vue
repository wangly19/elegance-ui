<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanCheckGroup'
})
export default class GanCheckGroup extends Vue {

  @Prop({ required: true, default: [], type: Array }) value!: Array<string | number>

  getChildren() {
    this.value = []
    this.$children.forEach((child: Vue) => {
      this.value.push((child as any).active)
    })
  }

  setChildrenActuve() {
    const { $children, value } = this
    $children.forEach((child: Vue) => {
      value.forEach((res: string | number) => {
        if (res === (child as any).value) {
          (child as any).active = res
        }
      })
    })
  }

  mounted() {
    this.getChildren()
    if (this.value) this.setChildrenActuve()
    // this.$on('change', )
  }

  render(h: any) {
    return h('div', {
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
</style>