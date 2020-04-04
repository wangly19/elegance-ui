---
title: Layout布局
---
# Layout布局

::: demo
```html
<template>
  <div>
    <el-row>
    <GanButton data-type="error" :loading="false" :disabled="false" radius size="medium">11</GanButton>
      </el-row>
  </div>
</template>
<script>
export default {
  data: () => ({ message: 'Hello World' }),
  created() {
    console.log(this)
  }
}
</script>
<style>
.box-vue { color: red; }
</style>
```
:::