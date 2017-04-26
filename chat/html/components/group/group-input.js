define('group-input', function(require, exports, module) {

  var Vue = require('vue');
  var VueValidator=require('vue-validator');
  Vue.use(VueValidator);
  var select = require('vue-strap').select;
  var option = require('vue-strap').option;
  
  module.exports = Vue.extend({
      template: "<style type=\"text/css\">.container .content {\r\n  width: calc(100vw - 250px);\r\n  height: auto;\r\n  margin: 10px 10px 50px 10px;\r\n  min-width: 774px;\r\n  border: 1px #ccc solid; }\r\n  .container .content .c-m {\r\n    width: 97%;\r\n    margin: 1.5%;\r\n    border-top: 1px #ccc solid;\r\n    border-left: 1px #ccc solid;\r\n    float: left; }\r\n    .container .content .c-m ul {\r\n      width: 100%;\r\n      height: 40px;\r\n      border-right: 1px #ccc solid;\r\n      border-bottom: 1px #ccc solid; }\r\n      .container .content .c-m ul li {\r\n        height: 20px;\r\n        line-height: 20px;\r\n        padding: 10px;\r\n        float: left;\r\n        /*span:hover{background-color: #ec98fe;}*/ }\r\n        .container .content .c-m ul li span {\r\n          display: block;\r\n          border-radius: 4px;\r\n          padding: 0 10px;\r\n          cursor: pointer; }\r\n      .container .content .c-m ul .b-gray {\r\n        background-color: #f2f2f2;\r\n        width: 150px;\r\n        text-align: center;\r\n        border-right: 1px solid #ccc; }\r\n      .container .content .c-m ul .active {\r\n        background-color: #ec98fe; }\r\n  .container .content .c-l {\r\n    float: left;\r\n    height: 30px;\r\n    margin: 10px 20px; }\r\n    .container .content .c-l button {\r\n      line-height: 30px;\r\n      height: 30px;\r\n      padding: 0 10px;\r\n      background-color: #5e5e66;\r\n      border: none;\r\n      color: #fff; }\r\n  .container .content .c-r {\r\n    height: 30px;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    width: 300px;\r\n    float: right;\r\n    margin: 10px 20px; }\r\n    .container .content .c-r .r-l {\r\n      width: 270px;\r\n      height: 28px;\r\n      line-height: 28px;\r\n      border: none;\r\n      outline: none;\r\n      float: left; }\r\n    .container .content .c-r .r-l:hover {\r\n      border: none;\r\n      outline: none; }\r\n    .container .content .c-r i {\r\n      color: #000;\r\n      margin: 8px 0 0 10px; }\r\n  .container .content .bug-t {\r\n    margin: 1.5%;\r\n    width: 96%;\r\n    float: left;\r\n    outline: 1px  solid #ccc;\r\n    padding: 0.5%; }\r\n\r\n/*# sourceMappingURL=user-input.css.map */\r\n</style>\r\n<div class=\"content\" id=\"groupinput\">\r\n    <div class=\"form-m\">\r\n        <div class=\"f-t\">\r\n            <template v-if=\"$route.params.id==-1\">\r\n                <span class=\"fl\">新增分组</span>\r\n            </template>\r\n            <template v-else>\r\n                <span class=\"fl\">修改分组</span>\r\n            </template>\r\n            <button type=\"button\" class=\"fr\" id=\"out_form\" v-link=\"{path:'/group'}\"><i class=\"fa fa-close fa-lg\"></i></button>\r\n        </div>\r\n        <form @submit.prevent id=\"save-form\" action=\"/group/save\" class=\"form-horizontal\">\r\n            <validator name=\"validation\">\r\n                <input type=\"hidden\" name=\"id\" value=\"{{$route.params.id}}\">\r\n                <ul class=\"f-o\">\r\n                    <li class=\"o-li\">\r\n                        <span class=\"li-l\"><span class=\"red\">* </span> 分组名称：</span>\r\n                        <div class=\"li-r\">\r\n                            <input initial=\"off\" type=\"text\" name=\"name\" class=\"form-control\" v-model=\"group.name\" v-validate:name=\"['required']\">\r\n                            <label class=\"error\" v-if=\"$validation.name.required\">分组名称不能为空!</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"o-li\" v-if=\"$route.params.id==-1\">\r\n                        <span class=\"li-l\"><span class=\"red\">* </span> 分组编号：</span>\r\n                        <div class=\"li-r\">\r\n                            <input initial=\"off\" detect-change=\"off\" type=\"text\" name=\"groupNum\" class=\"form-control\" v-model=\"group.groupNum\" v-validate:groupnum=\"{required:true,remote:['/group/is_num',{id:$route.params.id}]}\">\r\n                            <label class=\"error\" v-if=\"$validation.groupnum.required\">分组编号不能为空!</label>\r\n                            <label class=\"error\" v-if=\"$validation.groupnum.remote\">分组编号已存在!</label>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"o-li\" v-else>\r\n                        <span class=\"li-l\">分组编号：</span>\r\n                        <div class=\"li-r\">\r\n                            <input type=\"text\" name=\"groupNum\" class=\"form-control\" value=\"{{group.groupNum}}\">\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"o-li\">\r\n                        <span class=\"li-l\">上级分组：</span>\r\n                        <div class=\"li-r\">\r\n                            <select name=\"pid\" class=\"r-select\" v-model=\"group.pid\">\r\n                                <option value=\"\">请选择...</option>\r\n                                <option v-for=\"option in groups\" :value=\"option.value\">{{ option.label }}</option>\r\n                            </select>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"btn\">\r\n                        <button type=\"button\" class=\"fr\" type=\"button\" v-link=\"{path:'/group'}\">返 回</button>\r\n                        <button type=\"button\" class=\"fr\" type=\"button\" @click.prevent=\"save\">保 存</button>\r\n                    </li>\r\n                </ul>\r\n            </validator>\r\n        </form>\r\n    </div>\r\n</div>\r\n",
      el: function() {
          return "#groupinput";
      },
      data:function(){
          return{
          	groups:[],
              group:{
                  pid:''
              }
          }
      },
      ready:function(){
          var self=this;
          var id=$("input[name='id']").val();
          if(id=='-1'){
              $("input[name='id']").val('');
              id="";
              self.group_get_all();
          }else{
              self.get(id);
              self.groupById(id);
          };
          vueUI.hideLoading();
          //console.log(this.$data.groups);
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
                  url:vueUI.conf.host+'/group/'+id,
                  async:false,
                  type:"get",
                  data:
                      '{"pageNo":1,"id":'+id+'}'
                  ,
                  success:function (rsp){
                      dt=rsp.data;
                      if(dt.pid==null){
                      	dt.pid=''
                      }
                      self.$data.group=dt;
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
                          }
                      });
                      routers.route.go({ path: '/group'});
              }
          },
          group_get_all:function(){  //获取所有数据
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
                      	if(dt[i].pid==0){
                      		arr.push({value:dt[i].id,label:dt[i].name,pid:dt[i]});
                      	}
                      }
                      self.$data.groups=arr;
                  }
              })
          },
          groupById:function(id){  //获取所有数据
              var self=this;
              var dt;
              var arr=[];
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/group/group_id',
                  async:false,
                  type:"post",
                  data:'{"id":"'+id+'"}',
                  success:function (rsp){
                      dt=rsp.data;
                      for(var i=0;i<dt.length;i++){
                      	if(dt[i].pid==0){
                      		arr.push({value:dt[i].id,label:dt[i].name})
                      	}
                      }
                      self.$data.groups=arr;
                  }
              })
          }
      }
  })

});
