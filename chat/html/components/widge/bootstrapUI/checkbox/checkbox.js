define('checkbox', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "<template v-if=\"checked\">\r\n    <label class=\"form-checkbox active\"\r\n    v-bind:class=\"style\">\r\n\t<input type=\"checkbox\"  @click=\"method\" v-model=\"checked\" autocomplete=\"off\" />\r\n    <input type=\"hidden\" v-model=\"checked\" :name=\"name\" /><span> {{displayName}}</span>\r\n    </label>\r\n</template>\r\n<template v-else>\r\n    <label class=\"form-checkbox\"\r\n    v-bind:class=\"style\">\r\n    <input type=\"checkbox\" v-model=\"checked\" @click=\"method\" autocomplete=\"off\" />\r\n    <input type=\"hidden\" v-model=\"checked\" :name=\"name\" /><span> {{displayName}}</span>\r\n    </label>\r\n</template>",
      props:{
      	checked:{                     //决定是否选中
      		type:Boolean,
      		default:true
      	},
      	style:{							//决定显示效果：如form-normal  form-icon
      		type:String,
      		default:'form-normal'
      	},
      	name:{							//要传入后台的字段的name
      		type:String,
      		default:'enabled'
      	},
      	displayName:{					//页面显示名称
      		type:String,
      		default:'可用'
      	},
          method:{                        //默认点击选框需要执行的事件
              type:Function
          }
      }
  });
  /*
  使用说明：根据props的值来确定，一目了然
   */

});
