---
title: Image图片
---

# Image图片

## 基本使用

图片组件的基本使用

:::demo `point` 可以快速的将图标变为粗体
```html {2}
<template>
  <span>
    <gan-image :width="100" :height="100" :src="url">
    </gan-image>
  </span>
</template>
<script>
export default {
  data: () => ({
    url: 'https://dss2.bdtic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg'
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::