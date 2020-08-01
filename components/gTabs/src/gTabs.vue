<template>
  <div class="tabs-list">
      <div class="tabs-content">
        <div v-for="item in 4" :key="index">{{item}}</div>
      </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'gTabs'
})
</script>

<style lang="scss" scoped>
@import "./gTabs.scss";
</style>