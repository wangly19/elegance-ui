import Vue from 'vue'
import App from '@/App.vue'
import Elegance from '@/packages'
import router from './router'
console.log(Elegance)

Vue.use(Elegance)
Vue.prototype.$myProperty = '111'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
