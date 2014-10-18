

/**
 * Module dependencies.
 */


 /**
 * Strip `Content-*` headers from `res`.
 *
 * @param {ServerResponse} res
 * @api private
 */

exports.removeContentHeaders = function(res){
  Object.keys(res._headers).forEach(function(field){
    if (0 == field.indexOf('content')) {
      res.removeHeader(field);
    }
  });
};

/**
 * Respond with 404 "Not Found".
 *
 * @param {ServerResponse} res
 * @param {Object} headers
 * @api private
 */

exports.notFounded = function (res) {
	exports.removeContentHeaders(res);
	res.writeHead(404, 'Not Found', {
				'Content-Type': 'text/plain'
			});
};

/**
 * Respond with 304 "Not Modified".
 *
 * @param {ServerResponse} res
 * @param {Object} headers
 * @api private
 */

exports.notModified = function(res) {
  exports.removeContentHeaders(res);
  res.statusCode = 304;
};
