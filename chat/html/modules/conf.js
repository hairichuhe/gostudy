define('conf', function(require, exports, module) {

  return eval("("+$.ajax({url:"../../config/conf.json",async:false}).responseText+")")

});
