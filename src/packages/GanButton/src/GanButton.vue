<template>
  <button v-loading="loading"
  :class="buttonBaseClass"
  @click="handleClick">
    <slot v-if="icon === ''"/>
    <gan-icon class="g-button__icon" :name="icon" v-else/>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanButton',
  components: { GanIcon }
})
export default class GanButton extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) loading!: boolean
  @Prop({ type: String, default: 'primary', required: false }) dataType!: boolean
  @Prop({ type: String, default: '', required: false }) icon!: string

  get buttonBaseClass() {
    const { dataType, icon } = this
    return [
      'g-button',
      icon !== '' && 'g-button-round',
      `g-bg-${dataType}`
    ]
  }

  @Emit('click')
  handleClick(event: Event): Event {
    return event
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-button {
    border: none;
    position: relative;
    color: $light;
    padding: 6px 20px;
    min-width: 70px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    overflow: visible;
    outline: none;
    &-round {
      border-radius: 50% !important;
      height: 40px;
      min-width: 40px;
      padding: 0 !important;
    }
    &__icon {
      @include position($position: absolute, $left: 50%, $top: 50%);
      transform: translate(-50%, -50%);
      font-size: 20px;
      outline: none;
    }
    &:hover {
      opacity: .8;
    }
    &[loading] {
      color: transparent !important;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      cursor: default !important;
    }
    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
    &[shadow]:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.19);
    }
    &[radius] {
      border-radius: 100px;
    }
    &[size="medium"] {
      padding: 9px 20px;
    }

    &[size="small"] {
      padding: 3px 20px;
    }
    &[outline] {
      outline: inherit;
    }
}
</style>
