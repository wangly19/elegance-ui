<template>
  <div class="g-input">
    <template>
      <!-- 左侧图标 -->
      <gan-icon :name="beforeIcon"
      :class="beforeIcon !== '' && `g-input__before-icon`"/>
      <!-- input元素 -->
      <input type="text" class="g-input__input"
      :placeholder="placeholder"
      ref="input"
      v-model.lazy="bindValue"
      @change="handleChange"/>
      <!-- 右侧图标 -->
      <gan-icon :name="afterIcon"
      @click="emptyInput"
      class="g-input__after-icon"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Ref } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanInput',
  components: {
    GanIcon
  }
})
export default class GanInput extends Vue {
  // 前置图标
  @Prop({ required: false, type: String, default: '' }) beforeIcon!: string
  // 后置图标
  @Prop({ required: false, type: String, default: 'icon-close' }) afterIcon!: string
  @Prop({ required: false, type: String, default: '' }) placeholder!: string
  @Ref('input') inputRef!: any

  private bindValue: string = ''
  /**
   * 清空
   */
  emptyInput($input: any) {
    this.inputRef.focus()
    // if (!this.afterIcon.includes('close')) return
    // this.bindValue = ''
  }

  /**
   * input修改
   */
  @Emit('change')
  handleChange() {
    console.log(this.bindValue)
    return this.bindValue
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.g-input {
  width: 300px;
  @include flex($justify: flex-start, $align: center);
  position: relative;
  &[passwd],
  &[close] {
    input{
      padding-right: 0;
    }
    .g-input__after-icon{
      cursor: pointer;
      visibility: hidden;
    }
    input:focus {
      padding-right: 30px;
      & + i {
        visibility: visible;
      }
    }
  }
  &[size="medium"] {
    input {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  &[size="small"] {
    input {
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }
  &[before-text]::before {
    padding: 0 15px 0 15px;
  }
  &[after-text]::after {
    padding: 0 15px 0 15px;
  }
  &::before {
    content: attr(before-text);
    @include position($position: absolute, $left: 0, $top: 0);
    @include flex($align: center);
    font-size: inherit;
    height: 100%;
    background: $border-color-base;
    transform: translate(-100%);
  }
  &::after {
    content: attr(after-text);
    @include position($position: absolute, $right: 0, $top: 0);
    transform: translate(100%);
    height: 100%;
    font-size: inherit;
    @include flex($align: center);
    background: $border-color-base;
  }
  // input输入框
  &__input {
    display: inline-block;
    padding: 5px;
    width: 300px;
    border: 1px solid $border-color-base;
    font-size: 18px;
    z-index: 1;
    &:focus {
      border: 1px solid $text-color;
      outline: none;
    }
  }
  // 前置图标style
  &__before-icon {
    @include position($position: absolute, $left: 0);
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    & + input {
      padding-left: 30px;
    }
  }
  // 后置图标style
  &__after-icon {
    @include position($position: absolute, $right: 0);
    font-size: 18px;
    padding: 10px;
    z-index: 1000;
    cursor: pointer;
    background: red;
  }
}
</style>