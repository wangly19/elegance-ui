<template>
  <div class="g-message">
    <Teleport to="#gMessage">
      <div class="teleport-model-message"
      v-if="modelValue"
      :class="[currentTypeClass]"
      >
        <p class="text">{{props.message}}</p>
        <g-icon name="icon-close" class="close-icon" mouse
        @click="onClose"
        />
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, onUnmounted, onMounted } from 'vue';

export default defineComponent({
  name: 'gMessage',
  props: {
    modelValue: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'primary'
    },
    time: {
      type: [Number],
      default: NaN
    },
    message: {
      type: String,
      default: 'no message model value...'
    }
  },
  setup (props, context) {
    let timeor: number
    onMounted(() => {
      if (!isNaN(props.time)) {
        timeor = setTimeout(() => {
          onClose()
        }, props.time)
      }
    })
    onUnmounted(() => {
      clearTimeout(timeor)
    })
    // 关闭方法
    const onClose = () => {
      context.emit('onClose')
      context.emit('update:modelValue', false)
    }
    // 当前类型class
    const currentTypeClass: ComputedRef<string> = computed((): string => {
      return `${props.type}-bg`
    })
    return {
      currentTypeClass,
      onClose,
      props
    }
  }
})
</script>

<style lang="scss" scoped>
.teleport-model-message {
  @include position($mod: fixed, $top: 0, $left: 0);
  @include flex($justifyContent: center, $alignItems: center);
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 13px;
  .text {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .close-icon {
    @include position($mod: absolute, $right: 0);
    @include trOpacityTime();
    display: inline-block;
    text-align: center;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.2);
    font-size: 12px;
    &:hover {
    background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
