/**
 * base64
 * @param {Array} jsonArr
 * @return {Object} newJson
 */
exports.base64_encode = function (str) {
  return new Buffer(str).toString('base64');
};

exports.base64_decode = function (base64_encode_str) {
  return new Buffer( base64_encode_str, 'base64').toString();
};

exports.base64_encode_json = function (str) {
  return new Buffer(JSON.stringify(str)).toString('base64');
};

exports.base64_decode_json = function (base64_encode_str) {
  var obj = JSON.parse(new Buffer( base64_encode_str, 'base64').toString());
  return obj;
};