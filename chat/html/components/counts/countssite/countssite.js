define('countssite', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      route: {
          activate: function (transition) {
              var name='';
              if(this.$parent.queryStr!=""){
                  name=JSON.parse(this.$parent.queryStr).assetId;
              };
              if(!name || name==''){
                  routers.route.go({
                      path: "/temp",
                      query: {
                          url: '/counts'
                      }
                  });
              }else{
                  transition.next()
              };
          }
      },
      template: "        <div class=\"c-tt\">\r\n            <div class=\"tt-l\">\r\n                <div class=\"l-t\">\r\n                    <div class=\"t-t\">攻击统计</div>\r\n                    <div class=\"t-b\" id=\"chart1\"></div>\r\n                </div>\r\n                <div class=\"l-r\">\r\n                    <div class=\"t-t\">\r\n                        <div class=\"form-options\">\r\n                            <div class=\"form-check\">\r\n                                <input type=\"radio\" name=\"message\" class=\"fl check\" checked=\"checked\" @click=\"getchart2(1)\" id=\"check_15\">\r\n                                <label class=\"check-option\" for=\"check_15\"></label>\r\n                                <label class=\"check-lb\" for=\"check_15\">类型排行</label>\r\n                            </div>\r\n                            <div class=\"form-check\">\r\n                                <input type=\"radio\" name=\"message\" class=\"fl check\" @click=\"getchart2(2)\" id=\"check_16\">\r\n                                <label class=\"check-option\" for=\"check_16\"></label>\r\n                                <label class=\"check-lb\" for=\"check_16\">地区排行</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"t-b\" id=\"chart2\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tt-r\">\r\n                <div class=\"r-h\">\r\n                    <i class=\"fa fa-bank\"></i>\r\n                    <span>{{info.name}}</span>\r\n                </div>\r\n                <span class=\"r-b sm\" :title=\"info.url\" style=\"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">{{info.url}}</span>\r\n                <span class=\"r-b\">资产所属：<span>{{info.groupName}}</span></span>\r\n                <!-- <span class=\"r-b\">程序语言：<span>JSP</span></span>\r\n                <span class=\"r-b\">数  据  库：<span>MYSQL</span></span> -->\r\n                <span class=\"r-b\">IP 地 址：<span>{{info.ip}}</span></span>\r\n                <span class=\"r-b\">责  任  人：<span>{{info.person}}</span></span>\r\n                <span class=\"r-b\">联系手机：<span>{{info.phone}}</span></span>\r\n                <span class=\"r-b\">高危 <span>{{holeStatue.highTotal}}</span>  中危 <span>{{holeStatue.middleTotal}}</span> 低危 <span>{{holeStatue.lowTotal}}</span>  提示 <span>{{holeStatue.tipTotal}}</span></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"c-ct\" v-show=\"isserver\">\r\n            <div class=\"ct-h\">运行质量</div>\r\n            <div class=\"ct-b\">\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">首页响应时间</span>\r\n                        <span class=\"bt-r\">{{db.time.respTime}}（ms）</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart3\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">首页打开时间</span>\r\n                        <span class=\"bt-r\">{{db.time.openTime}}（ms）</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart4\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">域名解析时间</span>\r\n                        <span class=\"bt-r\">{{db.time.dnsTime}}（ms）</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart5\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">首页下载速度</span>\r\n                        <span class=\"bt-r\">{{db.time.downloadTime}}（Mbps）</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart6\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"c-ct\">\r\n            <div class=\"ct-h\">性能质量</div>\r\n            <div class=\"ct-b\">\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">CPU</span>\r\n                        <span class=\"bt-r\">{{db.time.cpu}}%</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart7\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">MEM</span>\r\n                        <span class=\"bt-r\">{{db.time.mem}}%</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart8\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">DISK-/</span>\r\n                        <span class=\"bt-r\">{{db.time.harddisk}}%</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart9\"></div>\r\n                </div>\r\n                <div class=\"b-t\">\r\n                    <div class=\"bt-t\">\r\n                        <span class=\"bt-l\">TRA-eth0</span>\r\n                        <span class=\"bt-r\">{{db.time.traffic}}Mbps</span>\r\n                    </div>\r\n                    <div class=\"bt-b\" id=\"chart10\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"c-bt\">\r\n            <div class=\"ct-l\">\r\n                <div class=\"l-h\">事件日志</div>\r\n                <div class=\"l-b\">\r\n                    <div class=\"lb-t\">\r\n                        <div class=\"b-border\"></div>\r\n                        <div class=\"b-bt\" v-for=\"(i,it) in db.log\" v-if=\"i%2==0\">\r\n                            <div class=\"bb-t\" :title=\"it.eventMessage\">{{it.eventMessages}}</div>\r\n                            <div class=\"bb-b\"></div>\r\n                            <div class=\"bb-r\"></div>\r\n                            <span class=\"bb-s\">{{it.time}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"lb-b\">\r\n                        <div class=\"b-bt\" v-for=\"(i,it) in db.log\" v-if=\"i%2==1\">\r\n                            <span class=\"bb-s\">{{it.time}}</span>\r\n                            <div class=\"bb-r\"></div>\r\n                            <div class=\"bb-b\"></div>\r\n                            <div class=\"bb-t\" :title=\"it.eventMessage\">{{it.eventMessages}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ct-r\">\r\n                <div class=\"l-h\">已处理问题（高危）</div>\r\n                <div class=\"l-b\" id=\"chart11\"></div>\r\n            </div>\r\n        </div>",
      ready: function(){
          this.sitesearch();
      },
      data:function(){
          return {
              info:{},
              holeStatue:{},
              db:{
                  log:[],
                  time:{}
              },
              isserver:false
          }
      },
      methods:{
          sitesearch:function(){
              if(JSON.parse(this.$parent.queryStr).type==1){
                  this.isserver=true
              }else{
                  this.isserver=false
              }
              this.getchart1();
              if($("#check_15").prop("checked")){
                  this.getchart2(1);
              }else{
                  this.getchart2(2);
              };
              this.getinfo();
              this.getHoleStatue();
              this.gettime();
              this.getchart3_6();
              this.querycpu();
              this.querymem();
              this.querydisk();
              this.querytra();
              this.getchart11();
              this.getlog();
          },
          getchart1:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/attackStatistics/queryAttackTotal',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var dt=res.data;
                      var obj={
                          target:'chart1',
                          name:'攻击攻击',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          obj.xdata.push(dt[i].timestring)
                          obj.ydata.push(dt[i].total)
                      }
                      self.drawline(obj)
                  }
              });
          },
          getchart2:function(num){
              var obj={
                  target:'chart2',
                  name:'漏洞排行',
                  data:[]
              };
              var self=this;
              var url;
              if(num==1){
                  url="/attackStatistics/queryAttackRankType";
              }else{
                  url='/attackStatistics/queryAttackRankArea';
              };
              vueUI.ajaxCall({
                  url:vueUI.conf.host+url,
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var dt=res.data;
                      for(var i=0;i<dt.length;i++){
                          obj.data.push({value:dt[i].total,name:dt[i].name})
                      };
                      self.drawchart2(obj)
                  }
              });
          },
          drawchart2:function(params){
              var chart = echarts.init(document.getElementById(params.target));
              var option = {
                  tooltip : {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                  },
                  legend: {
                      x : 'right',
                      y : 'center',
                      orient:'',
                      textStyle:{
                          color:'#8489b5',
                          fontSize: 10
                      },
                      itemWidth:15,
                      itemHeight:8,
                      data:params.data
                  },
                  calculable : true,
                  series : [
                      {
                          name:params.name,
                          type:'pie',
                          radius : [5, 90],
                          center : ['35%', '50%'],
                          roseType : 'radius',
                          label: {
                              normal: {
                                  show: false
                              }
                          },
                          lableLine: {
                              normal: {
                                  show: false
                              }
                          },
                          data:params.data
                      }
                  ]
              };
  
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          getinfo:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/asset/getAsset',
                  type:"POST",
                  data:'{"id":"'+JSON.parse(self.$parent.queryStr).assetId+'"}',
                  success:function(res){
                      self.info=res.data;
                  }
              });
          },
          getHoleStatue:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/holeStatistics/getHoleTotal',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      self.holeStatue=res.data;
                  }
              });
          },
          gettime:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/getPerformance',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      self.db.time=res.data;
                  }
              });
          },
          getchart3_6:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/getPerformanceList',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c1,c2,c3,c4/*,c5,c6,c7,c8*/;
                      var dt=res.data;
                      c1={
                          target:'chart3',
                          name:'首页响应时间',
                          xdata:[],
                          ydata:[]
                      };
                      c2={
                          target:'chart4',
                          name:'首页打开时间',
                          xdata:[],
                          ydata:[]
                      };
                      c3={
                          target:'chart5',
                          name:'域名解析时间',
                          xdata:[],
                          ydata:[]
                      };
                      c4={
                          target:'chart6',
                          name:'首页下载速度',
                          xdata:[],
                          ydata:[]
                      };
                      // c5={
                      //     target:'chart7',
                      //     name:'CPU',
                      //     xdata:[],
                      //     ydata:[]
                      // };
                      // c6={
                      //     target:'chart8',
                      //     name:'MEM',
                      //     xdata:[],
                      //     ydata:[]
                      // };
                      // c7={
                      //     target:'chart9',
                      //     name:'DISK-/',
                      //     xdata:[],
                      //     ydata:[]
                      // };
                      // c8={
                      //     target:'chart10',
                      //     name:'TRA-eth0',
                      //     xdata:[],
                      //     ydata:[]
                      // };
                      for(var i=0;i<dt.length;i++){
                          c1.xdata.push(dt[i].timestring);
                          c1.ydata.push(dt[i].respTime);
                          c2.xdata.push(dt[i].timestring);
                          c2.ydata.push(dt[i].openTime);
                          c3.xdata.push(dt[i].timestring);
                          c3.ydata.push(dt[i].dnsTime);
                          c4.xdata.push(dt[i].timestring);
                          c4.ydata.push(dt[i].downloadTime);
                          // c5.xdata.push(dt[i].timestring);
                          // c5.ydata.push(dt[i].cpu);
                          // c6.xdata.push(dt[i].timestring);
                          // c6.ydata.push(dt[i].mem);
                          // c7.xdata.push(dt[i].timestring);
                          // c7.ydata.push(dt[i].harddisk);
                          // c8.xdata.push(dt[i].time);
                          // c8.ydata.push(dt[i].respTime);
                      };
                      self.drawline(c1);
                      self.drawline(c2);
                      self.drawline(c3);
                      self.drawline(c4);
                      // self.drawline(c5);
                      // self.drawline(c6);
                      // self.drawline(c7);
                      // self.drawline(c8);
                  }
              });
          },
          querycpu:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/querycpu',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c5;
                      var dt=res.data;
                      c5={
                          target:'chart7',
                          name:'CPU',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          c5.xdata.push(dt[i].timestring);
                          c5.ydata.push(dt[i].cpu);
                      };
                      self.drawline(c5);
                      self.db.time.cpu=self.average({target:"cpu",arr:dt});
                  }
              });
          },
          querymem:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/querymem',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c6;
                      var dt=res.data;
                      c6={
                          target:'chart8',
                          name:'MEM',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          c6.xdata.push(dt[i].timestring);
                          c6.ydata.push(dt[i].mem);
                      };
                      self.drawline(c6);
                      self.db.time.mem=self.average({target:"mem",arr:dt})
                  }
              });
          },
          querydisk:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/querydisk',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c7;
                      var dt=res.data;
                      c7={
                          target:'chart9',
                          name:'DISK-/',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          c7.xdata.push(dt[i].timestring);
                          c7.ydata.push(dt[i].harddisk);
                      };
                      self.drawline(c7);
                      self.db.time.harddisk=self.average({target:"harddisk",arr:dt})
                  }
              });
          },
          querytra:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/querytra',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c8;
                      var dt=res.data;
                      c8={
                          target:'chart10',
                          name:'TRA-eth0',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          c8.xdata.push(dt[i].timestring);
                          c8.ydata.push(dt[i].traffic);
                      };
                      self.drawline(c8);
                      self.db.time.traffic=self.average({target:"traffic",arr:dt})
                  }
              });
          },
          getchart11:function(){
              var self=this;
              var data=JSON.parse(self.$parent.queryStr);
              data.level="高"
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/assetFault/queryWarnningTotal',
                  type:"POST",
                  data:JSON.stringify(data),
                  success:function(res){
                      var obj={
                          target:'chart11',
                          name:'已处理问题',
                          data:[res.data.abnormalTotal,res.data.normalTotal]
                      };
                      self.drawchart11(obj)
                  }
              });
          },
          drawchart11:function(params){
              var chart = echarts.init(document.getElementById(params.target));
              var option = {
                  tooltip: {
                      trigger: 'item',
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                  },
                  // legend: {
                  //     orient: 'vertical',
                  //     x: 'left',
                  //     y:'bottom',
                  //     data:['正常访问','3'],
                  //     icon: 'rect',
                  //     itemWidth:20,
                  //     itemHeight:8
                  // },
                  series: [
                      {
                          name:params.name,
                          type:'pie',
                          startAngle:180,
                          radius: ['82%', '88%'],
                          avoidLabelOverlap: false,
                          label: {
                              normal: {
                                  show: true,
                                  position: 'center',
                                  formatter: "{d}%",
                                  textStyle: {
                                      fontSize: '40'
                                  }
                              },
                              emphasis: {
                                  show: false,
                                  formatter: "{d}%",
                                  textStyle: {
                                      fontSize: '40'
                                  }
                              }
                          },
                          labelLine: {
                              normal: {
                                  show: false
                              }
                          },
                          data:[
                              {
                                  value:params.data[0],
                                  name:'已处理',
                                  label: {
                                      normal: {
                                          formatter: '{d}%',
                                          textStyle: {
                                              fontSize: 36
                                          }
                                      }
                                  },
                                  itemStyle: {
                                      normal: {
                                          color: '#a83aa5'
                                      }
                                  }
                              },
                              {
                                  value:params.data[1], 
                                  name:'未处理',
                                  label: {
                                      normal: {
                                          show:false
                                      }
                                  },
                                  itemStyle: {
                                      normal: {
                                          color: '#e5e1e5'
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              };
  
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          getlog:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/eventLogStatistics/getEventLogList',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var dt=res.data;
                      for(var i=0;i<dt.length;i++){
                          if(dt[i].eventMessage.length>44){
                              dt[i].eventMessages=dt[i].eventMessage.substr(0,44)+"…"
                          }else{
                              dt[i].eventMessages=dt[i].eventMessage;
                          }
                      }
                      self.db.log=dt;
                  }
              });
          },
          average:function(obj){
              var total=0;
              var sum=0;
              var arr=obj.arr;
              var t=obj.target;
              for(var i=0;i<arr.length;i++){
                  sum+=parseFloat(arr[i][t]);
                  if(parseFloat(arr[i][t])>0){
                      total++
                  }
              };
              if(total>0){
                  return (sum/total).toFixed(1)
              }else{
                  return 0;
              };
          },
          drawline:function(params){
              var chart = echarts.init(document.getElementById(params.target));
              var option = {
                  grid: {
                      left: '-2%',
                      right: '1%',
                      bottom: '-3%',
                      top:'5%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis',
                      formatter:function(param){
                          if(params.target=="chart7"||params.target=="chart8"||params.target=="chart9"){
                              return param[0].value +"%"
                          }else{
                              return param[0].value
                          }
                      }
                  },
                  xAxis : [
                      {
                          axisLabel: {
                              show: false
                          },
                          axisTick: {inside:true},
                          axisLine: {
                              show: true,
                              onZero: true,
                              lineStyle: {
                                  color: '#eee',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          type : 'category',
                          boundaryGap : false,
                          // data : ['周一','周二','周三','周四','周五','周六','周日']
                          data:params.xdata
                      }
                  ],
                  yAxis : [
                      {
                          axisLabel: {
                              show: false
                          },
                          axisTick: {inside:true},
                          axisLine: {
                              show: true,
                              onZero: true,
                              lineStyle: {
                                  color: '#eee',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          splitLine:{
                              show: true,
                              interval:1,
                              lineStyle: {
                                  color: '#eee',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          type : 'value'
                      }
                  ],
                  series : [
                      {
                          name:params.name,
                          itemStyle: {
                              normal: {
                                  opacity:0
                              }
                          },
                          lineStyle: {
                              normal: {
                                  color: "#a51796",
                                  width:1
                              }
                          },
                          areaStyle: {
                              normal: {
                                  color: "#f9eef9"
                              }
                          },
                          type:'line',
                          // data:[120, 132, 101, 134, 90, 230, 210]
                          data:params.ydata
                      }
                  ]
              };
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          }
      }
  });
  

});
