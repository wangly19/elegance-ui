---
title: Image图片
---

# Image图片

## 基本使用

图片组件的基本使用

:::demo 使用 `gan-image`标签定义一个简单的图片
```html {2}
<template>
  <span>
    <gan-image :width="100" :height="100" :src="url"/>
  </span>
</template>
<script>
export default {
  data: () => ({
    url: 'https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589474000&t=ea30133f2b9dfc7788abb91bad21b9a8'
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::


## 加载失败

图片失败后

:::demo 加载失败后的展示，可以通过`reject`插槽去轻易它。
```html {2}
<template>
  <span>
    <gan-image :width="100" :height="100" :src="url"/>
  </span>
</template>
<script>
export default {
  data: () => ({
    url: 'https://dss2.bdtic.com/70cFvnSh_Q1YnxGkpoWhy/it/u=3252521864,872614242&fm=26&gp=0.jpg'
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## 不同大小

图片的大小

:::demo 可以通过 `width` `height` 定义高度和宽度
```html {2}
<template>
  <span>
    <gan-image :width="100" :height="100" :src="url"/>
    <gan-image :width="120" :height="120" :src="url"/>
    <gan-image :width="140" :height="140" :src="url"/>
    <gan-image :width="120" :height="100" :src="url"/>
  </span>
</template>
<script>
export default {
  data: () => ({
    url: 'https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589474000&t=ea30133f2b9dfc7788abb91bad21b9a8'
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## 不同的object

object-fit CSS样式的设置

:::demo 可以通过 `width` `height` 定义高度和宽度
```html {2}
<template>
  <span>
    <gan-image :width="100" :height="100" :src="url"/>
    <gan-image :width="100" :height="100" :src="url"
    v-for="item in fit" :key="item" :fit="fit"/>
  </span>
</template>
<script>
export default {
  data: () => ({
    url: 'https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1589474000&t=ea30133f2b9dfc7788abb91bad21b9a8',
    fit: ['fill', 'contain', 'cover', 'none', 'scale-down']
  })
}
</script>
<style lang="scss" scoped>
</style>
```
:::
