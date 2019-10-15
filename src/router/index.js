import Vue from 'vue'
import Router from 'vue-router'
import viewer from '@/components/v-viewer'
import filter from '@/components/filter'
import customizeComponent from '@/components/customizeComponent'
import directives from '@/components/directive'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/viewer',
      name: 'viewer',
      component: viewer
    }, {
      path: '/filter',
      name: 'Gfilter',
      component: filter
    }, {
      path: '/customizeComponent',
      name: 'customizeComponent',
      component: customizeComponent
    }, {
      path: '/directives',
      name: 'directives',
      component: directives
    }
  ]
})
