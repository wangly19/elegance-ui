<template>
  <div class="g-window">
    <div class="header-wrap">1</div>
    <div class="content-wrap">2</div>
    <div class="footer-wrap">3</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanWindow'
})
export default class GanWindow extends Vue {
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-window {
  }
</style>
