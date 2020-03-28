import Elegance from '../../../lib/index.umd'
import '../../../lib/index.css'

export default ({
  Vue
 }) => {
  // ...做一些其他的应用级别的优化
  Vue.use(Elegance)
 }