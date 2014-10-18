/**
 * Json Utils
 * Author: Alfred Sang
 * E-mail: shiren1118@126.com
 */

/**
 * 合并多个json对象
 * @param {Array} jsonArr
 * @return {Object} newJson
 */
exports.merge = function (jsonArr) {
  var newJson = {};
  for (var index in jsonArr) {
    for (var attr in jsonArr[index]) {
      newJson[attr] = jsonArr[index][attr];
    }
  }
  return newJson;
};