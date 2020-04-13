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
      <gan-tooltip tooltip="测试文本" placement="top-left" style="padding: 10px;">上左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="top" style="padding: 10px;">上中</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="top-right" style="padding: 10px;">上右</gan-tooltip>
    </div>
    <div>
      <gan-tooltip tooltip="测试文本" placement="left" style="padding: 10px;">下左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="left-center"></gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="right" style="padding: 10px;">下右</gan-tooltip>
    <div>
    </div>
      <gan-tooltip tooltip="测试文本" placement="bottom-left" style="padding: 10px;">下左</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="bottom" style="padding: 10px;">下中</gan-tooltip>
      <gan-tooltip tooltip="测试文本" placement="bottom-right" style="padding: 10px;">下右</gan-tooltip>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
```
:::