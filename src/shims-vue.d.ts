import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $message: any
  }
}
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
