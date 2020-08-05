<template>
  <div class="g-row" :style="rowStyle">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, Ref, provide, InjectionKey, computed, ComputedRef } from 'vue';
type IGutter = {
  marginLeft: string
  marginRight: string
}

export default defineComponent({
  name: 'gRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  setup (props) {
    const currentGutter: Ref<number | string | undefined> = toRef(props, 'gutter')
    provide<Ref<number | string | undefined>>('gutter', currentGutter)
    const rowStyle: ComputedRef<IGutter> = computed((): IGutter => {
      return {
        marginLeft: `${Number(currentGutter) / 2}px`,
        marginRight: `${Number(currentGutter) / 2}px`,
      }
    })
    return {
      rowStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.g-row {
  @include flex($justifyContent: flex-start);
  flex-wrap: wrap;
} 
</style>