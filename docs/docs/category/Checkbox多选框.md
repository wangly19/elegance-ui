---
title: Checkbox多选框
---

# CheckBox多选框

## 基本用法

一个基本的checkbox

:::demo 可以使用 `gan-check` 标签声明一个多选框组件
```html {2}
<template>
  <div>
    <gan-check label="关羽" value="1"/>
    <gan-check label="张飞" value="2"/>
    <gan-check label="赵云" value="3"/>
    <gan-check label="黄忠" value="4"/>
  </div>
</template>
<script>
export default {
  data: () => ({
  })
}
</script>
```
:::

## 多选框组

一个基本的checkbox

:::demo 可以使用 `gan-check` 标签声明一个多选框组件
```html {2}
<template>
  <gan-check-group v-model="model">
    <gan-check label="关羽" value="1"/>
    <gan-check label="张飞" value="2"/>
    <gan-check label="赵云" value="3"/>
    <gan-check label="黄忠" value="4"/>
  </gan-check-group>
</template>
<script>
export default {
  data: () => ({
    model: []
  })
}
</script>
```
:::