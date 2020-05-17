---
title: Select下拉选择框
---

# Select下拉选择框
当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法
滑块的基本用法

:::demo 可以`gan-range` 标签快速的创建一个滑块
```html {2}
<template>
  <div>
    <gan-select :options="options" v-model="value"></gan-select>
  </div> 
</template>
<script>
export default {
  data: () => ({
    value: 0,
    options: [
      { label: '关羽', value: 1 },
      { label: '张飞', value: 2 },
      { label: '赵云', value: 3 },
      { label: '刘备', value: 4 },
      { label: '马超', value: 5 }
    ]
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::