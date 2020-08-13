<template>
  <div class="g-input-panel">
    <div class="prev">
      <slot name="prev">
        <g-icon
        mouse
        name="icon-search" />
      </slot>
    </div>
    <div class="g-input">
      <input type="text"
        :value="modelValue"
        @input="bindInput"
        :placeholder="props.placeholder"
      />
      <g-icon
        class="clear-icon"
        v-show="modelValue"
        mouse
        @click="clearValue"
        name="icon-arrowhead-left" />
    </div>
    <div class="next">
      <slot>查看</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Slots } from 'vue';
import Icon from 'components/gIcon/src/gIcon.vue';
interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

export default defineComponent({
  name: 'gInput',
  props: {
    // NOTE 输入框描述
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    modelValue: {
      type: [Number, String],
      default: ''
    }
  },
  setup (props, context) {
    // 输入框事件
    const bindInput = (e: HTMLInputEvent) => context.emit('update:modelValue', e.target.value)
    // 清除事件
    const clearValue = () => context.emit('update:modelValue', '');
    return {
      props,
      bindInput,
      clearValue
    }
  },
  components: {
    [Icon.name]: Icon
  }
})
</script>

<style lang="scss" scoped>
.g-input-panel {
  @include flex($mod: inline-flex, $justifyContent: flex-start, $alignItems: center);
  @include baseRadius();
  border: 1px solid $border-color;
  .extend-pd {
    padding: 5px 10px;
  }
  .prev {
    @extend .extend-pd;
  }
  .g-input {
    @include flex($alignItems: center);
    .clear-icon {
      color: $dark-color;
      @include trOpacityTime();
      &:hover {
        color: $border-color;
      }
    }
    input {
      @include clearOutLine();
      @include clearBorder();
      font-size: 100%;
    }
  }
  .next{
    @extend .extend-pd;
  }
}
</style>