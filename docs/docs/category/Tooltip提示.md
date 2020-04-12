---
title: Tooltip提示
---
# Tooltip提示

当需要给一些内容做描述时，tooltip可以更加直观的将一些文本信息展示出来


## 基本格式链接

:::demo 可以使用 `gan-tooltip` 标签添加一个tips。使用 `tooltip`设置文本
```html
<template>
  <div>
    <div>
      <gan-tooltip tooltip="测试文本" placement="top-left">上左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="top-center">上中</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="top-right">上右</gan-tooltip>
    </div>
    <div>
      <gan-tooltip tooltip="测试文本" placement="left-left">下左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="left-center">下中</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="left-right">下右</gan-tooltip>
    <div>
    </div>
      <gan-tooltip tooltip="测试文本" placement="bottom-left">下左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="bottom-center">下中</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="bottom-right">下右</gan-tooltip>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
```
:::