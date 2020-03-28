<template>
  <div class="g-canlendar">
    <ul>
      <ol v-for="item in 42" :key="item">{{item}}</ol>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanCanlender'
})
export default class GanCanlender extends Vue {
  /**
   * 日历一共有42格是比较好的
   */
  private weekList: Array<string> = ['一', '二', '三', '四', '五', '六', '日']

  /**
   * 计算当前月的坐标
   */
  initMonth() {}

  /**
   * 本月多少天
   */
  getMonthCount() {}

  /**
   * 到达今天
   */
  currentDate() {}
}
</script>