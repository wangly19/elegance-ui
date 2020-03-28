import Vue from 'vue'

declare function install(vue: typeof Vue): void

declare const _default: {
  install: typeof install
}

export default _default;
export * from './gan-row'
export * from './gan-col'