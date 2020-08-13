import { guid2 } from '@/utils';
import { Ref, reactive } from 'vue';

interface PlayerConfig {}


export type SoleConfig = {
  playerId: string
  cssName: string
  scriptName: string
}

export interface PlayerProps {
  cssLink: string,
  scriptLink: string,
  options?: PlayerConfig
}

/**
 * @wang 生成唯一配置
 * @return SoleConfig
 */
export const useCreateSoleID = (): SoleConfig => {
  const playerId: string = `media-${new Date().getTime()}${parseInt(Math.random() * 1000 + '1')}`;
  const cssName: string = 'player-js';
  const scriptName: string = 'player-css';
  return { playerId, cssName, scriptName }
}

/**
 * 创建CSS标签
 * @param porps Props元素
 */
export const useCreateCSSLink = (props: PlayerProps, cssName: string): void => {
  const currentCSS: HTMLElement | null = document.getElementById(cssName);
  // 判断当前是否存在
  if (!currentCSS) {
    const link: HTMLLinkElement = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = props.cssLink;
    link.id = cssName;
    document.head.appendChild(link);
  }
}

/**
 * 创建Script标签
 * @param props Props元素
 */
export const useCreateScriptTag = (props: PlayerProps, scriptName: string, loading: Ref<boolean>, callBack: any): any => {
  let currentScript: HTMLScriptElement = document.getElementById(scriptName) as HTMLScriptElement;
  if (!currentScript) {
    currentScript = document.createElement('script');
    currentScript.src = props.scriptLink;
    currentScript.id = scriptName;
    document.body.appendChild(currentScript);
  }
  currentScript.addEventListener('load', function (){
    loading.value = false
    callBack();
  })
}

/**
 * 初始化播放器
 */
export const useCreatePlayer = (id: string) => {
  // 库存在
  if (window && window.Aliplayer) {
    const data =  new window.Aliplayer({
      id,
      source: '//player.alicdn.com/video/aliyunmedia.mp4',
      width: "100%",
      height: "500px",
      autoplay: true,
      isLive: false,
      rePlay: false,
      playsinline: true,
      preload: true,
      controlBarVisibility: "hover",
      useH5Prism: true
    }, (exmaple: any) => {
      console.log(exmaple, 'ex')
    })
    return data
  }
}

