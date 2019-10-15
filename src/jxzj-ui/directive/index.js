import {keyExistUserBtnKeys} from "./UserInfo"

export default function (Vue) {
  Vue.directive('display-key', {
    inserted: function (el, binding) {
      //获取到v-display-key的值
      let displayKey = binding.value
      if (displayKey) {
        //判断用户是否存在该权限
        let hasPermission = keyExistUserBtnKeys(displayKey)
        //如果用户没有该权限，则删除对应的dom节点
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      } else {
        //v-display-key值为空，抛出异常
        throw new Error(`need key! Like v-display-key="'displayKey'"`)
      }
    }
  })
}
