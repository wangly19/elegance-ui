<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanOmit'
})
export default class GanOmit extends Vue {
  render(h: any) {
    return h('')
  }
}
</script>