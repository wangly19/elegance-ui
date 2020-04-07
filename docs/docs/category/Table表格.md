---
title: Table表格
---
# Table表格

## 基本用法

表格Column的格式看起来是这样的，如果您了解js，我想您应该知道 `key` `value`是必填的。它对应了你当前表格的结构
```js
interface IColumn interface IColumn {
  key: string
  value: string
  aglin?: string
  width?: string | number
  slot?: string
  [prop: string]: any
}
```

:::demo 可以使用 `gan-tabs` 组件标签来添加一个切换的tabTitle, 且给它绑定一个带有 `label`, `value`的 `object[]`
```html
<template>
  <div>
    <gan-tabs :data="tabData"/>
  </div>
</template>
<script>
export default {
  data: () => ({
    tabData: [
      { label: 1, value: '标签一' },
      { label: 2, value: '标签二' }
    ]
  })
}
</script>
```
:::