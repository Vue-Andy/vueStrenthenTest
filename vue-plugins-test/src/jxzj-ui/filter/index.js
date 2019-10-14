import formatDateTime from '../utils/formatDateTime'
import { fenToYuan, yuanToFen } from '../utils/unitConversion'
import { price } from '../utils/tool'

const FTY = (val) => {
  if (val === null) {
    return '0.00'
  } else {
    return fenToYuan(val) == 0 ? '0.00' : fenToYuan(val)
  }
}

const YTF = (val) => {
  if (val === null) {
    return '0.00'
  } else {
    return yuanToFen(val) == 0 ? '0.00' : yuanToFen(val)
  }
}

export default function (Vue) {
  Vue.filter("formatDateTime", formatDateTime)
  Vue.filter("fenToYuan", FTY)
  Vue.filter("yuanToFen", YTF)
  Vue.filter("price", price)
}