<template>
  <div class="g-tab-activity">
    <ul class="tab-list">
      <ol class="tab-list__item" v-for="(item, index) in data" :key="index" :class="bindClass(index)"
      @click.stop="activeTab(item, index)">
        <span class="title">标题</span>
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
  get bindClass() {
    return (id: number) => {
      return Object.is(this.tabIndex, id) && ['active']
    }
  }

  activeTab (item: Itabs, index: number) {
    if (index === this.tabIndex) return
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
      @include flex();
      &__item{
        text-align: center;
        line-height: 40px;
        min-width: 80px;
        cursor: pointer;
        transition: background .7;
        &:hover{
          background: rgba(0, 0, 0, 0.1);
        }
      }
      .active{
        background: $primary-color;
        animation: lastWidthAnim .5s;
        color: $light;
      }
    }
  }
  @keyframes lastWidthAnim {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
</style>