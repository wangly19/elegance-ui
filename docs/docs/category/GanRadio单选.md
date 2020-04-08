---
title: Radio单选点
---

# Radio单选点

## 基本用法

:::demo 可以使用 `gan-radio` 标签用来添加一个单选按钮, 且给它绑定一个带有 `label`, `value`来进行一个数据的绑定
```html
<template>
  <div>
    <gan-radio :label="item.label" :value="item.value"
    v-for="item in radioData" :key="item.value"></gan-radio>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioData: [
      { label: '橘子', value: 1 },
      { label: '苹果', value: 2 },
      { label: '香蕉', value: 3 },
    ]
  })
}
</script>
```
:::

## 按钮组

:::demo 可以使用 `gan-radio-group` 标签用来添加一个按钮组, 当然我们也为它绑定了 `v-model` 属性
```html
<template>
  <div>
    <gan-radio-group v-model="key">
      <gan-radio :label="item.label" :value="item.value"
      v-for="item in radioData" :key="item.value"></gan-radio>
    </gan-radio-group>
  </div>
</template>
<script>
export default {
  data: () => ({
    key: 1,
    radioData: [
      { label: '橘子', value: 1 },
      { label: '苹果', value: 2 },
      { label: '香蕉', value: 3 },
    ]
  })
}
</script>
```
:::