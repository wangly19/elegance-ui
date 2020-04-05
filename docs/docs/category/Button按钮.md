---
title: Button组件
---
# Button按钮


## 基本用法

::: demo 使用 `gan-button` 标签来定义基本的button按钮
```html {1}
<template>
  <div>
    <div class="base">
      <gan-button>普通按钮</gan-button>
      <gan-button data-type="error">普通按钮</gan-button>
      <gan-button data-type="success">普通按钮</gan-button>
      <gan-button data-type="warning">普通按钮</gan-button>
      <gan-button data-type="link">普通按钮</gan-button>
      <gan-button data-type="text">普通按钮</gan-button>
    </div>
    <div class="base">
      <gan-button radius>普通按钮</gan-button>
      <gan-button data-type="error" radius>普通按钮</gan-button>
      <gan-button data-type="success" radius>普通按钮</gan-button>
      <gan-button data-type="warning" radius>普通按钮</gan-button>
      <gan-button data-type="link" radius>普通按钮</gan-button>
      <gan-button data-type="text" radius>普通按钮</gan-button>
    </div>
    <div class="base">
      <gan-button icon="icon-success">普通按钮</gan-button>
      <gan-button data-type="error" icon="icon-success">普通按钮</gan-button>
      <gan-button data-type="success" icon="icon-success">普通按钮</gan-button>
      <gan-button data-type="warning" icon="icon-success">普通按钮</gan-button>
      <gan-button data-type="link" icon="icon-success">普通按钮</gan-button>
      <gan-button data-type="text" icon="icon-success">普通按钮</gan-button>
    </div>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 加载中的状态

::: demo 在基础的按钮上添加 `loading` 属性可以控制其加载的状态。

```html {1}
<template>
  <div>
    <div class="base">
      <gan-button :loading="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="error" :loading="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="success" :loading="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="warning" :loading="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="link" :loading="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="text" :loading="isBtnLoading">普通按钮</gan-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isBtnLoading: true
  })
}
</script>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::


## 配合使用的还有禁用属性

::: demo 在基础的按钮上添加 `disabled` 属性可以控制其加载的状态。
```html {1}
<template>
  <div>
    <div class="base">
      <gan-button disabled>普通按钮</gan-button>
      <gan-button data-type="error" :disabled="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="success" :disabled="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="warning" :disabled="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="link" :disabled="isBtnLoading">普通按钮</gan-button>
      <gan-button data-type="text" :disabled="isBtnLoading">普通按钮</gan-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    isBtnLoading: true
  })
}
</script>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 焦点下显示阴影

::: demo 在基础的按钮上添加 `shadow` 属性可以控制其加载的状态。
```html {1}
<template>
  <div>
    <div class="base">
      <gan-button shadow>普通按钮</gan-button>
      <gan-button data-type="error" shadow>普通按钮</gan-button>
      <gan-button data-type="success" shadow>普通按钮</gan-button>
      <gan-button data-type="warning" shadow>普通按钮</gan-button>
      <gan-button data-type="link" shadow>普通按钮</gan-button>
      <gan-button data-type="text" shadow>普通按钮</gan-button>
    </div>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::
