<template>
  <div class="gan-select" v-gan-out="onCloseSelectOption">
    <gan-dev-input
      group
      tail="icon|icon-addition"
      v-model="selectLabel"
      @onTail="hiddenSelectOption = !hiddenSelectOption"
      @focus="onShowSelectOption"></gan-dev-input>
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
  private onShowSelectOption(): void {
    this.hiddenSelectOption = true
  }

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
  .select-container {
    background: $light;
    height: 120px;
    overflow: auto;
    margin-right: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
    border-radius: 3px;
    .select-item {
      @include flex($justify: space-between, $align: center);
      cursor: pointer;
      padding: 5px 10px 5px 10px;
      width: 100%;
      transition: background .7s;
      &:hover {
        background: $border-color-base;
      }
      &__label {
        font-size: 16px;
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