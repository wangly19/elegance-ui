<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanCheckGroup'
})
export default class GanCheckGroup extends Vue {
  private list: Array<string | number> = []

  private pushItem(value: string | number) {
    console.log(value)
    this.list.push(value)
    this.$emit('input', this.list)
  }

  private removeItem(value: string | number) {
    console.log(value)
    // value的下标
    const index: number = this.list.indexOf(value)
    // 删除数据, 从x开始删除x个
    this.list.splice(index, 1)
    this.$emit('input', this.list)
  }

  mounted() {
    this.$on('pushItem', this.pushItem)
    this.$on('removeItem', this.removeItem)
  }

  render(h: any) {
    return h('div', {
      class: 'gan-check-group'
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.gan-check-group {
}
</style>