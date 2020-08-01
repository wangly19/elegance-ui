<template>
  <div>
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'gSpan',
  props: {
    span: Number,
    offset: Number,
    mode: String
  },
  setup () {
    
  }
})
</script>

<style lang="scss" scoped>
@import './gSpan.scss';
</style>