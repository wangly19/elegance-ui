<template>
  <g-button
  v-for="item in typeList" :key=" item"
  :type="item"
  :mode="mode"
  style="margin: 10px;"
  radius
  @click="taggleMode('')"
  >
  {{item}}
  </g-button>
  <button @click="taggleMode('ghost')">切换边框</button>
  <button @click="taggleMode('border')">切换边框</button>
  <g-icon mouse bold
  name="arrow-downward" :custom="mode"></g-icon>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props) {
    const typeList: Array<string> = ['success', 'error', 'warning', 'primary', 'link'];
    const mode: Ref<string> = ref<string>('');
    const taggleMode = (v: string) => {
      console.log('click')
      mode.value = v
      console.log(mode.value)
    }
    return {
      typeList,
      taggleMode,
      mode
    }
  }
})
</script>

<style lang="scss">
</style>