define('index', function(require, exports, module) {

  var isCompated=false;
  
  function isIE(){
      if(!!window.ActiveXObject || "ActiveXObject" in window){
          return true;
      }else{
          return false;
      }
  }
  
  function IEVersion(){
      var rv = -1;
      if (navigator.appName == 'Microsoft Internet Explorer'){
          var ua = navigator.userAgent;
          var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
  
          if (re.exec(ua) != null){
              rv = parseFloat( RegExp.$1 );
          }
      } else if (navigator.appName == 'Netscape'){
          var ua = navigator.userAgent;
          var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) != null){
            rv = parseFloat( RegExp.$1 );
          }
      }
      
      return rv;
  }
  if (isIE()) {//IE浏览器
      if(IEVersion() < 10) {
          isCompated=false;
      } else {
          isCompated=true;
      }
  }else{
      isCompated=true;
  }
  if(!isCompated){
      window.location.href='/error/nonsupport.html';
  }
  
  
  var Vue = require('vue');
  
  window.vueUI=require('vueUI');
  window.routers=require('routers');
  require('pageTitle');
  require('UI');
  
  var App = Vue.extend({
      el: function() {
           return '#container';
      },
      components: {
          'i-header':require('header'),
          'i-mainnav':require('mainnav')
      },
      data:function(){
          return{
              host:vueUI.conf.host
          }
      }
  });
  routers.route.start(App, 'body');

});
