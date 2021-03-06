<template>
  <div class="gan-select" v-gan-out="onCloseSelectOption">
    <gan-dev-input
      group
      :tail="selectIcon"
      v-model="selectLabel"
      @onTail="hiddenSelectOption = !hiddenSelectOption"
      @focus="onShowSelectOption"></gan-dev-input>
    <transition name="fade">
      <ul class="select-container" v-show="hiddenSelectOption">
        <ol class="select-item"
        @click="onPitch(item)"
        v-for="item in options"
        :class="item.value === selectValue && 'select-avtive'"
        :key="item.value">
          <span class="select-item__label">{{item.label}}</span>
          <gan-icon name="icon-success"
          v-if="item.value === selectValue"
          class="success-icon"/>
        </ol>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator'
import GanDevInput from '@/packages/GanDevInput'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanSelect',
  components: { GanDevInput, GanIcon }
})
export default class GanSelect extends Vue {
  @Prop() value!: string | number
  @Prop({ default: [] }) options!: Array<object>

  private selectValue: string | number = ''
  private selectLabel: string | number = ''
  private hiddenSelectOption: boolean = false

  // 显示得select图标
  get selectIcon(): string {
    const iconTail: string = `icon|${this.hiddenSelectOption ? 'icon-link' : 'icon-addition'}`
    return iconTail
  }

  private filterSelectOptions() {
    const findOption: object | undefined = this.options.find((res: any) => res.value === this.selectValue)
    return findOption || this.options
  }

  // 显示Select选项
  private onShowSelectOption(): void {
    this.hiddenSelectOption = true
  }

  // 关闭Select选项
  private onCloseSelectOption(): void {
    this.hiddenSelectOption = false
  }

  private onPitch(item: any) {
    this.selectValue = item.value
    this.selectLabel = item.label
    this.$emit('input', item.value)
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.success-icon {
  font-size: 16px;
}
.gan-select {
  display: inline-block;
  position: relative;
  .select-container {
    @include position($position: absolute, $top: 20px);
    width: 100%;
    background: $light;
    height: 120px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-right: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
    padding: 0;
    border-radius: 3px;
    .select-item {
      @include flex($justify: space-between, $align: center);
      cursor: pointer;
      padding: 0;
      line-height: 30px;
      width: 100%;
      transition: background .7s;
      &:hover {
        background: $border-color-base;
      }
      &__label {
        font-size: 16px;
        padding-left: 10px;
      }
    }
    .select-avtive {
      background: $primary-color;
      color: $light;
      &:hover {
        background: $primary-color;
        color: $light;
      transition: background .7s;
      }
    }
  }
}
</style>