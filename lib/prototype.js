exports.string = function string () {
  String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
  };

  String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
  };

  String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
  };
};

exports.array = function array () {
  /**
   * Array#distinct
   * @returns {Array}
   */
  Array.prototype.distinct = function(){
    var arr = [],
      obj = {},
      i = 0,
      len = this.length,
      result;

    for( ; i < len; i++ ){
      result = this[i];
      if( obj[result] !== result ){
        arr.push( result );
        obj[result] = result;
      }
    }

    return arr;
  };

  /**
   * Array#clear
   * @returns {Array}
   */
  Array.prototype.clear = function clear() {
    this.length = 0;
    return this;
  };

  /**
   * Array#first
   * @returns {Array}
   */
  Array.prototype.first = function first() {
    return this[0];
  };

  /**
   * Array#last
   * @returns {Array}
   */
  Array.prototype.last = function last() {
    return this[this.length - 1];
  };

  /**
   * Array#clone() -> Array
   *
   * Returns a duplicate of the array, leaving the original array intact.
   **/
  Array.prototype.clone = function clone() {
    return slice.call(this, 0);
  };
};

exports.date = function date () {
  /**
   * 日期格式化
   * @param fmt
   * @returns {Date}
   */
	Date.prototype.format = function (fmt) {
	  fmt = fmt || 'yyyy-MM-dd';

	  var o = { 
	    "M+" : this.getMonth()+1,                 //月份 
	    "d+" : this.getDate(),                    //日 
	    "h+" : this.getHours(),                   //小时 
	    "m+" : this.getMinutes(),                 //分 
	    "s+" : this.getSeconds(),                 //秒 
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
	    "S"  : this.getMilliseconds()             //毫秒 
	  };

	  if(/(y+)/.test(fmt)) 
	    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 

	  for(var k in o) 
	    if(new RegExp("("+ k +")").test(fmt)) 

	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 

	  return fmt; 
	};
};
