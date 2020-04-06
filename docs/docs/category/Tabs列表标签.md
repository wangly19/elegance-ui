---
title: Tabs列表标签
---

## 基本用法

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

## 监听状态

:::demo 它有一个回调函数,当tabs发生变化时,将会触发此`taggleClick`函数(方法)
```html
<template>
  <div>
    <gan-tabs :data="tabData" @taggleClick="bindTaggleCallback" />
  </div>
</template>
<script>
export default {
  data: () => ({
    tabData: [
      { label: 1, value: '标签一' },
      { label: 2, value: '标签二' }
    ]
  }),
  methods: {
    bindTaggleCallback(item, index) {
      window.alert(index)
    }
  }
}
</script>
```
:::