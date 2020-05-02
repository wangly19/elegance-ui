<template>
  <div class="gan-check" @click="handleClick">
    <div class="gan-check-box" :class="isChecked && 'is-active'">
      <!-- 选中框 -->
      <transition name="fade">
        <div class="hook" v-show="isChecked"></div>
      </transition>
    </div>
    <div class="gan-check-label">{{label}}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({
  name: 'GanCheck'
})
export default class GanCheck extends Vue {
  // 是否选中
  private isChecked: boolean = false

  /**
   * label标签
   * 是否必填 ? 是
   */
  @Prop({ required: true }) label!: string
  @Prop({ required: true }) value!: string | number

  /**
   * 回调事件
   */
  private handleClick(): void {
    const { isChecked, label, value } = this
    this.isChecked = !isChecked
    if (this.isChecked) {
      this.$parent.$emit('pushItem', value)
    } else {
      this.$parent.$emit('removeItem', value)
    }
    this.$emit('input', value)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.gan-check {
  @include flex($justify: flex-start);
  cursor: pointer;
  .is-active {
    border: 1.5px solid $primary-color;
  }
  &-box {
    width: 16px;
    height: 16px;
    border: 1.5px solid $border-color-base;
    border-radius: 4px;
    margin-right: 5px;
    @include flex($justify: center, $align: center);
    .hook {
      width: 8px;
      height: 8px;
      border-radius: 2px;
      background: $primary-color;
    }
  }
}
</style>