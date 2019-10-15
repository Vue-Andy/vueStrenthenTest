/**
 * 将new Date的时间转换为yyyy-MM-dd HH:mm:ss
 * @param type 转换出的时间类型，默认'yyyy-MM-dd'
 * @param date 要转换的时间，默认为当前时间
 * @returns {*}
 */
export default function formatDateTime(date,type='yyyy-MM-dd') {
  if(!date)return
  typeof date == 'string' && (date = new Date(date))
  let y = date.getFullYear();
  let M = date.getMonth() + 1;
  let d = date.getDate();
  let H = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  M = M < 10 ? ('0' + M) : M;
  d = d < 10 ? ('0' + d) : d;
  H = H < 10 ? ('0' + H) : H;
  m = m < 10 ? ('0' + m) : m;
  s = s < 10 ? ('0' + s) : s;
  switch (type) {
    case 'yyyy':
      return y;
      break;
    case 'yyyy-MM':
      return `${y}-${M}`;
      break;
    case 'yyyy-MM-dd':
      return `${y}-${M}-${d}`;
      break;
    case 'yyyy-MM-dd HH':
      return `${y}-${M}-${d} ${H}`;
      break;
    case 'yyyy-MM-dd HH:mm':
      return `${y}-${M}-${d} ${H}:${m}`;
      break;
    case 'yyyy-MM-dd HH:mm:ss':
      return `${y}-${M}-${d} ${H}:${m}:${s}`;
      break;
  }
};
