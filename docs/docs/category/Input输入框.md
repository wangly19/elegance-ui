---
title: Input输入框
---
# Input输入框
输入框必备的东西

:::demo `gan-input` 可以快速的创建一个输入框。
```html {2}
<template>
  <gan-input style="margin-bottom: 20px" close></gan-input>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## 前置文本

:::demo `before-text` 可以定义前置文本内容

```html {2}
<template>
  <div class="input-box">
    <gan-input style="margin-bottom: 20px" before-text="https://"></gan-input>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .input-box {
    margin-left: 200px;
  }
</style>
```
:::

## 后置文本

:::demo `after-text` 可以定义前置文本内容
```html {2}
<template>
  <div class="input-box">
    <gan-input style="margin-bottom: 20px" after-text="@qq.com"></gan-input>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .input-boxs {
    margin-left: 200px;
  }
</style>
```
:::

## 输入框大小

:::demo `size` 可以定义输入框的大小
```html {2}
<template>
  <div class="input-boxs">
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" close></gan-input>
    </div>
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" size="medium"></gan-input>
    </div>
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" size="small"></gan-input>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  .input-boxs {
    width: 800px;
  }
</style>
```
:::


## 描述信息

:::demo `placeholder` 可以定义输入框的秒描述信息
```html {2}
<template>
  <div class="input-boxs">
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" placeholder="大" size="medium"></gan-input>
    </div>
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" placeholder="正常"></gan-input>
    </div>
    <div class="input-box">
      <gan-input style="margin-bottom: 20px" placeholder="小" size="small"></gan-input>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>
```
:::

