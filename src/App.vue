<template>
<!-- 

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
  name="icon-arrow-downward" :custom="mode"></g-icon>
{{screen}}
<g-row gutter="30">
  <g-span :mod="screen" style="background: red;">1</g-span>
  <g-span :mod="screen" style="background: black">5</g-span>
</g-row>
<button @click="taggleScreen">1111</button>
-->
<g-input clear="11"></g-input>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props) {
    const typeList: Array<string> = ['success', 'error', 'warning', 'primary', 'link'];
    const screen = reactive({xl: 12, md: 12})
    const mode: Ref<string> = ref<string>('');
    const taggleMode = (v: string) => {
      console.log('click')
      mode.value = v
      console.log(mode.value)
    }
    const taggleScreen = () => {
      screen.md = 10
      screen.xl= 6
    }
    return {
      typeList,
      taggleMode,
      mode,
      screen,
      taggleScreen
    }
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>