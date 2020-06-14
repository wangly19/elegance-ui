<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/map">MapPlugin</router-link> |
    </div>
    <router-view/> -->
    <gan-avatar src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" name="Wangly"></gan-avatar>
    <gan-select :options="options" v-model="value"></gan-select>
    <br>
    <gan-swiper>
      <gan-swiper-item :term="1">
        11111
      </gan-swiper-item>
      <gan-swiper-item :term="2">
        222
      </gan-swiper-item>
      <gan-swiper-item :term="3">
        3333
      </gan-swiper-item>
    </gan-swiper>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 0,
    options: [
      { label: '关羽', value: 1 },
      { label: '张飞', value: 2 },
      { label: '赵云', value: 3 },
      { label: '刘备', value: 4 },
      { label: '马超', value: 5 }
    ]
  })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
