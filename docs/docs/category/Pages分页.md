---
title: Pages分页
---
# Pages分页

分页是一些场景中非常常见的组件。

## 基本使用

可以开启行内样式，方便文件上传进度条

:::demo 可以使用 `gan-page` 标签定义一个分页组件，通过`total`生成一个基本的架构。
```html {2}
<template>
  <div>
    <gan-page :total="1000"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 页面容器大小

可以自定义当前容器容纳的大小

:::demo 可以使用 `page-size`定义页面容器数量。默认为`10`条
```html {2}
<template>
  <div>
    <gan-page :total="1000" :page-size="40"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 显示总数据文本

开启total数据总数显示

:::demo 可以使用 `show-total`显示页面总数
```html {2}
<template>
  <div>
    <gan-page :total="1000" :page-size="40" :show-total="true"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::
