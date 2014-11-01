
/**
  * Return request param value from req.body
  *
  * if given key not in req.body hash
  * default_val is returned:
  *
  *     var user_name = get_value_from_body(req,'name','no user name',1);
  *     var user_name = get_value_from_body(req,'name','no user name');
  *     var user_name = get_value_from_body(req,'name');
  *
  * @param {String} req
  * @param {String} key
  * @param {String} default_val
  * @param {String} debug
	*
  * @return {String}
  * @api public
  */
exports.get_value_from_body =  function(req,key,default_val,debug){
	var is_debug_able = arguments[3] ? true :false;
	function log(str){
		if(is_debug_able){
			console.log('[INFO get_value_from_body]'+str);
		}
	}
	
	log('---------------------------------------------');
	log(key);
	
	var _default_val = arguments[2] ? default_val+'' : '';
	
	var display_name = ''
	if(req.body[key] !== undefined){
		log('req.body[' +key+'] '+' exist!');
		display_name = req.body[key] == undefined ? _default_val : req.body[key]
			log(req.body[key]);
	}else{
		log('req.body[' +key+''+'] not exist ');
		display_name = _default_val
	}
	
	log('display_name='+display_name);
	log('---------------------------------------------');
	return display_name;
}
