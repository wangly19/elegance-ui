---
title: Icon图标
---
# Icon图标

非常感谢iconfont开源库，给我们提供了很多优质的图标。我们也将一些图标库内置到了项目中。当然，后续我会做一些分离。因为它看起来对项目的帮助并不是很大。显得非常的累赘。

## 感谢 & 以及开源声明

- 千牛图标库 @iconfont - 姬熙
- 阿里巴巴国际站官方图标库 @iconfont - 刘付雪妮

## 基本用法

:::demo `gan-scroll` 标签可以快速的对你的文档流进行包装穿透，生成一个长链表
```html {2}
<template>
  <ul class="icon-list">
    <li v-for="(item, index) in iconList" :key="index"
    class="icon-list__item"
    @click="copyIconCode">
      <gan-icon :name="item" class="icon" />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script>
import { GMessage } from 'elegance-ui'

export default {
  data: () => ({
    iconList: [
      'icon-close',
      'icon-accessory',
      'icon-activity',
      'icon-activity_fill',
      'icon-add',
      'icon-addition_fill',
      'icon-addition',
      'icon-addpeople_fill',
      'icon-addpeople',
      'icon-addressbook_fill',
      'icon-addressbook',
      'icon-primary_full',
      'icon-primary',
      'icon-browse_fill',
      'icon-browse',
      'icon-brush',
      'icon-brush_fill',
      'icon-businesscard_fill',
      'icon-businesscard',
      'icon-questions',
      'icon-supply',
      'icon-tools',
      'icon-int',
      'icon-int',
      'icon-commodity',
      'icon-zhtn',
      'icon-error',
      'icon-success',
      'icon-warning',
      'icon-coordinates_fill',
      'icon-document_fill',
      'icon-enterinto_fill',
      'icon-feedback_fill',
      'icon-flag_fill',
      'icon-flashlight_fill',
      'icon-label_fill',
      'icon-message_fill',
      'icon-mine_fill',
    ]
  }),
  methods: {
    copyIconCode() {
    }
  }
}
</script>
<style lang="scss" scoped>
.icon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
.icon-list .icon-list__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 150px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  i, .icon {
    font-size: 35px;
    font-weight: bold;
  }
  span {
    white-space: nowrap;
    padding: 0 5px 0 5px;
    overflow: hidden;
    font-size: 12px;
    text-overflow: ellipsis;
  }
  &:hover {
    background: #DBEBF5;
    position: relative;
    &::before {
      content: "复制代码";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30px;
      text-align: center;
      font-size: 12px;
      background: #FFF;
    }
  }
}
</style>
```
:::

## 粗体图标
将图标的横线，能够让字体图标的线勾勒更加真实。

:::demo `bold` 可以快速的将图标变为粗体
```html {2}
<template>
  <gan-icon name="icon-success" bold />
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>
```
:::

## point小手
当你需要对图标进行点击时，往往需要使用 `cursor`，当然，我们内置了

:::demo `point` 可以快速的将图标变为粗体
```html {2}
<template>
  <gan-icon name="icon-success" point />
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
</style>
```
:::