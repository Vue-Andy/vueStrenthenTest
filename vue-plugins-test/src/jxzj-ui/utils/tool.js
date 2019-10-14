//深拷贝 params:被赋予某个值的那个值
export function DeepCopy(params){
  return JSON.parse(JSON.stringify(params))
}

// 价格保留两位小数
export function price(data, num = 2){
  return data.toFixed(num)
}

// 获取本地存储用户数据
export function userData(){
  return JSON.parse(sessionStorage.getItem("userData"))
}
