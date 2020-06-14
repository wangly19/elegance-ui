import Vue, { Component } from 'vue'
import '^/iconfont/alibaba.css'
import GanIcon from '@/packages/GanIcon'
import GanRow from '@/packages/GanRow'
import GanCol from '@/packages/GanCol'
import GanTag from '@/packages/GanTag'
import GanProgress from '@/packages/GanProgress'
import GanCanlender from '@/packages/GanCanlender'
import GanScrollView from '@/packages/GanScrollView'
import GanTabs from '@/packages/GanTabs'
import GMessages from '@/packages/GanMessage'
import GanTooltip from '@/packages/GanTooltip'
import GanPage from '@/packages/GanPage'
import GanOmit from '@/packages/GanOmit'
import GanButton from '@/packages/GanButton'
import GanButtonGroup from '@/packages/GanButtoGroup'
import GanTable from '@/packages/GanTable'
import GanRadios from '@/packages/GanRadio'
import GanLink from '@/packages/GanLink'
import GanImage from '@/packages/GanImage'
import GanCard from '@/packages/GanCard'
import GanChecks from '@/packages/GanCheck'
import GanInput from '@/packages/GanInput'
import GanDevInput from '@/packages/GanDevInput'
import GanSelect from '@/packages/GanSelect'
import GanWindow from '@/packages/GanWindow'
import GanRange from '@/packages/GanRange'
import GanDrawer from '@/packages/GanDrawer'
import GanAvatar from '@/packages/GanAvatar'
import GanSwipers from '@/packages/GanSwiper'

/**
 * 引入指令
 */
import '@/packages/GanLoading'
import '@/packages/GanClickOutSite'

/**
 * 获取组件集合
 * Get a collection of components
 */
const components = {
  GanIcon,
  GanRow,
  GanCol,
  GanTag,
  GanProgress,
  GanCanlender,
  GanScrollView,
  GanTabs,
  GanTooltip,
  GanPage,
  GanOmit,
  GanButton,
  GanButtonGroup,
  GanTable,
  GanCard,
  GanLink,
  GanImage,
  GanInput,
  GanDevInput,
  GanSelect,
  GanRange,
  GanWindow,
  GanDrawer,
  ...GanChecks,
  ...GanRadios,
  ...GanSwipers,
  GanAvatar
}
const componentsName: { [propsName: string]: any } = { ...components }

/**
 * 注册组件安装器
 * Register the component installer
 */
const install = (vue: typeof Vue): void => {
  /**
   * 判断组件是否为空
   * Determines whether the component is empty
   */
  Object.keys(componentsName).forEach(key => {
    /**
     * 注册组件
     * Register components
     */
    vue.component(key, componentsName[key])
  })
  vue.prototype.$gmessage = GMessages
}

/**
 * 导出组件安装对象
 * exports components install object
 */
export default {
  version: '0.1.14 developer',
  install,
  GMessages,
  // 展开组件
  ...components
}
