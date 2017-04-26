define('login', function(require, exports, module) {

  var Vue = require('vue');
  window.vueUI=require('vueUI')
  new Vue({
    	el: '#container',
    	data:{
    		code:""
    	},
    	ready:function(){
    	},
    	methods:{
  	  	login:function(event){
  	  		event.preventDefault();
  		    event.stopPropagation();
  	  		var data=$('#loginForm').serialize();
  			if(true){
  					window.sessionStorage.user_name=$('input[name="username"]').val();
  					window.sessionStorage.user_password=$('input[name="password"]').val();
  					console.log(window.sessionStorage.user_name);
  					vueUI.ajaxCall({
  						beforeSend:function (XHR){
  							XHR.setRequestHeader('Authorization','Basic ' + btoa(vueUI.conf.client_id + ':' + vueUI.conf.client_secret));
  						},
  						url:vueUI.conf.auth_host+"/oauth/token",
  						async:true,
  						datatype:"json",
  						type:"post",
  						data:data,
  						contentType:'application/x-www-form-urlencoded',
  						success:function(rsp){
  							window.sessionStorage.access_token=rsp.access_token;
  							var str=window.sessionStorage.goto_url;
  							if(window.sessionStorage.goto_url){
  //								if(str.indexOf("#!/")=='-1'){
  									window.location.href='show.html';
  //								}else{
  //									window.location.href=window.sessionStorage.goto_url;
  //								}
  							}else{
  								window.location.href="show.html";
  							}
  						},
  						error:function(rsp){
  							if(rsp.status!=0){
  								var err=JSON.parse(rsp.responseText);
  						        if(err.meta.code==999){
  									vueUI.alert("错误提示",err.meta.message)
  								}
  							}	
  						}
  					})
  			}
  	  	}
    	}
  })

});
