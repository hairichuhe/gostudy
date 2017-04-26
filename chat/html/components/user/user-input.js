define('user-input', function(require, exports, module) {

  var Vue = require('vue');
  var VueValidator=require('vue-validator')
  Vue.use(VueValidator)
  var select = require('vue-strap').select;
  var option = require('vue-strap').option;
  
  module.exports = Vue.extend({
      template: "        <style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-m {\r\n    width: 97%;\r\n    margin: 1.5%;\r\n    border-top: 1px #ccc solid;\r\n    border-left: 1px #ccc solid;\r\n    float: left; }\r\n    .container .content .c-m ul {\r\n      width: 100%;\r\n      height: 40px;\r\n      border-right: 1px #ccc solid;\r\n      border-bottom: 1px #ccc solid; }\r\n      .container .content .c-m ul li {\r\n        height: 20px;\r\n        line-height: 20px;\r\n        padding: 10px;\r\n        float: left;\r\n        /*span:hover{background-color: #ec98fe;}*/ }\r\n        .container .content .c-m ul li span {\r\n          display: block;\r\n          border-radius: 4px;\r\n          padding: 0 10px;\r\n          cursor: pointer; }\r\n      .container .content .c-m ul .b-gray {\r\n        background-color: #f2f2f2;\r\n        width: 150px;\r\n        text-align: center;\r\n        border-right: 1px solid #ccc; }\r\n      .container .content .c-m ul .active {\r\n        background-color: #ec98fe; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 10px 20px; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #5e5e66;\r\n      border: none;\r\n      color: #fff; }\r\n  .container .content .c-r {\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    width: 300px;\r\n    float: right;\r\n    margin: 10px 20px; }\r\n    .container .content .c-r .r-l {\r\n      width: 270px;\r\n      height: 28px;\r\n      line-height: 28px;\r\n      border: none;\r\n      outline: none;\r\n      float: left; }\r\n    .container .content .c-r .r-l:hover {\r\n      border: none;\r\n      outline: none; }\r\n    .container .content .c-r i {\r\n      color: #000;\r\n      margin: 8px 0 0 10px; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=/components/user/user-input.css.map */\r\n</style>\r\n        <div class=\"content\" id=\"userinput\">\r\n            <div class=\"form-m\">\r\n                <div class=\"f-t\">\r\n\t                <template v-if=\"$route.params.id==-1\">\r\n\t\t\t\t\t\t<span class=\"fl\">新增用户</span>\r\n\t\t\t\t\t</template>\r\n\t\t\t\t\t<template v-else>\r\n\t\t\t\t\t\t<span class=\"fl\">修改用户</span>\r\n\t\t\t\t\t</template>\r\n                    <button type=\"button\" class=\"fr\" id=\"out_form\" v-link=\"{path:'/user'}\"><i class=\"fa fa-close fa-lg\"></i></button>\r\n                </div>\r\n\t\t\t\t<form @submit.prevent id=\"save-form\" action=\"/user/save\" class=\"form-horizontal\">\r\n\t\t\t\t\t<validator name=\"validation\">\r\n\t\t\t\t\t\t<input type=\"hidden\" name=\"id\" value=\"{{$route.params.id}}\">\r\n\t\t                <ul class=\"f-o\">\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 姓名：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                            <input initial=\"off\" type=\"text\" name=\"fullName\" class=\"form-control\" v-model=\"user.fullName\" v-validate:fullname=\"['required']\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.fullname.required\">姓名不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    \r\n\t\t                    <li class=\"o-li\" v-if=\"$route.params.id==-1\">\r\n\t\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 用户账号：</span>\r\n\t\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t\t<input initial=\"off\" detect-change=\"off\" type=\"text\" name=\"username\" class=\"form-control\" v-model=\"user.username\" v-validate:username=\"{required:true,remote:['/user/is_uname',{id:$route.params.id}]}\"> \r\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.username.required\">用户账号不能为空!</label>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.username.remote\">用户账号已存在!</label>\r\n\t\t\t                        </div>\r\n\t\t\t                 </li>\r\n\t\t\t                 <li class=\"o-li\" v-else>\r\n\t\t                        <span class=\"li-l\">用户账号：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" class=\"form-control\" disabled=\"true\" v-model=\"user.username\"> \r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <template v-if=\"$route.params.id==-1\">\r\n\t\t\t                    <li class=\"o-li\">\r\n\t\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 密码：</span>\r\n\t\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t\t<input initial=\"off\" type=\"password\" class=\"form-control\" name=\"paramPassword\" v-model=\"user.password\" v-validate:password=\"['required']\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.password.required\">密码不能为空!</label>\r\n\t\t\t                        </div>\r\n\t\t\t                    </li>\r\n\t\t\t                    <li class=\"o-li\">\r\n\t\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 确认密码：</span>\r\n\t\t\t                        <div class=\"li-r\">\r\n\t\t\t                        \t<input\r\n\t\r\n\t initial=\"off\" type=\"password\" class=\"form-control\" id=\"confirm_password\"  v-model=\"user.confirm_password\" v-validate:cpassword=\"['required']\">\r\n\t\t\t                        \t<label class=\"error\" v-if=\"$validation.cpassword.required\">确认密码不能为空!</label>\r\n\t\t\t                        </div>\r\n\t\t\t                    </li>\r\n\t\t                    </template>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 角色：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                        \t<v-chose :value.sync=\"roleselects\" :options=\"roles\">\r\n\t\t\t\t\t\t\t\t\t</v-chose>\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" type=\"hidden\" name=\"roles\" value=\"{{roleselects}}\" v-validate:roleselect=\"['required']\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.roleselect.required\">角色不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">所属分组：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                        \t<select name=\"groupid\" class=\"r-select\" v-model=\"user.groupId\">\r\n\t\t                                <option value=\"\">请选择...</option>\r\n\t\t                                <option v-for=\"option in group\" :value=\"option.value\">{{ option.label }}</option>\r\n\t\t                            </select>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">手机号：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" type=\"text\" name=\"mobile\" class=\"form-control\" v-model=\"user.mobile\" v-validate:mobile=\"['isMobile']\"> \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.mobile.isMobile\">手机号格式不对</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">email：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input\r\n\r\n initial=\"off\" type=\"text\" class=\"form-control\" name=\"email\" v-model=\"user.email\" v-validate:email=\"['isEmail']\">  \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.email.isEmail\">邮箱格式不对!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    \r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">状态：</span>\r\n\t\t                        <div class=\"li-r form-options\" v-if=\"user.enabled\">\r\n\t\t                            <div class=\"form-check\">\r\n\t\t                                <input type=\"checkbox\" v-model=\"user.enabled\" :true-value=\"true\" :false-value=\"false\" checked=\"true\" class=\"fl check\" id=\"check_18\">\r\n\t\t                                <label class=\"check-option\" for=\"check_18\"></label>\r\n\t\t                                <label class=\"check-lb\" for=\"check_18\">启用</label>\r\n\t\t                            </div>\r\n\t\t                            <input type=\"hidden\" name=\"enabled\" v-model=\"user.enabled\">\r\n\t\t                        </div>\r\n\t\t                        <div class=\"li-r form-options\" v-else>\r\n\t\t                            <div class=\"form-check\">\r\n\t\t                                <input type=\"checkbox\" :true-value=\"true\" :false-value=\"false\" v-model=\"user.enabled\" class=\"fl check\" id=\"check_18\" v-model=\"user.enabled\">\r\n\t\t                                <label class=\"check-option\" for=\"check_18\"></label>\r\n\t\t                                <label class=\"check-lb\" for=\"check_18\">启用</label>\r\n\t\t                            </div>\r\n\t\t                            <input type=\"hidden\" name=\"enabled\" v-model=\"user.enabled\">\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"text\">\r\n\t\t                        <span class=\"li-l\">描述：</span>\r\n\t\t                        <textarea class=\"li-r\" name=\"description\" v-model=\"user.description\"></textarea>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"btn\">\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" v-link=\"{path:'/user'}\">返 回</button>\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" @click.prevent=\"save\">保 存</button>\r\n\t\t                    </li>\r\n\t\t                </ul>\r\n\t            \t</validator>\r\n\t        \t</form>\r\n            </div>\r\n        </div>",
      el: function() {
          return "#roleinput";
      },
      data:function(){
          return{
              roleselects:[],
              roles:[],
              user:{
                  enabled:true,
                  groupId:""
              },
              group:[]
          }
      },
      ready:function(){
          var self=this;
          var id=$("input[name='id']").val();
          if(id=='-1'){
              $("input[name='id']").val('');
              self.role_get_all();
              self.group_get_all();
          }else{
              self.get(id);
              self.role_get(id);
              self.role_get_all();
              self.group_get_all();
          };
          vueUI.hideLoading();
          //console.log(this.$data.user)
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
                  url:vueUI.conf.host+'/user/'+id,
                  async:false,
                  type:"get",
                  data:
                      '{"pageNo":1,"id":'+id+'}'
                  ,
                  success:function (rsp){
                      dt=rsp.data;
                      self.$data.user=dt;
                      self.$data.user.groupId=dt.groupid;
                  }
              }) 
             
            }else{self.$set("id",'')}
          },
          save:function (){
              var self=this;
              this.$validate(true);
              if($("input[name='roles']").val()!=''){
                  self.$validation.roleselect.valid=true;
              }else{
                  self.$validation.roleselect.valid=false;
              }
              if(self.$validation.valid){
                  if($("input[name='paramPassword']").val()==$("#confirm_password").val()){
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
                      routers.route.go({ path: '/user'});
                  }else{
                      vueUI.alert("错误提示","两次输入密码不一致");
                  }         
              }
          },
          role_get_all:function(){  //获取所有数据
              var self=this;
              var dt;
              var arr=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/role/get_all',
                  async:false,
                  type:"get",  
                  success:function (rsp){
                      dt=rsp.data;
                      for(var i=0;i<dt.length;i++){
                          arr.push({value:dt[i].id,label:dt[i].chineseName})
                      }
                      self.$data.roles=arr;
                  }
              })
          },
          group_get_all:function(){  //获取所有分组信息
              var self=this;
              var dt;
              var arr=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/group/get_All',
                  async:false,
                  type:"post",  
                  success:function (rsp){
                      dt=rsp.data;
                      for(var i=0;i<dt.length;i++){
                          arr.push({value:dt[i].id,label:dt[i].name})
                      }
                      self.$data.group=arr;
                  }
              })
          },
          role_get:function(id){ 
              var self=this;
              var dt;
              var roles=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/user/get_roles/'+id,
                  async:false,
                  type:"get",  
                  success:function (rsp){
                      dt=rsp.data;
                      var arr=[];
                      for(var i=0;i<dt.length;i++){
                          arr.push(dt[i].id);
                      };
                      self.$data.roleselects=arr;
                  }
              })
          }
      }
  });

});
