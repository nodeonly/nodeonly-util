var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var RequestUtils = require('../lib/req');

var request = require('supertest')
  , express = require('express');


describe('RequestUtils', function(){
  describe('#get_value_from_body()', function(){
    it('should return Manny when get_value_from_body with key name', function(done){

			var app = express();
			
			app.post('/user', function(req, res){
				// mock req.body data
				req.body = { 'name': 'Manny', 'species': 'cat' };
				
				var species = RequestUtils.get_value_from_body(req, 'name');
				assert.equal(species, 'Manny');
				
		 	 	var species = RequestUtils.get_value_from_body(req, 'species');
				assert.equal(species, 'cat');
				
				done();
			});
			
			request(app)
			  .post('/user')
				.set('contentType', 'application/x-www-form-urlencoded; charset=utf-8')
			  .end(function(err, res){
					if (err) throw err;
			  });

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