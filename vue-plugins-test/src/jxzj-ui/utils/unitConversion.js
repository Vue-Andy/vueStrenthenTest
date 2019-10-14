/**
 * 单位转换工具类
 *
 * 【强制】所有金额单位统一为分，所有体积单位统一为立方分米, 所有重量单位统一为克，所有长度单位统一为毫米。通过合理的设计避免使用小数类型。
 *
 * 数据在传递和计算时，都使用整形值；前端在最终显示前，才转换为带小数的常用单位；从input接收到用户输入的小数值后，立即转换为整形值，再进行存储和运算。
 * 以金额为例：在最终显示前，调fenToYuan转换为元；从input接收到用户输入的金额元后，立即调用yuanToFen转换为分，再进行存储或运算
 *
 * @Author Sine
 * @Date 2018/11/13
 *
 */

/**
 * 将金额分转换为元
 */
export function fenToYuan(fen) {
  if (!fen) {
    return 0.00
  }
  let fenInt = parseInt(fen)
  if (isNaN(fenInt)) {
    return 0.00
  }

  // 保存符号位
  let symbolicBit = ''
  if (0 > fenInt) {
    symbolicBit = '-'
  }

  // 转换为字符串，过滤掉非数字的字符
  let fenStr = String(fenInt).replace(/[^\d]/g, '')
  let length = fenStr.length

  if (0 === length) {
    return 0.00
  } else if (1 === length) {
    fenStr = '00' + fenStr
    length = 3
  } else if (2 === length) {
    fenStr = '0' + fenStr
    length = 3
  }

  // 恢复符号位，在倒数第二位插入小数点
  return symbolicBit + fenStr.substring(0, length - 2) + '.' + fenStr.substring(length - 2, length)
}

/**
 * 将金额元转换为分 不足1分的部分将被舍去
 */
export function yuanToFen(yuan) {
  if (!yuan) {
    return 0
  }
  // 转换为字符串
  let yuanStr = String(yuan)

  // 取出符号位
  let symbolicBit = 1
  if ('-' === yuanStr.substring(0, 1)) {
    symbolicBit = -1
  }

  // 过滤掉非数字非小数点的字符
  yuanStr = yuanStr.replace(/[^\d.]/g, '')
  let length = yuanStr.length

  // 查找第一个小数点所在位置
  let decimalPointPosition = yuanStr.indexOf('.')

  // 找不到小数点的，直接补00后输出
  if (-1 === decimalPointPosition) {
    return parseInt(yuanStr + '00') * symbolicBit
  } else {
    // 小数部分字符串，过滤掉非数字的字符
    let decimalStr = yuanStr.substring(decimalPointPosition + 1, length).replace(/[^\d]/g, '')
    let decimalStrLength = decimalStr.length

    if (0 === decimalStrLength) {
      return parseInt(yuanStr.substring(0, decimalPointPosition) + '00') * symbolicBit
    } else if (1 === decimalStrLength) {
      return parseInt(yuanStr.substring(0, decimalPointPosition) + decimalStr + '0') * symbolicBit
    } else if (2 === decimalStrLength) {
      return parseInt(yuanStr.substring(0, decimalPointPosition) + decimalStr) * symbolicBit
    } else {
      return parseInt(yuanStr.substring(0, decimalPointPosition) + decimalStr.substring(0, 2)) * symbolicBit
    }
  }
}

