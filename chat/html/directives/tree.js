define('tree', function(require, exports, module) {

  /**
   * 此处须把所有指令全局化
   */
  // import Vue from 'vue'
  
  // Vue.directive('XXX', XXX)
  var Vue = require('vue');
  Vue.directive('tree', function (value) {
    $(this.el).html("");
  	var self=this;
    	function recursive (argument) {
        var t=0;
    		for(var i=0;i<argument.length;i++){
    			if(!argument[i].show||argument[i].show!=1||!argument[i].show||argument[i].show!='1')continue;
    			if(argument[i].children.length>0){
    				var _type = 0;
    				if(typeof(argument[i].type)!="undefined" && argument[i].type!=""){
    					_type = argument[i].type;
    				}
    				var dom='<li class="subNode-expand" data-node-type="'+_type+'" data-node-id="'+argument[i].id+'" data-node-pid="'+argument[i].parentId+'" data-node-name="'+argument[i].name+'">'+
    					'<a class="orgnization-name">'+
    						'<i class="fa '+(_type=="0"?"fa-plus-square":"fa-user")+'"></i>'+
    						'<span class="menu-title dx8" data-node-index="'+argument[i].id+'">'+argument[i].name+'</span>'+
    					'</a>'+
                      '<div class="pull-right" style=" padding-top:15px;">'+
  	                    '<span class="anshowno zeta-showno anbj">'+
  	                    	'<a href="#"><i class="fa fa-pencil fa-lg"></i></a>'+
  	                    	'<a href="#"><i class="fa fa-fa fa-times fa-lg"></i></a>'+
  	                    	'<a href="#"><i class="fa fa fa-plus fa-lg"></i></a>'+
  	                    '</span>'+
  	                    '<label class="form-checkbox form-icon"><input class="org-checkbox" type="checkbox"></label>'+
  	                '</div>'+ 
  	                '<ul class="zeta-bgcolor05 collapse">'+
  	                '</ul>'+
                  '</li>';
                  if($("li[data-node-id='"+argument[i].parentId+"']",self.el).length==0){
                  	$(self.el).append(dom);
                  }else{
                  	$("li[data-node-id='"+argument[i].parentId+"']",self.el).children("ul").append(dom);
                  };
            recursive(argument[i].children)
    			}else{
    				var _type = 0;
    				if(typeof(argument[i].type)!="undefined" && argument[i].type!=""){
    					_type = argument[i].type;
    				}
    				var domb='<li data-node-type="'+_type+'" data-node-id="'+argument[i].id+'" data-node-pid="'+argument[i].parentId+'" data-node-name="'+argument[i].name+'">'+
    					'<a class="orgnization-name">'+
    						'<i class="fa '+(_type=="0"?"fa-minus-square":"fa-user")+'"></i>'+
    						'<span class="menu-title dx8" data-node-index="'+argument[i].id+'">'+argument[i].name+'</span>'+
    					'</a>'+
                      '<div class="pull-right" style=" padding-top:15px;">'+
                      	'<span class="anshowno zeta-showno anbj">'+
                      		'<a href="#"><i class="fa fa-pencil fa-lg"></i></a>'+
                      		'<a href="#"><i class="fa fa-fa fa-times fa-lg"></i></a>'+
                      		'<a href="#"><i class="fa fa fa-plus fa-lg"></i></a>'+
                      	'</span>'+
                      	'<label class="form-checkbox form-icon">'+
                      		'<input class="org-checkbox" type="checkbox">'+
                      	'</label>'+
                      '</div>'+
                  '</li>';
                  if($("li[data-node-id='"+argument[i].parentId+"']",self.el).length==0){
                  	$(self.el).append(domb);
                  }else{
                  	$("li[data-node-id='"+argument[i].parentId+"']",self.el).children("ul").append(domb);
                  };
    			}
    		}
    	};
    if(value){
    	recursive(value);
      $("ul:eq(0)",self.el).addClass("in");
      if($(self.el).find('i:eq(0)').hasClass('fa-plus-square')){
      	$(self.el).find('i:eq(0)').removeClass('fa-plus-square');
      	$(self.el).find('i:eq(0)').addClass('fa-minus-square');
      }
    }
  });
  
  Vue.directive('treeradio', function (value) {
    $(this.el).html("");
    var self=this;
      function recursive (argument) {
        var t=0;
        for(var i=0;i<argument.length;i++){
          if(argument[i].children.length>0){
            var dom='<li class="subNode-expand" data-node-id="'+argument[i].id+'" data-node-pid="'+argument[i].pid+'" data-node-name="'+argument[i].name+'">'+
              '<a class="orgnization-name">'+
                '<i class="fa fa-plus-square"></i>'+
                '<span class="menu-title dx8" data-node-index="'+argument[i].id+'">'+argument[i].name+'</span>'+
              '</a>'+
                      '<div class="pull-right" style=" padding-top:15px;">'+
                        '<span class="anshowno zeta-showno anbj">'+
                          '<a href="#"><i class="fa fa-pencil fa-lg"></i></a>'+
                          '<a href="#"><i class="fa fa-fa fa-times fa-lg"></i></a>'+
                          '<a href="#"><i class="fa fa fa-plus fa-lg"></i></a>'+
                        '</span>'+
                        '<label class="form-radio form-icon"><input class="org-radio" type="radio"></label>'+
                    '</div>'+ 
                    '<ul class="zeta-bgcolor05 collapse">'+
                    '</ul>'+
                  '</li>';
                  if($("li[data-node-id='"+argument[i].pid+"']",self.el).length==0){
                    $(self.el).append(dom);
                  }else{
                    $("li[data-node-id='"+argument[i].pid+"']",self.el).children("ul").append(dom);
                  };
            recursive(argument[i].children)
          }else{
            var domb='<li data-node-id="'+argument[i].id+'" data-node-pid="'+argument[i].pid+'" data-node-name="'+argument[i].name+'">'+
              '<a class="orgnization-name">'+
                '<i class="fa fa-minus-square"></i>'+
                '<span class="menu-title dx8" data-node-index="'+argument[i].id+'">'+argument[i].name+'</span>'+
              '</a>'+
                      '<div class="pull-right" style=" padding-top:15px;">'+
                        '<span class="anshowno zeta-showno anbj">'+
                          '<a href="#"><i class="fa fa-pencil fa-lg"></i></a>'+
                          '<a href="#"><i class="fa fa-fa fa-times fa-lg"></i></a>'+
                          '<a href="#"><i class="fa fa fa-plus fa-lg"></i></a>'+
                        '</span>'+
                        '<label class="form-radio form-icon">'+
                          '<input class="org-radio" type="radio">'+
                        '</label>'+
                      '</div>'+
                  '</li>';
                  if($("li[data-node-id='"+argument[i].pid+"']",self.el).length==0){
                    $(self.el).append(domb);
                  }else{
                    $("li[data-node-id='"+argument[i].pid+"']",self.el).children("ul").append(domb);
                  };
          }
        }
      };
    if(value){
      recursive(value);
      // $("ul:eq(0)",self.el).addClass("in");
      // if($(self.el).find('i:eq(0)').hasClass('fa-plus-square')){
      // 	$(self.el).find('i:eq(0)').removeClass('fa-plus-square');
      // 	$(self.el).find('i:eq(0)').addClass('fa-minus-square');
      // }
    }
  });

});
