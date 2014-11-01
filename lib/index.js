/**
 *
 * Author: Alfred Sang
 * E-mail: shiren1118@126.com
 */

exports.version = '0.0.2';

//node url patch
require('./url');
//node prototype
require('./prototype');
//node json util
require('./json');

//
// require('./extend');
//
// require('./log');
var req = require('./req');

console.log(req);

module.exports = {
	'req':require('./req')
}