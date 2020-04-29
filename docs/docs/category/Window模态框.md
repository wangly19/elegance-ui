---
title: Window模态框
---
# Window模态框

模态对话框对于前端的工作，尤其是Admin等项目必不可少。

## 基本使用

一个基本的抽屉

:::demo 可以使用 `gan-window` 标签声明一个抽屉。推荐使用sync操作符，良好的进行发布订阅的沟通。 

``` html{2}
<template>
  <div>
    <gan-window :visible.sync="visible"></gan-window>
    <gan-button @click="() => visible = true">点击打开</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false
  })
}
</script>
```
:::

## 基本的文字定义

自定义基础的文字

:::demo 可以使用 `header-title`, `footer-submit`, `footer-cancel` 等属性对一些文字进行修改

``` html{2}
<template>
  <div>
    <gan-window :visible.sync="visible"
    header-title="自定义头部文字"
    footer-submit="确认"
    footer-cancel="取消">
    this is a model window ......
    </gan-window>
    <gan-button @click="() => visible = true">点击打开</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false
  })
}
</script>
```
:::

## 默认事件

默认的一些事件

:::demo 自带的按钮存在一些事件

``` html{2}
<template>
  <div>
    <gan-window :visible.sync="visible"
    header-title="自定义头部文字"
    footer-submit="确认"
    footer-cancel="取消"
    @footerSubmit="handleSubmit"
    @footerCancel="handleCancel">
    {{message}}
    </gan-window>
    <gan-button @click="() => visible = true">点击打开</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false,
    message: 'this is a model window ...'
  }),
  methods: {
    handleSubmit() {
      this.message = 'click submit event ...'
    },
    handleCancel() {
      this.message = 'click cancel event ...'
    }
  }
}
</script>
```
:::