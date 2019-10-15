//过滤字符串前后空格
const trim = function (str){
  if(str===null) {
    return str
  }
  return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');
}

export default trim
