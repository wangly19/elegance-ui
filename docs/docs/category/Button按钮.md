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

## 按钮的尺寸

暂时的话我是只做了三个属性,但是只有两个你是可以选择的.分别是36px 32px 28px

::: demo 在基础的按钮上添加 `size` 属性可以控制其按钮的尺寸大小
```html {1}
<template>
  <div>
      <gan-button size="medium">大</gan-button>
      <gan-button>中</gan-button>
      <gan-button size="small">小</gan-button>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::


## 按钮组织

在组件中,我们也提供了按钮组,来对按钮进行合理的约束,使得他们更加的规范.通过按钮组标签可以将其装饰成为一个整体.虽然在文档上你看起来是这样子的.

::: demo 在基础的按钮上添加 `gan-button-group` 属性可以控制其加载的状态。
```html {1}
<template>
  <div>
    <gan-button-group class="base">
      <gan-button>1111</gan-button>
      <gan-button>1111</gan-button>
      <gan-button>1111</gan-button>
    </gan-button-group>
    <gan-button-group class="base">
      <gan-button radius>1111</gan-button>
      <gan-button radius>1111</gan-button>
      <gan-button radius>1111</gan-button>
    </gan-button-group>
  </div>
</template>
<style>
  .base {
    margin-bottom: 20px;
  }
</style>
```
:::

## 参数列表

|            | 方式   | 示例                              | 解释                                           |
|------------|------|---------------------------------|----------------------------------------------|
| data\-type | Prop | data\-type="success"            | 按钮类型：primary，error，success，warning，link，text |
| icon       | Prop | icon="icon\-success"            | 图标按钮                                         |
| loading    | Prop | loading="true"  \|\| 默认值: false | 是否显示loading效果                                |
| disabled   | Prop | disabled="true" \|\| 默认值：false  | 是否禁用按钮                                       |
| shadow     | Prop | shadow                          | hover的阴影效果                                   |
| size       | Prop | size="small"                    | 按钮的大小：medium大，small 小                        |
| radius     | Prop | radius                          | 是否开启圆角                                       |
| click      | Emit | @click="onClick"                | 按钮点击回调事件                                     |