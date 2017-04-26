define('resetpassword', function(require, exports, module) {

  var Vue = require('vue');
  var VueValidator=require('vue-validator')
  Vue.use(VueValidator)
  var select = require('vue-strap').select;
  var option = require('vue-strap').option;
  
  module.exports = Vue.extend({
      template: "        <style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-m {\r\n    width: 97%;\r\n    margin: 1.5%;\r\n    border-top: 1px #ccc solid;\r\n    border-left: 1px #ccc solid;\r\n    float: left; }\r\n    .container .content .c-m ul {\r\n      width: 100%;\r\n      height: 40px;\r\n      border-right: 1px #ccc solid;\r\n      border-bottom: 1px #ccc solid; }\r\n      .container .content .c-m ul li {\r\n        height: 20px;\r\n        line-height: 20px;\r\n        padding: 10px;\r\n        float: left;\r\n        /*span:hover{background-color: #ec98fe;}*/ }\r\n        .container .content .c-m ul li span {\r\n          display: block;\r\n          border-radius: 4px;\r\n          padding: 0 10px;\r\n          cursor: pointer; }\r\n      .container .content .c-m ul .b-gray {\r\n        background-color: #f2f2f2;\r\n        width: 150px;\r\n        text-align: center;\r\n        border-right: 1px solid #ccc; }\r\n      .container .content .c-m ul .active {\r\n        background-color: #ec98fe; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 10px 20px; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #5e5e66;\r\n      border: none;\r\n      color: #fff; }\r\n  .container .content .c-r {\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    width: 300px;\r\n    float: right;\r\n    margin: 10px 20px; }\r\n    .container .content .c-r .r-l {\r\n      width: 270px;\r\n      height: 28px;\r\n      line-height: 28px;\r\n      border: none;\r\n      outline: none;\r\n      float: left; }\r\n    .container .content .c-r .r-l:hover {\r\n      border: none;\r\n      outline: none; }\r\n    .container .content .c-r i {\r\n      color: #000;\r\n      margin: 8px 0 0 10px; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=/components/user/user-input.css.map */\r\n</style>\r\n        <div class=\"content\" id=\"userinput\">\r\n            <div class=\"form-m\">\r\n                <div class=\"f-t\">\r\n\t\t\t\t\t<span class=\"fl\">个人设置</span>\r\n                    <!-- <button type=\"button\" class=\"fr\" id=\"out_form\"><i class=\"fa fa-close fa-lg\"></i></button> -->\r\n                </div>\r\n\t\t\t\t<form @submit.prevent id=\"save-form\" action=\"/user/reset_pass\" class=\"form-horizontal\">\r\n\t\t\t\t\t<validator name=\"validation\">\r\n\t\t                <ul class=\"f-o\">\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 原始密码：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t                            <input initial=\"off\" type=\"password\" name=\"password_old\" class=\"form-control\" v-model=\"form.fullName\" v-validate:fullname=\"['required']\">   \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.fullname.required\">原始密码不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\"><span class=\"red\">* </span> 新密码：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input initial=\"off\" type=\"password\" name=\"password_new\" class=\"form-control\" v-model=\"form.newpassword\" v-validate:username=\"['required']\"> \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.username.required\">新密码不能为空!</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"o-li\">\r\n\t\t                        <span class=\"li-l\">确认新密码：</span>\r\n\t\t                        <div class=\"li-r\">\r\n\t\t\t\t\t\t\t\t\t<input initial=\"off\" type=\"password\" name=\"mobile\" class=\"form-control\" v-model=\"form.mobile\" v-validate:mobile=\"{required: true,equals:form.newpassword}\"> \r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.mobile.required\">确认密码不能为空</label>\r\n\t\t\t\t\t\t\t\t\t<label class=\"error\" v-if=\"$validation.mobile.equals\">两次密码输入不一致</label>\r\n\t\t                        </div>\r\n\t\t                    </li>\r\n\t\t                    <li class=\"btn\">\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" onclick=\"javascript:history.go(-1)\">返 回</button>\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" @click.prevent=\"save\">保 存</button>\r\n\t\t                        <button type=\"button\" class=\"fr\" type=\"button\" @click=\"reset\">重置</button>\r\n\t\t                    </li>\r\n\t\t                </ul>\r\n\t            \t</validator>\r\n\t        \t</form>\r\n            </div>\r\n        </div>",
      el: function() {
          return "#roleinput";
      },
      data:function(){
          return{
              form:{}
          }
      },
      ready:function(){
          vueUI.hideLoading();
      },
      route: {
          activate: function (transition) {
              vueUI.showLoading();
              transition.next()
          }
      },
      methods:{
          save:function (){
              this.$validate(true);
              var self=this;
              if(self.$validation.valid){
                  var form=$("#save-form");
                  var josn=JSON.stringify($('#save-form').serializeObject());
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+form.attr('action'),
                      async:false,
                      data:josn,
                      success:function (res){
                          if(res.meta.success){
                              vueUI.toolTips("success","保存成功");
                              vueUI.gotoLogin();
                          }else{
                              vueUI.alert("操作提示",res.meta.message)
                          }
                      }
                  });
                           
              }
          },
          reset:function(){
              this.form={};
          }
      }
  });

});
