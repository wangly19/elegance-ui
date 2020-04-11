<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanLink'
})
export default class GanLink extends Vue {
  @Prop({ default: 'text', type: String }) dataType!: string
  @Prop({ default: '', required: false }) to!: string
  render(h: any) {
    const { dataType, to } = this
    return h(`${to !== '' ? 'router-link' : 'a'}`, {
      class: [
        'g-link',
        `g-color-${dataType}`
      ],
      on: {
        click: () => this.$emit('click')
      },
      to,
      tag: 'a'
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.g-link {
  // 初始化样式
  display: inline;
  text-decoration: none;
  cursor: pointer;
}
</style>