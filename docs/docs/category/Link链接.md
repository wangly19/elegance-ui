---
title: Link链接
---
# Link链接

建议您使用Link组件时，安装官方的 `vue-router`， 它会更加好的支持router模式。


## 基本格式链接

:::demo 可以使用 `gan-link` 标签添加一组文本链接指向性， 通过 `data-type & dataType`指定链接类型
```html
<template>
  <div>
    <gan-link>普通链接</gan-link>
    <gan-link data-type="primary">标题s链接</gan-link>
    <gan-link data-type="link">标题链接</gan-link>
    <gan-link data-type="success">标题链接</gan-link>
    <gan-link data-type="warning">标题链接</gan-link>
    <gan-link data-type="error">标题链接</gan-link>
  </div>
</template>
<script>
export default {
}
</script>
```
:::