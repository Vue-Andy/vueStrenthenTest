// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import { yuanToFen, fenToYuan} from './jxzj-ui/utils/unitConversion.js'

Vue.use(ElementUI, {
  size: 'medium'
});

// 使用vue图片查看器插件
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
})

/**
 * 机械之家UI库
 */
import JxzjUi from './jxzj-ui'
Vue.use(JxzjUi)


import JxzjUtils from './jxzj-ui/utils/JxzjUtils'
Vue.prototype.JxzjUtils = JxzjUtils

// 定义金额全局过滤器
Vue.filter('fty', function (val) {
  if (val === null) {
    return '暂无价格'
  } else {
    return fenToYuan(val)
  }
});
Vue.filter('ytf', function (val) {
  if (val === null) {
    return '暂无价格'
  } else {
    return yuanToFen(val)
  }
});

Vue.directive('fontBold', {
  bind(el,binding) {
    el.style.fontWeight = 'bold'
  }
})

Vue.config.productionTip = false
// Vue.prototype.yuanTofen = yuanTofen
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
