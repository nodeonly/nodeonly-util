var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();

var Utils = require('../index');

console.log(Utils)

var request = require('supertest')
  , express = require('express');


describe('Utils.req', function(){
  describe('#get_value_from_body()', function(){
    it('should return Manny when get_value_from_body with key name', function(done){

			var app = express();
			
			app.post('/user', function(req, res){
				// mock req.body data
				req.body = { 'name': 'Manny', 'species': 'cat' };
				
				var Manny = Utils.req.get_value_from_body(req, 'name');
				assert.equal(Manny, 'Manny');
				
		 	 	var species = Utils.req.get_value_from_body(req, 'species');
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
  })//end  
})