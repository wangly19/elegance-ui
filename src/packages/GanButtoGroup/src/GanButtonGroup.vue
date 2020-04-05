<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanButtonGroup'
})
export default class GanButtonGroup extends Vue {
  render(h: any) {
    return h('div', {
      class: 'g-button-group '
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
  .g-button-group > .g-button:not(:last-child):not(:first-child) {
    border-radius: 0;
  }
  .g-button-group > .g-button:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .g-button-group > .g-button:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
</style>
