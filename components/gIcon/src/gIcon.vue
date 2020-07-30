<template>
  <span :class="className"/>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue';

export default defineComponent({
  name: 'gIcon',
  props: {
    name: String,
    custom: String
  },
  setup (props) {
    const className: ComputedRef<Array<String>> = computed((): Array<String> => {
      const list: Array<String> = ['g-icon', 'icon', 'iconfont']
      props.name && list.push(props.name as string)
      props.custom && list.push(props.name as string)
      return list
    })
    return {
      className
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./icon.scss";
</style>