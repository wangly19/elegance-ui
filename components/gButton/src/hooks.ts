import { Ref, computed, ComputedRef } from 'vue';

/**
 * @wang Button组件Hook钩子
 * @param type props传递的type类型变量
 * @return className 组件类列表
 */
export function useClassNameModel (type: Ref<string | undefined>, mode: Ref<string | undefined>): ComputedRef<Array<string>> {
  const className:  ComputedRef<Array<string>> = computed((): Array<string> => {
    const list:Array<string> = ['g-button'];
    switch (mode.value) {
      // mode 为 边框模式
      case 'border':
        list.push(`g-${type.value}-bbd`);
        break;
      // mode 为 浅色幽灵模式
      case 'ghost':
        list.push(`g-${type.value}-ghost`);
        break;
      // 默认为实心模式
      default:
        list.push(`${type.value}-bg`);
        break;
    }
    return list;
  });
  return className;
}