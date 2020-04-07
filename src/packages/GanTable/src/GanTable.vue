<template>
  <div class="g-table">
    <table class="base-table">
      <!-- 标题区域 -->
      <thead>
        <tr>
          <th v-for="item in column" :key="item.key" :width="item.wdith"
          :style="{textAlign: item.align}">{{item.value}}</th>
        </tr>
      </thead>
      <!-- body体 -->
      <tbody>
        <tr v-for="(row, rowId) in data" :key="rowId"
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
import { Component, Vue, Emit, Prop } from 'vue-property-decorator'

/**
 * 配置接口
 */
interface IColumn {
  key: string
  value: string
  aglin?: string
  width?: string | number
  slot?: string
}
@Component({
  name: 'GanTable'
})
export default class GanTable extends Vue {
  /**
   * 配置列
   */
  @Prop({ default: [], required: true, type: Array }) column!: any[]
  /**
   * 数据队列
   */
  @Prop({ default: [], required: true, type: Array }) data!: any[]

  /**
   * 生成key数组
   */
  filteTableRowData(row: any, column: any) {
    const result: any[] = []
    column.forEach((el: any, index: number) => {
      result.push(row[el.key])
    })
    return result
  }

  /**
   * 点击row事件
   */
  @Emit('rowClick')
  handleRowClick(row: object) {
    return row
  }

  /**
   * 双击row事件
   */
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
