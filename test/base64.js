var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var Base64 = require('../lib/base64');


describe('Base64', function(){
  describe('#base64_encode()', function(){
    it('should return bm9kZW9ubHk= when base64_encode nodeonly', function(){
	 	 	var str = "nodeonly"
	 	 	var result_str = Base64.base64_encode(str);

			assert.equal(result_str, 'bm9kZW9ubHk=');
    })
  })
  
  describe('#base64_decode()', function(){
    it('should return nodeonly when base64_decode bm9kZW9ubHk=', function(){
			var base64_encode_str = "bm9kZW9ubHk"
			var result_str = Base64.base64_decode(base64_encode_str);

			assert.equal(result_str, 'nodeonly');
    })
  })
  
})