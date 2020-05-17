<template>
  <div id="app">
        <!-- <gan-tag value="1112" type="success"/> -->
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
    <!-- <gan-window :visible.sync="isActive">
      111111111
    </gan-window> -->
    <!-- <gan-drawer :visible.sync="isActive">
    </gan-drawer> -->
    <!-- <gan-button @click="isActive = !isActive">切换</gan-button> -->
    <!-- <gan-check-group v-model="checkbox">
      <gan-check label="关羽" value="1"></gan-check>
      <gan-check label="关羽" value="2"></gan-check>
      <gan-check label="关羽" value="3"></gan-check>
    </gan-check-group> -->
    <!-- <gan-image :width="100" :height="100" src="https://dss2.bdtic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg">
    </gan-image> -->
    <!-- <div :class="$style.outside" v-gan-out="bindOutSide" v-show="move">
      {{$style}}
    </div> -->
    <!-- <gan-dev-input v-model="inputText"></gan-dev-input> -->
    <!-- {{inputText}} -->
    <!-- <gan-select :options="options" v-model="inputText"></gan-select> -->
    <!-- {{count}} -->
    <!-- <gan-window v-model="isActive">
      111111111
    </gan-window> -->
    <gan-range></gan-range>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class App extends Vue {
  private info: any = {}
  private infoMap: Map<string, string> | null = null

  private options: any = [
    { label: '关羽', value: 1 },
    { label: '张飞', value: 2 },
    { label: '赵云', value: 3 },
    { label: '刘备', value: 4 },
    { label: '马超', value: 5 }
  ]

  private count: number = 0
  private data: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  private checkbox: Array<number | string> = ['1', '2']
  private page: number = 1
  private isActive: boolean = true
  private move: boolean = true
  private inputText: string = '111'
  private tabData = [
    { label: 1, value: '111' },
    { label: 2, value: '222' }
  ]

  @Watch('checkbox')
  handleWatch(value: any) {
    console.log(value)
  }

  Tabclick(data: object) {
    console.log(data)
  }

  @Watch('inputText')
  handleInput(newVal: string) {
    console.log(newVal)
  }

  bindOutSide() {
    this.move = !this.move
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
    // this.$message({
    //   type: 'primary',
    //   time: 2000
    // })
  }

  mounted() {
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
  .outside {
    width: 100px;
    height: 100px;
    background: red;
  }
  .info-item {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
}
</style>