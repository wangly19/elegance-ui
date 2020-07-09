<template>
  <div class="g-card">
    <!-- 头部 -->
    <div class="header">
      <slot name="header" v-if="isHaveSlot('header')"></slot>
      <div class="header-view" v-else>
        <p class="header-view__title">默认标题</p>
        <gan-icon name="icon-add" class="header-view__more"></gan-icon>
      </div>
    </div>
    <!-- 默认 -->
    <div class="content">
      <slot></slot>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <slot name="footer" v-if="isHaveSlot('footer')"></slot>
      <div class="footer-view" v-else>
        <gan-link data-type="text" style="margin-right: 10px;" @click="handleFooter('cancel')">取消</gan-link>
        <gan-link data-type="primary" @click="handleFooter('consent')">确认</gan-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'
import GanLink from '@/packages/GanLink'
import { verifySlot } from '../../../tools/utils'

@Component({
  name: 'GanCard',
  components: {
    GanIcon,
    GanLink
  }
})
export default class GanCard extends Vue {
  // cancel按钮文字
  @Prop({ default: '确认', type: String }) footerConsent!: string
  @Prop({ default: '取消', type: String }) footerCancel!: string
  // 头部文字
  @Prop({ default: '标题', type: String }) headerText!: string

  /**
   * footer回调事件
   */

  handleFooter(clickName: string) {
    switch (clickName) {
      case 'cancel': this.$emit('cancel')
        break
      case 'consent': this.$emit('consent')
        break
    }
  }

  /**
   * more回调
   */

  @Emit('more')
  handleMore() {
  }

  /**
   * 判断是否存在该插槽
   */
  get isHaveSlot() {
    return (slot: string) => verifySlot(this.$scopedSlots, slot)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-card[header-hidden]{
    .header-view {
      display: none;
    }
  }
  .g-card[footer-hidden]{
    .footer {
      display: none;
    }
  }
  .g-card {
    min-width: 300px;
    padding: 0 10px 0 10px;
    border-radius: 2px;
    transition: all .5;
    border: 1px solid $border-color-base;
    &:hover {
      // 为hover添加shadow
      box-shadow: 0 1px 6px rgba(0,0,0,0.2);
    }
    .header {
      &-view {
        @include flex($justify: space-between);
        border-bottom: 1px solid $border-color-base;
        padding-bottom: 5px;
        height: 40px;
        &__title{
          font-size: 18px;
          font-weight: normal;
        }
        &__more{
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
    .content {
      padding: 10px 0 10px 0;
    }
    .footer {
      @include flex($justify: flex-end, $align: center);
      min-height: 40px;
    }
  }
</style>