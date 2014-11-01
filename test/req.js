var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var RequestUtils = require('../lib/req');


describe('Req', function(){
  describe('#get_value_from_body()', function(){
    it('should return bm9kZW9ubHk= when base64_encode nodeonly', function(){
			
	 	 	var result_str = RequestUtils.get_value_from_body(req,'name');

			assert.equal(result_str, 'bm9kZW9ubHk=');
    })
  })
  //
  // describe('#base64_decode()', function(){
  //   it('should return nodeonly when base64_decode bm9kZW9ubHk=', function(){
  // 			var base64_encode_str = "bm9kZW9ubHk"
  // 			var result_str = Base64.base64_decode(base64_encode_str);
  //
  // 			assert.equal(result_str, 'nodeonly');
  //   })
  // })
  
})