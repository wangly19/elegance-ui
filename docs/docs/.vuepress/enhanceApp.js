import Vue from 'vue'
import Elegance from 'elegance-ui'
import 'elegance-ui/lib/index.css'
console.log(Elegance)
 
export default ({
  Vue,
}) => {
  Vue.use(Elegance)
}