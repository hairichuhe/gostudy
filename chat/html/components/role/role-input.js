define('role-input', function(require, exports, module) {

  var Vue = require('vue');
  var VueValidator=require('vue-validator')
  Vue.use(VueValidator)
  var select = require('vue-strap').select;
  var option = require('vue-strap').option;
  
  module.exports = Vue.extend({
      template: "       <style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-m {\r\n    width: 97%;\r\n    margin: 1.5%;\r\n    border-top: 1px #ccc solid;\r\n    border-left: 1px #ccc solid;\r\n    float: left; }\r\n    .container .content .c-m ul {\r\n      width: 100%;\r\n      height: 40px;\r\n      border-right: 1px #ccc solid;\r\n      border-bottom: 1px #ccc solid; }\r\n      .container .content .c-m ul li {\r\n        height: 20px;\r\n        line-height: 20px;\r\n        padding: 10px;\r\n        float: left;\r\n        /*span:hover{background-color: #ec98fe;}*/ }\r\n        .container .content .c-m ul li span {\r\n          display: block;\r\n          border-radius: 4px;\r\n          padding: 0 10px;\r\n          cursor: pointer; }\r\n      .container .content .c-m ul .b-gray {\r\n        background-color: #f2f2f2;\r\n        width: 150px;\r\n        text-align: center;\r\n        border-right: 1px solid #ccc; }\r\n      .container .content .c-m ul .active {\r\n        background-color: #ec98fe; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 10px 20px; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #5e5e66;\r\n      border: none;\r\n      color: #fff; }\r\n  .container .content .c-r {\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    width: 300px;\r\n    float: right;\r\n    margin: 10px 20px; }\r\n    .container .content .c-r .r-l {\r\n      width: 270px;\r\n      height: 28px;\r\n      line-height: 28px;\r\n      border: none;\r\n      outline: none;\r\n      float: left; }\r\n    .container .content .c-r .r-l:hover {\r\n      border: none;\r\n      outline: none; }\r\n    .container .content .c-r i {\r\n      color: #000;\r\n      margin: 8px 0 0 10px; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n.container .content .ztree.form-control li{\r\n  line-height: 14px;\r\n  list-style: outside none none;\r\n  margin: 0;\r\n  outline: 0 none;\r\n  padding: 0;\r\n  text-align: left;\r\n  white-space: nowrap;\r\n  float: none;\r\n  height: auto;\r\n}\r\n/*# sourceMappingURL=user-input.css.map */\r\n</style> \r\n       <link href=\"/static/libs/ztree/zTreeStyle/zTreeStyle.css\" rel=\"stylesheet\">\r\n        <div class=\"content\" id=\"roleinput\">\r\n            <div class=\"form-m\">\r\n                <div class=\"f-t\">\r\n\t                <template v-if=\"$route.params.id==-1\">\r\n\t\t\t\t\t\t<span class=\"fl\">新增角色</span>\r\n\t\t\t\t\t</template>\r\n\t\t\t\t\t<template v-else>\r\n\t\t\t\t\t\t<span class=\"fl\">修改角色</span>\r\n\t\t\t\t\t</template>\r\n                    <button type=\"button\" class=\"fr\" id=\"out_form\" v-link=\"{path:'/role'}\"><i class=\"fa fa-close fa-lg\"></i></button>\r\n                </div>\r\n\t\t\t\t<form @submit.prevent id=\"save-form\" action=\"/role/save\" class=\"form-horizontal\">\r\n\t\t\t\t\t<validator name=\"validation\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"{{$route.params.id}}\">\r\n\t\t                <ul class=\"f-o\">\r\n\t\t                \t<li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 角色名称：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input initial=\"off\" type=\"text\" name=\"name\" class=\"form-control\" v-model=\"name\" v-validate:name=\"['required']\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.name.required\">角色名称不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 角色中文名称：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input initial=\"off\" type=\"text\" name=\"chineseName\" class=\"form-control\" v-model=\"chineseName\" v-validate:chineseName=\"['required']\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.chineseName.required\">角色中文名称不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <input type=\"hidden\" name=\"priStrs\" id=\"priStrs\">\r\n\t\t                    <li class=\"text\">\r\n\t\t                        <span class=\"li-l\">描述：</span>\r\n\t\t                        <textarea class=\"li-r\" name=\"description\" v-model=\"description\"></textarea>\r\n\t\t                    </li>\r\n\t\t                    <input type=\"hidden\" name=\"pIds\" v-model=\"pIds\"/>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n                                \t<label class=\"col-md-3 control-label\">绑定权限</label>\r\n                                \t<div class=\"col-md-9\">\r\n                                   \t\t<div class=\"zTreeDemoBackground left\">\r\n                                       \t\t<ul id=\"treeDemo\" class=\"ztree form-control\" style=\"height: 220px; overflow-y: auto; overflow-x: auto; width: 93.4%;border:#ccc 1px solid;border-radius: 4px;\"></ul>\r\n                                    \t</div>\r\n                                \t</div>\r\n                           \t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t                   \t<li class=\"btn\">\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" v-link=\"{path:'/role'}\">返 回</button>\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" @click.prevent=\"save\">保 存</button>\r\n\t\t                    </li>\r\n\t\t                </ul>\r\n\t            \t</validator>\r\n\t        \t</form>\r\n            </div>\r\n        </div>",
      el: function() {
          return "#roleinput";
      },
      data:function(){
          return{
              name:'',
              chineseName:'',
              pIds:'',
              zNodes:''
          }
      },
      ready:function(){
          var self=this;
          var id=$("input[name='id']").val();   
             
          if(id=='-1'||id==''){
              $("input[name='id']").val('')
          }else{
           self.get(id);
          };
          vueUI.inputDialog("#portalDialog")
          self.get_allnodes(id); 
          var setting = {
              check: {
                  enable: true,
                  chkboxType:{ "Y" : "ps", "N" : "ps" }
              },
              data: {
                  simpleData: {
                      enable: true
                  }
              }
          };
          $.fn.zTree.init($("#treeDemo"), setting, self.zNodes);
          vueUI.hideLoading();
      },
      route: {
      	activate: function (transition) {
              vueUI.showLoading();
              transition.next()
          }
      },
      methods:{
      	get:function(id){
              var self=this;
              var dt;
              var form=$("#save-form")
              if(id!='-1'){
            	  vueUI.ajaxCall({
                    url:vueUI.conf.host+'/role/'+id,
                    async:false,
                    type:"get",
                    data:
                        '{"pageNo":1,"id":'+id+'}'
                    ,
                    success:function (rsp){
                        dt=rsp.data;
                    }
                }) 
                self.$data=dt;
              }else{self.$set("id",'')}
            },
          save:function (){
          	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
              var nodes = treeObj.getCheckedNodes(true);
              for(var i=0;i<nodes.length;i++){
                  var target=document.getElementById('priStrs');
                  target.value+=nodes[i].id+",";
              }
              
              var self=this;
              this.$validate(true);
              if(self.$validation.valid){
                  if($("input[name='priStrs']").val()==''){
                      vueUI.alert("错误提示","请至少选择一项权限")
                  }else{
                      vueUI.closeDialog('#portalDialog');                
                      var form=$("#save-form");
                      var josn=JSON.stringify($('#save-form').serializeObject());
                      vueUI.ajaxCall({
                          url:vueUI.conf.host+form.attr('action'),
                          async:false,
                          data:josn,
                          type:"post",
                          success:function (){
                              vueUI.toolTips("success","保存成功");
                          }
                      });
                      routers.route.go({ path: '/role'});
                  }     
              }
          },
          get_allnodes:function(id){
              var self=this;
              var dt;
              var zNodes=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/privilege/get_non_children/-1',
                  async:false,
                  type:"get",  
  
                  success:function (rsp){
                      self.$set("zNodes",zNodes)
                      dt=rsp.data;
                      for(var i=0;i<dt.length;i++){
                          self.$data.zNodes.$set(i,{id:dt[i].id,pId:dt[i].parentId,name:dt[i].name})       
                      }
                      if(id!=-1&&id!=''){
                          self.get_nownodes(id);
                          for(var i=0;i<dt.length;i++){
                              for(var j=0;j<self.nowNodes.length;j++){
                                  if(dt[i].id==self.nowNodes[j].id){
                                      self.$data.zNodes.$set(i,{id:dt[i].id,pId:dt[i].parentId,name:dt[i].name,checked:true,open:true})  
                                  }
                              }      
                          }
                      };
                  }
              })      
          },
          get_nownodes:function(id){
              var me=this;
              var nowdt;
              var nowNodes=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/role/get_privileges/'+id,
                  async:false,
                  type:"get",  
                  success:function (rsp){
                      me.$set("nowNodes",nowNodes)
                      nowdt=rsp.data;
                      for(var i=0;i<nowdt.length;i++){
                          me.$data.nowNodes.$set(i,{id:nowdt[i].id,pId:nowdt[i].parentId,name:nowdt[i].name})
                      }
                  }
              })
          }
      }
  })

});
