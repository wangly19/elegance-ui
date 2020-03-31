<template>
<button class="g-button g-bg-error">
  11
</button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'GanButton'
})
export default class GanButton extends Vue {
}
</script>

<style lang="scss" scoped>
@import '^/scss/global.d.scss';
  .g-button{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 32px;
    padding: 0 15px;
    border-radius: 4px;
    transition: all .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: $light;
    &:hover {
      opacity: .8;
    }
  }
  .g-button-border{
    
  }
</style>