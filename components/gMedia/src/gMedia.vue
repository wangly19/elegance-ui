<template>
  <div :id="mediaID">{{mediaID}}</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';
import { useCreateAliplayer, useCreateMediaWindow } from './hooks';

export default defineComponent({
  name: 'gMedia',
  props: {
    linkCDN: {
      type: String,
      default: 'https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css'
    },
    scriptCDN: {
      type: String,
      default: 'https://g.alicdn.com/de/prismplayer/2.8.8/aliplayer-min.js'
    },
    config: {
      type: Object,
      default: () => ({
      })
    },
    otherConfig: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, context) {
    // 创建id, 保证每一个播放窗口的实例不是一样的
    const mediaID: Ref<string> = ref<string>(`g-video-${new Date().getTime()}`);
    let example: any = null
    onMounted(() => {
      // 对状态进行更新
      useCreateAliplayer(props.scriptCDN, props.linkCDN, () => {
        // 返回实例
        example = useCreateMediaWindow(mediaID);
      });
      console.log(example)
    })
    return {
      mediaID,
      example
    }
  }
})
</script>