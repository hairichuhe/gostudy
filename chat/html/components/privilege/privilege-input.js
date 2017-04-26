define('privilege-input', function(require, exports, module) {

  var Vue = require('vue');
  var VueValidator=require('vue-validator')
  Vue.use(VueValidator)
  var select = require('vue-strap').select;
  var option = require('vue-strap').option;
  
  module.exports = Vue.extend({
      template: "       <style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-m {\r\n    width: 97%;\r\n    margin: 1.5%;\r\n    border-top: 1px #ccc solid;\r\n    border-left: 1px #ccc solid;\r\n    float: left; }\r\n    .container .content .c-m ul {\r\n      width: 100%;\r\n      height: 40px;\r\n      border-right: 1px #ccc solid;\r\n      border-bottom: 1px #ccc solid; }\r\n      .container .content .c-m ul li {\r\n        height: 20px;\r\n        line-height: 20px;\r\n        padding: 10px;\r\n        float: left;\r\n        /*span:hover{background-color: #ec98fe;}*/ }\r\n        .container .content .c-m ul li span {\r\n          display: block;\r\n          border-radius: 4px;\r\n          padding: 0 10px;\r\n          cursor: pointer; }\r\n      .container .content .c-m ul .b-gray {\r\n        background-color: #f2f2f2;\r\n        width: 150px;\r\n        text-align: center;\r\n        border-right: 1px solid #ccc; }\r\n      .container .content .c-m ul .active {\r\n        background-color: #ec98fe; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 10px 20px; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #5e5e66;\r\n      border: none;\r\n      color: #fff; }\r\n  .container .content .c-r {\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    width: 300px;\r\n    float: right;\r\n    margin: 10px 20px; }\r\n    .container .content .c-r .r-l {\r\n      width: 270px;\r\n      height: 28px;\r\n      line-height: 28px;\r\n      border: none;\r\n      outline: none;\r\n      float: left; }\r\n    .container .content .c-r .r-l:hover {\r\n      border: none;\r\n      outline: none; }\r\n    .container .content .c-r i {\r\n      color: #000;\r\n      margin: 8px 0 0 10px; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=user-input.css.map */\r\n</style> \r\n        <div class=\"content\" id=\"privilegeinput\">\r\n            <div class=\"form-m\">\r\n                <div class=\"f-t\">\r\n\t                <template v-if=\"$route.params.id==-1\">\r\n\t\t\t\t\t\t<span class=\"fl\">新增权限</span>\r\n\t\t\t\t\t</template>\r\n\t\t\t\t\t<template v-else>\r\n\t\t\t\t\t\t<span class=\"fl\">修改权限</span>\r\n\t\t\t\t\t</template>\r\n                    <button type=\"button\" class=\"fr\" id=\"out_form\" v-link=\"{path:'/privilege'}\"><i class=\"fa fa-close fa-lg\"></i></button>\r\n                </div>\r\n\t\t\t\t<form @submit.prevent id=\"save-form\" action=\"/privilege/save\" class=\"form-horizontal\">\r\n\t\t\t\t\t<validator name=\"validation\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"{{$route.params.id}}\">\r\n\t\t                <ul class=\"f-o\">\r\n\t\t                \t<li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 权限名称：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" detect-change=\"off\" type=\"text\" name=\"name\" class=\"form-control\" v-model=\"privilege.name\" v-validate:name=\"{required:true,remote:['/privilege/is_name',{id:$route.params.id}]}\"> \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.name.required\">权限名称不能为空!</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.name.remote\">权限已存在!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> CODE：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" detect-change=\"off\" type=\"text\" name=\"code\" class=\"form-control\" v-model=\"privilege.code\" v-validate:code=\"{required:true,remote:['/privilege/is_code',{id:$route.params.id}]}\"> \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.code.required\">CODE不能为空!</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.code.remote\">CODE已存在!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"> ICO：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" type=\"text\" name=\"ico\" class=\"form-control\" v-model=\"privilege.ico\"> \r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"> URL：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" type=\"text\" name=\"url\" class=\"form-control\" v-model=\"privilege.url\"> \r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">上级权限：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                        \t<select name=\"parentId\" class=\"r-select\" v-model=\"privilege.parentId\">\r\n\t\t                                <option value=\"\">请选择...</option>\r\n\t\t                                <option v-for=\"option in privileges\" :value=\"option.value\">{{ option.label }}</option>\r\n\t\t                            </select>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                   <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">权限类型：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                        \t<select name=\"type\" class=\"r-select\" v-model=\"type\">\r\n\t\t                                <option value=\"0\">菜单权限</option>\r\n\t\t                                <option value=\"1\">HTML权限</option>\r\n\t\t                            </select>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">状态：</span>\r\n\t\t                        <div class=\"li-r form-options\" v-if=\"privilege.enabled\">\r\n\t\t                            <div class=\"form-check\">\r\n\t\t                                <input type=\"checkbox\" v-model=\"privilege.enabled\" :true-value=\"true\" :false-value=\"false\" checked=\"true\" class=\"fl check\" id=\"check_18\">\r\n\t\t                                <label class=\"check-option\" for=\"check_18\"></label>\r\n\t\t                                <label class=\"check-lb\" for=\"check_18\">启用</label>\r\n\t\t                            </div>\r\n\t\t                            <input type=\"hidden\" name=\"enabled\" v-model=\"privilege.enabled\">\r\n\t\t                        </div>\r\n\t\t                        <div class=\"li-r form-options\" v-else>\r\n\t\t                            <div class=\"form-check\">\r\n\t\t                                <input type=\"checkbox\" :true-value=\"true\" :false-value=\"false\" v-model=\"privilege.enabled\" class=\"fl check\" id=\"check_19\">\r\n\t\t                                <label class=\"check-option\" for=\"check_19\"></label>\r\n\t\t                                <label class=\"check-lb\" for=\"check_19\">启用</label>\r\n\t\t                            </div>\r\n\t\t                            <input type=\"hidden\" name=\"enabled\" v-model=\"privilege.enabled\">\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"btn\">\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" v-link=\"{path:'/privilege'}\">返 回</button>\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" @click.prevent=\"save\">保 存</button>\r\n\t\t                    </li>\r\n\t\t                </ul>\r\n\t            \t</validator>\r\n\t        \t</form>\r\n            </div>\r\n        </div>",
      el: function() {
          return "#privilegeinput";
      },
      data:function(){
          return{
          	privileges:[],
              privilege:{
                  enabled:true,
                  parentId:''
              },
              type:'0'
          }
      },
      ready:function(){
          var self=this;
          var id=$("input[name='id']").val();
          if(id=='-1'){
              $("input[name='id']").val('');
              self.privilege_get_all();
          }else{
              self.get(id);
              self.privilege_get_all();
          };
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
            var arr=[];
            var form=$("#save-form")
            if(id!='-1'){
                vueUI.ajaxCall({
                  url:vueUI.conf.host+'/privilege/'+id,
                  async:false,
                  type:"get",
                  data:
                      '{"pageNo":1,"id":'+id+'}'
                  ,
                  success:function (rsp){
                      dt=rsp.data;
                      if(dt.parentId==null){
                      	dt.parentId=''
                      }
                      self.$data.privilege=dt;
                  }
              }) 
             
            }else{self.$set("id",'')}
          },
          save:function (){
              var self=this;
              this.$validate(true);
             /* var type=$("#types").val();*/
              if(self.$validation.valid){
                      vueUI.closeDialog('#portalDialog');
                      var form=$("#save-form");
                     /* self.$data.privileges.type=type;*/
                      var josn=JSON.stringify($('#save-form').serializeObject());
                      vueUI.ajaxCall({
                          url:vueUI.conf.host+form.attr('action'),
                          async:false,
                          data:josn,
                          type:"post",
                          success:function (){
                              vueUI.toolTips("success","保存成功");
                              self.$root.$children[1].getPrivilege();
                              routers.route.go({ path: '/privilege'});
                          }
                      });
                      
              }
          },
          privilege_get_all:function(){  //获取所有数据
              var self=this;
              var dt;
              var arr=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/privilege/get_non_children/0',
                  // async:false,
                  type:"get",  
                  success:function (rsp){
                      dt=rsp.data;
                      for(var i=0;i<dt.length;i++){
                      	if(dt[i].parentId==null){
                      		arr.push({value:dt[i].id,label:dt[i].name,type:dt[i].type});
                      	}
                      }
                      self.$data.privileges=arr;
                  }
              })
          }
      }
  })

});
