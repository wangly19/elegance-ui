<template>
  <div class="canlendarPanel">
    <div class="canlendar-header">
      <p class="pre">
        <span @click="changeDate('preYear')">
          <!-- <icon class="icon" name="preYear"/> -->
          left
        </span>
        <span @click="changeDate('preMonth')">
          <!-- <icon class="icon" name="preMonth" /> -->
          right
        </span>
      </p>
      <p class="currenDate">{{ `${year}年${month}月` }}</p>
      <p class="next">
        <span @click="changeDate('nextMonth')">
          <icon class="icon" name="nextMonth" />
        </span>
        <span @click="changeDate('nextYear')">
          <icon class="icon" name="nextYear" />
        </span>
      </p>
    </div>
    <div class="canlendar-main">
      <ul class="main-header">
        <li v-for="(item, index) in week" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul class="main">
        <li v-for="inx in weekDay" class="disabled" :key="inx">
          {{ preMonthSize - weekDay + inx }}
        </li>
        <li
          v-for="index in monthList[month - 1]" :key="index"
        >
          <span
            :class="{ currentDay: index === day }"
          >
            {{ index }}</span
          >
        </li>
        <li v-for="index in lastWeekDay" class="disabled" :key="index">{{ index }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanCanlender'
})
export default class GanCanlender extends Vue {
  year: number = 0
  month: number = 0
  day: number = 0
  week: string[] = ['日', '一', '二', '三', '四', '五', '六']
  monthList: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  weekDay: number = 1
  lastWeekDay: number = 1
  // 上一个月有多少天
  get preMonthSize() {
    return this.month - 1 === 0 ? 31 : this.monthList[this.month - 2]
  }

  created() {
    this.getCurrentDate()
    this.initDate()
  }

  // 获得今天的日期
  getCurrentDate() {
    const date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.day = date.getDate()
  }

  // 根据年月日获得为星期几
  getWeekDay(year: number, month: number, day: number) {
    return new Date(`${year}/${month}/${day}`).getDay()
  }

  initDate() {
    if (
      (this.year % 4 === 0 && this.year % 100 !== 0) ||
      this.year % 400 === 0
    ) {
      this.monthList[1] = 29
    } else {
      this.monthList[1] = 28
    }
    // 获得指定年月的1号是星期几
    const firstDay = this.getWeekDay(this.year, this.month, 1)
    // 在1号前面填充多少个上个月的日期
    this.weekDay = firstDay === 7 ? 0 : firstDay
    // 获得最后一天是星期几，往后填充多少个
    const remineDay = this.getWeekDay(
      this.year,
      this.month,
      this.monthList[this.month - 1]
    )
    this.lastWeekDay = remineDay === 7 ? 6 : 6 - remineDay
  }

  changeDate(type: string) {
    switch (type) {
      case 'preYear':
        this.year -= 1
        break
      case 'preMonth':
        // 当前月份为1月， 上一个月分为12月，年份减1
        if (this.month === 1) {
          this.month = 12
          this.year -= 1
        } else {
          this.month -= 1
        }
        break
      case 'nextYear':
        this.year += 1
        break
      case 'nextMonth':
        // 当前月份为12月， 下个月分为1月，年份加1
        if (this.month === 12) {
          this.month = 1
          this.year += 1
        } else {
          this.month += 1
        }
        break
      default:
        break
    }
    this.initDate()
  }
}
</script>

<style lang="scss" scoped>
.canlendarPanel {
  height: 260px;
  border-bottom: 3px solid var(--background);
  display: flex;
  flex-direction: column;
  .canlendar-header {
    line-height: 30px;
    background: var(--special-bg);
    display: flex;
    flex-direction: row;
    justify-content: center;
    .currenDate {
      margin: 0 20px;
      font-size: 16px;
      font-family: PingFangSC-Medium;
    }
    .icon {
      width: 12px;
      height: 12px;
    }
  }
  .canlendar-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    .main-header {
      display: flex;
      line-height: 30px;
      color: var(--text-color);
      li {
        flex: 1;
      }
    }
    ul.main {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 10px;
      font-size: 14px;
      li {
        position: relative;
        width: 42px;
        line-height: 25px;
        cursor: pointer;
      }
      .disabled {
        color: var(--text-color);
        cursor: default;
      }
      .currentDay:before {
        content: '';
        position: absolute;
        display: inline-block;
        left: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 1px solid #FFE100;
      }
    }
  }
}
</style>