import { Ref, computed, ComputedRef } from 'vue'
type Iprops = {
  type: string
  mode: string
}

/**
 * @wang Button组件Hook钩子
 * @param type props传递的type类型变量
 * @return className 组件类列表
 */
export function useClassNameModel(
  props:  Readonly<{} & {
    type?: string | undefined;
    mode?: string | undefined;
  }>
): ComputedRef<Array<string>> {
  const className: ComputedRef<Array<string>> = computed(
    (): Array<string> => {
      const list: Array<string> = ['g-button']
      switch (props.mode) {
        // mode 为 边框模式
        case 'border':
          list.push(`g-${props.type}-bbd`)
          break

        // mode 为 浅色幽灵模式
        case 'ghost':
          list.push(`g-${props.type}-ghost`)
          break

        // 默认为实心模式
        default:
          list.push(`${props.type}-bg`)
          break
      }
      return list
    }
  )
  return className
}
