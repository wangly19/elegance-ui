<template>
  <div class="g-table">
    <table class="base-table">
      <!-- 标题区域 -->
      <thead>
        <tr>
          <th v-for="item in column" :key="item.key" width="300"
          :style="{textAlign: item.align}">{{item.value}}</th>
        </tr>
      </thead>
      <!-- body体 -->
      <tbody>
        <tr v-for="(row, rowId) in datas" :key="rowId"
        @click="handleRowClick(row)"
        @dblclick="handleDbRowClick(row)">
          <td v-for="(item, index) in filteTableRowData(row, column)" :key="index"
          :style="{textAlign: column[index].align}">
            {{item}}
            <slot v-if="column[index].slot" :name="column[index].slot"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

/**
 * 配置接口
 */
interface IColumn {
  key: string
  value: string
  aglin: string
  width: string | number
  [prop: string]: any
}
@Component({
  name: 'GanTable'
})
export default class GanTable extends Vue {
  private column: any = [
    { key: 'name', value: '姓名' },
    { key: 'age', value: '年龄', align: 'center' },
    { key: 'sex', value: '性别', slot: 'action' }
  ]

  private datas = [
    { name: 'wang', age: '19', sex: '男' },
    { name: 'wang1', sex: '男', age: '20' }
  ]

  /**
   * 生成key数组
   */
  filteTableRowData(row: any, column: any) {
    const result: any[] = []
    column.forEach((el: any, index: number) => {
      console.log(el)
      result.push(row[el.key])
    })
    return result
  }

  /**
   * 点击事件
   */
  @Emit('rowClick')
  handleRowClick(row: object) {
    return row
  }

  @Emit('rowDbClick')
  handleDbRowClick(row: object) {
    return row
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-table {
    .base-table {
      height: 100%;
      width: 100%;
      max-width: 100%;
      border-spacing: 0;
      text-align: left;
      border-collapse: collapse\9;
      table-layout: inherit;
      thead {
        th{
          padding: 14px 20px;
          font-weight:unset;
          background: $border-color-base;
        }
      }
      tbody{
        tr{
        td{
          padding: 14px 20px;
        }
      }
      }
    }
  }
</style>
