<template>
  <div :class="[ ...currentNames, ...screenClass ]" :style="currentStyle">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, Ref, inject, ref, ComputedRef, toRefs, reactive, onUpdated } from 'vue';
import { useSpanClass, useSpanStyle, useSpanScreen } from './hooks';

export default defineComponent({
  name: 'gSpan',
  props: {
    span: {
      type: [String, Number],
      default: 0
    },
    offset: {
      type: [String, Number],
      default: 0
    },
    mod: {
      type: Object,
      default: {
          xl: 0,
          lg: 0,
          md: 0,
          xs: 0
      }
    }
  },
  setup (props) {
    onUpdated(() => {
      console.log(props.mod)
    });
    // 当前份数
    const currentSpan: Ref<string | number | undefined> = toRef(props, 'span');

    // 当前偏移份数
    const currentOffset: Ref<string | number | undefined> = toRef(props, 'offset');

    // 获取间隔
    const currentGutter: Ref<number | string> = inject<Ref<number | string | undefined>>('gutter') as Ref<number | string>;

    // 获取当前屏幕
    const screenClass: ComputedRef<Array<string>> = useSpanScreen(props.mod)

    // 获取当前类
    const currentNames: ComputedRef<Array<string>> = useSpanClass(currentSpan, currentOffset);
    const currentStyle = useSpanStyle(currentGutter);
    return {
      currentNames,
      currentStyle,
      screenClass,
      mod
    }
  }
})
</script>

<style lang="scss" scoped>
@import './gSpan.scss';
</style>