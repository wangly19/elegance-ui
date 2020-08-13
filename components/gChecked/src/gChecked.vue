<template>
  <div class="g-checked">
    <div class="box">
      <g-icon name="icon-checkmark-outline" bold />
    </div>
    <span class="label">个人</span>
  </div>
  <button></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gIcon from 'components/gIcon/src/gIcon.vue';

export default defineComponent({
  name: 'GChecked',
  setup () {
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
  }
  .is-active {
    background: $primary-color;
    border: 1px solid $primary-color;
    @include position($mod: relative);
    &::before {
      content: "";
      width: 11px;
      height: 11px;
      background: white;
      @include baseRadius();
      @include position($mod: absolute, $top: 50%, $left: 50%);
      transform: translate(-50%, -50%);
    }
  }
}
</style>