define('export', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      template: "<style>.container .content {\r\n  width: calc(100vw - 230px - (100vw - 100%));\r\n  height: auto;\r\n  margin: 10px;\r\n  min-width: 1136px;\r\n  overflow-x: auto;\r\n  background-color: transparent;\r\n  display: flex;\r\n  justify-content: center; }\r\n  .container .content .export {\r\n    width: 800px;\r\n    background-color: #fff; }\r\n    .container .content .export .handle {\r\n      width: 100%;\r\n      height: 60px;\r\n      padding: 10px 30px;\r\n      box-sizing: border-box; }\r\n      .container .content .export .handle span {\r\n        float: left;\r\n        line-height: 26px; }\r\n      .container .content .export .handle div.chose {\r\n        width: 220px;\r\n        height: 100%;\r\n        display: inline-block;\r\n        border: 1px solid #ccc;\r\n        height: 26px;\r\n        line-height: 26px;\r\n        float: left; }\r\n        .container .content .export .handle div.chose ul.chosen-choices {\r\n          background: none !important;\r\n          border-radius: 0 !important;\r\n          background-image: none !important;\r\n          height: 28px;\r\n          display: inline-block; }\r\n        .container .content .export .handle div.chose div.chosen-container {\r\n          margin-top: -3px; }\r\n          .container .content .export .handle div.chose div.chosen-container a.chosen-single {\r\n            background: none;\r\n            box-shadow: none;\r\n            border: none; }\r\n      .container .content .export .handle button {\r\n        float: right;\r\n        height: 28px;\r\n        padding: 0px 10px;\r\n        background: #999999 none repeat scroll 0% 0%;\r\n        color: white;\r\n        border-radius: 4px; }\r\n    .container .content .export .head {\r\n      width: 100%;\r\n      height: 40px;\r\n      line-height: 40px;\r\n      font-size: 24px;\r\n      font-weight: bold;\r\n      text-indent: 30px;\r\n      float: left;\r\n      margin-bottom: 40px; }\r\n    .container .content .export .body {\r\n      width: 100%;\r\n      float: left;\r\n      font-size: 12px; }\r\n      .container .content .export .body .b-content {\r\n        width: 100%;\r\n        float: left;\r\n        height: auto;\r\n        line-height: 25px;\r\n        text-indent: 30px; }\r\n      .container .content .export .body .b-l {\r\n        width: 550px;\r\n        float: left; }\r\n        .container .content .export .body .b-l .bl-top {\r\n          height: 120px;\r\n          padding-left: 10px; }\r\n          .container .content .export .body .b-l .bl-top div {\r\n            width: 100%;\r\n            float: left;\r\n            height: 25px;\r\n            line-height: 25px; }\r\n      .container .content .export .body .b-rt {\r\n        width: 250px;\r\n        float: left; }\r\n        .container .content .export .body .b-rt .br-top {\r\n          height: 100px;\r\n          margin: 10px;\r\n          outline: 1px solid #A5A5A5;\r\n          float: left; }\r\n          .container .content .export .body .b-rt .br-top div {\r\n            width: 100%;\r\n            float: left;\r\n            height: 25px;\r\n            line-height: 25px; }\r\n            .container .content .export .body .b-rt .br-top div span {\r\n              width: 50px;\r\n              display: inline-block; }\r\n      .container .content .export .body .t-l, .container .content .export .body .t-r, .container .content .export .body .t-f, .container .content .export .body .t-f-b {\r\n        width: 240px;\r\n        height: 260px;\r\n        border: 1px solid #d9d9d9;\r\n        margin: 10px 0;\r\n        float: left; }\r\n      .container .content .export .body .t-r {\r\n        width: 550px;\r\n        margin-left: 6px; }\r\n      .container .content .export .body .t-f {\r\n        width: 100%;\r\n        height: 280px; }\r\n      .container .content .export .body .t-f-b {\r\n        width: 100%;\r\n        height: 900px; }\r\n      .container .content .export .body .title {\r\n        font-weight: bold;\r\n        border-bottom: 1px solid #d9d9d9;\r\n        text-indent: 10px;\r\n        height: 20px;\r\n        line-height: 20px;\r\n        float: left;\r\n        width: 100%; }\r\n      .container .content .export .body .m-title {\r\n        width: 100%;\r\n        height: 25px;\r\n        line-height: 25px;\r\n        float: left; }\r\n      .container .content .export .body .b-table {\r\n        width: 100%;\r\n        height: 100%;\r\n        float: left;\r\n        border: none;\r\n        border-right: 1px solid #d9d9d9;\r\n        border-bottom: 1px solid #d9d9d9;\r\n        border-spacing: 0; }\r\n        .container .content .export .body .b-table .t-head {\r\n          background-color: #D9E2F3; }\r\n        .container .content .export .body .b-table tr {\r\n          width: 100%;\r\n          height: auto; }\r\n          .container .content .export .body .b-table tr th {\r\n            border-left: 1px solid #d9d9d9;\r\n            border-top: 1px solid #d9d9d9;\r\n            height: 30px;\r\n            line-height: 30px; }\r\n          .container .content .export .body .b-table tr td {\r\n            text-align: center;\r\n            line-height: 20px;\r\n            border-left: 1px solid #d9d9d9;\r\n            border-top: 1px solid #d9d9d9; }\r\n            .container .content .export .body .b-table tr td span {\r\n              display: block;\r\n              width: 100%;\r\n              line-height: 20px;\r\n              height: 100%;\r\n              white-space: nowrap;\r\n              overflow: hidden;\r\n              text-overflow: ellipsis; }\r\n      .container .content .export .body .r-l {\r\n        margin-left: 0;\r\n        margin-right: 6px; }\r\n\r\n/*# sourceMappingURL=/components/export/export.css.map */\r\n</style>\r\n\r\n<div class=\"content\" id=\"exportRoot\">\r\n    <div class=\"export\">\r\n        <div class=\"handle\">\r\n            <span>网站选择：</span>\r\n                <form id=\"exportForm\" @submit.prevent>\r\n                    <input type=\"hidden\" name=\"groupId\" v-model=\"site\">\r\n                    <input type=\"hidden\" name=\"groupNum\" v-model=\"site1\">\r\n                    <input type=\"hidden\" name=\"timeType\" v-model=\"form.timeType\">\r\n                    <div class=\"chose\" style=\"width: 160px;\">\r\n                        <v-chose :multiple=\"false\" :value.sync=\"site\" :options=\"sites\">\r\n                        </v-chose>\r\n                    </div>\r\n                    <div class=\"chose\" style=\"width: 100px;margin-left: 10px;\">\r\n                        <v-chose :multiple=\"false\" :value.sync=\"form.timeType\" :options=\"timeTypes\" :search=\"true\">\r\n                        </v-chose>\r\n                    </div>\r\n                    <div style=\"float: left;\">\r\n                        <span style=\"margin: 0 5px;\">或</span>\r\n                        <input type=\"text\" v-model=\"form.startTime\" name=\"startTime\" id=\"startDate\" style=\"height: 24px;width: 100px;\">&nbsp;至\r\n                        <input type=\"text\" v-model=\"form.endTime\" name=\"endTime\" id=\"endDate\" style=\"height: 24px;width: 100px;\">\r\n                        <button style=\"border-radius: 0 4px 4px 0\" @click=\"init\">确定</button>\r\n                    </div>\r\n                </form>\r\n            <button @click=\"reportExport\">\r\n                导出\r\n            </button>\r\n        </div>\r\n        <div class=\"head\">{{reports.reportTitle.groupName}}网络安全态势感知预警平台统计报告</div>\r\n        <div class=\"body\">\r\n            <div class=\"b-l\">\r\n                <div class=\"title\">基本信息</div>\r\n                <div class=\"bl-top\">\r\n                    <div>客户名称: {{reports.reportTitle.groupName}}</div>\r\n                    <div>报告周期: {{reports.reportTitle.startTime}} - {{reports.reportTitle.endTime}}</div>\r\n                    <div>报告时间: {{reports.reportTitle.reportTime}}</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"b-rt\">\r\n                <div class=\"title\">资产统计</div>\r\n                <div class=\"br-top\">\r\n                    <div>应用系统：<span>{{reports.reportAsset.applicationSystemTotal}}</span>个</div>\r\n                    <div>网络设备：<span>{{reports.reportAsset.networkEquipmentTotal}}</span>台</div>\r\n                    <div>安全设备：<span>{{reports.reportAsset.safeEquipmentTotal}}</span>台</div>\r\n                    <div>服务器数：<span>{{reports.reportAsset.serverTotal}}</span>台</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"body\">\r\n            <div class=\"title\">感知类事件统计</div>\r\n            <div class=\"b-content\">根据观云网络安全态势感知平台对{{reports.reportTitle.startTime}} - {{reports.reportTitle.endTime}} 期间统计数据分析，本期各类态势感知类告警事件共计产生{{reports.reportEvent.alarmEventTotal}}条。其中紧急事件{{reports.reportEvent.urgentEventTotal}}条，高危事件{{reports.reportEvent.highRiskEventTotal}}条， 中危事件{{reports.reportEvent.dangerEventTotal}}条， 低危{{reports.reportEvent.lowRiskEventTotal}}事件条。 各类型事件具体统计如下：</div>\r\n            <div class=\"t-l\" id=\"p1\"></div>\r\n            <div class=\"t-r\" id=\"b1\"></div>\r\n            <div class=\"m-title\">事件详细：</div>\r\n            <table class=\"b-table\">\r\n                <tr class=\"t-head\">\r\n                    <th width=\"20%\">事件类型</th>\r\n                    <th width=\"70%\">详细信息</th>\r\n                    <th width=\"10%\">等级</th>\r\n                </tr>\r\n                <tr v-if=\"reports.reportEvent.list.length>0\" v-for=\"it in reports.reportEvent.list\">\r\n                    <td>{{it.assetType}}</td>\r\n                    <td>{{it.detailInfomation}}</td>\r\n                    <td>{{it.rank}}</td>\r\n                </tr>\r\n                <tr v-else>\r\n                    <td colspan=\"3\">暂无数据</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"body\">\r\n            <div class=\"title\">普通告警统计</div>\r\n            <div class=\"b-content\">根据观云网络安全态势感知平台对{{reports.reportTitle.startTime}} - {{reports.reportTitle.endTime}} 期间统计数据分析，本期各类告警事件共计产生{{reports.reportAlarm.alarmEventTotal}}条，对比上期告警产生数据，环比上涨{{reports.reportAlarm.percent}}% 。其中高危事件{{reports.reportAlarm.highRiskEventTotal}}条， 中危事件{{reports.reportAlarm.dangerEventTotal}}条， 低危事件{{reports.reportAlarm.lowRiskEventTotal}}条。 各类型事件具体统计如下：</div>\r\n            <div class=\"t-r r-l\" id=\"line1\"></div>\r\n            <div class=\"t-l\" id=\"safe1\"></div>\r\n            <div class=\"t-f\" id=\"b2\"></div>\r\n            <div class=\"t-f\" id=\"b3\"></div>\r\n            <div class=\"t-f\" id=\"b4\"></div>\r\n        </div>\r\n        <div class=\"body\">\r\n            <div class=\"title\">告警详细</div>\r\n            <div class=\"t-f-b\" id=\"vbar1\"></div>\r\n            <div class=\"m-title\">告警详细：</div>\r\n            <table class=\"b-table\">\r\n                <tr class=\"t-head\">\r\n                    <th width=\"20%\">资产名称</th>\r\n                    <th width=\"50%\">详细信息</th>\r\n                    <th width=\"20%\">告警时间</th>\r\n                    <th width=\"10%\">等级</th>\r\n                </tr>\r\n                <tr v-if=\"reports.reportAlarm.systemAlarmList.length>0\" v-for=\"it in reports.reportAlarm.systemAlarmList\">\r\n                    <td>{{it.name}}</td>\r\n                    <td>{{it.detailInfo}}</td>\r\n                    <td>{{it.alarmTime}}</td>\r\n                    <td>{{it.rank}}</td>\r\n                </tr>\r\n                <tr v-else>\r\n                    <td colspan=\"4\">暂无数据</td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"t-f-b\" id=\"vbar2\"></div>\r\n            <div class=\"m-title\">告警详细：</div>\r\n            <table class=\"b-table\">\r\n                <tr class=\"t-head\">\r\n                    <th width=\"20%\">资产名称</th>\r\n                    <th width=\"50%\">详细信息</th>\r\n                    <th width=\"20%\">告警时间</th>\r\n                    <th width=\"10%\">等级</th>\r\n                </tr>\r\n                <tr v-if=\"reports.reportAlarm.networkEqAlarmList.length>0\" v-for=\"it in reports.reportAlarm.networkEqAlarmList\">\r\n                    <td>{{it.name}}</td>\r\n                    <td>{{it.detailInfo}}</td>\r\n                    <td>{{it.alarmTime}}</td>\r\n                    <td>{{it.rank}}</td>\r\n                </tr>\r\n                <tr v-else>\r\n                    <td colspan=\"4\">暂无数据</td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"t-f-b\" id=\"vbar3\"></div>\r\n            <div class=\"m-title\">告警详细：</div>\r\n            <table class=\"b-table\">\r\n                <tr class=\"t-head\">\r\n                    <th width=\"20%\">资产名称</th>\r\n                    <th width=\"50%\">详细信息</th>\r\n                    <th width=\"20%\">告警时间</th>\r\n                    <th width=\"10%\">等级</th>\r\n                </tr>\r\n                <tr v-if=\"reports.reportAlarm.safeEqAlarmList.length>0\" v-for=\"it in reports.reportAlarm.safeEqAlarmList\">\r\n                    <td>{{it.name}}</td>\r\n                    <td>{{it.detailInfo}}</td>\r\n                    <td>{{it.alarmTime}}</td>\r\n                    <td>{{it.rank}}</td>\r\n                </tr>\r\n                <tr v-else>\r\n                    <td colspan=\"4\">暂无数据</td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"t-f-b\" id=\"vbar4\"></div>\r\n            <div class=\"m-title\">告警详细：</div>\r\n            <table class=\"b-table\">\r\n                <tr class=\"t-head\">\r\n                    <th width=\"20%\">资产名称</th>\r\n                    <th width=\"50%\">详细信息</th>\r\n                    <th width=\"20%\">告警时间</th>\r\n                    <th width=\"10%\">等级</th>\r\n                </tr>\r\n                <tr v-if=\"reports.reportAlarm.serverAlarmList.length>0\" v-for=\"it in reports.reportAlarm.serverAlarmList\">\r\n                    <td>{{it.name}}</td>\r\n                    <td>{{it.detailInfo}}</td>\r\n                    <td>{{it.alarmTime}}</td>\r\n                    <td>{{it.rank}}</td>\r\n                </tr>\r\n                <tr v-else>\r\n                    <td colspan=\"4\">暂无数据</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<form @submit.prevent id=\"chartImg\" method=\"post\" style=\"display:none\" target=\"\" enctype=\"multipart/form-data\" :action=\"$root.host+'/report/export?access_token='+access_token\">\r\n    <input type=\"hidden\" name=\"access_token\" value=\"{{access_token}}\">\r\n    <input type=\"hidden\" name=\"img1\">\r\n    <input type=\"hidden\" name=\"img2\">\r\n    <input type=\"hidden\" name=\"img3\">\r\n    <input type=\"hidden\" name=\"img4\">\r\n    <input type=\"hidden\" name=\"img5\">\r\n    <input type=\"hidden\" name=\"img6\">\r\n    <input type=\"hidden\" name=\"img7\">\r\n    <input type=\"hidden\" name=\"img8\">\r\n    <input type=\"hidden\" name=\"img9\">\r\n    <input type=\"hidden\" name=\"img10\">\r\n    <input type=\"hidden\" name=\"img11\">\r\n    <input type=\"hidden\" name=\"reports\" value=\"{{reports | json}}\">\r\n</form>",
      el: function() {
          return "#exportRoot";
      },
      data: function() {
          return {
              site:"",
              site1:"",
              timeTypes:[{value:"d",label:"近一天"},{value:"w",label:"近一周"},{value:"m",label:"近一月"},{value:"hy",label:"近半年"},{value:"y",label:"近一年"}],
              sites:[],
              access_token:window.sessionStorage.access_token,
              qeurystr:"",
              reports:{},
              form:{
                  timeType:"m",
                  startTime:"",
                  endTime:""
              }
          }
      },
      ready:function(){
          this.getgroup();
          this.loadm();
      },
      watch:{
          "form.timeType":function(val,oldval){
              if(val!=''){
                  this.form.startTime="";
                  this.form.endTime="";
                  this.qeurystr=JSON.stringify($('#count-form').serializeObject());
              }
          },
          "form.startTime":function(val,oldval){
              if(val!=""){
                  this.form.timeType="";
                  this.qeurystr=JSON.stringify($('#count-form').serializeObject());
              }
          },
          "form.endTime":function(val,oldval){
              if(val!=""){
                  this.form.timeType="";
                  this.qeurystr=JSON.stringify($('#count-form').serializeObject());
              }
          }
      },
      methods:{
          init:function(){
              var arr=this.site.split(",");
              $("form#exportForm input[name='groupId']").val(arr[0]);
              $("form#exportForm input[name='groupNum']").val(arr[1]);
              var str=JSON.stringify($("#exportForm").serializeObject());
              this.qeurystr=str;
              this.getall(this.qeurystr)
          },
          getall:function(qeurystr){
              var self=this;
              vueUI.ajaxCall({
                  type:"POST",
                  url:vueUI.conf.host+"/report/report",
                  data:qeurystr,
                  success:function(res){
                      self.reports=res.data;
  
                      //画饼图
                      self.drawPie({dan:res.data.reportEvent.urgentEventTotal,high:res.data.reportEvent.highRiskEventTotal,middle:res.data.reportEvent.dangerEventTotal,low:res.data.reportEvent.lowRiskEventTotal});
                      
                      //图2
                      var dataun=[res.data.reportEventIsDeal.applicationSystemUndealTotal,res.data.reportEventIsDeal.networkEquipmentUndealTotal,res.data.reportEventIsDeal.safeEquipmentUndealTotal,res.data.reportEventIsDeal.serverUnealTotal];
                      var datade=[res.data.reportEventIsDeal.applicationSystemDealTotal,res.data.reportEventIsDeal.networkEquipmentDealTotal,res.data.reportEventIsDeal.safeEquipmentDealTotal,res.data.reportEventIsDeal.serverDealTotal];
                      self.drawbar({target:"b1",title:"事件类型统计",left:"center",dataun:dataun,datade:datade});
  
                      //图3
                      var alarm=res.data.reportAlarm.thePreviousPeriodList;
                      var alarmn=res.data.reportAlarm.thePeriodList;
                      var pxdata=[];
                      var pydata=[];
                      var nydata=[];
                      for(var i=0;i<alarm.length;i++){
                          pydata.push(alarm[i].total);
                      };
                      for(var i=0;i<alarmn.length;i++){
                          pxdata.push(alarmn[i].timestring);
                          nydata.push(alarmn[i].total);
                      };
                      self.drawLine({
                          xdata:pxdata,
                          pydata:pydata,
                          nydata:nydata
                      });
  
                      //图4
                      var now=self.reports.reportAlarm.alarmEventTotal;
                      var pre=self.reports.reportAlarm.thePreviousPeriodAlarmTotal;
                      self.drawSafe({pre:pre,now:now});
  
                      //图5
                      var hdatade=[
                          res.data.reportAlarmIsDeal.applicationSystemHighRiskDealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentHighRiskDealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentHighRiskDealTotal,
                          res.data.reportAlarmIsDeal.serverHighRiskDealTotal
                      ];
                      var hdataun=[
                          res.data.reportAlarmIsDeal.applicationSystemHighRiskUndealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentHighRiskUndealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentHighRiskUndealTotal,
                          res.data.reportAlarmIsDeal.serverHighRiskUnealTotal
                      ];
                      self.drawbar({target:"b2",title:"高危告警统计",left:"left",dataun:hdataun,datade:hdatade});
  
                      //图6
                      var mdatade=[
                          res.data.reportAlarmIsDeal.applicationSystemDangerDealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentDangerDealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentDangerDealTotal,
                          res.data.reportAlarmIsDeal.serverDangerDealTotal
                      ];
                      var mdataun=[
                          res.data.reportAlarmIsDeal.applicationSystemDangerUndealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentDangerUndealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentDangerUndealTotal,
                          res.data.reportAlarmIsDeal.serverDangerUnealTotal
                      ];
                      self.drawbar({target:"b3",title:"中危告警统计",left:"left",dataun:mdataun,datade:mdatade});
  
                      //图7
                      var ldatade=[
                          res.data.reportAlarmIsDeal.applicationSystemLowRiskDealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentLowRiskDealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentLowRiskDealTotal,
                          res.data.reportAlarmIsDeal.serverLowRiskDealTotal
                      ];
                      var ldataun=[
                          res.data.reportAlarmIsDeal.applicationSystemLowRiskUndealTotal,
                          res.data.reportAlarmIsDeal.networkEquipmentLowRiskUndealTotal,
                          res.data.reportAlarmIsDeal.safeEquipmentLowRiskUndealTotal,
                          res.data.reportAlarmIsDeal.serverLowRiskUnealTotal
                      ];
                      self.drawbar({target:"b4",title:"低危告警统计",left:"left",dataun:ldataun,datade:ldatade});
  
                      //图8
                      var sysdt=self.handledata(res.data.reportAlarmDetailInfo.appSystemAlarmList);
                      var netdt=self.handledata(res.data.reportAlarmDetailInfo.networkEqAlarmList);
                      var safedt=self.handledata(res.data.reportAlarmDetailInfo.safeEqAlarmList);
                      var serdt=self.handledata(res.data.reportAlarmDetailInfo.serverAlarmList);
                      self.drawvBar({target:"vbar1",title:"应用系统告警统计Top10",xdata:sysdt.xdata,hdata:sysdt.hdata,mdata:sysdt.mdata,ldata:sysdt.ldata});
                      self.drawvBar({target:"vbar2",title:"网络设备告警统计Top10",xdata:netdt.xdata,hdata:netdt.hdata,mdata:netdt.mdata,ldata:netdt.ldata});
                      self.drawvBar({target:"vbar3",title:"安全设备告警统计Top10",xdata:safedt.xdata,hdata:safedt.hdata,mdata:safedt.mdata,ldata:safedt.ldata});
                      self.drawvBar({target:"vbar4",title:"服务器告警统计Top10",xdata:serdt.xdata,hdata:serdt.hdata,mdata:serdt.mdata,ldata:serdt.ldata});
                  }
              })
          },
          getgroup:function(){
              var self=this;
              vueUI.ajaxCall({
                  type:"post",
                  url:vueUI.conf.host+"/group/get_All",
                  success:function(res){
                      var dt=res.data;
                      var arr=[];
                      for(var i=0;i<dt.length;i++){
                          arr.push({value:dt[i].id+","+dt[i].groupNum,label:dt[i].name})
                      };
                      self.sites=arr;
                      self.site=dt[0].id+","+dt[0].groupNum;
                      Vue.nextTick(function () {
                          self.init()
                      })
                  }
              })
          },
          loadm:function(){
              $('#startDate').datetimepicker({
                  lang:"ch",           //语言选择中文
                  format:"Y-m-d",      //格式化日期
                  autoclose: true,
                  onShow:function( ct ){
                      this.setOptions({
                          maxDate:jQuery('#endDate').val()?jQuery('#endDate').val():false
                      })
                  },
                  timepicker:false,    //关闭时间选项
                  todayButton:true    //关闭选择今天按钮
              })
              //结束时间：
              $('#endDate').datetimepicker({
                  lang:"ch",           //语言选择中文
                  format:"Y-m-d",      //格式化日期
                  autoclose: true,
                  onShow:function( ct ){
                      this.setOptions({
                          minDate:jQuery('#startDate').val()?jQuery('#startDate').val():false
                      })
                  },
                  timepicker:false,    //关闭时间选项
                  todayButton:true    //关闭选择今天按钮
              })
              .on('changeDate',function(e){
                  var endTime = e.date;
                  $('#startDate').datetimepicker('setEndDate',endTime);
              });
          },
          drawPie:function(params){
              var option = {
                  title : {
                      text: '事件比例',
                      x:'left',
                      padding:[5,20]
                  },
                  tooltip : {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                  },
                  legend: {
                      data: ['紧急','高危','中危','低危'],
                      bottom:"bottom",
                      orient:"horizontal",
                      itemWidth:14
                  },
                  series : [
                      {
                          name: '事件比例',
                          type: 'pie',
                          radius : '55%',
                          center: ['50%', '60%'],
                          color:["#5B9BD5","#ED7D31","#A5A5A5","#FFC000"],
                          data:[
                              {value:params.dan, name:'紧急'},
                              {value:params.high, name:'高危'},
                              {value:params.middle, name:'中危'},
                              {value:params.low, name:'低危'}
                          ],
                          label:{
                              normal:{
                                  show:false
                              },
                              emphasis:{
                                  show:true
                              }
                          },
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
              var chart=echarts.init(document.getElementById("p1"));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
              setTimeout(function(){
              	var img1 = chart.getDataURL("png").replace('data:image/png;base64,','');
                  $('input[name="img1"]').val(img1);
              },2000)
          },
          drawbar:function(params){
              var option = {
                  title : {
                      text: params.title,
                      x:params.left,
                      padding:[5,20]
                  },
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  legend: {
                      bottom:"bottom",
                      itemWidth:14,
                      data:['已处理','未处理']
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '10%',
                      containLabel: true
                  },
                  xAxis : [
                      {
                          type : 'category',
                          data : ['应用系统','网络设备','安全设备','服务器']
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value'
                      }
                  ],
                  series : [
                      {
                          name:'未处理',
                          type:'bar',
                          label:{
                              normal:{
                                  show:true
                              },
                              emphasis:{
                                  show:true
                              }
                          },
                          stack: '事件',
                          data:params.dataun,
                          itemStyle:{
                              normal:{
                                  color:"#BDD7EE"
                              },
                              emphasis:{
                                  color:"#BDD7EE"
                              }
                          }
                      },
                      {
                          name:'已处理',
                          type:'bar',
                          label:{
                              normal:{
                                  show:true
                              },
                              emphasis:{
                                  show:true
                              }
                          },
                          stack: '事件',
                          data:params.datade,
                          itemStyle:{
                              normal:{
                                  color:"#00B0F0"
                              },
                              emphasis:{
                                  color:"#00B0F0"
                              }
                          }
                      }
                  ]
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
              if(params.target=='b1'){
                 var img2 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img2"]').val(img2);
              }
              if(params.target=='b2'){
                 var img5 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img5"]').val(img5);
              }
              if(params.target=='b3'){
                 var img6 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img6"]').val(img6);
              }
              if(params.target=='b4'){
                 var img7 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img7"]').val(img7);
              }
          },
          handledata:function(dt){
              var xdata=[];
              var hdata=[];
              var mdata=[];
              var ldata=[];
              for(var i=0;i<dt.length;i++){
                  xdata.push(dt[i].name);
                  if(dt[i].hCount){
                      hdata.push(dt[i].hCount);
                  }else{
                      hdata.push(0);
                  };
                  if(dt[i].mCount){
                      mdata.push(dt[i].mCount);
                  }else{
                      mdata.push(0)
                  };
                  if(dt[i].lCount){
                      ldata.push(dt[i].lCount);
                  }else{
                      ldata.push(0)
                  }
              };
              return {xdata:xdata,hdata:hdata,mdata:mdata,ldata:ldata}
          },
          drawLine:function(params){
              var option = {
                  title: {
                      text: '环比统计',
                      padding:[5,20]
                  },
                  tooltip : {
                      trigger: 'axis'
                  },
                  legend: {
                      data:['本期','上期'],
                      right:20,
                      orient:"horizontal",
                      color:["#7030A0","#9DC3E6"]
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
                          boundaryGap : false,
                          data : params.xdata
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value'
                      }
                  ],
                  series : [
                      {
                          name:'本期',
                          type:'line',
                          data:params.nydata,
                          symbolSize:15,
                          itemStyle:{
                              normal:{
                                  color:"#7030A0"
                              }
                          },
                          lineStyle:{
                              normal:{
                                  color:"#7030A0"
                              }
                          }
                      },
                      {
                          name:'上期',
                          type:'line',
                          data:params.pydata,
                          symbolSize:10,
                          itemStyle:{
                              normal:{
                                  color:"#9DC3E6"
                              }
                          },
                          lineStyle:{
                              normal:{
                                  color:"#9DC3E6"
                              }
                          }
                      }
                  ]
              };
              var chart=echarts.init(document.getElementById("line1"));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
              setTimeout(function(){
  	            var img3 = chart.getDataURL("png").replace('data:image/png;base64,','');
  	            $('input[name="img3"]').val(img3);
              },2000);
          },
          drawSafe:function(params){
              var option = {
                  title : {
                      text: '安全风险',
                      x:'left',
                      padding:[5,20]
                  },
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                          data : ['本期','上期']
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value'
                      }
                  ],
                  series : [
                      {
                          name:'直接访问',
                          type:'bar',
                          label:{
                              normal:{
                                  show:true
                              },
                              emphasis:{
                                  show:true
                              }
                          },
                          data:[{value:params.now,itemStyle:{normal:{color:"#7030A0"}}}, {value:params.pre,itemStyle:{normal:{color:"#BDD7EE"}}}]
                      }
                  ]
              };
              var chart=echarts.init(document.getElementById("safe1"));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
              var img4 = chart.getDataURL("png").replace('data:image/png;base64,','');
              $('input[name="img4"]').val(img4);
          },
          drawvBar:function(params){
              var option = {
                  title : {
                      text: params.title,
                      x:'left',
                      padding:[5,20]
                  },
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  legend: {
                      data:['高危', '中危','低危'],
                      right:20,
                      itemWidth:14
                  },
                  grid: {
                      left: '3%',
                      right: '4%',
                      bottom: '3%',
                      containLabel: true
                  },
                  xAxis : [
                      {
                          type : 'value'
                      }
                  ],
                  yAxis : [
                      {
                          type : 'category',
                          axisTick : {show: false},
                          // data : ['黄埔民政局','黄埔司法局','黄埔财政局','黄埔建交委','黄埔环保局','黄埔文化局','黄埔人口计生委','黄埔审计局','黄埔发改委','黄埔教育局']
                          data:params.xdata
                      }
                  ],
                  series : [
                      {
                          name:'高危',
                          type:'bar',
                          barGap:0,
                          label: {
                              normal: {
                                  show: true,
                                  position: 'right',
                                  textStyle:{
                                      color:"#222"
                                  }
                              }
                          },
                          // data:[200, 170, 240, 244, 200, 220, 210, 200, 220, 210],
                          data:params.hdata,
                          itemStyle:{
                              normal:{
                                  color:"#FF0000"
                              },
                              emphasis:{
                                  color:"#FF0000"
                              }
                          }
                      },
                      {
                          name:'中危',
                          type:'bar',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'right',
                                  textStyle:{
                                      color:"#222"
                                  }
                              }
                          },
                          // data:[320, 302, 341, 374, 390, 450, 420, 390, 450, 420],
                          data:params.mdata,
                          itemStyle:{
                              normal:{
                                  color:"#FFFF00"
                              },
                              emphasis:{
                                  color:"#FFFF00"
                              }
                          }
                      },
                      {
                          name:'低危',
                          type:'bar',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'right',
                                  textStyle:{
                                      color:"#222"
                                  }
                              }
                          },
                          // data:[320, 302, 341, 374, 390, 450, 420, 390, 450, 420],
                          data:params.ldata,
                          itemStyle:{
                              normal:{
                                  color:"#00B0F0"
                              },
                              emphasis:{
                                  color:"#00B0F0"
                              }
                          }
                      }
                  ]
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
              if(params.target=='vbar1'){
                 var img8 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img8"]').val(img8);
              }
              if(params.target=='vbar2'){
                 var img9 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img9"]').val(img9);
              }
              if(params.target=='vbar3'){
                 var img10 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img10"]').val(img10);
              }
              if(params.target=='vbar4'){
                 var img11 = chart.getDataURL("png").replace('data:image/png;base64,','');
                 $('input[name="img11"]').val(img11);
              }
          },
          reportExport:function(){
              $("#chartImg").submit();
          }
      }
  });
  

});
