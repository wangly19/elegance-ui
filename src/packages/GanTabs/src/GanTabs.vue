<template>
  <div class="g-tab-activity">
    <ul class="tab-list">
      <ol class="tab-list__item" v-for="(item, index) in data" :key="index" :class="bindClass(index)"
      @click.stop="activeTab(item, index)">
        <span class="title">{{item.value}}</span>
      </ol>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

interface Itabs {
  label: string | number
  value: string
}
@Component({
  name: 'GanTabs'
})
export default class GanTabs extends Vue {
  @Prop() data!: Array<Itabs>
  @Prop() isLink!: string | undefined
  private tabIndex: number = 0
  private direction: number = 1
  get bindClass() {
    return (id: number) => {
      if (Object.is(this.tabIndex, id)) {
        if (this.direction === 1) {
          return ['next-active']
        } else {
          return ['last-active']
        }
      }
    }
  }

  bindStyle(index: number) {
    const animationName: string = index > this.tabIndex ? 'nextWidthAnim' : 'lastWidthAnim'
    return { animation: `${animationName} .5s` }
  }

  activeTab (item: Itabs, index: number) {
    if (index === this.tabIndex) return
    this.direction = index > this.tabIndex ? 1 : -1
    this.tabIndex = index
    this.$emit('taggleClick', { item, index })
  }
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-tab-activity{
    .tab-list{
      margin-bottom: 0;
      border-radius: 3px;
      min-width: 200px;
      @include flex($justify: flex-start, $align: flex-start);
      &__item{
        text-align: center;
        line-height: 40px;
        min-width: 80px;
        cursor: pointer;
        padding: 0;
        transition: background .7;
        &:hover{
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .next-active{
        background: $primary-color;
        animation: nextWidthAnim .5s;
        color: $light;
      }
      .last-active{
        background: $primary-color;
        animation: lastWidthAnim .5s;
        color: $light;
      }
    }
  }
  @keyframes nextWidthAnim {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  @keyframes lastWidthAnim {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
</style>