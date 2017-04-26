define('pageTitle', function(require, exports, module) {

  //页头组件 1.require 2.<page-title></page-title>
  var Vue = require('vue');
  
  Vue.component('page-title',{
  	template:"<style>\r\n.breadcrumb {\r\n    background: #f6f8f8 none repeat scroll 0 0;\r\n    border-radius: 0;\r\n    color: #aaa;\r\n    line-height: 26px;\r\n    list-style: outside none none;\r\n    padding: 8px 30px;\r\n}\r\n.breadcrumb li ,\r\n.breadcrumb li a\r\n{\r\n    display: inline-block;\r\n    text-shadow: 0 1px 0 #fff;\r\n    font-size: 14px;\r\n}\r\n</style>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <ul class=\"breadcrumb\">\r\n      <li v-for=\"item in items\">\r\n      \t<template v-if=\"$index==0\">\r\n\t        <i class=\"fa fa-home\"></i>\r\n\t        <a href=\"{{item.url}}\">{{ item.message }}</a> \r\n  \t    </template>\r\n  \t    <template v-else>\r\n          <i class=\"icon-angle-right\"></i>\r\n          <a href=\"{{item.url}}\">{{ item.message }}</a>\r\n  \t    </template>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>",
  	props:["items"]
  })
  

});
