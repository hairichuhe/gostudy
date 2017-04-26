define('log', function(require, exports, module) {

  var Vue = require('vue');
  require('vueGrid');
  
  module.exports = Vue.extend({
      route: {
          activate: function (transition) {
              transition.next()
          }
      },
      template: "<style>.container .content {\r\n  width: calc(100vw - 230px - (100vw - 100%));\r\n  height: auto;\r\n  margin: 10px;\r\n  min-width: 1136px;\r\n  overflow-x: auto;\r\n  background-color: #fff; }\r\n  .container .content .option {\r\n    width: 100%;\r\n    height: 150px;\r\n    padding: 5px 15px;\r\n    box-sizing: border-box; }\r\n    .container .content .option .item {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      margin-top: 5px;\r\n      color: #2a394f; }\r\n      .container .content .option .item .time {\r\n        border: 1px solid #d4e4f1;\r\n        width: 192px;\r\n        height: 22px;\r\n        box-sizing: border-box;\r\n        float: left; }\r\n        .container .content .option .item .time input {\r\n          border: none;\r\n          width: 170px;\r\n          height: 20px;\r\n          float: left;\r\n          outline: none; }\r\n        .container .content .option .item .time i {\r\n          width: 14px;\r\n          height: 14px;\r\n          float: left;\r\n          margin: 3px 0; }\r\n      .container .content .option .item .sm {\r\n        width: 70px; }\r\n      .container .content .option .item .mid {\r\n        width: 310px; }\r\n      .container .content .option .item .smm {\r\n        width: 50px;\r\n        text-align: center; }\r\n      .container .content .option .item span, .container .content .option .item input, .container .content .option .item select {\r\n        color: #2a394f;\r\n        display: block;\r\n        height: 20px;\r\n        float: left;\r\n        line-height: 20px;\r\n        padding: 0; }\r\n      .container .content .option .item span {\r\n        width: 80px; }\r\n      .container .content .option .item input {\r\n        width: 170px; }\r\n      .container .content .option .item .m-r {\r\n        margin-right: 20px; }\r\n      .container .content .option .item .m-r1 {\r\n        margin-right: 10px; }\r\n  .container .content .btn {\r\n    width: 100%;\r\n    height: 32px;\r\n    border-bottom: 3px solid #485f81;\r\n    padding-left: 20px;\r\n    box-sizing: border-box; }\r\n    .container .content .btn button {\r\n      padding: 1px 10px;\r\n      background-color: #920783;\r\n      color: #fff;\r\n      margin: 5px 5px 0 5px; }\r\n  .container .content .m-t th {\r\n    background-color: #fbfcff;\r\n    color: #0a0a0a;\r\n    border-bottom: 1px solid #d4e4f1; }\r\n  .container .content .m-t td {\r\n    border: none; }\r\n  .container .content .m-t tr:nth-child(odd) {\r\n    background: #f1f6fc; }\r\n  .container .content .m-t .t-content {\r\n    width: 500px;\r\n    display: block; }\r\n    .container .content .m-t .t-content span {\r\n      display: block;\r\n      float: left;\r\n      height: 34px;\r\n      line-height: 34px;\r\n      width: 90%;\r\n      overflow: hidden;\r\n      white-space: nowrap;\r\n      text-overflow: ellipsis; }\r\n    .container .content .m-t .t-content button {\r\n      float: right;\r\n      height: 20px;\r\n      margin: 7px 0;\r\n      line-height: 20px;\r\n      background-color: transparent;\r\n      color: #05a2f3;\r\n      width: 40px;\r\n      padding: 0; }\r\n\r\n.form {\r\n  height: 750px; }\r\n  .form .fh {\r\n    width: 100%;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    margin: 10px 0;\r\n    box-sizing: border-box;\r\n    padding-left: 10px; }\r\n    .form .fh span {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-size: 22px;\r\n      font-weight: bold; }\r\n    .form .fh i {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      width: 30px;\r\n      cursor: pointer; }\r\n  .form .f-b {\r\n    width: 100%;\r\n    border-top: 1px solid #e2e2e2;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n    border-left: 1px solid #e2e2e2;\r\n    border-right: 1px solid #e2e2e2; }\r\n    .form .f-b .b-h {\r\n      height: 30px;\r\n      line-height: 30px;\r\n      background: #fcfcfc;\r\n      width: 100%;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      padding-left: 20px;\r\n      box-sizing: border-box; }\r\n    .form .f-b .flex {\r\n      display: flex;\r\n      flex-direction: row;\r\n      flex-wrap: wrap; }\r\n      .form .f-b .flex .b-t, .form .f-b .flex .b-b, .form .f-b .flex .b-b1 {\r\n        flex: 1;\r\n        height: 30px;\r\n        line-height: 30px;\r\n        font-weight: bold;\r\n        background-color: #fcfcfc;\r\n        padding: 0 20px;\r\n        border-bottom: 1px solid #e2e2e2;\r\n        box-sizing: border-box; }\r\n      .form .f-b .flex .b-b {\r\n        flex: 2;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n      .form .f-b .flex .b-b1 {\r\n        flex: 5;\r\n        font-weight: 100;\r\n        background-color: #fff;\r\n        color: #333; }\r\n    .form .f-b .b-bt, .form .f-b .b-bb {\r\n      width: 100%;\r\n      height: 30px;\r\n      line-height: 30px;\r\n      font-weight: bold;\r\n      background-color: #fcfcfc;\r\n      padding: 0 20px;\r\n      border-bottom: 1px solid #e2e2e2;\r\n      box-sizing: border-box; }\r\n    .form .f-b .b-bb {\r\n      width: 100%;\r\n      font-weight: 100;\r\n      background-color: #fff;\r\n      height: auto;\r\n      color: #333; }\r\n  .form .sub {\r\n    width: 100%;\r\n    height: 40px;\r\n    text-align: center; }\r\n    .form .sub button {\r\n      padding: 2px 15px;\r\n      background-color: #0a67c3;\r\n      border-radius: 4px;\r\n      color: #fff;\r\n      height: 24px;\r\n      margin: 8px 5px;\r\n      line-height: 20px;\r\n      cursor: pointer; }\r\n\r\n/*# sourceMappingURL=/components/log/log.css.map */\r\n</style>\r\n\r\n<div class=\"content\" id=\"log-table\">\r\n        <div class=\"option\">\r\n            <form id=\"query-form\" action=\"/eventlog/query\">\r\n                <input type=\"hidden\" name=\"page_pageNo\" id=\"pageNo\" value=\"1\" />\r\n                <input type=\"hidden\" name=\"page_pageSize\" id=\"pageSize\" value=\"10\" />\r\n                <input type=\"hidden\" name=\"page_order\" id=\"order\" value=\"desc\" />\r\n                <input type=\"hidden\" name=\"page_orderBy\" id=\"orderBy\" value=\"deviceReceiptTime\" />\r\n                <div class=\"item\">\r\n                    <span>接收时间：</span>\r\n                    <div class=\"time\">\r\n                        <input type=\"text\" v-model=\"form.startTime\" name=\"startTime\" value=\"\" id=\"datetimepicker\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                    <span class=\"smm\">&nbsp;&nbsp;至&nbsp;&nbsp;</span>\r\n                    <div class=\"time\">\r\n                        <input type=\"text\" value=\"\" v-model=\"form.endTime\" name=\"endTime\" id=\"datetimepicker1\"/>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>主机地址：</span><input v-model=\"form.hostUrl\" name=\"area\"  type=\"text\" value=\"\"  class=\"m-r1\" />\r\n                    <span>主机名称：</span><input v-model=\"form.hostName\" name=\"name\" type=\"text\" value=\"\" />\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>设备厂商：</span><input v-model=\"form.factory\" name=\"customer\" type=\"text\" value=\"\"  class=\"m-r1\"/>\r\n                    <span>日志内容：</span><input v-model=\"form.log\" name=\"content\" type=\"text\" value=\"\" />\r\n                </div>\r\n                <div class=\"item\">\r\n                    <span>事件等级：</span>\r\n                    <select name=\"eventLevel\" style=\"border:1px solid #d4e4f1;width: 172px;\">\r\n                        <option value=\"\">请选择…</option>\r\n                        <option value=\"high\">高</option>\r\n                        <option value=\"medium\">中</option>\r\n                        <option value=\"low\">低</option>\r\n                        <option value=\"info\">提示</option>\r\n                    </select>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"btn\">\r\n            <button @click=\"search\">查询</button>\r\n            <button @click=\"resetForm\">重置</button>\r\n            <button id=\"sub_form1\" @click=\"getDetailDate\">详细</button>\r\n        </div>\r\n        <vue-grid target=\"log-table\" v-ref:grid :columns=\"gridColumns\"></vue-grid>\r\n        <!-- <table class=\"m-t\" cellpadding=\"0\" cellspacing=\"0\">\r\n            <tr class=\"t-head\">\r\n                <th style=\"width: 5%\" class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box1\" type=\"checkbox\">\r\n                    <label for=\"ck_box1\" class=\"ck-over\"></label>\r\n                </th>\r\n                <th style=\"width: 8%\">ID</th>\r\n                <th style=\"width: 20%\">接收时间</th>\r\n                <th style=\"width: 15%\">主机地址</th>\r\n                <th style=\"width: 12%\">主机名称</th>\r\n                <th style=\"width: 12%\">设备厂商</th>\r\n                <th style=\"width: 500px;\" >日志内容</th>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box2\" type=\"checkbox\">\r\n                    <label for=\"ck_box2\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button id=\"sub_form\">详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box3\" type=\"checkbox\">\r\n                    <label for=\"ck_box3\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box4\" type=\"checkbox\">\r\n                    <label for=\"ck_box4\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box5\" type=\"checkbox\">\r\n                    <label for=\"ck_box5\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box6\" type=\"checkbox\">\r\n                    <label for=\"ck_box6\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box7\" type=\"checkbox\">\r\n                    <label for=\"ck_box7\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box8\" type=\"checkbox\">\r\n                    <label for=\"ck_box8\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"tb-ck\">\r\n                    <input class=\"ck-box\" id=\"ck_box9\" type=\"checkbox\">\r\n                    <label for=\"ck_box9\" class=\"ck-over\"></label>\r\n                </td>\r\n                <td>01</td>\r\n                <td>2016-11-09 9:40:12</td>\r\n                <td>210.22.116.73</td>\r\n                <td>GUOTAIWEB-01</td>\r\n                <td>luoan</td>\r\n                <td class=\"t-content\">\r\n                    <span><29>Nov 18 14:57:57 GUOTAIWEB-01 Service_Control_Manager: 7036: WinHTTP Web Proxy Auto-Discovery Service 服务处于 停止 状态。</span>\r\n                    <button>详情</button>\r\n                </td>\r\n            </tr>\r\n        </table> -->\r\n    </div>\r\n\r\n<div id=\"form\" class=\"win\">\r\n    <div class=\"form-b\">\r\n\r\n    </div>\r\n    <div class=\"form\">\r\n        <div class=\"fh\">\r\n            <span>日志详情</span>\r\n            <i class=\"fa  fa-close fa-2x fr\" @click=\"hidedetail\"></i>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">事件基本信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">事件名称</div>\r\n                <div class=\"b-b\">{{db.detail.eventName}}</div>\r\n                <div class=\"b-t\">级别</div>\r\n                <div class=\"b-b\">{{db.detail.eventLevel}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">事件数量</div>\r\n                <div class=\"b-b\">{{db.detail.eventCount}}</div>\r\n                <div class=\"b-t\">事件结果</div>\r\n                <div class=\"b-b\">{{db.detail.eventResult}}</div>\r\n            </div>\r\n            <div class=\"b-bt\">事件描述</div>\r\n            <div class=\"b-bb\">{{db.detail.eventMessage}}</div>\r\n            <div class=\"b-bt\">原始事件</div>\r\n            <div class=\"b-bb\">{{db.detail.rawEvent}}</div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">资产信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">资产</div>\r\n                <div class=\"b-b\">\r\n                    <span v-if=\"db.detail.product==1\">应用系统</span>\r\n                    <span v-if=\"db.detail.product==2\">网络设备</span>\r\n                    <span v-if=\"db.detail.product==3\">安全设备</span>\r\n                    <span v-if=\"db.detail.product==4\">服务器</span>\r\n                    <span v-if=\"db.detail.product==5\">其他</span>\r\n                </div>\r\n                <div class=\"b-t\">客户</div>\r\n                <div class=\"b-b\">{{db.detail.customer}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">分类信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">事件行为分类</div>\r\n                <div class=\"b-b\">{{db.detail.eventCategoryBehavior}}</div>\r\n                <div class=\"b-t\">事件对象分类</div>\r\n                <div class=\"b-b\">{{db.detail.eventCategoryObject}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">事件技术分类</div>\r\n                <div class=\"b-b\">{{db.detail.eventCategoryTechnique}}</div>\r\n                <div class=\"b-t\">来源设备分类</div>\r\n                <div class=\"b-b\">{{db.detail.assetType}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">流量信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">流入字节数</div>\r\n                <div class=\"b-b\">{{db.detail.bytesIn}}</div>\r\n                <div class=\"b-t\">流出字节数</div>\r\n                <div class=\"b-b\">{{db.detail.bytesOut}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">时间信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">设备接收事件的时间戳</div>\r\n                <div class=\"b-b\">{{db.detail.deviceReceiptTime}}</div>\r\n                <div class=\"b-t\">collector接收事件的时间戳</div>\r\n                <div class=\"b-b\">{{db.detail.collectreceiptTime}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">SOC接收事件的时间戳</div>\r\n                <div class=\"b-b1\">{{db.detail.socReceiptTime}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">事件开始时间</div>\r\n                <div class=\"b-b\">{{db.detail.eventStartTime}}</div>\r\n                <div class=\"b-t\">事件结束时间</div>\r\n                <div class=\"b-b\">{{db.detail.eventEndTime}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">源信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">来源地址</div>\r\n                <div class=\"b-b\">{{db.detail.eventEndTime}}</div>\r\n                <div class=\"b-t\">来源端口</div>\r\n                <div class=\"b-b\">{{db.detail.eventEndTime}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">来源DNS域名</div>\r\n                <div class=\"b-b\">{{db.detail.eventEndTime}}</div>\r\n                <div class=\"b-t\">来源主机名</div>\r\n                <div class=\"b-b\">{{db.detail.eventEndTime}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">目的信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">目的地址</div>\r\n                <div class=\"b-b\">{{db.detail.srcAddress}}</div>\r\n                <div class=\"b-t\">目的端口</div>\r\n                <div class=\"b-b\">{{db.detail.srcPort}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">目的DNS域名</div>\r\n                <div class=\"b-b\">{{db.detail.srcDnsDomain}}</div>\r\n                <div class=\"b-t\">目的主机名</div>\r\n                <div class=\"b-b\">{{db.detail.srcHostName}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">协议信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">应用协议类型</div>\r\n                <div class=\"b-b\">{{db.detail.appProtocol}}</div>\r\n                <div class=\"b-t\">传输协议类型</div>\r\n                <div class=\"b-b\">{{db.detail.transProtocol}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">来源设备信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">来源设备地址</div>\r\n                <div class=\"b-b\">{{db.detail.deviceAddress}}</div>\r\n                <div class=\"b-t\">来源设备主机名</div>\r\n                <div class=\"b-b\">{{db.detail.deviceHostName}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">来源设备MAC地址</div>\r\n                <div class=\"b-b\">{{db.detail.deviceMac}}</div>\r\n                <div class=\"b-t\">来源设备厂商</div>\r\n                <div class=\"b-b\">{{db.detail.deviceProduct}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"f-b\">\r\n            <div class=\"b-h\">应用信息</div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">客户端请求程序</div>\r\n                <div class=\"b-b\">{{db.detail.reqClientApp}}</div>\r\n                <div class=\"b-t\">请求方法</div>\r\n                <div class=\"b-b\">{{db.detail.reqMethod}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">请求响应码</div>\r\n                <div class=\"b-b\">{{db.detail.repcode}}</div>\r\n                <div class=\"b-t\">相关链接URL</div>\r\n                <div class=\"b-b\">{{db.detail.reqUrl}}</div>\r\n            </div>\r\n            <div class=\"flex\">\r\n                <div class=\"b-t\">相关链接动作</div>\r\n                <div class=\"b-b1\">{{db.detail.reqAction}}</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"sub\">\r\n            <button>处理</button>\r\n            <button id=\"out_form\">返回</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n",
      data:function(){
          return {
              gridColumns:[
                  // {name:'id',displayName:'ID',headerStyle:" width: 8%",dataStyle:'float:left;',sortable:false},
                  {name:'deviceReceiptTime',displayName:'接收时间',headerStyle:"width: 20%",dataStyle:'float:left;',sortable:false},
                  {name:'deviceAddress',displayName:'主机地址',headerStyle:"width: 15%"},
                  {name:'eventLevel',displayName:'事件等级',headerStyle:"width: 8%",render:"levelrender"},
                  {name:'srcHostName',displayName:'主机名称',headerStyle:"width: 12%",dataStyle:'float:left;',sortable:false},
                  {name:'deviceProduct',displayName:'设备厂商',headerStyle:"width: 12%",dataStyle:'float:left;',sortable:false},
                  {name:'eventMessage',displayName:'日志内容',headerStyle:"width:500px;",dataCls:"t-content",dataStyle:'float:left;',sortable:false},
                  {type:'btn',name:"detail",render:"detailrender",headerStyle:'width:56px;',btnCls:'btn fa fa-file fa-lg',displayName:'详情',onclick:'getDetailDate',sortable:false}
              ],
              form:{
                  startTime:"",
                  endTime:"",
                  hostUrl:"",
                  hostName:"",
                  factory:"",
                  log:""
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
              var id;
              if(v.id){
                  id= v.id
              }else{
                  id=this.$refs.grid.getSelected();
              }
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/eventlog/queryById",
                  type:"POST",
                  data:'{"id":"'+id+'"}',
                  success:function(rsp){
                      if(rsp.data.assetType==1){
                          rsp.data.assetType="应用系统"
                      }else if(rsp.data.assetType==2){
                          rsp.data.assetType="网络设备"
                      }else if(rsp.data.assetType==3){
                          rsp.data.assetType="安全设备"
                      }else if(rsp.data.assetType==4){
                          rsp.data.assetType="服务器"
                      }else{
                          rsp.data.assetType="其他"
                      };
                      if(rsp.data.eventLevel=="high"){
                          rsp.data.eventLevel="高"
                      }else if(rsp.data.eventLevel=="medium"){
                          rsp.data.eventLevel="中"
                      }else if(rsp.data.eventLevel=="low"){
                          rsp.data.eventLevel="低"
                      }else{
                          rsp.data.eventLevel="提示信息"
                      };
                      self.db.detail=rsp.data;
                      self.showdetail()
                  }
              })
          },
          levelrender:function(v){
              if(v.eventLevel=="high"){
                  return "<span style='background:#D10304;color:#555'>高</span>"
              }else if(v.eventLevel=="medium"){
                  return "<span style='background:#A6C301;color:#555'>中</span>"
              }else if(v.eventLevel=="low"){
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
