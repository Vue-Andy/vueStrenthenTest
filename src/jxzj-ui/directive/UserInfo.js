let userBtnKeys = [];

export function setUserBtnKeys(keys) {
  userBtnKeys = keys;
}

export function getUserBtnKeys() {
  return userBtnKeys;
}

/**
 * 判断用户是否存在该权限
 * @param displayKey  权限名称
 * @returns {boolean} 有/没有
 */
export function keyExistUserBtnKeys(displayKey) {
  if (userBtnKeys.indexOf(displayKey) == -1) {
    return false;
  } else {
    return true;
  }
}

/**
 * 用户所有信息
 * @returns {*|{}}
 */
export function getUserModel() {
  let userDataJson = sessionStorage.getItem("userData");
  let userData = JSON.parse(userDataJson);
  return (userData.userModel || {}) || {};
}

/**
 * 用户默认部门
 * @returns {*|{}}
 */
export function getDefaultDept() {
  let userDataJson = sessionStorage.getItem("userData");
  let userData = JSON.parse(userDataJson);
  return (userData.defaultDept || {}) || {};
}

