import Vue from 'vue'
import App from '@/App.vue'
import Elegance from '@/packages'

Vue.use(Elegance)
Vue.prototype.$myProperty = '111'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
