<template>
  <div :id="soleObject.playerId" />
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onUpdated, watchEffect, onMounted, watch, reactive } from 'vue';
import { PlayerProps, useCreateSoleID, SoleConfig, useCreateCSSLink, useCreateScriptTag, useCreatePlayer } from './hooks';
import { guid2 } from '@/utils'

export default defineComponent({
  name: 'GMedia',
  props: {
    scriptLink: {
      type: String,
      default: 'https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js'
    },
    cssLink: {
      type: String,
      default: 'https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css'
    }
  },
  setup (props) {
    const loading: Ref<boolean> = ref<boolean>(true);
    // 静态配置
    const soleObject: SoleConfig = useCreateSoleID();
    // 当前对象
    let currentPlayer: any = reactive({});
    // 生成css标签
    useCreateCSSLink(props, soleObject.cssName);
    // 生成script标签引入
    useCreateScriptTag(props, soleObject.scriptName, loading, () => {
      // script加载成功
      const data = useCreatePlayer(soleObject.playerId);
      Object.keys(data).forEach(key => {
        currentPlayer[key] = data[key]
      })
      // 产生事件
      console.log(currentPlayer.getVolume)
    });
    return {
      soleObject,
      currentPlayer
    }
  }
})
</script>