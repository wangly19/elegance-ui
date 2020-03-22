<template>
  <div id="app">
    <gan-icon name="icon-enterinto_fill"></gan-icon>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private count: number = 0
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
