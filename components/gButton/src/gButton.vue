<template>
  <button :class="className" @click="onClick">
    <span>
      <g-icon name=""></g-icon>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ComputedRef } from 'vue';
import { useClassNameModel } from './hooks';
import Icon from 'components/gIcon/src/gIcon.vue';

export default defineComponent({
  name: 'gButton',
  props: {
    // 类型
    type: String,
    mode: String,
  },
  setup(props, context) {
    // 生成组件类
    const className: ComputedRef<Array<string>> = useClassNameModel(props);
    // 创建点击事件
    const onClick = (): void => context.emit('click');
    return {
      className,
      onClick,
    }
  },
  components: {
    [Icon.name]: Icon
  }
})
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>
