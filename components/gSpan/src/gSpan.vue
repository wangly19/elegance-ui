<template>
  <div :class="currentNames" :style="currentStyle">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, Ref, inject, ref, ComputedRef, toRefs, reactive } from 'vue';
import { useSpanClass, useSpanStyle } from './hooks';

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
      type: () => ({
        xl: [String, Number],
        lg: [String, Number],
        md: [String, Number],
        sm: [String, Number],
        xs: [String, Number]
      })
    }
  },
  setup (props) {
    // 当前份数
    const currentSpan: Ref<string | number | undefined> = toRef(props, 'span');
    // 当前偏移份数
    const currentOffset: Ref<string | number | undefined> = toRef(props, 'offset');
    // 获取间隔
    const currentGutter: Ref<number | string> = inject<Ref<number | string | undefined>>('gutter') as Ref<number | string>;
    // 获取当前屏幕
    console.log(props.mod)
    // 获取当前类
    const currentNames: ComputedRef<string[]> = useSpanClass(currentSpan, currentOffset);
    const currentStyle = useSpanStyle(currentGutter);
    return {
      currentNames,
      currentStyle
    }
  }
})
</script>

<style lang="scss" scoped>
@import './gSpan.scss';
</style>