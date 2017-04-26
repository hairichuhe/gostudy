define('vueGrid', function(require, exports, module) {

  var Vue = require('vue');
  window.vueUI=require('vueUI');
  var grid = Vue.extend({
  	template: "\r\n<table :class=\"classz\" :style=\"style \" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<tr :class=\"classhead\">\r\n\t\t<th v-if=\"hideCheckbox!=true\" style=\"width: 40px;\" class=\"tb-ck\">\r\n\t\t\t<input class=\"ck-box\" :id=\"target+'_box'\" @click=\"selectAll\"\r\n\t\t\ttype=\"checkbox\"> <label :for=\"target+'_box'\" class=\"ck-over\">\r\n\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t</label>\r\n\t\t</th>\r\n\t\t<th style=\"text-align: center; width: 56px;\">序号</th>\r\n\t\t<th v-for=\"entry in columns\" :style=\"entry.headerStyle\"\r\n\t\t\t:class=\"entry.headerCls\" v-if=\"entry.type!='btn'\"><span\r\n\t\t\t@click=\"entry.sortable!=false?sortBy(entry.name):''\"\r\n\t\t\tv-if=\"entry.renderHeader!=null\"> {{{entry.displayName}}} </span> <span\r\n\t\t\t@click=\"entry.sortable!=false?sortBy(entry.name):''\"\r\n\t\t\ttitle=\"{{entry.displayName}}\" v-else> {{entry.displayName}} </span> <span\r\n\t\t\t@click=\"entry.sortable!=false?sortBy(entry.name):''\"> <i\r\n\t\t\t\tv-if=\"entry.sortable!=false\"\r\n\t\t\t\t:class=\"sortOrders[entry.name] > 0 ? 'fa fa-angle-down fa-lg' : 'fa fa-angle-up fa-lg'\">\r\n\t\t\t</i>\r\n\t\t</span></th>\r\n\t\t<th v-if=\"entry.type=='btn'\" v-for=\"entry in columns\"\r\n\t\t\t:style=\"entry.headerStyle\" :class=\"entry.headerCls\">\r\n\t\t\t{{entry.displayName}}</th>\r\n\t</tr>\r\n\t<tr v-for=\"entry in page.result\">\r\n\t\t<td v-if=\"hideCheckbox!=true\" class=\"tb-ck\"><input\r\n\t\t\tvalue=\"{{entry.id}}\" name=\"checkbox2\"\r\n\t\t\tdata-userdefie=\"{{entry[userdefie]}}\" class=\"ck-box\"\r\n\t\t\t:id=\"target+'_box'+($index+1)\" type=\"checkbox\"> <label\r\n\t\t\t:for=\"target+'_box'+($index+1)\" class=\"ck-over\"> <i\r\n\t\t\t\tclass=\"fa fa-check\"></i>\r\n\t\t</label></td>\r\n\t\t<td style=\"text-align: center\">{{(page.pageNo-1) * page.pageSize\r\n\t\t\t+ $index+1}}</td>\r\n\t\t<td :class=\"key.dataCls\" v-if=\"key.type!='btn'\" v-for=\"key in columns\">\r\n\t\t\t<span v-if=\"key.render!=null\" :style=\"key.dataStyle\"\r\n\t\t\tv-html=\"entry[key.name]\"> </span> <span title=\"{{entry[key.name]}}\"\r\n\t\t\t:style=\"key.dataStyle\" v-else> {{entry[key.name]}} </span>\r\n\t\t</td>\r\n\t\t<td @click=\"key.onclick?onBtnClick(key.onclick,entry):''\"\r\n\t\t\t:class=\"key.dataCls\" v-if=\"key.type=='btn'\" v-for=\"key in columns\">\r\n\t\t\t<template v-if=\"key.render!=null\"> {{{entry[key.name]}}} </template>\r\n\t\t\t<template v-else> <i :class=\"key.btnCls\"></i> </template>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr v-if=\"page.result.length==0\">\r\n\t\t<td v-if=\"hideCheckbox!=true\" :colspan=\"columns.length+2\">\r\n\t\t\t<div>暂无数据</div>\r\n\t\t</td>\r\n\t\t<td v-else :colspan=\"columns.length+1\">\r\n\t\t\t<div>暂无数据</div>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n<div class=\"flip\" v-if=\"hidePagebtn!=true\">\r\n\t<div class=\"flip-info\">\r\n\t\t<span class=\"info-s\">共<span>{{page.totalPages}}</span>页\r\n\t\t</span> <span class=\"info-s\">当前第<span>{{page.pageNo}}</span>页\r\n\t\t</span>\r\n\t\t<!-- <span class=\"info-s\">显示第\r\n                            <span v-if=\"page.totalCount>0\">{{page.first}}</span>\r\n                            <span v-else>0</span> ~ \r\n                            <span v-if=\"page.hasNext==false\">\r\n                                <span v-if=\"page.totalCount>0\">{{page.totalCount}}</span>\r\n                                <span v-else>0</span>\r\n                            </span>\r\n                            <span v-else>{{page.pageSize * page.pageNo}}</span>\r\n                        条记录</span> -->\r\n\t</div>\r\n\t<ul class=\"flip-right\" style=\"float: left\">\r\n\t\t<li>\r\n\t\t\t<!-- <span style=\"float:left;margin-right:10px;\">每页显示</span> --> <a\r\n\t\t\tclass=\"active\" href=\"javascript:\" @click=\"setPageSize($event,10)\">10条</a>\r\n\t\t</li>\r\n\t\t<li><a href=\"javascript:\" @click=\"setPageSize($event,20)\">20条</a>\r\n\t\t</li>\r\n\t\t<li><a href=\"javascript:\" @click=\"setPageSize($event,50)\">50条</a>\r\n\t\t</li>\r\n\t</ul>\r\n\t<ul class=\"flip-right\">\r\n\t\t<li><a :class=\"page.hasPre==true?'':'disable'\" href=\"javascript:\"\r\n\t\t\t@click=\"page.hasPre==true?goFirst():''\">首页</a></li>\r\n\t\t<li><a :class=\"page.hasPre==true?'':'disable'\" href=\"javascript:\"\r\n\t\t\t@click=\"page.hasPre==true?goPre():''\">上一页</a></li>\r\n\t\t<li><a :class=\"page.hasNext==true?'':'disable'\"\r\n\t\t\thref=\"javascript:\" @click=\"page.hasNext==true?goNext():''\">下一页</a></li>\r\n\t\t<li><a :class=\"page.hasNext==true?'':'disable'\"\r\n\t\t\thref=\"javascript:\" @click=\"page.hasNext==true?goLast():''\">尾页</a></li>\r\n\t\t<li>跳转到第<input type=\"text\" :placeholder=\"page.pageNo\">页\r\n\t\t\t<button @click=\"goFix\">确定</button></li>\r\n\t</ul>\r\n</div>",
  	  /** 需要展示的字段及page信息，通过<vue-grid columns="columns" page="page">标签传入* */
  	props: {
  		columns: Array,
  		target:{	// 作用域 必填
  			type:String,
  			required:true
  		},
  		page:{
  			type:Object,
  			default:function(){
  				var obj=new Object;
  				obj.result=[];
  				return obj
  			}
  		},
  		classz:{			// table引用样式
  		  	type:String,
              default:"m-t"
  		},
  		classhead:{			// 表头引用样式
  		  	type:String,
              default:"t-head"
  		},
  		style:String,		// table样式
  		hideCheckbox:Boolean,	// 是否隐藏左侧checkbox
  		hidePagebtn:Boolean,		// 是否隐藏分页栏 ,默认显示*/
  		userdefie:String,        // 用户自定义挂载数据
  		aftersearch:Boolean,		// 是否进行后加载
  		showloading:Boolean		// 是否隐藏加载动画，默认显示
  		  
  	},
  	ready:function(){	// html加载完成时调用
  	  	var self=this;
  	  	if(self.$data.aftersearch!=true){
  	  		this.query();  // 初始化数据
  	  	}
  	},
  	data: function () {
  	  	var sortOrders = {}
  	    this.columns.forEach(function (key) {
  	      sortOrders[key.name] = 1
  	    })
  	    return {
  			sortOrders: sortOrders
  		}
  	},
  	methods: {	// 自定义方法
  		fillRender:function(){	// 用于将展示字段进行自定义渲染
  								// ,如{name:'enable',displayName:'状态',render:'renderEnable'}
  								// 会自动调用renderEnable方法进行值的替换
  
  			var clus = this._data.columns;
  			  
  			var dts = [];
  			if(null != this._data.page){
  				dts = this._data.page.result;
  			  	for(var i =0;i<clus.length;i++){
  				  	if(null != dts){
  					  	if(null != clus[i].render){
  						 
  						  	for(var j = 0;j<dts.length;j++){
  							  	var clu = clus[i].name;
  							  	dts[j][clu] = this.$parent[clus[i].render](dts[j]);
  						  	}
  					  	}
  					  	if(null != clus[i].renderHeader){
  						  	clus[i].displayName = this.$parent[clus[i].renderHeader](clus[i].displayName);
  						 
  					  	}
  				  	}
  			  	}
  				  
  				this._data.page.result = dts;
  
  			}
  		},
  		onBtnClick:function(method,v){
  			
  			this.$parent[method](v);
  		},
  	    sortBy: function (key) {	// 排序方法,点击表格头部时触发
  	    	this.sortOrders[key] = this.sortOrders[key] * -1;
  	    	var self=this;
  	    	if(self._data.target){
  	    		var sort = $("#order","#"+self._data.target);
  	    		var sortBy = $("#orderBy","#"+self._data.target);
  	    	}else{
  	    		var sort = $("#order");
  	    		var sortBy = $("#orderBy");
  	    	}
  	    	
  	    	if(sortBy.val()==key){
  	    		if(sort.val()=="desc" ?  sort.val("asc"):sort.val("desc"));
  	    	}else{
  	    		sortBy.val(key);
  	    	}
  	    		this.query();
  	    },
  	    setPageSize:function(e,size){
  	    	if(null != size && size>0){
  	    		var self=this;
  	    		$(e.currentTarget).addClass("active");
  	    		$(e.currentTarget).parent("li").siblings("li").find("a").removeClass("active");
  		    	if(self._data.target){
  		    		$("#pageSize","#"+self._data.target).val(size);
  		    	}else{
  		    		$("#pageSize").val(size);
  		    	};
  		    	this.query(1);
  	    	};
  	    },
          selectAll:function(e){	// 全选/反全选
          	var self=this;
          	var selectall=$(e.currentTarget).prop("checked");
          	$("input[type='checkbox']",$(e.currentTarget).parents("table")).prop("checked",selectall); 
          },
          getSelected:function(){	// 用于返回一条选择记录,0条或多条选中时返回空
          	var target = null;
          	var self=this;
          	if(self._data.target){
          		target = $("input[name='checkbox2']:checked","#"+self._data.target);
          	}else
          		target = $("input[name='checkbox2']:checked");
  			if(target.length==1){
  				return target[0].value;
  			}else if(target.length==0){
  				vueUI.alert("操作提示","请选择一条记录");
  				return null;
  			}else if(target.length>1){
  				vueUI.alert("操作提示","只能选择一条记录");
  				return null;
  			}
  		},
  		getSelectIds:function(){ // 用于返回多 条选择记录,0条选中时返回空
  			
  			var target = null;
          	var self=this;
          	if(self._data.target){
          		target = $("input[name='checkbox2']:checked","#"+self._data.target);
          	}else
          		target = $("input[name='checkbox2']:checked");
  			
  			if(target.length==0){
  				vueUI.alert("操作提示","请选择一条记录");
  				return null;
  			}else {
  				var rs = '';
  				for(var i =0;i<target.length;i++){
  					rs+=target[i].value+',';
  				}
  				return rs;
  			}
  		},
  		getSelectUserDefines:function(){
  			var target = null;
          	var self=this;
          	if(self._data.target){
          		target = $("input[name='checkbox2']:checked","#"+self._data.target);
          	}else
          		target = $("input[name='checkbox2']:checked");
  			
  			if(target.length==0){
  				vueUI.alert("操作提示","请选择一条记录");
  				return null;
  			}else {
  				var rs = '';
  				for(var i =0;i<target.length;i++){
  					rs+=$(target[i]).data("userdefie")+',';
  				}
  				return rs;
  			}
  		},
  		goFirst:function(){
  	    	var pageNo = 1;
              this.query(pageNo);
  	    },
  	    goPre:function(){
  	    	var self=this;
  	    	if(self._data.target){
  	    		var pageNo = eval($("#pageNo","#"+self._data.target).val())-1;
  	    	}else{
  	    		var pageNo = eval($("#pageNo").val())-1;
  	    	}
  	    	
  	    	this.query(pageNo);
  	    },
  	    goNext:function(){
  	    	var self=this;
  	    	if(self._data.target){
  	    		var pageNo = eval($("#pageNo","#"+self._data.target).val())+1;
  	    	}else{
  	    		var pageNo = eval($("#pageNo").val())+1;
  	    	}
  	    	this.query(pageNo);
  	    },
  	    goLast:function(){
  	    	var pageNo = this._data.page.totalPages;
  	    	this.query(pageNo);
  	    },
  	    goFix:function(e){
  	    	var val=$(e.currentTarget).siblings("input").val();
  	    	var self=this;
  	    	if(val<1){
  	    		val=1
  	    	}else if(val>self._data.page.totalPages){
  	    		val=self._data.page.totalPages
  	    	};
  	    	this.query(val);
  	    	$(e.currentTarget).siblings("input").val("");
  	    },
  	    query:function(pageNo){
  	    	var self=this;
  	    	if(self.$data.showloading===true){
  	    		if($("#portalLoading",$("body")).length==0){
  	    			vueUI.showLoading()
  	    		}
  	    	};
  	    	if(self._data.target){
  	    		var form = $("#query-form","#"+self._data.target);
  	    		if(pageNo){
  		    		$("#pageNo","#"+self._data.target).val(pageNo);
  	    		};
  	            var josn=JSON.stringify($('#query-form',"#"+self._data.target).serializeObject());
  	    	}else{
  	    		var form =$("#query-form");
  	    		if(pageNo){
  		    		$("#pageNo","#"+self._data.target).val(pageNo);
  	    		};
  	            var josn=JSON.stringify($('#query-form').serializeObject());
  	    	}
  	    	
  	    	var t;
  	    	
              
              vueUI.ajaxCall({
              	url:vueUI.conf.host+form.attr("action"),
                  async:false,
                  contentType:'application/json;charset=utf-8',
                  datatype:"json",
                  data:josn,
                  type:"post",
                  success:function (rsp){
                      t=rsp.data;
                      if(!t.pageNo){
                      	t.pageNo=1
                      };
                      if(!t.pageSize){
                      	t.pageSize=10;
                      }
                  },
                  error:function (rsp){
                      vueUI.alert("操作提示","查询失败")
                  }
              });
              this.$data.page = t;
              this.fillRender();
              if(self.$data.showloading===true){
              	vueUI.hideLoading();
              };
  	    }
  	  }
  
  });
  
  Vue.component('vue-grid', grid);
  

});
