define('hole', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      route: {
          activate: function (transition) {
              transition.next()
          }
      },
      template: "<style>.container .content {\r\n  width: calc(100vw - 230px - (100vw - 100%));\r\n  height: auto;\r\n  margin: 10px;\r\n  min-width: 1136px;\r\n  overflow-x: auto;\r\n  background-color: #fff; }\r\n  .container .content .option {\r\n    width: 100%;\r\n    height: 150px;\r\n    padding: 5px 15px;\r\n    box-sizing: border-box; }\r\n    .container .content .option .item {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      margin-top: 5px;\r\n      color: #2a394f; }\r\n      .container .content .option .item .time {\r\n        border: 1px solid #d4e4f1;\r\n        width: 192px;\r\n        height: 22px;\r\n        box-sizing: border-box;\r\n        float: left; }\r\n        .container .content .option .item .time input {\r\n          border: none;\r\n          width: 170px;\r\n          height: 20px;\r\n          float: left;\r\n          outline: none; }\r\n        .container .content .option .item .time i {\r\n          width: 14px;\r\n          height: 14px;\r\n          float: left;\r\n          margin: 3px 0; }\r\n      .container .content .option .item .sm {\r\n        width: 70px; }\r\n      .container .content .option .item .mid {\r\n        width: 310px; }\r\n      .container .content .option .item .smm {\r\n        width: 50px;\r\n        text-align: center; }\r\n      .container .content .option .item span, .container .content .option .item input, .container .content .option .item select {\r\n        color: #2a394f;\r\n        display: block;\r\n        height: 20px;\r\n        float: left;\r\n        line-height: 20px;\r\n        padding: 0; }\r\n      .container .content .option .item span {\r\n        width: 80px; }\r\n      .container .content .option .item input {\r\n        width: 170px; }\r\n      .container .content .option .item .m-r {\r\n        margin-right: 20px; }\r\n      .container .content .option .item .m-r1 {\r\n        margin-right: 10px; }\r\n  .container .content .btn {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-bottom: 3px solid #485f81;\r\n    padding-left: 20px;\r\n    box-sizing: border-box; }\r\n    .container .content .btn button {\r\n      padding: 1px 10px;\r\n      background-color: #920783;\r\n      color: #fff;\r\n      margin: 5px 5px 0 5px; }\r\n  .container .content .m-t th {\r\n    background-color: #fbfcff;\r\n    color: #0a0a0a;\r\n    border-bottom: 1px solid #d4e4f1; }\r\n  .container .content .m-t td {\r\n    border: none; }\r\n  .container .content .m-t tr:nth-child(odd) {\r\n    background: #f1f6fc; }\r\n  .container .content .m-t .t-content {\r\n    width: 500px;\r\n    display: block; }\r\n    .container .content .m-t .t-content span {\r\n      display: block;\r\n      float: left;\r\n      height: 34px;\r\n      line-height: 34px;\r\n      width: 90%;\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis; }\r\n    .container .content .m-t .t-content button {\r\n      float: right;\r\n      height: 20px;\r\n      margin: 7px 0;\r\n      line-height: 20px;\r\n      background-color: transparent;\r\n      color: #05a2f3;\r\n      width: 40px;\r\n      padding: 0; }\r\n\r\n.form {\r\n  height: 750px; }\r\n  .form .fh {\r\n    width: 100%;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: 10px 0;\r\n    box-sizing: border-box;\r\n    padding-left: 10px; }\r\n    .form .fh span {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-size: 22px;\r\n      font-weight: bold; }\r\n    .form .fh i {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      width: 30px;\r\n      cursor: pointer; }\r\n  .form .f-b {\r\n    width: 100%;\r\n    border-top: 1px solid #e2e2e2;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n    border-left: 1px solid #e2e2e2;\r\n    border-right: 1px solid #e2e2e2; }\r\n    .form .f-b .b-h {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      background: #fcfcfc;\r\n      width: 100%;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      padding-left: 20px;\r\n      box-sizing: border-box; }\r\n    .form .f-b .flex {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap; }\r\n      .form .f-b .flex .b-t, .form .f-b .flex .b-b, .form .f-b .flex .b-b1 {\r\n        flex: 1;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        font-weight: bold;\r\n        background-color: #fcfcfc;\r\n        padding: 0 20px;\r\n        border-bottom: 1px solid #e2e2e2;\r\n        box-sizing: border-box; }\r\n      .form .f-b .flex .b-b {\r\n        flex: 2;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n      .form .f-b .flex .b-b1 {\r\n        flex: 5;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n    .form .f-b .b-bt, .form .f-b .b-bb {\r\n      width: 100%;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-weight: bold;\r\n      background-color: #fcfcfc;\r\n      padding: 0 20px;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      box-sizing: border-box; }\r\n    .form .f-b .b-bb {\r\n      width: 100%;\r\n      font-weight: 100;\r\n      background-color: #fff;\r\n      height: auto;\r\n      color: #333; }\r\n  .form .sub {\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center; }\r\n    .form .sub button {\r\n      padding: 2px 15px;\r\n      background-color: #0a67c3;\r\n      border-radius: 4px;\r\n      color: #fff;\r\n      height: 24px;\r\n      margin: 8px 5px;\r\n      line-height: 20px;\r\n      cursor: pointer; }\r\n\r\n/*# sourceMappingURL=log.css.map */\r\n</style>\r\n\r\n<div class=\"content\">\r\n        <div class=\"option\" id=\"log-table\">\r\n            <form id=\"query-form\" action=\"/hole/query\">\r\n                <input type=\"hidden\" name=\"page_pageNo\" id=\"pageNo\" value=\"1\" />\r\n                <input type=\"hidden\" name=\"page_pageSize\" id=\"pageSize\" value=\"10\" />\r\n                <input type=\"hidden\" name=\"page_order\" id=\"order\" value=\"desc\" />\r\n                <input type=\"hidden\" name=\"page_orderBy\" id=\"orderBy\" value=\"time\" />\r\n                <div class=\"item\">\r\n                    <span>接收时间：</span>\r\n                    <div class=\"time\">\r\n                        <input type=\"text\" v-model=\"form.startTime\" name=\"startTime\" value=\"\" id=\"datetimepicker\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                    <span class=\"smm\">&nbsp;&nbsp;至&nbsp;&nbsp;</span>\r\n                    <div class=\"time\">\r\n                        <input type=\"text\" value=\"\" v-model=\"form.endTime\" name=\"endTime\" id=\"datetimepicker1\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>漏洞名称：</span><input v-model=\"form.name\" name=\"name\"  type=\"text\" value=\"\"  class=\"m-r1\" />\r\n                    <span>漏洞编号：</span><input v-model=\"form.holeNum\" name=\"holeNum\" type=\"text\" value=\"\" />\r\n                </div>\r\n                <!-- <div class=\"item\">\r\n                    <span>设备厂商：</span><input v-model=\"form.factory\" name=\"customer\" type=\"text\" value=\"\"  class=\"m-r1\"/>\r\n                    <span>日志内容：</span><input v-model=\"form.log\" name=\"content\" type=\"text\" value=\"\" />\r\n                </div> -->\r\n                <div class=\"item\">\r\n                    <span>漏洞类型：</span><input v-model=\"form.holeType\" name=\"holeType\" type=\"text\" class=\"m-r1\" value=\"\" />\r\n                    <span>漏洞等级：</span>\r\n                    <select name=\"level\" style=\"border:1px solid #d4e4f1;width: 172px;\">\r\n                        <option value=\"\">请选择…</option>\r\n                        <option value=\"高\">高</option>\r\n                        <option value=\"中\">中</option>\r\n                        <option value=\"低\">低</option>\r\n                        <option value=\"提示\">提示</option>\r\n                    </select>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"btn\">\r\n            <button @click=\"search\">查询</button>\r\n            <button @click=\"resetForm\">重置</button>\r\n            <button id=\"sub_form1\">详细</button>\r\n        </div>\r\n        <vue-grid target=\"log-table\" v-ref:grid :columns=\"gridColumns\"></vue-grid>\r\n        <!-- <table class=\"m-t\" cellpadding=\"0\" cellspacing=\"0\">\r\n            <tr class=\"t-head\">\r\n                <th style=\"width: 5%\" class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box1\" type=\"checkbox\">\r\n                    <label for=\"ck_box1\" class=\"ck-over\"></label>\r\n                </th>\r\n                <th style=\"width: 8%\">ID</th>\r\n                <th style=\"width: 20%\">接收时间</th>\r\n                <th style=\"width: 15%\">主机地址</th>\r\n                <th style=\"width: 12%\">主机名称</th>\r\n                <th style=\"width: 12%\">设备厂商</th>\r\n                <th style=\"width: 500px;\" >日志内容</th>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box2\" type=\"checkbox\">\r\n                    <label for=\"ck_box2\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button id=\"sub_form\">详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box3\" type=\"checkbox\">\r\n                    <label for=\"ck_box3\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box4\" type=\"checkbox\">\r\n                    <label for=\"ck_box4\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box5\" type=\"checkbox\">\r\n                    <label for=\"ck_box5\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box6\" type=\"checkbox\">\r\n                    <label for=\"ck_box6\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box7\" type=\"checkbox\">\r\n                    <label for=\"ck_box7\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box8\" type=\"checkbox\">\r\n                    <label for=\"ck_box8\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box9\" type=\"checkbox\">\r\n                    <label for=\"ck_box9\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n        </table> -->\r\n    </div>\r\n\r\n<div id=\"form\" class=\"win\">\r\n    <div class=\"form-b\">\r\n\r\n    </div>\r\n    <div class=\"form\">\r\n        <div class=\"fh\">\r\n            <span>漏洞详情</span>\r\n            <i class=\"fa  fa-close fa-2x fr\" @click=\"hidedetail\"></i>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">漏洞基本信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞名称</div>\r\n                <div class=\"b-b\">{{db.detail.name}}</div>\r\n                <div class=\"b-t\">级别</div>\r\n                <div class=\"b-b\">{{db.detail.level}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞地域</div>\r\n                <div class=\"b-b\">{{db.detail.area}}</div>\r\n                <div class=\"b-t\">所属客户</div>\r\n                <div class=\"b-b\">{{db.detail.customer}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞发布时间</div>\r\n                <div class=\"b-b\">{{db.detail.publishTime}}</div>\r\n                <div class=\"b-t\"></div>\r\n                <div class=\"b-b\"></div>\r\n            </div>\r\n            <div class=\"b-bt\">漏洞描述</div>\r\n            <div class=\"b-bb\">{{db.detail.description}}</div>\r\n            <div class=\"b-bt\">漏洞URL</div>\r\n            <div class=\"b-bb\">{{db.detail.url}}</div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">漏洞其他信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞类型</div>\r\n                <div class=\"b-b\">{{db.detail.holeType}}</div>\r\n                <div class=\"b-t\">产品名称</div>\r\n                <div class=\"b-b\">{{db.detail.product}}</div>\r\n            </div>\r\n            <div class=\"b-bt\">解决方案</div>\r\n            <div class=\"b-bb\">{{db.detail.solution}}</div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">资产信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">资产名称</div>\r\n                <div class=\"b-b\">{{db.detail.affectCompany}}</div>\r\n                <div class=\"b-t\">资产IP</div>\r\n                <div class=\"b-b\">{{db.detail.assetIp}}</div>\r\n                <div class=\"b-t\">资产类型</div>\r\n                <div class=\"b-b\">{{db.detail.assetType}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞技术分类</div>\r\n                <div class=\"b-b\">{{db.detail.category}}</div>\r\n                <div class=\"b-t\">来源</div>\r\n                <div class=\"b-b\">{{db.detail.source}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">漏洞编号信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">cveId</div>\r\n                <div class=\"b-b\">{{db.detail.cveId}}</div>\r\n                <div class=\"b-t\">cnnvdId</div>\r\n                <div class=\"b-b\">{{db.detail.cnnvdId}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">cnvdId</div>\r\n                <div class=\"b-b\">{{db.detail.cnvdId}}</div>\r\n                <div class=\"b-t\"></div>\r\n                <div class=\"b-b\"></div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"f-b\">\r\n            <div class=\"b-h\">时间信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">漏洞发布时间</div>\r\n                <div class=\"b-b\">{{db.detail.publishTime}}</div>\r\n                <div class=\"b-t\">漏洞更新时间</div>\r\n                <div class=\"b-b\">{{db.detail.updatetime}}</div>\r\n            </div>\r\n        </div> -->\r\n        <!-- <div class=\"sub\">\r\n            <button>处理</button>\r\n            <button id=\"out_form\">返回</button>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n\r\n\r\n",
      data:function(){
          return {
              gridColumns:[
                  // {name:'id',displayName:'ID',headerStyle:" width: 8%",dataStyle:'float:left;',sortable:false},
                  {name:'name',displayName:'漏洞名称',headerStyle:"width: 30%",dataStyle:'float:left;',sortable:false},
                  {name:'holeNum',displayName:'漏洞编号',headerStyle:"width: 20%"},
                  {name:'level',displayName:'漏洞等级',headerStyle:"width: 8%",render:"levelrender"},
                  {name:'holeType',displayName:'漏洞类型',headerStyle:"width: 25%",dataStyle:'float:left;',sortable:false},
                  {name:'time',displayName:'发现时间',headerStyle:"width: 12%",dataStyle:'float:left;',sortable:false},
                  {type:'btn',name:"detail",render:"detailrender",headerStyle:'width:56px;',btnCls:'btn fa fa-file fa-lg',displayName:'详情',onclick:'getDetailDate',sortable:false}
              ],
              form:{
                  startTime:"",
                  endTime:"",
                  name:"",
                  holeNum:"",
                  holeType:""
              },
              db:{
                  detail:{}
              }
          }
      },
      created:function(){
          this.$clone=$.extend(true,{},this.form);
      },
      ready: function(){
          this.loadm();
      },
      methods:{
          resetForm:function(){
              this.$data.form=$.extend(true,{},this.$clone);
          },
          search:function(){
              this.$refs.grid.query();
          },
          detailrender:function(v){
              return "<span style='color:#05a2f3;cursor: pointer;'>详情</span>"
          },
          showdetail:function(v){
              $("#form").addClass("show");
          },
          hidedetail:function(){
              $("#form").removeClass("show");
          },
          getDetailDate:function(v){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/hole/query",
                  type:"POST",
                  data:'{"id":"'+v.id+'","page_order":"desc","page_orderBy":"time","page_pageSize":"10"}',
                  success:function(rsp){
                      var dt=rsp.data.result[0];
                      if(dt.assetType==1){
                          dt.assetType="应用系统"
                      }else if(dt.assetType==2){
                          dt.assetType="网络设备"
                      }else if(dt.assetType==3){
                          dt.assetType="安全设备"
                      }else if(dt.assetType==4){
                          dt.assetType="服务器"
                      }else{
                          dt.assetType="其他"
                      };
                      self.db.detail=dt;
                      self.showdetail()
                  }
              })
          },
          levelrender:function(v){
              if(v.level=="高"){
                  return "<span style='background:#D10304;color:#555'>高</span>"
              }else if(v.level=="中"){
                  return "<span style='background:#A6C301;color:#555'>中</span>"
              }else if(v.level=="低"){
                  return "<span style='background:#816DF2;color:#555'>低</span>"
              }else{
                  return "<span style='background:#91C7AE;color:#555'>提示</span>"
              }
          },
          loadm:function(){
              $(document).keyup(function(event){
                  switch(event.keyCode) {
                      case 27:
                          $("#form").removeClass("show");
                  }
              });
              $('#datetimepicker').datetimepicker({
                  lang:"ch",           //语言选择中文
                  format:"Y-m-d H:00",      //格式化日期
                  autoclose: true,
                  onShow:function( ct ){
                      this.setOptions({
                          maxDate:jQuery('#datetimepicker1').val()?jQuery('#datetimepicker1').val():false
                      })
                  },
                  timepicker:true,    //关闭时间选项
                  todayButton:true    //关闭选择今天按钮
              });
              $('#datetimepicker1').datetimepicker({
                  lang:"ch",           //语言选择中文
                  format:"Y-m-d H:00",      //格式化日期
                  autoclose: true,
                  onShow:function( ct ){
                      this.setOptions({
                          minDate:jQuery('#datetimepicker').val()?jQuery('#datetimepicker').val():false
                      })
                  },
                  timepicker:true,    //关闭时间选项
                  todayButton:true    //关闭选择今天按钮
              });
          }
      }
  });
  

});
