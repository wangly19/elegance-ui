---
title: Layout 布局
---
# Layout布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html {2}
<template>
  <div>
    <gan-row>
      <gan-col :span="24"><div class="grid-content bg-purple-dark"></div></gan-col>
    </gan-row>

    <gan-row>
      <gan-col :span="12"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="12"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>

    <gan-row>
      <gan-col :span="6"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>

    <gan-row>
      <gan-col :span="3"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple-dark"></div></gan-col>
      <gan-col :span="3"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
  </div>
</template>

<style>
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
  }
  .bg-purple-dark {
    background: #47A1F6;
  }
  .bg-purple {
    background: #9EC8E3;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

## 间距布局

:::demo 在基础布局上，可以通过 `gutter` 属性给我们的组件添加一定的边距
```html {2}
<template>
  <div>
    <gan-row :gutter="20">
      <gan-col :span="12"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="12"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
    <gan-row :gutter="20">
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
  </div>
</template>

<style>
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
  }
  .bg-purple-dark {
    background: #47A1F6;
  }
  .bg-purple {
    background: #9EC8E3;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

## 偏移列

:::demo 在基础布局上，可以通过 `offset` 属性给我们的组件偏移一定的栏数
```html {2}
<template>
  <div>
    <gan-row :gutter="20">
      <gan-col :span="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
    <gan-row :gutter="20">
      <gan-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gan-col>
      <gan-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
    <gan-row :gutter="20">
      <gan-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></gan-col>
    </gan-row>
  </div>
</template>

<style>
  .g-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .g-col {
  }
  .bg-purple-dark {
    background: #47A1F6;
  }
  .bg-purple {
    background: #9EC8E3;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

## 参数力量

| 参数     | 方式   | 示例           | 描述                     |
|--------|------|--------------|------------------------|
| gutter | Prop | :gutter="20" | col的边距                 |
| span   | Prop | :span="12"   | 24等分，我们希望您的col能够合理的分配它 |
