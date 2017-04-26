define('temp', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
  	route: {
          activate: function (transition) {
          	vueUI.showLoading();
          	var url=this.$route.query.url;
          	if(url!=""){
      			routers.route.go(url);
  	    	}else{
  	    		routers.route.go("/");
  	    	}
              transition.next()
          }
      }
  });

});
