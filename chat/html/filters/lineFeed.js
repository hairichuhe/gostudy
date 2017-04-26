define('lineFeed', function(require, exports, module) {

  module.exports = function(value) {
  	if(value)
      	return typeof value === 'string' ? value.replace(/(\r\n)/g, '<br>') : value;
  }

});
