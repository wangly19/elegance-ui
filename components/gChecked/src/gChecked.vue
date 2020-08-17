<template>
  <div class="g-checked">
    {{props.modelValue ? 1: 0}}
    <div class="box"
      :class="[`${props.modelValue && 'is-active'}`]"
      @click="toggleActive"
    >
      <g-icon name="icon-checkmark-outline" />
    </div>
    <span class="label">个人</span>
  </div>
  <button></button>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, toRef } from 'vue';
import gIcon from 'components/gIcon/src/gIcon.vue';

export default defineComponent({
  name: 'GChecked',
  props: {
    modelValue: {
      type: Boolean, 
      default: true
    }
  },
  setup (props, context) {
    console.log(props.modelValue)
    const toggleActive = () => {
      context.emit('update:modelValue', !props.modelValue)
    }
    return {
      props,
      toggleActive
    }
  },
  components: {
    [gIcon.name]: gIcon
  }
})
</script>

<style lang="scss" scoped>
.g-checked {
  @include flex($justifyContent: flex-start, $alignItems: center);
  .box {
    height: 22px;
    width: 22px;
    border: 1px solid $border-color;
    @include baseRadius();
    cursor: pointer;
    @include flex($justifyContent: center, $alignItems: center);
    @include trOpacityTime();
  }
  .is-active {
    background: $primary-color;
    border: 1px solid $primary-color;
    color: white
  }
}
</style>