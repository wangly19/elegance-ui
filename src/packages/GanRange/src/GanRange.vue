<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanRange'
})
export default class GanRange extends Vue {
  @Prop({ default: 50 }) value!: number | string

  render(h: Function) {
    return h('input', {
      attrs: {
        type: 'range',
        value: this.value
      },
      class: [
        'gan-range'
      ],
      on: {
        change: (event: any) => {
          this.$emit('change', event.target.value)
          this.$emit('input', event.target.value)
        }
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/global.d.scss';
.gan-range {
  -webkit-appearance: none;
  background: $border-color-base;
  height: 5px;
  min-width: 250px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: $primary-color;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
