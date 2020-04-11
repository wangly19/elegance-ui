<template>
  <div class="g-check">
    <input type="checkbox" id="ganCheck" :name="value" :checked="checked" @click="handleChange(checked)">
    <label for="ganCheck">{{label}}</label>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({
  name: 'GaCheck'
})
export default class GanCheck extends Vue {
  @Prop({ required: true }) label!: string
  @Prop({ required: true }) value!: string
  @Prop({ required: false, default: NaN }) isChecked!: string | number

  private active: string | number = this.isChecked

  /**
   * 获取当前active
   */
  getActive() {
    return this.active
  }

  /**
   * 是否选中
   */
  get checked() {
    return this.active === this.value
  }

  @Emit('change')
  handleChange(bool: boolean) {
    bool ? this.active = NaN : this.active = this.value
    return this.value
  }

}
</script>

<style lang="scss" scoped>
  .g-check {
    input[type="checkbox"] {
      visibility: hidden;
    }
  }
</style>