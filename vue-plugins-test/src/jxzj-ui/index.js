// CSS 库
// import './lib/theme-chalk/index.scss'

// 组件
import components from './packages/index.js'

// 过滤器
import filter from './filter/index.js'

//指令
import directive from './directive/index.js'

// 工具函数
import utils from './utils/index.js'

const install = function (Vue) {

  components(Vue)

  filter(Vue)

  utils(Vue)

  directive(Vue)

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}
