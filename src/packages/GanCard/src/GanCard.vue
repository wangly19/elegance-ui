<template>
  <div class="g-card">
    <!-- 头部 -->
    <div class="header">
      <slot name="header" v-if="isHaveSlot('header')"></slot>
      <div class="header-view" v-else>
        <h3 class="header-view__title">默认标题</h3>
        <gan-icon name="icon-add"></gan-icon>
      </div>
    </div>
    <!-- 默认 -->
    <div class="content">
      <slot></slot>
    </div>
    <!-- 底部 -->
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanCard',
  components: {
    GanIcon
  }
})
export default class GanCard extends Vue {

  get isHaveSlot() {
    return (slot: string) => this.$scopedSlots.hasOwnProperty(slot)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-card {
    min-width: 200px;
    padding: 5px;
    border-radius: 2px;
    &:hover {
      // 为hover添加shadow
      box-shadow: 0 1px 6px rgba(0,0,0,0.1);
    }
    .header {
      &-view {
        @include flex($justify: space-between);
        &__title i{
          font-size: 16px;
          font-weight: normal;
        }
      }
    }
  }
</style>