define('chose', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "<select  :data-placeholder=\"placeholder\" style=\"width:100%;\" :multiple=\"multiple\">\r\n\t<option value=\"\"></option>\r\n\t<option v-for=\"option in options\" :value=\"option.value\" :selected=\"isSelected(option.value)\">{{{ option.label }}}</option>\r\n</select>",
      props:{
          placeholder:{
              type:String,
              default:"请选择……"
          },
      	value: {       //双向绑定的值
              twoWay: true
          },
          options: {      //select渲染的label和value
              type: Array,
              default: function _default() {
                  return [{value:1,label:""}];
              }
          },
          multiple: {     //是否多选，默认为多选
              type: Boolean,
              default: true
          },
          empty: {
              type: Boolean,
              default: false
          },
          search: {
              type: Boolean,
              default: false
          },
          max: {     //最多选几个
              type: Number,
              default: Infinity
          }
      },
      computed: {
          // 一个计算属性的 getter
          temp: function () {
              // `this` 指向 vm 实例
              if(this.multiple){
                  var arr=[];
                  for(var i=0;i<this.value.length;i++){
                      arr.push(this.value[i]+'');
                  };
                  return arr
              }else{
                  return this.value
              }
          }
      },
      watch: {
          'options': function (val, oldVal) {
              $(this.$el).trigger("chosen:updated");
          },
          'value': function (val, oldVal) {
              $(this.$el).trigger("chosen:updated");
          }
      },
      ready:function(){
          var self=this;
          Vue.nextTick(function(){
              $(self.$el).chosen({
                  width:"100%",
                  disable_search_threshold:0,
                  allow_single_deselect:self.empty,
                  disable_search:self.search,
                  no_results_text:'未找到'
              });
              if(!self.multiple){
                  self.index=parseInt($(self.$el).siblings("div.chosen-container").find("li.result-selected:eq(0)").attr("data-option-array-index"))-1
              };
              $(self.$el).chosen().change(function(){
                  setTimeout(function(){
                      if(self.multiple){
                          var target=$(self.$el).siblings("div.chosen-container").find("li.search-choice");
                          var arr=[];
                          for(var i=0;i<target.length;i++){
                              var index=$(target[i]).find("a").attr("data-option-array-index")-1;
                              arr.push(self.$data.options[index].value);
                          };
                          self.$data.value=arr;
                      }else{
                          var select=$(self.$el).siblings("div.chosen-container").children("a").children("abbr");
                          if(self.empty&&select.length==0){
                              self.value='';
                          }else{
                              var target=$(self.$el).siblings("div.chosen-container").find("li.result-selected");
                              if(target.length==1){
                                  var index=parseInt($(target[0]).attr("data-option-array-index"))-1
                                  self.index=index;
                                  self.value=self.$data.options[index].value
                              }else{
                                  for(var i=0;i<target.length;i++){
                                      var index=parseInt($(target[i]).attr("data-option-array-index"))-1;
                                      if(self.value!=self.$data.options[index].value){
                                          self.index=index;
                                          self.value=self.$data.options[index].value;
                                          break;
                                      }
                                  }
                              }
                          }
                      }
                  },0)
              });
          })
      },
      methods:{
          isSelected: function isSelected(v) {
              if(this.multiple){
                  return this.temp.indexOf(v+'') > -1;
              }else{
                  return v==this.value
              }
          },
          arrs:function(arr){
              var result=[];
              for(var i=0;i<arr.length;i++){
                  result.push(arr[i]+'')
              };
              return result;
          },
          aros:function(aro){
              var arr=[];
              for(var i=0;i<aro.length;i++){
                  arr.push({value:aro[i].value+'',label:aro[i].label+''})
              };
              return arr;
          }
      }
  });
  /*
  使用说明：根据props的值来确定，一目了然
   */

});
