// TODO 工具库
import { ComponentOptions } from 'vue';

export type IConverMtthods = (__Component: ComponentOptions) => string

export const getComponentName: IConverMtthods = (__Component: ComponentOptions): string => {
  return __Component.name as string
}
