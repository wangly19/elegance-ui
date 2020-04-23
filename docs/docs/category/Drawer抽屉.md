---
title: Drawer抽屉
---
# Drawer抽屉

## 基本使用

一个基本的抽屉

:::demo 可以使用 `gan-drawer` 标签声明一个抽屉。推荐使用sync操作符，良好的进行发布订阅的沟通。
```html {2}
<template>
  <div>
    <gan-drawer :visible.sync="visible"/>
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

## 定义头部

对于头部的文字，如果你喜欢这种风格，你可以自定义文字

:::demo 可以使用 `header-icon`, `header-label`, `header-title`定义标题，标签，闪电图标
```html {2}
<template>
  <div>
    <gan-drawer :visible.sync="visible"
      header-icon="icon-flashlight_fill"
      header-label="自定义标签"
      header-title="自定义头部"/>
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

## 插槽

对于头部的文字，如果你喜欢这种风格，你可以自定义文字

:::demo 可以使用 `header-icon`, `header-label`, `header-title`定义标题，标签，闪电图标
```html {2}
<template>
  <div>
    <gan-drawer :visible.sync="visible">
      <template slot="header">
        我是头部插槽
      </template>
      <template slot="footer">
        我是底部插槽
      </template>
    </gan-drawer>
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

## 闪电事件

对于头部的文字，如果你喜欢这种风格，你可以自定义文字

:::demo 可以使用 `header-icon`, `header-label`, `header-title`定义标题，标签，闪电图标
```html {2}
<template>
  <div>
    <gan-drawer :visible.sync="visible"
      @move="bindMove"
      header-icon="icon-flashlight_fill"
      header-label="自定义标签"
      header-title="自定义头部"/>
    <gan-button @click="() => visible = true">点击打开</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false
  }),
  methods: {
    bindMove() {
      console.log('...move')
    }
  }
}
</script>
```
:::
