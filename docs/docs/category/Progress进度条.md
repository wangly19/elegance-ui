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
```html {2}
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
```html {2}
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

## 使用图标

对于状态，可以使用图标对常用状态进行代替

:::demo 可以使用 `icon` 属性开启图标显示
```html {2}
<template>
  <div>
    <gan-progress :rote="20.12" :icon="true" type="error"/>
    <gan-progress :rote="40.34" :icon="true" type="primary"/>
    <gan-progress :rote="80.09" :icon="true" type="warning"/>
    <gan-progress :rote="100" :icon="true" type="success"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 宽度

很多时候，宽度并不是我们自己决定的

:::demo 可以使用 `width` 属性定义progress的长度
```html {2}
<template>
  <div>
    <gan-progress :rote="20.12" :icon="true" width="200px" type="error"/>
    <gan-progress :rote="40.34" :icon="true" width="250px" type="primary"/>
    <gan-progress :rote="80.09" :icon="true" width="300px" type="warning"/>
    <gan-progress :rote="100" :icon="true" width="400px" type="success"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 行内样式

可以开启行内样式，方便文件上传进度条

:::demo 可以使用 `inLine` 属性定义progress的长度
```html {2}
<template>
  <div>
    <div class="line">
      <gan-progress :rote="20.12" :in-line="true" :icon="false" type="error"/>
      <gan-progress :rote="40.34" :in-line="true" :icon="false" type="text"/>
      <gan-progress :rote="60.82" :in-line="true" :icon="false" type="link"/>
      <gan-progress :rote="80.09" :in-line="true" :icon="false" type="warning"/>
      <gan-progress :rote="100" :in-line="true" :icon="false" type="success"/>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
  .line > * {
    padding-bottom: 10px;
  }
</style>
```
:::

## 动态模型

我们可以通过`v-bind`指令为其绑定一个参数，同时对其做更改处理

::: demo 
```html {2}
<template>
  <div>
    <gan-progress :rote="rote" type="error"/>
    <gan-progress :rote="rote" type="text"/>
    <gan-progress :rote="rote" type="link"/>
    <gan-progress :rote="rote" type="warning"/>
    <gan-progress :rote="rote" type="success"/>
      <div>
        <gan-button @click="handleClick('add')">增加</gan-button>
        <gan-button @click="handleClick('last')">减少</gan-button>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    rote: 10
  }),
  methods: {
    handleClick(clickName) {
      switch(clickName) {
        case 'add': this.rote += 10
        break
        case 'last': this.rote -= 10
        break
      }
    }
  }
}
</script>
```
:::