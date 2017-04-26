define('radiogrop', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "<template  v-if=\"type\">\r\n    <span v-bind:class=\"type\">\r\n        <template v-for=\"option in options\">\r\n            <template v-if=\"value==option.value\">\r\n                <label class=\"form-radio active\"\r\n                v-bind:class=\"option.style\">\r\n                <input type='radio' :name=\"option.name\" :value=\"option.value\" checked @click=\"handleClick\" v-model='model'>{{option.display}}\r\n                </label>\r\n            </template>\r\n            <template v-else>\r\n                <label class=\"form-radio\"\r\n                v-bind:class=\"option.style\">\r\n                <input type='radio' :name=\"option.name\" :value=\"option.value\" @click=\"handleClick\" v-model='model'>{{option.display}}\r\n                </label>\r\n            </template>\r\n        </template>\r\n        <input type=\"hidden\" :name=\"name\" value=\"{{ value }}\">\r\n    </span>\r\n</template>\r\n<template v-else>\r\n    <template v-for=\"option in options\">\r\n        <template v-if=\"value==option.value\">\r\n            <label class=\"form-radio active\"\r\n            v-bind:class=\"option.style\">\r\n            <input type='radio' :name=\"option.name\" :value=\"option.value\" checked @click=\"handleClick\" v-model='model'>{{option.display}}\r\n            </label>\r\n        </template>\r\n        <template v-else>\r\n            <label class=\"form-radio\"\r\n            v-bind:class=\"option.style\">\r\n            <input type='radio' :name=\"option.name\" :value=\"option.value\" @click=\"handleClick\" v-model='model'>{{option.display}}\r\n            </label>\r\n        </template>\r\n    </template>\r\n</template>",
      props:{
      	options:{        //传入的radio数组
      		type:Array,
      		default:[
                      {value:'option1',display:'选项一',style : 'form-normal',checked:true},    //style需要添加的新的class名字，类型为字符串 checked是否选中
                      {value:'option2',display:'选项二',style : 'form-normal'},
                      {value:'option3',display:'选项三',style : 'form-normal'}
                      ]
      	},
      	type:{            //决定横排显示还是竖排显示  默认横显示，如果要竖排显示 设置 style为'form-block'
      		type:String
      	},
          value:{
              twoWay: true
          },
          name:{
              twoWay: true,              //往后台传值的字段名
              type:String,
              default:"checkedValue"
          }
      },
      methods:{
          handleClick:function(v){
              var self=this;
              if($(v.currentTarget).parent('label').hasClass('disabled')){
                  v.preventDefault();
                  v.stopPropagation();
                  this.value=$(v.currentTarget).val();
              }else{
                  $(v.currentTarget).parent('label').addClass('active');
                  $(v.currentTarget).parent('label').siblings('label').removeClass('active');
                  $(v.currentTarget).parent('label').siblings('label').find('input').prop('checked',false);
                  this.value=$(v.currentTarget).val();
              }
          }
      }
  });
  /*
  使用说明：根据props的值来确定，一目了然
   */

});
