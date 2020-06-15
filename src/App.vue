<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/map">MapPlugin</router-link> |
    </div>
    <router-view/> -->
    <gan-avatar src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg" name="Wangly"></gan-avatar>
    <gan-select :options="options" v-model="value"></gan-select>
    <br>
    <gan-swiper width="400" height="200">
      <gan-swiper-item :term="1">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592222870411&di=d73f076271fcae7665b390d5bec1530b&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408" alt="">
      </gan-swiper-item>
      <gan-swiper-item :term="2">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592222870411&di=d73f076271fcae7665b390d5bec1530b&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408" alt="">
      </gan-swiper-item>
      <gan-swiper-item :term="3">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592223696349&di=a38c8a2609e9d61d534d4c24a1c383fb&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854" alt="">
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
