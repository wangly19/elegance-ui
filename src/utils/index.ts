// TODO 工具库
import { ComponentOptions } from 'vue';


/**
 * 获取组件名称
 * @param __Component 组件
 */
export type IConverMtthods = (__Component: ComponentOptions) => string

export const getComponentName: IConverMtthods = (__Component: ComponentOptions): string => {
  return __Component.name as string
}

export const guid2 = (): string => {
	function S4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}