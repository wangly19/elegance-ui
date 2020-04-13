---
title: Card卡片
--- 
# Card卡片

## 基本用法

::: demo 使用 `gan-card` 标签可以添加一个基本的卡片
```html {1}
<template>
  <div>
    <gan-card header-text="我是标题">
      我是卡片
    </gan-card>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 隐藏头部

::: demo 在基础的卡片上添加 `headerHidden` 属性可以对卡片头部进行隐藏
```html {1}
<template>
  <div>
    <gan-card header-text="我是标题" header-hidden>
      我是卡片
    </gan-card>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 隐藏底部

::: demo 在基础的卡片上添加 `footerHidden` 属性可以对卡片底部进行隐藏
```html {1}
<template>
  <div>
    <gan-card header-text="我是标题" footer-hidden>
      我是卡片
    </gan-card>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## header & footer插槽

::: demo 当存在插槽时，我们将对相应区域做插槽处理
```html {1}
<template>
  <div>
    <gan-card>
      <template slot="header">我是头部</template>
      我是卡片
      <template slot="footer">我是底部</template>
    </gan-card>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 基本的事件

::: demo 对于原生，确认，取消，更多按钮的点击事件
```html {1}
<template>
  <div>
    <gan-card header-text="我是标题"
    @cancel="onCancel"
    @consent="onConsent">
      我是卡片
    </gan-card>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
  methods: {
    // 取消
    onCancel() {},
    // 确认
    onConsent() {}
  }
}
</script>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::