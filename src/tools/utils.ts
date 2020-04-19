/**
 * 验证组件插槽是否存在
 * @param slotObject 插槽对象
 * @param slotName 查擦名称
 */
export const verifySlot = (slotObject: object, slotName: string): boolean => slotName in slotObject
