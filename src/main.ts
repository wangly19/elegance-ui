import Vue from 'vue'
import App from './App.vue'
import EleganceUI from '@/packages'

Vue.use(EleganceUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
