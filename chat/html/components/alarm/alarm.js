define('alarm', function(require, exports, module) {

  /**
   * Created by Mr.Li on 2016/12/8.
   */
  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      template: "<style>.container .content {\r\n  width: calc(100vw - 230px - (100vw - 100%));\r\n  height: auto;\r\n  margin: 10px;\r\n  min-width: 1136px;\r\n  overflow-x: auto;\r\n  background-color: #fff; }\r\n  .container .content .option {\r\n    width: 100%;\r\n    height: 120px;\r\n    padding: 5px 15px;\r\n    box-sizing: border-box; }\r\n    .container .content .option .item {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      margin-top: 5px;\r\n      color: #2a394f; }\r\n      .container .content .option .item .time {\r\n        border: 1px solid #d4e4f1;\r\n        width: 192px;\r\n        height: 22px;\r\n        box-sizing: border-box;\r\n        float: left; }\r\n        .container .content .option .item .time input {\r\n          border: none;\r\n          width: 170px;\r\n          height: 20px;\r\n          float: left;\r\n          outline: none; }\r\n        .container .content .option .item .time i {\r\n          width: 14px;\r\n          height: 14px;\r\n          float: left;\r\n          margin: 3px 0; }\r\n      .container .content .option .item .sm {\r\n        width: 70px; }\r\n      .container .content .option .item .mid {\r\n        width: 302px; }\r\n      .container .content .option .item .smm {\r\n        width: 50px;\r\n        text-align: center; }\r\n      .container .content .option .item span, .container .content .option .item input, .container .content .option .item select {\r\n        color: #2a394f;\r\n        display: block;\r\n        height: 20px;\r\n        float: left;\r\n        line-height: 20px;\r\n        padding: 0; }\r\n      .container .content .option .item span {\r\n        width: 80px; }\r\n      .container .content .option .item input {\r\n        width: 170px; }\r\n      .container .content .option .item .m-r {\r\n        margin-right: 20px; }\r\n      .container .content .option .item .m-r1 {\r\n        margin-right: 10px; }\r\n  .container .content .btn {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-bottom: 3px solid #485f81;\r\n    padding-left: 20px;\r\n    box-sizing: border-box; }\r\n    .container .content .btn button {\r\n      padding: 1px 10px;\r\n      background-color: #920783;\r\n      color: #fff;\r\n      margin: 5px 5px 0 5px; }\r\n  .container .content .m-t th {\r\n    background-color: #fbfcff;\r\n    color: #0a0a0a;\r\n    border-bottom: 1px solid #d4e4f1; }\r\n  .container .content .m-t td {\r\n    border: none; }\r\n  .container .content .m-t tr:nth-child(odd) {\r\n    background: #f1f6fc; }\r\n  .container .content .m-t .t-content {\r\n    width: 500px;\r\n    display: block; }\r\n    .container .content .m-t .t-content span {\r\n      display: block;\r\n      float: left;\r\n      height: 34px;\r\n      line-height: 34px;\r\n      width: 90%;\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis; }\r\n    .container .content .m-t .t-content button {\r\n      float: right;\r\n      height: 20px;\r\n      margin: 7px 0;\r\n      line-height: 20px;\r\n      background-color: transparent;\r\n      color: #05a2f3;\r\n      width: 40px;\r\n      padding: 0; }\r\n\r\n.form {\r\n  height: 750px; }\r\n  .form .fh {\r\n    width: 100%;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: 10px 0;\r\n    box-sizing: border-box;\r\n    padding-left: 10px; }\r\n    .form .fh span {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-size: 22px;\r\n      font-weight: bold; }\r\n    .form .fh i {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      width: 30px;\r\n      cursor: pointer; }\r\n  .form .f-b {\r\n    width: 100%;\r\n    border-top: 1px solid #e2e2e2;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n    border-left: 1px solid #e2e2e2;\r\n    border-right: 1px solid #e2e2e2; }\r\n    .form .f-b .b-h {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      background: #fcfcfc;\r\n      width: 100%;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      padding-left: 20px;\r\n      box-sizing: border-box; }\r\n    .form .f-b .flex {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap; }\r\n      .form .f-b .flex .b-t, .form .f-b .flex .b-b, .form .f-b .flex .b-b1 {\r\n        flex: 1;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        font-weight: bold;\r\n        background-color: #fcfcfc;\r\n        padding: 0 20px;\r\n        border-bottom: 1px solid #e2e2e2;\r\n        box-sizing: border-box; }\r\n      .form .f-b .flex .b-b {\r\n        flex: 2;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n      .form .f-b .flex .b-b1 {\r\n        flex: 5;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n    .form .f-b .b-bt, .form .f-b .b-bb {\r\n      width: 100%;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-weight: bold;\r\n      background-color: #fcfcfc;\r\n      padding: 0 20px;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      box-sizing: border-box; }\r\n    .form .f-b .b-bb {\r\n      width: 100%;\r\n      font-weight: 100;\r\n      background-color: #fff;\r\n      height: auto;\r\n      color: #333; }\r\n  .form .sub {\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center; }\r\n    .form .sub button {\r\n      padding: 2px 15px;\r\n      background-color: #0a67c3;\r\n      border-radius: 4px;\r\n      color: #fff;\r\n      height: 24px;\r\n      margin: 8px 5px;\r\n      line-height: 20px; }\r\n\r\n/*# sourceMappingURL=/components/alarm/alarm.css.map */\r\n</style>\r\n<div id=\"alarmRoot\" class=\"content\">\r\n        <form @submit.prevent id=\"query-form\" class=\"form-horizontal\" role=\"form\" method=\"post\" action=\"/warnning/query\">\r\n            <input type=\"hidden\" name=\"page_pageNo\" id=\"pageNo\" value=\"1\" />\r\n            <input type=\"hidden\" name=\"page_pageSize\" id=\"pageSize\" value=\"10\" />\r\n            <input type=\"hidden\" name=\"page_order\" id=\"order\" value=\"desc\" />\r\n            <input type=\"hidden\" name=\"page_orderBy\" id=\"orderBy\" value=\"time\"/>\r\n            <div class=\"option\">\r\n                <div class=\"item\">\r\n                    <span>检测日期：</span>\r\n                    <div class=\"time\">\r\n                        <input name=\"startTime\" type=\"text\" value=\"\" id=\"datetimepicker\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                    <span>&nbsp;&nbsp;至&nbsp;&nbsp;</span>\r\n                    <div class=\"time\">\r\n                        <input name=\"endTime\" type=\"text\" value=\"\" id=\"datetimepicker1\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                    <span>&nbsp;&nbsp;内容：</span><input type=\"text\" name=\"content\" value=\"\" />\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>告警等级：</span>\r\n                    <select class=\"sm\" v-model=\"form.level\" style=\"margin-right: 10px;outline: none;border: solid 1px #d4e4f1;\">\r\n                        <option value=\"\">请选择</option>\r\n                        <option value=\"高\">高</option>\r\n                        <option value=\"中\">中</option>\r\n                        <option value=\"低\">低</option>\r\n                    </select>\r\n                    <input type=\"hidden\" name=\"level\" value=\"{{form.level}}\" />\r\n                    <span>资产名称：</span><input class=\"mid\" type=\"text\" name=\"area\" value=\"\" />\r\n                    <span>&nbsp;&nbsp;状态：</span>\r\n                    <select class=\"sm\" v-model=\"form.statue\" style=\"outline: none;border: solid 1px #d4e4f1;width: 172px;\">\r\n                        <option value=\"\">请选择</option>\r\n                        <option value=\"0\">未响应</option>\r\n                        <option value=\"1\">已处理</option>\r\n                        <option value=\"2\">已忽略</option>\r\n                    </select>\r\n                    <input name=\"status\" type=\"hidden\" value=\"{{form.statue}}\" />\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>告警类型：</span>\r\n                    <select class=\"m-r\" v-model=\"form.attrackType\" style=\"outline: none;border: solid 1px #d4e4f1;width: 172px;\">\r\n                        <option value=\"\">请选择</option>\r\n                        <option v-for=\"it in db.type\" :value=\"it.id\">{{it.name}}</option>\r\n                    </select>\r\n                    <input type=\"hidden\" name=\"attrackType\" value=\"{{form.attrackType}}\" />\r\n                    <span>告警名称：</span><input type=\"text\" name=\"name\" value=\"\" class=\"m-r\" />\r\n                    <span>&nbsp;&nbsp;&nbsp;&nbsp;I P：</span><input type=\"text\" name=\"assetIp\" value=\"\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"btn\">\r\n                <button @click=\"search\">查询</button>\r\n                <button @click=\"goUpdate(1)\" name=\"ignore\">处理</button>\r\n                <button @click=\"goUpdate(2)\" name=\"handle\">忽略</button>\r\n            </div>\r\n        </form>\r\n    <div class=\"bug-t\">\r\n        <vue-grid target=\"alarmRoot\" v-ref:grid :columns=\"gridColumns\" ></vue-grid>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"alarmform\" class=\"win\">\r\n    <div class=\"form-b\">\r\n\r\n    </div>\r\n    <div class=\"form\">\r\n        <div class=\"fh\">\r\n            <span>告警详情</span>\r\n            <i class=\"fa  fa-close fa-2x fr\" @click=\"hidedetail\"></i>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">告警基本信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">告警名称</div>\r\n                <div class=\"b-b\">{{db.detail.name}}</div>\r\n                <div class=\"b-t\">告警类型</div>\r\n                <div class=\"b-b\">{{db.detail.warnningType}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">受影响资产</div>\r\n                <div class=\"b-b\">{{db.detail.assetType}}</div>\r\n                <div class=\"b-t\">告警等级</div>\r\n                <div class=\"b-b\">{{db.detail.level}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">告警时间</div>\r\n                <div class=\"b-b\">{{db.detail.time}}</div>\r\n                <div class=\"b-t\">告警ip地址</div>\r\n                <div class=\"b-b\">{{db.detail.srcIp}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">目标ip地址</div>\r\n                <div class=\"b-b\">{{db.detail.tarIp}}</div>\r\n                <div class=\"b-t\">攻击类型</div>\r\n                <div class=\"b-b\">{{db.detail.attrackType}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">告警地区</div>\r\n                <div class=\"b-b\">{{db.detail.area}}</div>\r\n                <div class=\"b-t\">资产ip地址</div>\r\n                <div class=\"b-b\">{{db.detail.assetIp}}</div>\r\n            </div>\r\n            <div class=\"b-bt\">URL</div>\r\n            <div class=\"b-bb\">{{db.detail.url}}</div>\r\n            <div class=\"b-bt\">告警内容</div>\r\n            <div class=\"b-bb\">{{db.detail.content}}</div>\r\n            <div class=\"b-bt\">备注信息</div>\r\n            <div class=\"b-bb\">{{db.detail.descMsg}}</div>\r\n        </div>\r\n    </div>\r\n</div>",
      el: function() {
          return "#alarmRoot";
      },
      data: function() {
          return {
              gridColumns: [
                  {name: 'name',render:"renderName", displayName: '告警名称', sortable: false, headerStyle: 'width:20%;'},
                  {name: 'time',headerStyle:'width:10%;',displayName: '时间', sortable: false},
                  {name: 'level', displayName: '等级',render:'renderlevel', sortable: false, headerStyle: 'width:5%;'},
                  {name: 'customer', displayName: '资产', sortable: false, headerStyle: 'width:8%;'},
                  {name: 'assetIp', displayName: '目标IP', sortable: false, headerStyle: 'width:7%;'},
                  {name: 'warnningType', displayName: '类型', sortable: false, headerStyle: 'width:10%;'},
                  {name: 'content', displayName: '内容', sortable: false},
                  {name: 'person', displayName: '联系人',sortable: false, headerStyle: 'width:10%;'},
                  {name: 'status', displayName: '状态',render:'renderStatus',sortable: false,headerStyle: 'width:8%;'},
                  {type:'btn',dataCls:"t-btn",render:"rendUpdate",btnCls:'fa fa-remove btn',displayName:'操作',headerStyle: 'width:10%;'},
                  {type:'btn',name:"detail",render:"detailrender",headerStyle:'width:56px;',btnCls:'btn fa fa-file fa-lg',displayName:'详情',onclick:'getDetailDate',sortable:false}
              ],
              form:{
                  level:"",
                  statue:"",
                  attrackType:""
              },
              db:{
                  type:[],
                  detail:{}
              }
          }
      },
      ready: function(){
      	var self=this;
          this.getType();
          $("#sub_form,.t-content button").click(function(){
              $("#form").addClass("show");
          });
          $("#out_form,.fh i").click(function(){
              $("#form").removeClass("show");
          });
          $(document).keyup(function(event){
              switch(event.keyCode) {
                  case 27:
                      $("#form").removeClass("show");
                  case 96:
                      $("#form").removeClass("show");
              }
          });
          $('#datetimepicker,#datetimepicker1').datetimepicker({
              dayOfWeekStart : 1,
              lang:"zh",
              format:"Y-m-d H:00"      //格式化日期
          });
          window.handle=function(id,state){
          	self.goUpdate(id,state);
          }
      },
      methods:{
          search:function(nofrist){
              if(nofrist!=true){
                  $("#alarmRoot form#query-form input#pageNo").val("1");
              };
              var startval=$("#datetimepicker").val()=="";
              var endval=$("#datetimepicker1").val()=="";
              if(startval^endval==1){
              	if(startval){
              		$("#datetimepicker").val("0000-00-00 00:00")
              	}else{
              		var date = new Date();
              	    var str= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
              		$("#datetimepicker1").val(str);
              	}
              }
          	this.$refs.grid.query();
          	if(startval^endval==1){
              	if(startval){
              		$("#datetimepicker").val("")
              	}else{
              		$("#datetimepicker1").val('');
              	}
              }
          },
          renderName:function(v){
              if(v.warnningType=="通断告警"||v.warnningType=="敏感词告警"){
                  return '<a target="_blank" href="'+v.url+'"'+'>'+v.name+'</a>'
              }else{
                  return v.name
              }
          },
          detailrender:function(v){
              return "<span style='color:#05a2f3;cursor: pointer;'>详情</span>"
          },
          showdetail:function(v){
              $("#alarmform").addClass("show");
          },
          hidedetail:function(){
              $("#alarmform").removeClass("show");
          },
          getDetailDate:function(v){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/warnning/queryById",
                  type:"POST",
                  data:'{"id":"'+v.id+'"}',
                  success:function(rsp){
                      self.db.detail=rsp.data;
                      self.showdetail();
                  }
              })
          },
          goUpdate:function(v,state){
          	var ids = null;
          	var cstate;
    			var self=this;
              if(state){
                  ids = v;
                  cstate=state
              }else{
              	cstate=v;
              };
              if(null == ids)
                  ids = this.$refs.grid.getSelectIds();
   			if(null != ids){
   				vueUI.ajaxCall({
   					url:vueUI.conf.host+"/warnning/update",
   					async:false,
   					type:"post",
   					data:'{"ids":"'+ids+'","state":"'+cstate+'"}',
   					success:function (){
   						vueUI.showLoading();
   						setTimeout(function(){self.search(true);vueUI.hideLoading();},1000);
   						vueUI.toolTips("success","修改成功");
   					}
   				});
   			}
          },
          renderStatus:function(v){
          	if(v.status==0){
          		return "<span style='color:red'>未响应<span>"
          	}
          	if(v.status==1){
          		return "<span style='color:green'>已处理<span>"
          	}
          	if(v.status==2){
          		return "<span style='color:gray'>已忽略<span>"
          	}
          },
          rendUpdate:function(v){
          	if(v.status=="<span style='color:red'>未响应<span>")
          		return "<button style='color:gray' name='handle' onclick='handle(\""+v.id+"\",1)'>处理</button>\n<button style='color:gray' name='ignore' onclick='handle(\""+v.id+"\",2)'>忽略</button>"
          	return ''
          },
          getType:function(){
              var  self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/warnning/queryWarnningType",
                  type:"POST",
                  success:function(rsp){
                      self.db.type=rsp.data;
                  }
              })
          },
          renderdetaillevel:function(v){
              if(v.level=="高"){
                  return '<span style="background: #D10304;color: #555;border-radius: 4px;padding: 2px 6px;">高</span>'
              }else if(v.level=="中"){
                  return '<span style="background: #A6C301;color: #555;border-radius: 4px;padding: 2px 6px;">中</span>'
              }else if(v.level=="低"){
                  return '<span style="background: #816DF2;color: #555;border-radius: 4px;padding: 2px 6px;">低</span>'
              }else{
                  return '<span style="background: #91C7AE;color: #555;border-radius: 4px;padding: 2px 6px;">提示信息</span>'
              }
          },
          renderlevel:function(v){
              if(v.level=="高"){
                  return "<span style='background:#D10304;color:#555'>高</span>"
              }else if(v.level=="中"){
                  return "<span style='background:#A6C301;color:#555'>中</span>"
              }else if(v.level=="低"){
                  return "<span style='background:#816DF2;color:#555'>低</span>"
              }else{
                  return "<span style='background:#91C7AE;color:#555'>未知</span>"
              }
          }
      }
  });
  

});
