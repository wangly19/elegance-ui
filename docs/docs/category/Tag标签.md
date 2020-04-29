---
title: Tag标签
---
# Tag标签

简单的tag，让一些内容产生标注


## 基本格式链接

:::demo 可以使用 `gan-tag` 标签创建一个基本的tag， 同时用 `value` 可以将值赋予给它
```html {2}
<template>
  <div>
    <gan-tag value="基本用法"/>
    <gan-tag type="success" value="基本用法"/>
    <gan-tag type="error" value="基本用法"/>
    <gan-tag type="warning" value="基本用法"/>
    <gan-tag type="text" value="基本用法"/>
    <gan-tag type="link" value="基本用法"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

## 不同大小

:::demo 可以使用 `size` 给tag设置大小
```html {2}
<template>
  <div>
    <gan-tag value="大" type="primary" size="medium"/>
    <gan-tag value="中" type="primary"/>
    <gan-tag value="小" type="primary" size="small"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::

:::demo 可以使用 `hit` 属性给tag设置标签
```html {2}
<template>
  <div>
    <gan-tag value="基本用法"/>
    <gan-tag type="success" :hit="true" value="基本用法"/>
    <gan-tag type="error" :hit="true" value="基本用法"/>
    <gan-tag type="warning" :hit="true" value="基本用法"/>
    <gan-tag type="text" :hit="true" value="基本用法"/>
    <gan-tag type="link" :hit="true" value="基本用法"/>
  </div>
</template>
<script>
export default {
}
</script>
```
:::