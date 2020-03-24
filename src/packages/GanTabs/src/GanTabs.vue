<template>
  <div class="g-tab-activity">
    <ul class="tab-list">
      <ol class="tab-list__item" v-for="item in 4" :key="item">1</ol>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanTabs'
})
export default class GanTabs extends Vue {
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-tab-activity{
    .tab-list{
      @include flex()
    }
  }
</style>