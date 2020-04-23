<template>
  <transition name="fade">
    <div class="gdrawer-container"
    v-show="visible"
    @click="closeDrawer">
      <div class="content">
        <div class="content__header">
          <template v-if="isHeaderSlot">
            <slot name="header"></slot>
          </template>
          <template v-else>
            <h1 class="title">{{headerTitle}}</h1>
            <div class="label">
              <span class="label-font">{{headerLabel}}</span>
              <gan-icon :name="headerIcon" class="label-icon" point
              @click.stop="$emit('move')"/>
            </div>
          </template>
        </div>
        <div class="content__main">
          <slot></slot>
        </div>
        <div class="content__footer">
          <template v-if="isFooterSlot">
            <slot name="footer"></slot>
          </template>
          <template v-else>
            <div class="footer-exit" @click="closeDrawer">
              <gan-icon name="icon-link" bold point/>
              <span>退出</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'
import { verifySlot } from '@/tools/utils'

@Component({
  name: 'GanDrawer',
  components: {
    GanIcon
  }
})
export default class GanTabs extends Vue {
  // 标题
  @Prop({ default: '$header', required: false }) headerTitle!: string
  // 标签
  @Prop({ default: '$label', required: false }) headerLabel!: string
  // icon
  @Prop({ default: 'icon-flashlight_fill', required: false }) headerIcon!: string

  @Prop() visible!: boolean

  // 插槽验证

  get isHeaderSlot() {
    return verifySlot(this.$scopedSlots, 'header')
  }

  get isFooterSlot() {
    return verifySlot(this.$scopedSlots, 'footer')
  }

  private closeDrawer($event: Event) {
    this.$emit('update:visible', false)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.gdrawer-container {
  @include position($position: fixed, $left: 0, $top: 0);
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .1);
  z-index: 1000;
  .content {
    height: 100vh;
    width: 350px;
    z-index: 1001;
    background: $light;
    float: right;
    box-shadow: 0 8px 10px -5px
    rgba(0,0,0,.2), 0 16px 24px 2px
    rgba(0,0,0,.14), 0 6px 30px 5px
    rgba(0,0,0,.12);
    @include flex($direction: column);
    &__header, &__footer {
      width: inherit;
      min-height: 60px;
      padding: 20px;
    }
    &__header {
      .title {
        font-size: 22px;
        font-weight: normal;
      }
      .label {
        @include flex($justify: space-between);
        &-font, &-icon {
          color: $text-color;
        }
        &-icon {
          font-size: 25px;
          padding: 5px;
          transition: all .7s;
          &:hover {
            background: $border-color-base;
            border-radius: 50%;
          }
        }
      }
    }
    &__footer {
      border-top: 1px solid $border-color-base;
      .footer-exit {
        cursor: pointer;
        float: right;
        padding: 10px 20px;
        &:hover {
          background: $border-color-base;
          border-radius: 100px;
        }
      }
    }
    &__main {
      flex: 1;
      width: inherit;
      padding: 20px;
    }
  }
  /* 可以设置不同的进入和离开动画 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
