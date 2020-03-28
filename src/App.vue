<template>
  <div id="app">
    <gan-icon name="icon-enterinto_fill"></gan-icon>
    <!-- <gan-icon name="icon-enterinto_fill"></gan-icon>
    <gan-row>
      <gan-col :span="6">
        <div style="background: red;">1</div>
      </gan-col>
      <gan-col :span="6">
        <gan-tag value="1112" type="success"/>
      </gan-col>
      <gan-col :span="6">
        <div style="background: red;">3</div>
      </gan-col>
      <gan-col :span="6">
        <div style="background: gray;">4</div>
      </gan-col>
    </gan-row>
    <button @click="count+=10">++</button>
    <button @click="count-=10">--</button>
    <gan-progress :rote="count" type="error" :show-text="true" :in-line="false" :icon="false"/>
    <gan-canlender></gan-canlender> -->
    <!-- <gan-scroll-view @handleScroll="callback" :height="200">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{item}}</li>
      </ul>
    </gan-scroll-view> -->
    <!-- <gan-tabs></gan-tabs> -->
    <gan-tooltip>
      <span>1111</span>
    </gan-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private count: number = 0
  private data: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  private page: number = 1

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

  mounted() {
    this.$message({
      type: 'primary',
      time: NaN
    })
    console.log(this.$message)
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app{
  margin-top: 100px;
  margin-left: 100px;
}
</style>
