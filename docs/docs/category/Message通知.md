---
title: Message通知
---
# Message通知

## 基本用法
通过api，可以快速使用message组件。

:::demo `$gmessage` 可以快速的生成单例通知
```html {2}
<template>
  <gan-button @click="openMessage">打开通知</gan-button>
</template>
<script>
export default {
  methods: {
    openMessage() {
      this.$gmessage({
        type: 'success',
        time: 2000,
        message: '我是一条2000s通知信息'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## 通知类型
通过type去定义不同类型的通知。

:::demo `type` 可以控制通知的样式
```html {2}
<template>
  <div>
    <gan-button @click="openMessage(item)" v-for="item in types"
    :key="item" :data-type="item" style="margin-left: 20px;">打开{{item}}通知</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    types: ['success', 'error', 'link', 'warning', 'primary']
  }),
  methods: {
    openMessage(type) {
      this.$gmessage({
        type: type,
        time: 2000,
        message: '我是一条2000s通知信息'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## 永久开启
将time设置未NaN，则通知栏将一直保存在页面上

:::demo `$gmessage` 可以快速的生成单例通知
```html {2}
<template>
  <gan-button @click="openMessage">打开通知</gan-button>
</template>
<script>
export default {
  methods: {
    openMessage() {
      this.$gmessage({
        type: 'success',
        time: NaN,
        message: '我是一条永久通知信息'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
```
:::