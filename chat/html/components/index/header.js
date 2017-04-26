define('header', function(require, exports, module) {

  var Vue = require('vue');
  module.exports = Vue.extend({
      template: "<header>\r\n    <div class=\"logo\" style=\"width: auto;\">\r\n        <a href=\"/show.html\"><img src=\"/static/img/logo.png\"></a>\r\n    </div>\r\n    <div class=\"h-l\">\r\n        <div class=\"l-i\">\r\n            <button @click=\"logout\" class=\"i-m\">退出</button>\r\n        </div>\r\n        <div class=\"l-i\">\r\n            <span class=\"i-t\">LOCAL TIME</span>\r\n            <span class=\"i-m\">{{dateTime.hour}}:{{dateTime.min}}:{{dateTime.sec}}</span>\r\n            <span class=\"i-t i-t-b\">{{dateTime.year}}年{{dateTime.mon}}月{{dateTime.date}}日</span>\r\n        </div>\r\n    </div>\r\n</header>",
      data:function(){
      	return {
      		user:{},
              dateTime:{
                  year:'2017',
                  mon:'01',
                  date:'08',
                  hour:'06',
                  min:'01',
                  sec:'01'
              }
      	}
      },
      ready:function(){
          this.fillUser();
          this.fillDateTime();
      },
      methods:{
          fillDateTime:function(){
              var self=this;
              setInterval(function(){
                  var date=new Date();
                  self.dateTime.year = date.getFullYear();
                  self.dateTime.mon = self.formatDate(date.getMonth()+1);
                  self.dateTime.date = self.formatDate(date.getDate());
                  self.dateTime.hour = self.formatDate(date.getHours());
                  self.dateTime.min = self.formatDate(date.getMinutes());
                  self.dateTime.sec = self.formatDate(date.getSeconds());
              },1000)
          },
          goRouter:function(url){
              // routers.route.go(url);
              routers.route.go({
                  path: "/temp",
                  query: {
                      url: url
                  }
              });
          },
          formatDate:function(num){
              var t=num+"";
              if(t.length>1){
                  return t
              }else{
                  return "0"+t;
              }
          },
          logout:function (){
              vueUI.ajaxCall({
                  beforeSend:function (XHR){
                      XHR.setRequestHeader('Authorization','Bearer '+window.sessionStorage.access_token);////////设置消息头
                  },
                  url:vueUI.conf.auth_host+"/oauth/token/revoke",
                  dataType : 'text',
                  data:'client_id='+vueUI.conf.client_id+'&client_secret='+vueUI.conf.client_secret+'&grant_type=password&username='+window.sessionStorage.user_name+'&password='+window.sessionStorage.user_password,
                  contentType:'application/x-www-form-urlencoded',
                  success:function(){
                      window.sessionStorage.removeItem("user_name");
                      window.sessionStorage.removeItem("user_password");
                      vueUI.gotoLogin();
                      vueUI.toolTips("success","退出成功")
                  }
              })
  
          },
          fillUser:function(){
          	var self=this;
             vueUI.ajaxCall({
                  type:"get",
                  url:vueUI.conf.host+"/user/get_curr_user",
                  success:function(rsp){
                  	self.user=rsp.data;
                      $("#userName").text(rsp.data.fullName)
                  }
  
              }) 
          }
      }
  });

});
