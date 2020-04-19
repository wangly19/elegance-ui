<template>
  <div class="g-page">
    <p class="page-title">当前共有11条数据</p>
    <ul class="page-list">
      <ol class="page-list__item action"><a>&laquo;</a></ol>
      <ol v-for="item in pages" :key="item" class="page-list__item">
        <div @click="tagglePage(item)" v-if="isShowBtn(item)"
          :class="current === item && 'is-active'" class="current">{{item}}</div>
        <div v-else-if="isShowEllipsis(item)" class="ellipsis">&#8230;</div>
      </ol>
      <ol class="page-list__item action"><a>&raquo;</a></ol>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'GanPage'
})
export default class GanPage extends Vue {
  @Prop({ default: 100 }) total!: number
  // @Prop({ default: 1 }) current!: number
  private current: number = 1
  private pages: any = []
  private pageSize = 10
  private pageLength = 0

  @Watch('total')
  onChangeTotal(newVal: number) {
    this.initPageList()
  }

  @Watch('current')
  onChangeCurrent(newVal: number) {
    this.$emit('change', newVal)
  }

  initPageList() {
    const { total, pageSize } = this
    const more = total % pageSize ? 1 : 0
    this.pageLength = total / pageSize + more
    this.pages = new Array(this.pageLength)
    for (let i = 0; i < this.pageLength; i++) {
      this.pages[i] = i + 1
    }
    console.log(this.pages)
  }

  tagglePage(index: number) {
    this.current = index
  }

  missPre() {
    this.current -= this.current === 1 ? 0 : 1
  }

  missNext() {
    this.current += this.current === this.pageLength ? 0 : 1
  }

  isShowBtn(index: number) {
    const { pageLength, current } = this
    if (pageLength < 8) {
      return true
    } else {
      if (index === 1 || index === pageLength) {
        return true
      } else {
        if (current < 4 && index < 6) {
          return true
        } else if (current > pageLength - 4 && index > pageLength - 6) {
          return true
        } else if (index < current + 3 && index > current - 3) {
          return true
        } else {
          return false
        }
      }
    }
  }

  isShowEllipsis (index: number) {
    return index === 2 || index === this.pageLength - 1
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
      .action {
          padding: 5px 10px 5px 10px;
          cursor: pointer;
          margin: 0 10px 0 10px;
          border-radius: 3px;
      }
      &__item{
        .ellipsis{}
        .current{
          padding: 5px 10px 5px 10px;
          cursor: pointer;
          border-radius: 3px;
        }
        &:hover{
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .is-active{
        background: $primary-color;
        color: $light;
      }
    }
  }
</style>