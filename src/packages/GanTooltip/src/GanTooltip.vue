<template>
  <span class="g-tips" :tooltip="tootaip" :placement="placement">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'GanTooltip'
})
export default class GanTooltip extends Vue {
  @Prop({ default: 'top' }) placement!: string
  @Prop({ default: '提示工具' }) tootaip!: string
}
</script>

<style lang="scss" scoped>
[tooltip] {
  position: relative;
}
[tooltip]::after {
  display: none;
  content: attr(tooltip);
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 8px 15px;
  max-width: 200px;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  z-index: 100;
}

[tooltip]::before {
  display: none;
  content: "";
  position: absolute;
  border: 5px solid transparent;
  border-bottom-width: 0;
  z-index: 100;
}

[tooltip]:hover::after {
  display: block;
}

[tooltip]:hover::before {
  display: block;
}

[tooltip][placement^="top"]::after,
[tooltip][placement^="top"]::before {
  animation: anime-top 300ms ease-out forwards;
}

[tooltip][placement^="right"]::after,
[tooltip][placement^="right"]::before {
  animation: anime-right 300ms ease-out forwards;
}

[tooltip][placement^="bottom"]::after,
[tooltip][placement^="bottom"]::before {
  animation: anime-bottom 300ms ease-out forwards;
}

[tooltip][placement^="left"]::after,
[tooltip][placement^="left"]::before {
  animation: anime-left 300ms ease-out forwards;
}
/* 气泡主题 */

.tooltip-theme-dark,
[tooltip]::after {
  color: #fff;
  background-color: #313131;
}

.tooltip-theme-light,
[tooltip][effect="light"]::after {
  color: #313131;
  background-color: #fff;
  border: 1px solid #313131;
}
/* 气泡位置 */
/*----上----*/

.tooltip-placement-top,
[tooltip]:not([placement])::after,
[tooltip][placement=""]::after,
[tooltip][placement="top"]::after {
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 0);
}

.tooltip-placement-top-right,
[tooltip][placement="top-right"]::after {
  bottom: calc(100% + 10px);
  left: 100%;
  transform: translate(-100%, 0);
}

.tooltip-placement-top-left,
[tooltip][placement="top-left"]::after {
  bottom: calc(100% + 10px);
  left: 0;
  transform: translate(0, 0);
}
/*----右----*/

.tooltip-placement-right,
[tooltip][placement="right"]::after {
  left: calc(100% + 10px);
  top: 50%;
  transform: translate(0, -50%);
}

.tooltip-placement-right-top,
[tooltip][placement="right-top"]::after {
  left: calc(100% + 10px);
  top: 0;
  transform: translate(0, 0);
}

.tooltip-placement-right-bottom,
[tooltip][placement="right-bottom"]::after {
  left: calc(100% + 10px);
  top: 100%;
  transform: translate(0, -100%);
}
/*----下----*/

.tooltip-placement-bottom,
[tooltip][placement="bottom"]::after {
  top: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 0);
}

.tooltip-placement-bottom-right,
[tooltip][placement="bottom-right"]::after {
  top: calc(100% + 10px);
  left: 100%;
  transform: translate(-100%, 0);
}

.tooltip-placement-bottom-left,
[tooltip][placement="bottom-left"]::after {
  top: calc(100% + 10px);
  left: 0;
  transform: translate(0, 0);
}
/*----左----*/

.tooltip-placement-left,
[tooltip][placement="left"]::after {
  right: calc(100% + 10px);
  top: 50%;
  transform: translate(0, -50%);
}

.tooltip-placement-left-top,
[tooltip][placement="left-top"]::after {
  right: calc(100% + 10px);
  top: 0;
  transform: translate(0, 0);
}

.tooltip-placement-left-bottom,
[tooltip][placement="left-bottom"]::after {
  right: calc(100% + 10px);
  top: 100%;
  transform: translate(0, -100%);
}
/* 三角形主题 */

.triangle-theme-dark,
[tooltip]::before {
  border-top-color: #313131;
}

.triangle-theme-light,
[tooltip][effect="light"]::before {
  border-top-color: #313131;
}
/* 三角形位置 */
/*----上----*/

.triangle-placement-top,
[tooltip]:not([placement])::before,
[tooltip][placement=""]::before,
[tooltip][placement="top"]::before {
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translate(-50%, 0);
}

.triangle-placement-top-left,
[tooltip][placement="top-left"]::before {
  bottom: calc(100% + 5px);
  left: 10px;
}

.triangle-placement-top-right,
[tooltip][placement="top-right"]::before {
  bottom: calc(100% + 5px);
  right: 10px;
}
/*----右----*/

.triangle-placement-right,
[tooltip][placement="right"]::before,
.triangle-placement-right-top,
[tooltip][placement="right-top"]::before,
.triangle-placement-right-bottom,
[tooltip][placement="right-bottom"]::before {
  left: calc(100% + 3px);
  top: 50%;
  transform: translate(0, -50%) rotateZ(90deg);
}

.triangle-placement-right-top,
[tooltip][placement="right-top"]::before {
  top: 10px;
}

.triangle-placement-right-bottom,
[tooltip][placement="right-bottom"]::before {
  bottom: 10px;
  top: auto;
  transform: translate(0, 0) rotateZ(90deg);
}
/*----下----*/

.triangle-placement-bottom,
[tooltip][placement="bottom"]::before,
.triangle-placement-bottom-left,
[tooltip][placement="bottom-left"]::before,
.triangle-placement-bottom-right,
[tooltip][placement="bottom-right"]::before {
  top: calc(100% + 5px);
  left: 50%;
  transform: translate(-50%, 0) rotateZ(180deg);
}

.triangle-placement-bottom-left,
[tooltip][placement="bottom-left"]::before {
  transform: translate(0, 0) rotateZ(180deg);
  left: 10px;
}

.triangle-placement-bottom-right,
[tooltip][placement="bottom-right"]::before {
  right: 10px;
  left: auto;
}
/*----左----*/

.triangle-placement-left,
[tooltip][placement="left"]::before,
.triangle-placement-left-top,
[tooltip][placement="left-top"]::before,
.triangle-placement-left-bottom,
[tooltip][placement="left-bottom"]::before {
  right: calc(100% + 3px);
  top: 50%;
  transform: translate(0, -50%) rotateZ(270deg);
}

.triangle-placement-left-top,
[tooltip][placement="left-top"]::before {
  top: 10px;
}

.triangle-placement-left-bottom,
[tooltip][placement="left-bottom"]::before {
  bottom: 10px;
  top: auto;
  transform: translate(0, 0) rotateZ(270deg);
}

@keyframes anime-top {
  from {
    opacity: 0.5;
    bottom: 150%;
  }
}

@keyframes anime-bottom {
  from {
    opacity: 0.5;
    top: 150%;
  }
}

@keyframes anime-left {
  from {
    opacity: 0.5;
    right: 150%;
  }
}

@keyframes anime-right {
  from {
    opacity: 0.5;
    left: 150%;
  }
}
</style>
