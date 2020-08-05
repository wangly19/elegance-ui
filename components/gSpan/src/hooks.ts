import { Ref, computed, ComputedRef, reactive } from 'vue';

/**
 * 获取class的hook
 * @param span 块数
 * @param offset 偏移块数
 */
export function useSpanClass(
  span: Ref<string | number | undefined>,
  offset: Ref<string | number | undefined>
) {
  
  // 类计算属性
  const currentClass: ComputedRef<Array<string>> = computed((): Array<string> => {
    // g-span-1=>24  && g-offset-1=>24
    const classNames: Array<string> = [`g-span-${span.value}`, `g-offset-${offset.value}`]
    return classNames
  })
  return currentClass
}

/**
 * 获取边距样式hook
 * @param gutter 父类注入的边距内容
 */
export function useSpanStyle(
  gutter: Ref<string | number | undefined>
) {
  type IStyle = {
    paddingLeft: string
    paddingRight: string
  }
  const styles: IStyle = reactive<IStyle>({
    paddingLeft: '0px',
    paddingRight: '0px'
  })
  styles.paddingLeft = `${Number(gutter.value) / 2}px`
  styles.paddingRight = `${Number(gutter.value) / 2}px`
  return styles
}
