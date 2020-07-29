<template>
  <button
  :class="className"
  @click="onClick"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, toRef, ComputedRef } from 'vue';
import { useClassNameModel } from './hooks';

export default defineComponent({
  name: 'gButton',
  props: {
    // 类型
    type: String,
    mode: String
  },
  setup(props, context) {
    // 提取props
    const type: Ref<string | undefined> = toRef(props, 'type');
    const mode: Ref<string | undefined> = toRef(props, 'mode');
    // 生成组件类
    const className:  ComputedRef<Array<string>> = useClassNameModel(type, mode);
    // 创建点击事件
    const onClick = (): void => context.emit('click');
    return {
      type,
      className,
      onClick
    }
  }
})
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
