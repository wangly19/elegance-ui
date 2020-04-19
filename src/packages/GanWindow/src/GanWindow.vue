<template>
  <div class="g-window" ref="windowModel">
    <div class="g-window__container">
      <div class="con-header">
        标题
        <gan-icon name="icon-close" point bold class="exit"></gan-icon>
      </div>
      <div class="con-context">
        111
      </div>
      <div class="con-footer">
        <gan-button>确认</gan-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'
import GanButton from '@/packages/GanButton'

// import { verifySlot } from '@/tools/utils'

@Component({
  name: 'GanWindow',
  components: { GanIcon, GanButton }
})
export default class GanWindow extends Vue {
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-window {
    @include position($position: fixed, $top: 0, $left: 0);
    background: $layer-color;
    height: 100vh;
    width: 100vw;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &__container {
      @include position($position: absolute, $left: 50%, $top: 100px );
      transform: translate(-50%);
      background: $light;
      min-width: 500px;
      padding: 20px;
      .con-header {
        // line-height: 40px;
        font-size: 22px;
        @include flex($justify: space-between);
        .exit {
          font-size: 22px;
          padding: 5px;
          transition: all 1s;
          &:hover {
            background: $primary-color;
            color: $light;
            border-radius: 50%;
          }
        }
      }
      .con-context {
        margin: 20px 0 20px 0;
      }
    }
  }
</style>
