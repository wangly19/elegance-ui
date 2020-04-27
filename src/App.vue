<template>
  <div id="app">
    <!-- <gan-icon name="icon-enterinto_fill"></gan-icon> -->
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
    <!-- <gan-tabs :data="tabData" @taggleClick="Tabclick"/> -->
    <!-- <gan-tabs :data="tabData" @taggleClick="Tabclick">
    </gan-tabs>
    <gan-tooltip tooltip="测试文本" placement="top-left">
    </gan-tooltip> -->
    <!-- <gan-page :total="10001" :page-size="20"></gan-page> -->
    <!-- <gan-button-group>
      <gan-button radius>1111</gan-button>
      <gan-button radius>1111</gan-button>
      <gan-button radius>1111</gan-button>
    </gan-button-group> -->
    <!-- <gan-omit :row="4">11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</gan-omit> -->
    <!-- <gan-table>
      <template slot="action">
        111
      </template>
    </gan-table> -->
    <!-- <gan-radio-group :value="1" >
      <gan-radio label="个人" :value="1"></gan-radio>
      <gan-radio label="个人2" :value="2"></gan-radio>
    </gan-radio-group> -->
    <!-- <gan-link>普通链接</gan-link>
    <gan-link data-type="primary">标题s链接</gan-link>
    <gan-link data-type="link">标题链接</gan-link>
    <gan-link data-type="success">标题链接</gan-link>
    <gan-link data-type="warning">标题链接</gan-link>
    <gan-link data-type="error">标题链接</gan-link> -->
    <!-- <gan-card>
      111
    </gan-card> -->
    <!--
       before-text="test" afterText="111" size=""
      <gan-check-group :value="[1, 2]">
      <gan-check label="赵云" value="1"></gan-check>
      <gan-check label="张飞" value="2"></gan-check>
      <gan-check label="关羽" value="3"></gan-check>
    </gan-check-group> -->
<!--    <div class="input-box">-->
<!--      <gan-input style="margin-bottom: 20px" close></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" before-text="https://"></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" after-text="@qq.com"></gan-input>-->
<!--    </div>-->
<!--    <div class="input-box">-->
<!--      <gan-input style="margin-bottom: 20px" size="medium"></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" before-text="https://" size="medium"></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" after-text="@qq.com" size="medium"></gan-input>-->
<!--    </div>-->
<!--    <div class="input-box">-->
<!--      <gan-input style="margin-bottom: 20px" size="small"></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" before-text="https://" size="small"></gan-input>-->
<!--      <gan-input style="margin-bottom: 20px" after-text="@qq.com" size="small"></gan-input>-->
<!--    </div>-->
    <!-- <gan-progress :rote="105" type="success"></gan-progress> -->
    <!-- 1111 -->
    <gan-window></gan-window>
    <!-- <gan-drawer :visible.sync="isActive">
    </gan-drawer> -->
    <gan-button @click="isActive = !isActive">切换</gan-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private count: number = 0
  private data: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  private page: number = 1
  private isActive: boolean = false
  private tabData = [
    { label: 1, value: '111' },
    { label: 2, value: '222' }
  ]

  Tabclick(data: object) {
    console.log(data)
  }

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

  openMessage() {
    this.$message({
      type: 'primary',
      time: 2000
    })
  }

  mounted() {
    this.$message({
      type: 'primary',
      time: 2000
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
  align-items: center;
  .input-box{
  }
}
</style>
