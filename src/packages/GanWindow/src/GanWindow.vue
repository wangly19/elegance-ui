<template>
  <div class="g-window" ref="windowModel">
    <div class="cover"></div>
    <div class="g-window__container">
      <div class="con-header">
        我是标题
        <ul class="con-header__tool">
          <ol v-for="item in toolBar"
          :key="item" :class="item.value"
          @click="toolCheckBar(item)"></ol>
        </ul>
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
import GanTooltip from '@/packages/GanTooltip'

// import { verifySlot } from '@/tools/utils'

@Component({
  name: 'GanWindow',
  components: { GanIcon, GanButton, GanTooltip }
})
export default class GanWindow extends Vue {
  private toolBar: object = [
    { label: '收起', value: 'hangup' },
    { label: '全屏', value: 'blow' },
    { label: '关闭', value: 'exit' }
  ]

  private toolCheckBar(name: object) {
  }
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
    .cover {
      @include position($position: fixed, $top: 0, $left: 0);
      background: $layer-color;
    }
    &__container {
      @include position($position: absolute, $left: 50%, $top: 100px );
      transform: translate(-50%);
      background: $light;
      min-width: 500px;
      padding: 20px;
      .con-header {
        @include flex($justify: space-between);
        font-size: 22px;
        &__tool {
          @include flex();
          ol {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-left: 5px;
            position: relative;
            cursor: pointer;
            &:hover::before {
              content: "";
              @include position($position: absolute, $top: 50%, $left: 50%);
              transform: translate(-50%, -50%);
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: $light;
            }
          }
          .exit {
            background: $error-color;
          }
          .blow {
            background: $primary-color;
          }
          .hangup {
            background: $success-color;
          }
        }
      }
      .con-context {
        margin: 20px 0 20px 0;
      }
    }
  }
</style>
