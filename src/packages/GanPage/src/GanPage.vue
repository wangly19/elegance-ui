<template>
  <div class="g-page">
    <p class="page-title">当前共有{{total}}条数据</p>
    <ul class="page-list">
      <button class="page-list__item action" :disable="isPreDisable" @click="missPre">&lsaquo;</button>
      <template v-for="item in pages">
        <ol class="page-list__item" v-if="isShowBtn(item) || isShowEllipsis(item)">
          <div @click="tagglePage(item)" v-if="isShowBtn(item)"
            :class="current === item && 'is-active'" class="current">{{item}}</div>
          <div v-else-if="isShowEllipsis(item)" class="current">&#8230;</div>
        </ol>
      </template>
      <button class="page-list__item action" @click="missNext">&rsaquo;</button>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'GanPage'
})
export default class GanPage extends Vue {
  @Prop({ default: 0 }) total!: number
  @Prop({ default: 10 }) pageSize!: number
  @Prop({ default: false }) showTotal!: boolean
  private current: number = 1
  private pages: any = []
  private pageLength = 0

  @Watch('total')
  onChangeTotal(newVal: number) {
    this.initPageList()
  }

  @Watch('current')
  onChangeCurrent(newVal: number) {
    this.$emit('change', newVal)
  }

  get isPreDisable() {
    return this.current - 1 === 0 || false
  }

  initPageList() {
    const { total, pageSize } = this
    this.pageLength = Math.ceil(total / pageSize)
    this.pages = new Array(this.pageLength)
    for (let i = 0; i < this.pageLength; i++) {
      this.pages[i] = i + 1
    }
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
    padding: 0 10px 0 10px;
    .page-list{
      @include flex();
      margin-bottom: 0;
      .action {
        display: inline-block;
        min-width: 30px;
        min-height: 30px;
        line-height: 30px;
        text-align: center;
        border: none;
        @include flex($justify: center, $align: center);
      }
      &__item{
        margin-left: 5px;
        cursor: pointer;
        font-size: 16px;
        .current{
          display: inline-block;
          min-width: 30px;
          min-height: 30px;
          line-height: 30px;
          text-align: center;
        }
        &:hover{
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .is-active{
        display: inline-block;
        background: $primary-color;
        color: $light;
        transition: all .6s;
      }
    }
  }
</style>
