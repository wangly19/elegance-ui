<template>
  <div class="g-tip">
    <slot></slot>
    <span class="g-tip__text" :placement="gravity">{{tip}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanTooltip'
})
export default class GanTooltip extends Vue {
  @Prop({ default: 'bottom' }) gravity!: string
  @Prop({ default: 'Tips~' }) tip!: string
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
.g-tip{
  @include position($position: relative);
  display: inline-block;
  &__text{
    visibility: hidden;
    min-width: 40px;
    text-align: center;
    background: $text-color;
    color: $light;
    font-size: 14px;
    border-radius: 3px;
    padding: 5px 15px 5px 15px;
    &::after{
      content: "";
      margin-left: 5px;
      border-width: 5px;
      border-style: solid;
    }
  }
  &__text[placement^="top"]{
    @include position($left: 50%, $bottom: 150%);
    transform: translate(-50%, 0);
    &::after{
      @include position($top: 100%, $left: 50%);
      border-color: $text-color transparent transparent transparent;
    }
  }
  &__text[placement^="bottom"]{
    @include position($top: 150%, $left: 50%);
    transform: translate(-50%, 0);
    &::after{
      @include position($bottom: 100%, $left: 50%);
      border-color: transparent transparent black $text-color;
    }
  }
  &__text[placement^="right"]{
    @include position($top: 0, $left: 110%);
    transform: translate(5%, 0);
    &::after{
      @include position($right: 100%, $top: 50%);
      border-color: transparent $text-color transparent transparent;
    }
  }
  &__text[placement^="left"]{
    @include position($top: 0, $right: 120%);
    transform: translate(0, 0);
    &::after{
      @include position($left: 100%, $top: 50%);
      border-color: transparent transparent transparent $text-color;
    }
  }
  &:hover .g-tip__text{
    visibility: visible;
  }
}
</style>