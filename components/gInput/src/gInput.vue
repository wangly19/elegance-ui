<template>
  <div class="g-input-panel">
    <div class="prev">
      <g-icon
        mouse
        name="icon-search" />
    </div>
    <div class="g-input">
      <input type="text"
        :placeholder="props.placeholder"
      />
      <g-icon
        class="clear-icon"
        mouse
        name="icon-arrowhead-left" />
    </div>
    <div class="next">
      .com
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Slots } from 'vue';
import Icon from 'components/gIcon/src/gIcon.vue';
interface SetupContext {
  attrs: object
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
}

export default defineComponent({
  name: 'gInput',
  props: {
    // NOTE 输入框描述
    placeholder: String
  },
  setup (props, context: SetupContext) {
    return {
      props
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