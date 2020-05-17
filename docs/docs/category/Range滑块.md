---
title: Range滑块
---
# Range 滑块

滑块是一个常用的模块，用于调整一些数据的展示和调整。

## 基本用法
滑块的基本用法

:::demo 可以`gan-range` 标签快速的创建一个滑块
```html {2}
<template>
  <div>
    <gan-range v-model="value" />{{value}}
  </div> 
</template>
<script>
export default {
  data: () => ({
    value: 0,
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::