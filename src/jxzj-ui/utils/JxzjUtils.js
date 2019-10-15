import formatDateTime from "@/jxzj-ui/utils/formatDateTime";
import {fenToYuan, yuanToFen} from "@/jxzj-ui/utils/unitConversion";
import trim from "@/jxzj-ui/utils/trim";
import {DeepCopy,price} from "@/jxzj-ui/utils/tool";
import {keyExistUserBtnKeys} from "@/tool/UserInfo";
// import {diffent} from "@/tool/Tools";

class JxzjUtils {
  /**
   * 将date对象转换成string类型的日期类型
   * @param date
   * @param type
   * @returns {string|*}
   */
  static formatDateTime(date, type) {
    return formatDateTime(date, type)
  }

  /**
   * 将分转成元
   * @param fen
   * @returns {number|*}
   */
  static fenToYuan(fen) {
    return fenToYuan(fen)
  }

  /**
   * 将元转成分
   * @param yuan
   * @returns {number|*}
   */
  static yuanToFen(yuan) {
    return yuanToFen(yuan)
  }

  /**
   * 去掉string前后空格
   * @param string
   * @returns {*}
   */
  static trim(string) {
    return trim(string)
  }

  /**
   * 深拷贝
   * @param data
   * @returns {*}
   * @constructor
   */
  static DeepCopy(data) {
    return DeepCopy(data)
  }

  /**
   * 判断当前登录用户是否拥有某个权限
   * @param string
   * @returns {boolean}
   */
  static privilege(string) {
    return keyExistUserBtnKeys(string)
  }

  /**
   * 保留金额两位小数
   * @param money
   * @returns {*}
   */
  static price(money) {
    return price(money)
  }

  /**
   * 去重两个数组对象
   * @param arr1,arr2:要去重的数组;keyword:去重关键字
   * @returns {Array}
   */
  static diffent(arr1,arr2,keyword) {
    return diffent(arr1,arr2,keyword)
  }
}

export default JxzjUtils
