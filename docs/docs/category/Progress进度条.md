---
title: Progress进度条
---

# 进度条

## 基本使用

基本的进度条，您觉得看起来如何呢?

:::demo 可以使用 `gan-progress` 标签添加一个基本的进度条，指定 `rote` 来标注其清大。我们建议您的类型是 `Int` 型。 
```html
<template>
  <div>
    <gan-progress :rote="20" type="error"/>
    <gan-progress :rote="40" type="text"/>
    <gan-progress :rote="60" type="link"/>
    <gan-progress :rote="80" type="warning"/>
    <gan-progress :rote="100" type="success"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 浮点型

我们对数据做了处理，当您的数据阈不在 `0 ~ 100` 之间时，我想它并不会产生工作。当然，我也支持您的数值为浮点型。他看起来是比较好的。对数据的精度我想你会有这方面的要求。

:::demo 
```html
<template>
  <div>
    <gan-progress :rote="20.12" type="error"/>
    <gan-progress :rote="40.34" type="text"/>
    <gan-progress :rote="60.82" type="link"/>
    <gan-progress :rote="80.09" type="warning"/>
    <gan-progress :rote="100" type="success"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 浮点型

我们对数据做了处理，当您的数据阈不在 `0 ~ 100` 之间时，我想它并不会产生工作。当然，我也支持您的数值为浮点型。他看起来是比较好的。对数据的精度我想你会有这方面的要求。

:::demo 
```html
<template>
  <div>
    <gan-progress :rote="20.12" type="error"/>
    <gan-progress :rote="40.34" type="text"/>
    <gan-progress :rote="60.82" type="link"/>
    <gan-progress :rote="80.09" type="warning"/>
    <gan-progress :rote="100" type="success"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::