nodeonly-util
=========

nodeonly-utilv is a npm for dev lib for node express utils

[![NPM version](https://badge.fury.io/js/nodeonly-util.svg)](http://badge.fury.io/js/nodeonly-util)

## module list

 - base64
 - json
 - url
 - prototype

## Usage

	var app = express();

	// Make our db accessible to our router
	app.use(function(req,res,next){
	    ...
			req.tools = require('./utils');
	    next();
	});

	app.post('/new', function(req, res) {
		var name = req.tools.req.get_value_from_body(req, 'display_name');
		...
	}

## 测试

	npm test


## depts


## 相关网址

- https://github.com/visionmedia/mocha
- https://github.com/chaijs/chai
- http://chaijs.com/
- http://visionmedia.github.io/mocha/


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v0.1.0 初始化版本 

## 作者

- 桑世龙
- 柯织
- 黄小龙

## 欢迎fork和反馈

在issue提问或邮件shiren1118@126.com

## License

this gem is released under the [MIT License](http://www.opensource.org/licenses/MIT).
