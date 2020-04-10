<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanLink'
})
export default class GanLink extends Vue {
  @Prop({ default: 'text', type: String }) type!: string
  render(h: any) {
    return h('a', {
      class: [
        'g-link',
        `g-color-${this.type}`
      ],
      on: {
        click: () => this.$emit('click')
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.g-link {
  // 初始化样式
  display: inline;
  text-decoration: none;
}
</style>