import Vue from 'vue'
import Elegance from 'elegance-ui/lib/index.umd.min.js'
import 'elegance-ui/lib/index.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
 
export default ({
 Vue,
}) => {
 Vue.use(Elegance)
 Vue.use(Element)
}