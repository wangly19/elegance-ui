---
title: Scroll滚动视图
---
# Scroll滚动视图

## 基本用法

区域滚动视图一般作用在某些树和列表，长数据中。但又不好做分页展示，所以下拉加载就是一个比较好的解决方案了

:::demo `gan-scroll` 标签可以快速的对你的文档流进行包装穿透，生成一个长链表
```html
<template>
  <div>
    <gan-scroll-view :height="200">
      <ul>
        <li v-for="item in 50" :key="item">{{item}}</li>
      </ul>
    </gan-scroll-view>
  </div>
</template>
```
:::

## 无限列表

:::demo 在基础布局上，可以通过 `gan-scroll` 标签来将内容区域穿透化
```html
<template>
  <div>
    <gan-scroll-view @handleScroll="callback" :height="200">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{item}}</li>
      </ul>
    </gan-scroll-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    page: 1
  }),
  methods: {
     callback() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          this.page += 1
          for (let i = 0; i < 10; i++) {
            this.data.push(this.page * i + 1)
          }
        }, 1000)
        resolve()
      })
    }
  }
}
</script>
```
:::

## 参数列表

| 参数           | 方式   | 示例                       | 描述                               |
|--------------|------|--------------------------|----------------------------------|
| height       | Prop | :height="200"            | 视图高度                             |
| handleScroll | Emit | @handleScroll="onScroll" | 是否滚动到底部i，我希望您能够进行数据的加载，如同demo一般。 |

