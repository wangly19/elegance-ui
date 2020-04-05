<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanOmit'
})
export default class GanOmit extends Vue {
  @Prop({ required: false, type: Number, default: 1 }) row!: Number
  render(h: any) {
    const { row } = this
    return h('span', {
      class: [
        'g-omit',
        row === 1 ? 'g-omit-defalut' : 'g-omit-rows'
      ]
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
  .g-omit {
    display: inline-block;
    &-defalut {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-rows {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
</style>