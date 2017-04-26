define('actionlog', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      route: {
          activate: function (transition) {
              vueUI.showLoading();
              transition.next()
          }
      },
      template: "\t\t<style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 20px 1.5% 0; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #999;\r\n      border: none;\r\n      color: #fff;\r\n      border-radius: 4px; }\r\n    .container .content .c-l button:hover {\r\n      background-color: #5e5e66; }\r\n  .container .content .b-r {\r\n    height: 30px;\r\n    float: right;\r\n    margin: 20px 1.5% 0; }\r\n    .container .content .b-r .r-text {\r\n      height: 30px;\r\n      background-color: #fff;\r\n      border: 1px solid #ccc;\r\n      width: 320px;\r\n      float: left;\r\n      margin-right: 20px; }\r\n      .container .content .b-r .r-text .t-l {\r\n        width: 270px;\r\n        height: 28px;\r\n        line-height: 28px;\r\n        border: none;\r\n        outline: none;\r\n        float: left;\r\n        padding-left: 10px; }\r\n      .container .content .b-r .r-text .t-l:hover {\r\n        border: none;\r\n        outline: none; }\r\n      .container .content .b-r .r-text i {\r\n        color: #000;\r\n        margin: 8px 4px 0 10px; }\r\n    .container .content .b-r button {\r\n      width: 20px;\r\n      height: 22px;\r\n      margin: 5px 0;\r\n      background-color: #fff;\r\n      float: left;\r\n      cursor: pointer; }\r\n    .container .content .b-r button:hover {\r\n      background-color: #7a85bb;\r\n      color: #fff; }\r\n    .container .content .b-r .left {\r\n      border: solid #ccc;\r\n      border-width: 1px 0 1px 1px; }\r\n    .container .content .b-r .right {\r\n      border: solid #ccc;\r\n      border-width: 1px 1px 1px 0; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=user.css.map */\r\n</style>\r\n\t\t<div id=\"actionlogRoot\" class=\"content\">\r\n\t\t\t<form @submit.prevent id=\"query-form\" class=\"form-horizontal\" role=\"form\" method=\"post\" action=\"/actionlog/query\">\r\n\t\t\t\t<input type=\"hidden\" name=\"page_pageNo\" id=\"pageNo\" value=\"1\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_pageSize\" id=\"pageSize\" value=\"10\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_order\" id=\"order\" value=\"desc\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_orderBy\" id=\"orderBy\" value=\"id\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"modelNamePattern\" value=\"like\" />\r\n\r\n\t            <div class=\"b-r\">\r\n\t                <div class=\"r-text\">\r\n\t                    <input name=\"filter_LIKES_modelName\" class=\"t-l\" placeholder=\"输入想查询的模块名称\" type=\"text\">\r\n\t                    <i class=\"fa fa-search fa-lg fl\" @click=\"search()\"></i>\r\n\t                </div>\r\n\t            </div>\r\n            </form>\r\n            <div class=\"bug-t\">\r\n                <vue-grid target=\"actionlogRoot\" v-ref:grid :columns=\"gridColumns\" ></vue-grid>\r\n            </div>\r\n        </div>\r\n\t\t<router-view></router-view> ",
  
      el: function() {
          return "#actionlogRoot";
      },
      data: function() {
          var dt;
          var arr=[];
          var priv=[];
          return {
          	privilege:priv,
              queryarr:[
              	{name:"modelName",placeholder:"输入想查询的模块名称"}
              ],
          	gridColumns:[
  	        	 {name:'modelName',displayName:'模块名称',headerStyle:" width:12%;",dataStyle:'float:left;',sortable:false},
  	        	 {name:'username',displayName:'操作账号',headerStyle:" width:8%;",dataStyle:'float:left;',sortable:false},
  	        	 {name:'createTime',displayName:'操作时间',headerStyle:" width:12%;"},
  	             {name:'content',displayName:'操作消息',headerStyle:"text-align:left; width:30%;",dataStyle:'float:left;text-align:left;',sortable:false},
  	             {name:'url',displayName:'URL',headerStyle:"text-align:left; width:30%;",dataStyle:'float:left;text-align:left;',sortable:false},
  	             {name:'sourceIp',displayName:'访问IP',headerStyle:" width:8%;",dataStyle:'float:left;',sortable:false},
  	             {name:'result',displayName:'操作结果',headerStyle:"width:8%;",render:'result',sortable:false},
              ]
          	
          }
      },
      ready:function(){
      	var self=this;
          vueUI.hideLoading();
      },
      methods:{
          search:function (){
              $("#actionlogRoot form#query-form input#pageNo").val("1");
          	this.$refs.grid.query();
          },
          result:function(v){
  			if(v.result==1)
  				return "<span style='color:green'>成功<span>";
  			if(v.result==0)
  				return "<span style='color:red'>失败<span>";
          },
          xxx:function(x){
          	var self=this;
          	for (var i = 0; i < self.$data.privilege.length; i++) {
  				if(self.$data.privilege[i].id==x.parentId)
  					return self.$data.privilege[i].name;
  			}
          	return '';
          }
      }
  });

});
