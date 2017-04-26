define('vueUI', function(require, exports, module) {

  module.exports = {
  	
  	/**
  	 * ajax 提交 <br>
  	 * 参数：option，需要设置的内容type、url、data、success即可
  	 */
  	ajaxCall: function(option){
  		var errorHandler = function(rsp,callback) {
  			if(rsp.status==0){
  				vueUI.alert("错误提示","服务器错误，请联系管理员或再试一次！",callback)
  			}else{
  		        var err=JSON.parse(rsp.responseText);
  		        if(err.meta.code==400){
  					vueUI.alert("错误提示","账号或密码错误",callback)
  				}else if(err.meta.code==500){
  					vueUI.alert("错误提示","服务器错误，请联系管理员!<br>错误信息："+err.meta.message,callback)
  				}else if(err.meta.code==401){
  					vueUI.alert("错误提示","您没有访问权限,请登录",callback);
  					vueUI.gotoLogin();
  				}else if(err.meta.code==403){
  					vueUI.alert("错误提示","服务器拒绝请求，请登录",callback)
  					vueUI.gotoLogin();
  				}else{
  					vueUI.alert("错误提示","你请求的页面发生错误，请联系管理员或再试一次！",callback)
  				}
  			}
  	    };
  		var defaults  = {
  			beforeSend:function (XHR){
                  XHR.setRequestHeader('Authorization','Bearer '+window.sessionStorage.access_token);////////设置消息头
              },
  			type:"post",
  			dataType : 'json',
  			contentType:'application/json;charset=utf-8',
  		};
  		var settings = $.extend({},defaults,option);
  		
  		settings.error=function (rsp){
  			if(option.error){
  				errorHandler(rsp,function(){
  					option.error(rsp);
  				})
  			}else{
  				errorHandler(rsp)
  			}
  		};
  		settings.success=function (rsp){
  			if(rsp.meta&&rsp.meta.success&&rsp.meta.success==false){
  				vueUI.alert("错误提示","错误信息："+rsp.meta.message)
  			}else{
  				option.success(rsp);
  			};
  		};
  		$.ajax(settings);
  	},
  	/**
  	 * 提示框 <br>
  	 * 参数：title：标题，message：提示消息;callback：回调函数
  	 */
    	alert: function(title,message,callback) {
  	    $("#portalAlert",$("body")).remove();
  	    var modal = '<div id="portalAlert" class="win">'+
  	        '<div class="form-b">'+
  
  	        '</div>'+
  	        '<div class="form-info">'+
  	            '<div class="title">'+
  	                '<span class="t-l">'+title+'</span>'+
  	                '<button class="close"><i class="fa fa-close fa-lg"></i></button>'+
  	            '</div>'+
  	            '<span>'+message+'</span>'+
  	            '<button class="btn-one close">确 定</button>'+
  	        '</div>'+
  	    '</div>';
  		$("body").append(modal);
  		$("#portalAlert",$("body")).addClass("show");
  
  		$("button.close",$("#portalAlert")).click(function(){
  			$("#portalAlert",$("body")).removeClass("show").hide(30,function(){
  				$("#portalAlert",$("body")).remove();
  				if(callback){
  					callback();
  				}
  			});
  		});
   	},
  	/**
  	 * 确认提示框 <br>
  	 * 参数：title：标题，message：提示消息，callback：回调函数
  	 */
  	confirm: function(title,message,callback){
  		$("#portalConfirm",$("body")).remove();
  		
  		var modal = '<div id="portalConfirm" class="win">'+
  	        '<div class="form-b">'+
  
  	        '</div>'+
  	        '<div class="form-info">'+
  	            '<div class="title">'+
  	                '<span class="t-l">'+title+'</span>'+
  	                '<button class="close"><i class="fa fa-close fa-lg"></i></button>'+
  	            '</div>'+
  	            '<span>'+message+'</span>'+
  	            '<button class="btn-two ok">确 定</button>'+
  	            '<button class="btn-two close">取 消</button>'
  	        '</div>'+
  	    '</div>'
  		$("body").append(modal);
  		$("#portalConfirm",$("body")).addClass("show");
  		$("button.close",$("#portalConfirm")).click(function(){
  			$("#portalConfirm",$("body")).removeClass("show").hide(30,function(){
  				$("#portalConfirm",$("body")).remove();
  			});
  		});
  		
  		$("button.ok",$("#portalConfirm")).click(function(){
  			$("#portalConfirm",$("body")).removeClass("in").hide(30,function(){
  				$("#portalConfirm",$("body")).remove();
  				if(callback){
  					callback();
  				}
  			});
  		});			
  	},
  	/**
  	 * input界面的模态弹出窗口 <br>
  	 * 参数：dom：form的div id
  	 */
    	inputDialog: function(dom) {
  
  		var mack = '<div class="modal-backdrop fade in"></div>';
  
  		$("body").append(mack);
  		$("body").append($(dom));
  		$(dom,"#content-container").remove();
  		$(dom).attr("max-height",$(window).height()-100+"px")
  		$(dom).show(30);
  		
  		$("button.close,button.btn-close",$(dom)).click(function(){
  			$(dom,$("body")).removeClass("in").delay(300).fadeOut(30,function(){
  				$(dom,$("body")).remove();	
  				$(".modal-backdrop",$("body")).remove();
  			});
  		});				
   	},
  
   	/**
  	 * 关闭input界面的模态弹出窗口 <br>
  	 * 参数：dom：form的div id
  	 */
   	closeDialog:function(dom){
   		$(dom,$("body")).removeClass("in").delay(300).fadeOut(30,function(){
  				$(dom,$("body")).remove();	
  				$(".modal-backdrop",$("body")).remove();
  			});
   	},
  
  	/**
  	 * 返回登录页 <br>
  	 */
  	gotoLogin:function (){
  		window.sessionStorage.goto_url=window.location.href;
  		window.location.href='/login.html';
  	},
  	/* 提示框的弹出事件
  		参数1，弹出框的状态--成功,提示或者失败
  		参数2，提示信息
  	*/
  	toolTips:function(status,msg){
  		var icon;
  		if(status=="success"){
  			icon='<i class="fa fa-check-circle fa-4x"></i>'
  		}else if(status=="warning"){
  			icon='<i class="fa fa-warning fa-4x"></i>'
  		}else if(status=="danger"){
  			icon='<i class="fa fa-ban fa-4x"></i>'
  		}else if(status=="info"){
  			icon='<i class="fa fa-bell fa-4x"></i>'
  		}
  		var dom='<div class="message-form '+status+' move">'+
  	        '<div class="m-l">'+
  	            '<span class="l-t">操作提示</span>'+
  	            icon+
  	        '</div>'+
  	        '<span class="m-r">'+msg+'</span>'+
  	    '</div>';
  	    $("body").append(dom);
  	    setTimeout(function(){
  	    	$("body>div.message-form").remove();
  	    },1000)
  	},
  	/* 添加加载动画
  		参数，提示文本
  	*/
  	showLoading:function(msg){
  		$("#portalLoading",$("body")).remove();
  		var textStatue;
  		if(msg){
  			textStatue=msg
  		}else{
  			textStatue="加载中"
  		};
  		var modal = '<div id="portalLoading" class="load">'+
  	        '<div class="load-c">'+
  	            '<i class="fa fa-spinner fa-spin fa-5x"></i>'+
  	            '<span>'+textStatue+'</span>'+
  	        '</div>'+
  	    '</div>';
  		modal = $(modal).addClass("fade");
  		$("body").append(modal);
  	},
  	/* 移除加载动画
  		
  	*/
  	hideLoading:function(){
  		$("#portalLoading",$("body")).remove();
  	},
  	/* 各类图表分装 
  	pie 传title，target，data：[{value:335, name:'直接访问'},{value:310, name:'邮件营销'}],type
  	line || bar 传title target data:{name:'邮件营销',data:[120, 132, 101, 134, 90, 230, 210]},{name:'联盟广告',data:[220, 182, 191, 234, 290, 330, 310]}type,xdata	
  	*/
  	draw:function(params){
  		var option;
  		if (params.type=="pie") {
  			var legenddata=[];
  			for(var i=0;i<params.data.length;i++){
  				legenddata.push(params.data[i].name)
  			};
  			option={
  			    title : {
  			        text: params.title,
  			        x:'center'
  			    },
  			    tooltip : {
  			        trigger: 'item',
  			        formatter: "{a} <br/>{b} : {c} ({d}%)"
  			    },
  			    legend: {
  			        orient: 'vertical',
  			        left: 'left',
  			        data: legenddata
  			    },
  			    series : [
  			        {
  			            name: params.title,
  			            type: 'pie',
  			            radius : '55%',
  			            center: ['50%', '60%'],
  			            data:params.data,
  			            itemStyle: {
  			                emphasis: {
  			                    shadowBlur: 10,
  			                    shadowOffsetX: 0,
  			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
  			                }
  			            }
  			        }
  			    ]
  			};
  		}else if (params.type=="bar" || params.type=="line") {
  			var legenddata=[];
  			var boundaryGap=false;
  			if(params.type=="bar"){
  				boundaryGap=true;
  			};
  			for(var i=0;i<params.data.length;i++){
  				legenddata.push(params.data[i].name);
  				params.data[i].type=params.type;
  				params.data[i].stack="总量";
  				params.data[i].areaStyle= {normal: {}};
  				params.data[i].label= {normal: {show: true,position: 'top'}};
  			};
  			option={
  			    title: {
  			        text: params.title
  			    },
  			    tooltip : {
  			        trigger: 'axis'
  			    },
  			    legend: {
  			        data:legenddata,
  			        top:25
  			    },
  			    toolbox: {
  			        feature: {
  			            saveAsImage: {}
  			        }
  			    },
  			    grid: {
  			        left: '3%',
  			        right: '4%',
  			        bottom: '3%',
  			        containLabel: true
  			    },
  			    xAxis : [
  			        {
  			            type : 'category',
  			            boundaryGap : boundaryGap,
  			            data : params.xdata
  			        }
  			    ],
  			    yAxis : [
  			        {
  			            type : 'value'
  			        }
  			    ],
  			    series : params.data
  			};
  		};
  		var chart=echarts.init(document.getElementById(params.target));
  		chart.setOption(option);
  
  		$(window).bind('resize', function(evt) {
  			chart.resize();
  		});
  	},
  	conf:eval("("+$.ajax({url:"/config/conf.json",async:false}).responseText+")")
  }

});
