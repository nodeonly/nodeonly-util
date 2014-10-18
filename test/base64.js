var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var Base64 = require('../lib/base64');

suite('Base64', function() {
     test("base64_encode", function() {
		 var str = "nodeonly"
		 var result_str = Base64.base64_encode(str);

		 assert.equal(result_str, 'bm9kZW9ubHk=');
     })
	 
     test("base64_decode", function() {
		 var base64_encode_str = "bm9kZW9ubHk"
		 var result_str = Base64.base64_decode(base64_encode_str);

		 assert.equal(result_str, 'nodeonly');
     })
})