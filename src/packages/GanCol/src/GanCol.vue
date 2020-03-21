<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface IGutter {
  marginLeft?: string
  marginRight?: string
}
@Component({
  name: 'GanCol'
})
export default class GanCol extends Vue {
  @Prop({ required: false, type: [Number, String], default: 24 })
  private span!: number | string

  @Prop({ required: false, type: [Number, String], default: 0 })
  private offset!: number | string

  private gutter: number = 0

  get space(): object {
    return {
      paddingLeft: this.gutter / 2 + 'px',
      paddingRight: this.gutter / 2 + 'px'
    }
  }

  render(h: any) {
    return h('div', {
      class: [`col-span-${this.span}`, `col-offset-${this.offset}`],
      style: this.space
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
$col-span: '-span-';
$col-offset: '-offset-';
.col{
  @for $n from 1 through 24 {
    &#{$col-span}#{$n} {
      width: ($n / 24) * 100% ;
    }
  }
  @for $n from 1 through 24 {
    &#{$col-offset}#{$n} {
      margin-left: ($n / 24) * 100% ;
    }
  }
  @media (min-width: 577px) {
  }
}
</style>
