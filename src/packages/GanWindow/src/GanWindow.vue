<template>
<transition name="fade">
  <div class="g-window" ref="windowModel" v-if="visible">
    <div class="cover"></div>
    <div class="g-window__container" :class="isFull && 'full-window'">
      <div class="con-header">
        {{headerTitle}}
        <ul class="con-header__tool">
          <template  v-for="item in toolBar">
            <gan-tooltip :tooltip="item.label" :placement="isFull ? 'bottom' : 'top'">
              <ol :class="item.value"
              @click="toolCheckBar(item.label, item.value)"/>
            </gan-tooltip>
          </template>
        </ul>
      </div>
      <div class="con-context">
        <slot></slot>
      </div>
      <div class="con-footer">
        <slot name="footer" v-if="isSlotFooter"></slot>
        <template v-else>
          <div class="con-footer__group">
            <button class="con-footer__group-btn con-footer__group-btn-cancel"
            @click="handleCancel">{{footerCancel}}</button>
            <button class="con-footer__group-btn con-footer__group-btn-submit"
            @click="handleSubmit">{{footerSubmit}}</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'
import GanButton from '@/packages/GanButton'
import GanTooltip from '@/packages/GanTooltip'
import { verifySlot } from '@/tools/utils'

@Component({
  name: 'GanWindow',
  components: { GanIcon, GanButton, GanTooltip }
})
export default class GanWindow extends Vue {
  @Prop({ required: false, default: false, type: Boolean }) visible!: boolean
  @Prop({ required: false, default: '$header-title', type: String }) headerTitle!: string
  @Prop({ required: false, default: '$footer-submit', type: String }) footerSubmit!: string
  @Prop({ required: false, default: '$footer-cancel', type: String }) footerCancel!: string

  private isFull: boolean = false

  private toolBar: object = [
    { label: '收起', value: 'hangup' },
    { label: '全屏', value: 'blow' },
    { label: '关闭', value: 'exit' }
  ]

  // 存在footer插槽
  get isSlotFooter() {
    return verifySlot(this.$scopedSlots, 'footer')
  }

  /**
   * 确定回调
   */
  @Emit('footerSubmit')
  handleSubmit() {
  }

  /**
   * 取消回调
   */
  @Emit('footerCancel')
  handleCancel() {
  }

  /**
   * 工具函数
   */
  private toolCheckBar(label: string, value: string) {
    switch (value) {
      case 'exit': this.$emit('update:visible', false)
        break
      case 'blow': this.isFull = !this.isFull
        break
    }
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .g-window {
    @include position($position: fixed, $top: 0, $left: 0);
    background: $layer-color;
    height: 100vh;
    width: 100vw;
    z-index: 2000;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    .cover {
      @include position($position: fixed, $top: 0, $left: 0);
      height: inherit;
      width: inherit;
      background: $layer-color;
    }
    .full-window {
      top: 0;
      height: 100%;
      width: 100%;
      transition: all 1s;
      .con-footer {
        &__group {
          justify-content: flex-end;
        }
      }
    }
    &__container {
      @include position($position: absolute, $left: 50%, $top: 100px );
      transform: translate(-50%, 0);
      background: $light;
      min-width: 500px;
      @include flex($direction: column);
      .con-header {
        @include flex($justify: space-between);
        font-size: 22px;
        padding: 20px;
        width: 100%;
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
        border-top: 1px solid $border-color-base;
        border-bottom: 1px solid $border-color-base;
        padding: 20px;
        width: 100%;
        flex: 1;
      }
      .con-footer {
        padding: 20px;
        width: 100%;
        &__group {
          width: 100%;
          @include flex($justify: center);
          &-btn {
            display: inline-block;
            margin-left: 10px;
            border: none;
            font-size: 18px;
            cursor: pointer;
            border-radius: 3px;
            width: 200px;
            height: 40px;
            line-height: 40px;
            transition: all .5s;
            &-submit:hover {
              color: $light;
              background: $primary-color;
            }
            &-cancel:hover {
              color: $light;
              background: $error-color;
            }
          }
        }
      }
    }
  }
</style>
