<template>
  <div class="g-radio">
    <div class="left" :class="isChecked ? 'box-click' : ''" ref="box" @click="handleClick">
      <transition name="fade">
        <div class="circle" v-show="isChecked"></div>
      </transition>
    </div>
    <div class="right">{{label}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanRadio'
})
export default class GanRadio extends Vue {
  @Prop() label!: string
  @Prop() value!: string
  private isChecked: boolean = false

  private handleClick() {
    this.isChecked = !this.isChecked
    if (this.isChecked) {
      this.$parent.$emit('change', this.value)
    }
  }

  private checkIsActive(value: string) {
    this.value === value ? this.isChecked = true : this.isChecked = false
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
$base-size: 20px;
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.g-radio {
  height: $base-size;
  display: inline-block;
  vertical-align: center;
  margin-bottom: 5px;
  .left {
    height: $base-size;
    width: $base-size;
    border-radius: 50%;
    background-color: $light;
    display: inline-block;
    border: 2px solid $border-color-base;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    .circle {
      border-radius: 50%;
      width: 50%;
      height: 50%;
      @include position($position: absolute, $left: 50%, $top: 50%);
      transform: translate(-50%, -50%);
      background-color: $light;
    }
  }
  .right {
    margin-left: 5px;
    padding-right: 10px;
    display: inline;
    vertical-align: top; // 内联元素默认的vertical-align为baseline。对象的内容与基线对齐。如果我们在right插入文字。则为出现left right不水平对齐的情况
    line-height: $base-size;
    color: $text-color; // 在mounted
  }
  .box-click {
    background-color: #1da1f2;
    border: 1px solid $primary-color;
  }
}
</style>
