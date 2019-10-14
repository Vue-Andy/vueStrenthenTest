import formatDateTime from './formatDateTime.js'
import { fenToYuan, yuanToFen } from './unitConversion'
import trim from './trim'
import { DeepCopy, price, userData } from './tool'
import { downImg } from './downImg'
import { keyExistUserBtnKeys } from "@/tool/UserInfo"; // 权限控制

// export default {
//   formatDateTime,
//   fenToYuan,
//   yuanToFen,
//   trim,
//   DeepCopy,
//   price
// }

export default function (Vue) {
  Vue.prototype.$formatDateTime = formatDateTime
  Vue.prototype.$fenToYuan = fenToYuan
  Vue.prototype.$yuanToFen = yuanToFen
  Vue.prototype.$trim = trim
  Vue.prototype.$DeepCopy = DeepCopy
  Vue.prototype.$price = price
  Vue.prototype.$userData = userData()
  Vue.prototype.$downImg = downImg
  Vue.prototype.$privilege = keyExistUserBtnKeys
}
