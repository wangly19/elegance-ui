---
title: Loading加载指令
---
# Loading加载指令

## 基本用法
loading的效果很常见。但是我喜欢使用指令的方式去控制它

:::demo `v-loading` 可以快速的生成加载动画。它看起来很简单
```html {2}
<template>
  <div class="box" v-loading="true"></div>
</template>
<script>
export default {
  methods: {
    openMessage() {
      this.$gmessage({
        type: 'success',
        time: 20000,
        message: '我是一条2000s通知信息'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .box {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
</style>
```
:::

## 切换状态

:::demo `v-loading` 可以快速的生成加载动画。它看起来很简单
```html {2}
<template>
  <div>
    <div class="box" v-loading="loading"></div>
    <gan-button @click="taggleLoading">切换loading</gan-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: true
  }),
  methods: {
    taggleLoading() {
      this.loading = !this.loading
    }
  }
}
</script>
<style lang="scss" scoped>
  .box {
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
</style>
```
:::
