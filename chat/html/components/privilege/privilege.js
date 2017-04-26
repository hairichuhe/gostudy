define('privilege', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      route: {
          activate: function (transition) {
              vueUI.showLoading();
              transition.next()
          }
      },
      template: "\t\t<style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 20px 1.5% 0; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #999;\r\n      border: none;\r\n      color: #fff;\r\n      border-radius: 4px; }\r\n    .container .content .c-l button:hover {\r\n      background-color: #5e5e66; }\r\n  .container .content .b-r {\r\n    height: 30px;\r\n    float: right;\r\n    margin: 20px 1.5% 0; }\r\n    .container .content .b-r .r-text {\r\n      height: 30px;\r\n      background-color: #fff;\r\n      border: 1px solid #ccc;\r\n      width: 320px;\r\n      float: left;\r\n      margin-right: 20px; }\r\n      .container .content .b-r .r-text .t-l {\r\n        width: 270px;\r\n        height: 28px;\r\n        line-height: 28px;\r\n        border: none;\r\n        outline: none;\r\n        float: left;\r\n        padding-left: 10px; }\r\n      .container .content .b-r .r-text .t-l:hover {\r\n        border: none;\r\n        outline: none; }\r\n      .container .content .b-r .r-text i {\r\n        color: #000;\r\n        margin: 8px 4px 0 10px; }\r\n    .container .content .b-r button {\r\n      width: 20px;\r\n      height: 22px;\r\n      margin: 5px 0;\r\n      background-color: #fff;\r\n      float: left;\r\n      cursor: pointer; }\r\n    .container .content .b-r button:hover {\r\n      background-color: #7a85bb;\r\n      color: #fff; }\r\n    .container .content .b-r .left {\r\n      border: solid #ccc;\r\n      border-width: 1px 0 1px 1px; }\r\n    .container .content .b-r .right {\r\n      border: solid #ccc;\r\n      border-width: 1px 1px 1px 0; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=user.css.map */\r\n</style>\r\n\t\t<div id=\"privilegeRoot\" class=\"content\">\r\n\t\t\t<form @submit.prevent id=\"query-form\" class=\"form-horizontal\" role=\"form\" method=\"post\" action=\"/privilege/query\">\r\n\t\t\t\t<input type=\"hidden\" name=\"page_pageNo\" id=\"pageNo\" value=\"1\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_pageSize\" id=\"pageSize\" value=\"10\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_order\" id=\"order\" value=\"desc\" />\r\n\t\t\t\t<input type=\"hidden\" name=\"page_orderBy\" id=\"orderBy\" value=\"id\" />\r\n\r\n\t            <div class=\"c-l\">\r\n\t                <button type=\"button\" @click=\"goAdd\">新增</button>\r\n\t                <button type=\"button\" @click=\"goDel\">删除</button>\r\n\t            </div>\r\n\t            <div class=\"b-r\">\r\n\t                <div class=\"r-text\">\r\n\t                    <input name=\"filter_LIKES_name\" class=\"t-l\" placeholder=\"输入想查询的权限名称\" type=\"text\">\r\n\t                    <i class=\"fa fa-search fa-lg fl\" @click=\"search()\"></i>\r\n\t                </div>\r\n\t                <!-- <button type=\"button\" class=\"left\" @click=\"switchquery\"><i class=\"fa fa-chevron-left fr\"></i></button>\r\n\t                <button type=\"button\" class=\"right\" @click=\"switchquery\"><i class=\"fa fa-chevron-right fl\"></i></button> -->\r\n\t            </div>\r\n            </form>\r\n            <div class=\"bug-t\">\r\n                <vue-grid target=\"privilegeRoot\" v-ref:grid :columns=\"gridColumns\" ></vue-grid>\r\n            </div>\r\n        </div>\r\n\t\t<router-view></router-view> ",
  
      el: function() {
          return "#privilegeRoot";
      },
      data: function() {
          var dt;
          var arr=[];
          var priv=[];
  	   	vueUI.ajaxCall({
  	           url:vueUI.conf.host+'/privilege/get_non_children/0',
  	           async:false,
  	           type:"get",  
  	           success:function (rsp){
  	               dt=rsp.data;
  	               for(var i=0;i<dt.length;i++){
  	                   arr.push({id:dt[i].id,name:dt[i].name})
  	               }
  	               priv=arr;
  	           }
  	    })
          return {
          	privilege:priv,
              queryarr:[
              {name:"filter_LIKES_name",placeholder:"输入想查询的权限名称"}
              ],
          	gridColumns:[
               {name:'name',displayName:'权限名称'}, 
               {name:'url',displayName:'URL'},
               {name:'parentId',displayName:'上级权限',render:'xxx'}, 
               {name:'updateDate',displayName:'修改日期'}, 
               {name:'createDate',displayName:'创建日期'},
               {type:'btn',headerStyle:'width:56px;',dataStyle:'',btnCls:'fa fa-edit btn',onclick:"goEdit",displayName:'编辑'},
               {type:'btn',headerStyle:'width:56px;',dataStyle:'',btnCls:'fa fa-remove btn',onclick:"goDel",displayName:'删除'}
               ]
          	
          }
      },
      ready:function(){
      	var self=this;
          vueUI.hideLoading();
      },
      methods:{
          switchquery:function(e){
              var target=$(e.currentTarget).siblings("div.r-text").find("input:eq(0)");
              var arr=this.$data.queryarr;
              var t=0;
              $(target).val("");
              for(var i=0; i<arr.length; i++){
                  if(arr[i].name==$(target).attr("name")){
                      var t=i;
                      break;
                  }
              };
              if($(e.currentTarget).find("i.fa-chevron-left").length>0){
                  if(t-1<0){
                      $(target).attr("name",arr[0].name);
                      $(target).attr("placeholder",arr[0].placeholder);
                  }else{
                      $(target).attr("name",arr[t-1].name);
                      $(target).attr("placeholder",arr[t-1].placeholder);
                  }
              }else{
                  if(t+1>arr.length-1){
                      $(target).attr("name",arr[arr.length-1].name);
                      $(target).attr("placeholder",arr[arr.length-1].placeholder);
                  }else{
                      $(target).attr("name",arr[t+1].name);
                      $(target).attr("placeholder",arr[t+1].placeholder);
                  }
              }
          },
          search:function (){
              $("#privilegeRoot form#query-form input#pageNo").val("1");
          	this.$refs.grid.query();
          },goAdd:function(){
          	routers.route.go({ path: '/privilege-input/'+'-1', params: { id: '-1' }}) 
  		},goEdit:function(v){
              
              var nid = null;
              if(null!=v)
                  nid=v.id;
              else
                  nid = this.$refs.grid.getSelected();
  			var self=this;
  			if(null != nid){
                  
  				routers.route.go({ path: '/privilege-input/'+nid, params: { id: nid }})
              }
  			
                 
  		},
  		goDel:function(v){
              
              var ids = null;
              if(null!=v)
                  ids = v.id;
              if(null == ids)
                  ids = this.$refs.grid.getSelectIds();
  			var self=this;
  			if(null != ids){
  				 vueUI.confirm('操作提示','确定删除？',function(){
  					vueUI.ajaxCall({
  						url:vueUI.conf.host+"/privilege/"+ids,
  						async:false,
  						contentType:'application/json;charset=utf-8',
  						datatype:"json",
  						type:"DELETE",
  						success:function (){
  							$("#pageNo").val(1);
  							self.search();
  							vueUI.toolTips("success","删除成功");
  						}
  					});
  				 });
  			}
  		},renderEnable:function(v){
          	if(v.enable)
          		return '<span title="可用">可用</span>';
          	else
          		return '<span title="不可用">不可用</span>';
          },xxx:function(x){
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
