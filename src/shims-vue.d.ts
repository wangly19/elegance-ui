declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}


declare interface Window{
  Aliplayer: any
}

type Aliplayer = any