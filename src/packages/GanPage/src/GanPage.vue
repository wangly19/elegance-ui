<template>
  <div class="g-page">
    <p class="page-title">当前共有11条数据</p>
    <ul class="page-list">
      <ol class="page-list__item"><a>&laquo;</a></ol>
      <ol class="page-list__item"><a>&lsaquo;</a></ol>
      <ol class="page-list__item" v-for="item in resetMap" :key="item">{{item.value}}</ol>
      <ol class="page-list__item"><a>&rsaquo;</a></ol>
      <ol class="page-list__item"><a>&raquo;</a></ol>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanPage'
})
export default class GanPage extends Vue {
  @Prop({ default: 105 }) total!: number
  @Prop({ default: 1 }) current!: number
  private length: number = 10
  private resetMap: Array<object> = []
  /**
   * 过滤数组
   */
  get filterPageList() {
    this.resetMap.forEach((el: any) => {
    })
    return []
  }

  /**
   * 产生页面堆栈
   */
  initPageList() {
    const { total, length } = this
    for (let i = 1, len = Math.ceil(total / length); i <= len; i++) {
      this.resetMap.push({
        value: i,
        id: i
      })
    }
  }

  created() {
    this.initPageList()
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-page{
    @include flex($justify: space-between, $align: center);
    .page-list{
      @include flex();
      margin-bottom: 0;
      &__item{
        padding: 5px 10px 5px 10px;
        cursor: pointer;
        border-radius: 3px;
        &:hover{
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .is-active{
        background: $primary-color;
      }
    }
  }
</style>