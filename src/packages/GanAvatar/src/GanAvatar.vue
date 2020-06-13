<template>
  <div class="gan-avatar">
    <p class="gan-avatar__name" v-if="name">{{name}}</p>
    <img class="gan-avatar__img" v-show="src"
    :src="src" alt="">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanAvatar'
})
export default class GanAvatar extends Vue {
  @Prop({ default: '默认', type: String }) name!: string
  @Prop({ default: '', type: String }) src!: string
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
$base-size: 30px;
.gan-avatar {
  display: inline-block;
  height: $base-size;
  width: 120px;
  background: $primary-color;
  @include flex($justify: space-between, $align: center);
  border-radius: 150px;
  &__name {
    text-align: center;
    flex: 1;
    color: $light;
    overflow: hidden;
    font-size: 14px;
    white-space:nowrap;
    margin-left: 12px;
    margin-right: 12px;
  }
  &__img {
    width: $base-size;
    height: $base-size;
    border-radius: 50%;
  }
}
</style>
