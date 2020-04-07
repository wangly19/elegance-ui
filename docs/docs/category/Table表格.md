---
title: Table表格
---
# Table表格

## 基本接口

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

## 基本用法
:::demo 可以使用 `gan-table` 组件标签来添加一个切换的tabTitle, 且给它绑定一个带有 `label`, `value`的 `object[]`
```html
<template>
  <div>
    <gan-table :column="columnData" :data="tabData" />
  </div>
</template>
<script>
export default {
  data: () => ({
    columnData: [
      { key: 'name', value: '标题' },
      { key: 'age', value: '年龄' },
      { key: 'sex', value: '性别' }
    ],
    tabData: [
      { name: '王某', age: 18, sex: '男性' },
      { name: '张某', age: 19, sex: '男性' },
      { name: '赵某', age: 18, sex: '女性' }
    ]
  })
}
</script>
```
:::