<template>
  <div class="gan-input-next">
    <span class="first">
      <template v-if="entryFirst.term && entryFirst.text">
        {{entryFirst.text}}
      </template>
      <gan-icon :name="entryFirst.text" class="slot-icon" v-else/>
    </span>
    <input type="text" class="g-input" :value="value"
    :placeholder="placeholder"
    @focus="$emit('focus')"
    @input="$emit('input', $event.target.value)">
    <span class="tail">
      <template v-if="entryTail.term && entryTail.text">
        {{entryTail.text}}
      </template>
      <gan-icon :name="entryTail.text" class="slot-icon"
      @click.stop="$emit('onTail')" point
      v-else/>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import GanIcon from '@/packages/GanIcon'

@Component({
  name: 'GanDevInput',
  components: { GanIcon }
})
export default class GanDevInput extends Vue {
  @Prop() value!: string
  @Prop({ default: '请输入' }) placeholder!: string

  get entryFirst(): object {
    const $attr: Record<string, string> = this.$attrs
    const firsts: Array<string> = $attr.first ? $attr.first.split('|') : ['text', '']
    return {
      term: firsts.includes('text'),
      text: firsts[1] ? firsts[1] : ''
    }
  }

  get entryTail(): object {
    const $attr: Record<string, string> = this.$attrs
    const tails: Array<string> = $attr.tail ? $attr.tail.split('|') : ['text', '']
    return {
      term: tails.includes('text'),
      text: tails[1] ? tails[1] : ''
    }
  }

}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
$baseSize: 30px;
.gan-input-next {
  display: inline-block;
  line-height: $baseSize;
  .slot-icon {
    font-size: 20px;
  }
  .first {
    font-size: 12px;
    display: none;
    line-height: inherit;
    background: $border-color-base;
  }
  .g-input {
    outline: none;
    border: none;
    border-radius: 5px;
    background: $border-color-base;
    line-height: inherit;
    padding: 0 5px 0 5px;
  }
  .tail {
    font-size: 12px;
    line-height: inherit;
    display: none;
    background: $border-color-base;
  }
}
// 调度组
.gan-input-next[group] {
  .g-input {
    border-radius: 0;
    float: left;
  }
  .first {
    display: inline-block;
    padding-left: 5px;
    float: left;
  }
  .tail {
    display: inline-block;
    padding-right: 5px;
    max-height: 30px;
    float: left;
  }
}
</style>