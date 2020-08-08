import { Ref, ref } from 'vue';

export function useCreateAliplayer(
  scriptCDN: string,
  linkCDN: string,
  callback: any
) {
  // 规避多个组件引入Script的问题
  const aliplayerLink: HTMLElement | null = document.getElementById('g-media-css');
  // css不存在
  if (!aliplayerLink) {
    const link: HTMLLinkElement = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = 'g-media-css'
    link.href = linkCDN;
    document.head.appendChild(link)
  }
  const aliplayerScript: HTMLElement | null = document.getElementById('g-media-script');
  // 创建Script Element
  if (!aliplayerScript) {
    const script: HTMLScriptElement = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptCDN;
    script.id = 'g-media-script';
    document.body.appendChild(script);
    // 获取script加载后的回调
    script.addEventListener('load', function () {
      // 执行
      callback()
    })
  } else {
    // 初始化
  }
}

export function useCreateMediaWindow (
  id: Ref<string>
) {
  const example = ref(null);
  if (window.Aliplayer) {
    // 判断window中是否存在Ali的播放器
    example.value = new window.Aliplayer({
      id: id.value,
      source: "//player.alicdn.com/video/editor.mp4",
      width: "100%",
      height: "500px",
      autoplay: false,
      preload: false,
      isLive: false
    }, function () {
      console.log('流媒体播放创建成功')

    });
  } else {
    // 抛出错误提示
    console.error('media: current script Aliplayer is not found')
  }
  return example
}
