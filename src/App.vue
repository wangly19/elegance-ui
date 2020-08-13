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
<g-input clear="11"></g-input>
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
<g-media></g-media>
<g-input clear="11"></g-input>
<g-media ref="player" scriptLink="https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js"></g-media>
<g-input clear="11" v-model="player" placeholder="11111"></g-input>
-->
<g-checked></g-checked>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup(props) {
    const config = {
      
          "source": "//player.alicdn.com/video/aliyunmedia.mp4",
          "width": "100%",
          "height": "500px",
          "autoplay": true,
          "isLive": true,
          "rePlay": false,
          "playsinline": true,
          "preload": true,
          "controlBarVisibility": "hover",
          "useH5Prism": true
    }
    const typeList: Array<string> = ['success', 'error', 'warning', 'primary', 'link'];
    const screen = reactive({xl: 12, md: 12})
    const mode: Ref<string> = ref<string>('');
    const player: Ref<string> = ref<any>('1111111111111');
    onMounted(() => {
      console.log(player.value)
    })
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
      taggleScreen,
      player,
      config
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