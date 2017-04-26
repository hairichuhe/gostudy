define('countsgroup', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\r\n        <div class=\"c-tt\">\r\n            <div class=\"tt-l\">\r\n                <div class=\"l-t\">\r\n                    <div class=\"t-t\">健康指数</div>\r\n                    <div class=\"t-b\">\r\n                        <div class=\"tb-b\">\r\n                            <div class=\"tb-t\" id=\"chart12\"></div>\r\n                            <div class=\"tb-s\">应用系统</div>\r\n                        </div>\r\n                        <div class=\"tb-b\">\r\n                            <div class=\"tb-t\" id=\"chart13\"></div>\r\n                            <div class=\"tb-s\">网络设备</div>\r\n                        </div>\r\n                        <div class=\"tb-b\">\r\n                            <div class=\"tb-t\" id=\"chart14\"></div>\r\n                            <div class=\"tb-s\">安全设备</div>\r\n                        </div>\r\n                        <div class=\"tb-b\">\r\n                            <div class=\"tb-t\" id=\"chart15\"></div>\r\n                            <div class=\"tb-s\">服务器</div>\r\n                        </div>\r\n                        <div class=\"tb-b\">\r\n                            <div class=\"tb-t\" id=\"chart16\"></div>\r\n                            <div class=\"tb-s\">事件处理</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tt-r\">\r\n                <div class=\"r-h red\">\r\n                    <i class=\"fa fa-bank\"></i>\r\n                    <span>{{info.name}}</span>\r\n                </div>\r\n                <!-- <span class=\"r-b left sm\">www.huangpuqu.sh.cn</span>\r\n                <span class=\"r-b left\">资产所属：<span>{{info.name}}</span></span>\r\n                <span class=\"r-b left top\">责任人：<span>科委技术</span></span>\r\n                <span class=\"r-b left\">联系电话：<span>021-88888888</span></span> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"c-tb\">\r\n            <div class=\"tb-l\">\r\n                <div class=\"tl-l\">\r\n                    <div class=\"tb-h\">攻击统计</div>\r\n                    <div class=\"tb-m\">\r\n                        <div class=\"tb-m1\" id=\"chart17\"></div>\r\n                        <div class=\"tb-f tl\">攻击次数统计</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tl-r\">\r\n                    <div class=\"tr-o\">\r\n                        <div class=\"tb-m pad\">\r\n                            <div class=\"tb-label tl pl\" style=\"display: flex; flex-flow: column nowrap; justify-content: space-around;\">\r\n                                <span v-for=\"it in db.chart18\">{{it.name}}</span>\r\n                            </div>\r\n                            <div class=\"tb-tb\" id=\"chart18\"></div>\r\n                        </div>\r\n                        <div class=\"tb-f tl pl\">攻击来源排行</div>\r\n                    </div>\r\n                    <div class=\"tr-o\">\r\n                        <div class=\"tb-m pad\">\r\n                            <div class=\"tb-tb\" id=\"chart19\"></div>\r\n                            <div class=\"tb-label tr pr\" style=\"display: flex; flex-flow: column nowrap; justify-content: space-around;\">\r\n                                <span v-for=\"it in db.chart18\">{{it.srcname}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tb-f tr pr\">攻击目标排行</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tb-r\">\r\n                <div class=\"tb-m\" id=\"chart20\"></div>\r\n                <div class=\"tb-f tr pr\">攻击类型排行</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"c-tm\">\r\n            <div class=\"t-tm\">\r\n                <div class=\"tm-t\">\r\n                    <span>核心应用</span>\r\n                    <select class=\"ms\" v-model=\"core\">\r\n                        <option value=\"\">请选择……</option>\r\n                        <option v-for=\"it in site\" :value=\"it.id\">{{it.name}}</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"tm-b\">\r\n                    <div class=\"mb-t g mg\">\r\n                        <div class=\"mt-t\">\r\n                            <span class=\"mt-s fl\">首页响应时间</span>\r\n                            <span class=\"mt-s fr\"><span class=\"lg\">{{db.usetime.respTime}}</span>(ms)</span>\r\n                        </div>\r\n                        <div class=\"mt-b\" id=\"chart21\"></div>\r\n                    </div>\r\n                    <div class=\"mb-t p mg\">\r\n                        <div class=\"mt-t\">\r\n                            <span class=\"mt-s fl\">首页打开时间</span>\r\n                            <span class=\"mt-s fr\"><span class=\"lg\">{{db.usetime.openTime}}</span>(ms)</span>\r\n                        </div>\r\n                        <div class=\"mt-b\" id=\"chart22\"></div>\r\n                    </div>\r\n                    <div class=\"mb-t b mg\">\r\n                        <div class=\"mt-t\">\r\n                            <span class=\"mt-s fl\">域名解析时间</span>\r\n                            <span class=\"mt-s fr\"><span class=\"lg\">{{db.usetime.dnsTime}}</span>(ms)</span>\r\n                        </div>\r\n                        <div class=\"mt-b\" id=\"chart23\"></div>\r\n                    </div>\r\n                    <div class=\"mb-t g1 mg\">\r\n                        <div class=\"mt-t\">\r\n                            <span class=\"mt-s fl\">首页下载速度</span>\r\n                            <span class=\"mt-s fr\"><span class=\"lg\">{{db.usetime.downloadTime}}</span>（Mbps）</span>\r\n                        </div>\r\n                        <div class=\"mt-b\" id=\"chart24\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"c-bt\">\r\n            <div class=\"ct-l\">\r\n                <div class=\"l-h\">\r\n                    <span>事件日志</span>\r\n                    <button id=\"eventbtn\" @click=\"getlog('高')\">高危</button>\r\n                    <button @click=\"getlog()\" class=\"active\">所有</button>\r\n                </div>\r\n                <div class=\"l-b\">\r\n                    <div class=\"lb-t\">\r\n                        <div class=\"b-border\"></div>\r\n                        <div class=\"b-bt\" v-for=\"(i,it) in db.log\" v-if=\"i%2==0\">\r\n                            <div class=\"bb-t\" :title=\"it.eventMessage\">{{it.eventMessages}}</div>\r\n                            <div class=\"bb-b\"></div>\r\n                            <div class=\"bb-r\"></div>\r\n                            <span class=\"bb-s\">{{it.time}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"lb-b\">\r\n                        <div class=\"b-bt\" v-for=\"(i,it) in db.log\" v-if=\"i%2==1\">\r\n                            <span class=\"bb-s\">{{it.time}}</span>\r\n                            <div class=\"bb-r\"></div>\r\n                            <div class=\"bb-b\"></div>\r\n                            <div class=\"bb-t\" :title=\"it.eventMessage\">{{it.eventMessages}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>",
      data:function(){
          return {
              core:"",
              info:{},
              site:[],
              db:{
                  log:[],
                  usetime:{},
                  chart18:[]
              }
          }
      },
      ready: function(){
          if(this.$parent.queryStr!=""){
              this.groupsearch();
          }
      },
      watch:{
          'core':function(val,oldval){
              if(val!=""){
                  this.getusetime();
                  this.getuse();
                  // this.getlog();
              }else{
                  this.db.usetime=[];
                  this.db.log=[];
                  c1={
                      target:'chart21',
                      name:'首页响应时间',
                      xdata:[],
                      ydata:[]
                  };
                  c2={
                      target:'chart22',
                      name:'首页打开时间',
                      xdata:[],
                      ydata:[]
                  };
                  c3={
                      target:'chart23',
                      name:' 域名解析时间',
                      xdata:[],
                      ydata:[]
                  };
                  c4={
                      target:'chart24',
                      name:'首页下载速度',
                      xdata:[],
                      ydata:[]
                  };
                  this.drawuse(c1);
                  this.drawuse(c2);
                  this.drawuse(c3);
                  this.drawuse(c4);
              }
          }
      },
      methods:{
          groupsearch:function(){
              this.gettrouble();
              this.getinfo();
              this.getchart17();
              this.getchart18();
              // this.getchart19();
              this.getchart20();
              this.getsite();
              this.getlog();
          },
          gettrouble:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/assetFault/queryAssetFault',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var c1,c2,c3,c4,c5;
                      c1={
                          target:'chart12',
                          name:'应用系统',
                          data:[res.data.normalAppTotal,res.data.abnormalAppTotal]
                      };
                      c2={
                          target:'chart13',
                          name:'网络设备',
                          data:[res.data.normalNetTotal,res.data.abnormalNetTotal]
                      };
                      c3={
                          target:'chart14',
                          name:'安全设备',
                          data:[res.data.normalSafeTotal,res.data.abnormalSafeTotal]
                      };
                      c4={
                          target:'chart15',
                          name:'服务器',
                          data:[res.data.normalServiceTotal,res.data.abnormalServiceTotal]
                      };
                      c5={
                          target:'chart16',
                          name:'事件处理',
                          data:[res.data.normalEventTotal,res.data.abnormalEventTotal]
                      };
                      self.drawtrouble(c1);
                      self.drawtrouble(c2);
                      self.drawtrouble(c3);
                      self.drawtrouble(c4);
                      self.drawtrouble(c5);
                  }
              });
          },
          drawtrouble:function(params){
              var chart = echarts.init(document.getElementById(params.target));
              option = {
                  tooltip: {
                      trigger: 'item',
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                  },
                  legend: {
                      orient: 'vertical',
                      x: 'left',
                      y:'bottom',
                      data:['正常','故障'],
                      icon: 'rect',
                      itemWidth:20,
                      itemHeight:8
                  },
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
                                  show: true,
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
                                  name:'正常',
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
                                  name:'故障',
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
          getinfo:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/group/'+self.getGroupId(JSON.parse(self.$parent.queryStr).groupId),
                  type:"GET",
                  success:function(res){
                      self.info=res.data;
                  }
              });
          },
          getchart17:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/attackStatistics/queryAttackTotal',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var obj={
                          xdata:[],
                          ydata:[]
                      };
                      var dt=res.data;
                      for(var i=0;i<dt.length;i++){
                          obj.xdata.push(dt[i].timestring);
                          obj.ydata.push(dt[i].total)
                      };
                      self.drawchart17(obj);
                  }
              });
          },
          drawchart17:function(params){
              var chart = echarts.init(document.getElementById('chart17'));
  
              option = {
                  grid: {
                      left: '3%',
                      right: '3%',
                      bottom: '0%',
                      top:'5%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
                  },
                  xAxis : [
                      {
                          axisLabel: {
                              show: true
                          },
                          axisTick: {inside:true},
                          axisLine: {
                              show: true,
                              onZero: true,
                              lineStyle: {
                                  color: '#ccc',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          type : 'category',
                          boundaryGap : false,
                          // data : ['周一','周二','周三','周四','周五','周六','周日']
                          data : params.xdata
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
                          name:'攻击统计',
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
          },
          getchart18:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/attackStatistics/queryAttackRankSrc',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var obj={
                          xdata:[],
                          ydata:[]
                      };
                      var dt=res.data;
                      self.db.chart18=dt;
                      for(var i=0;i<dt.length;i++){
                          obj.xdata.push(dt[dt.length-i-1].name);
                          obj.ydata.push(-dt[dt.length-i-1].total)
                      };
                      self.drawchart18(obj);
  
                      var obj1={
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          obj1.xdata.push(dt[dt.length-i-1].srcname);
                          obj1.ydata.push(dt[dt.length-i-1].total)
                      };
                      self.drawchart19(obj1);
                  }
              });
          },
          drawchart18:function(params){
              var chart = echarts.init(document.getElementById('chart18'));
  
              option = {
                  color: ['#c35cc0'],
                  tooltip: {
                      trigger: 'axis',
                      formatter: '{a}: {b}',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  grid: {
                      left: '7%',
                      right: '0%',
                      bottom: '0%',
                      top:'2%',
                      containLabel: true
                  },
                  xAxis: {
                      type: 'value',
                      axisTick: {show:false},
                      splitLine: {
                          show: true,
                          interval: 'auto',
                          lineStyle: {
                              color: ['#eee'],
                              width: 1,
                              type: 'solid'
                          }
                      },
                      // boundaryGap: [0, 0.01],
                      position:'bottom',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: '#ccc',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      axisLabel: {
                          show: true,
                          interval:'5',
                          inside: false,
                          rotate: 0,
                          margin: 8,
                          textStyle: {
                              fontSize: 8
                          },
                          formatter: function (value) {
                              return -value+'';
                          }
                      }
                  },
                  yAxis: {
                      type: 'category',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: '#ccc',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      axisLabel: {
                          show:false,
                          inside:true,
                          margin: 0
                      },
                      axisTick: {show:false},
                      // data: ['10.11.124.5','10.9.116.5','10.13.0.5','10.11.88.5','10.11.0.5','10.13.80.5','10.11.112.5','10.9.112.5','10.13.18.5','10.11.136.5']
                      data:params.xdata
                  },
                  series: [
                      {
                          name: '攻击来源',
                          type: 'bar',
                          barCategoryGap:2,
                          label: {
                              normal: {
                                  show: false,
                                  position: 'insideLeft',
                                  formatter: function(obj){
                                      return -obj.data
                                  },
                                  textStyle: {
                                      color:'#fff',
                                      fontWeight:'bold',
                                      fontSize:10
                                  }
                              }
                          },
                          // data: [-1.8, -2.3, -2.9, -3.9, -4.8, -5.3, -5.9, -6.1, -6.2, -6.3]
                          // data: [-1,-15,-110]
                          data:params.ydata
                      }
                  ]
              };
  
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          drawchart19:function(params){
              var chart = echarts.init(document.getElementById('chart19'));
  
              option = {
                  color: ['#c35cc0'],
                  tooltip: {
                      trigger: 'axis',
                      formatter: '{a}: {b}',
                      axisPointer: {
                          type: 'shadow'
                      }
                  },
                  grid: {
                      left: '0%',
                      right: '7%',
                      bottom: '0%',
                      top:'2%',
                      containLabel: true
                  },
                  xAxis: {
                      splitLine: {
                          show: true,
                          interval: 'auto',
                          lineStyle: {
                              color: ['#eee'],
                              width: 1,
                              type: 'solid'
                          }
                      },
                      type: 'value',
                      axisTick: {show: false},
                      boundaryGap: [0, 0.01],
                      position:'bottom',
                      axisLine: {
                          show: true,
                          interval:'5',
                          lineStyle: {
                              color: '#ccc',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      axisLabel: {
                          show: true,
                          interval:'5',
                          inside: false,
                          rotate: 0,
                          margin: 8,
                          textStyle: {
                              fontSize: 8
                          },
                          formatter: function (value) {
                              return value+'';
                          }
                      }
                  },
                  yAxis: {
                      type: 'category',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: '#ccc',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      position:'right',
                      axisLabel: {
                          show:false,
                          inside:true,
                          margin: 0
                      },
                      axisTick: {show: false},
                      // data: ['黄浦区发改委','黄浦区教育局','黄浦区审计局','黄浦区人口计生委','黄浦区文化局','黄浦区环保局','黄浦区建交委','黄浦区财政局','黄浦区司法局','黄浦区民政局']
                      data:params.xdata
                  },
                  series: [
                      {
                          name: '攻击目标',
                          type: 'bar',
                          barCategoryGap:2,
                          label: {
                              normal: {
                                  show: false,
                                  position: 'insideRight',
                                  formatter: '{c}',
                                  textStyle: {
                                      color:'#fff',
                                      fontWeight:'bold',
                                      baseline:'middle',
                                      fontSize:10
                                  }
                              }
                          },
                          // data: [1.8, 2.3, 2.9, 3.9, 4.8, 5.3, 5.9, 6.1, 6.2, 6.3]
                          data:params.ydata
                      }
                  ]
              };
  
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          getchart20:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/attackStatistics/queryAttackRankType',
                  type:"POST",
                  data:self.$parent.queryStr,
                  success:function(res){
                      var obj=[];
                      var dt=res.data;
                      for(var i=0;i<dt.length;i++){
                          obj.push({value:dt[i].total,name:dt[i].name})
                      };
                      self.drawchart20(obj);
                  }
              });
          },
          drawchart20:function(params){
              var chart = echarts.init(document.getElementById('chart20'));
  
              option = {
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
                      // data:['SQL注入','跨站点脚本','应用程序错误信息','目录列表','敏感文件下载','临时文件下载','启用不安全的HTTP']
                      data:params
                  },
                  calculable : true,
                  series : [
                      {
                          name:'攻击排行',
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
                          // data:[
                          //     {value:10, name:'SQL注入'},
                          //     {value:5, name:'跨站点脚本'},
                          //     {value:15, name:'应用程序错误信息'},
                          //     {value:25, name:'目录列表'},
                          //     {value:20, name:'敏感文件下载'},
                          //     {value:35, name:'临时文件下载'},
                          //     {value:30, name:'启用不安全的HTTP'}
                          // ]
                          data:params
                      }
                  ]
              };
  
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          getcore:function(){
              this.site=this.$parent.db.site;
              if(this.$parent.db.site[0]&&this.core==this.$parent.db.site[0].id){
                  this.getusetime();
                  this.getuse();
              }else{
                  if(this.$parent.db.site.length>0){
                      this.core=this.$parent.db.site[0].id;
                  }else{
                      this.core=""
                  }
              }
          },
          getsite:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/asset/queryList',
                  type:"POST",
                  data:'{"groupid":"'+self.getGroupId(JSON.parse(this.$parent.queryStr).groupId)+'","type":"1"}',
                  success:function(res){
                      self.site=res.data;
                      if(res.data.length>0){
                          self.core=res.data[0].id;
                      }else{
                          self.core="";
                          self.db.usetime=[];
                          c1={
                              target:'chart21',
                              name:'首页响应时间',
                              xdata:[],
                              ydata:[]
                          };
                          c2={
                              target:'chart22',
                              name:'首页打开时间',
                              xdata:[],
                              ydata:[]
                          };
                          c3={
                              target:'chart23',
                              name:' 域名解析时间',
                              xdata:[],
                              ydata:[]
                          };
                          c4={
                              target:'chart24',
                              name:'首页下载速度',
                              xdata:[],
                              ydata:[]
                          };
                          self.drawuse(c1);
                          self.drawuse(c2);
                          self.drawuse(c3);
                          self.drawuse(c4);
                      }
                  }
              });
          },
          getusetime:function(){
              var data=JSON.parse(this.$parent.queryStr);
              data.assetId=this.core+"";
              data=JSON.stringify(data);
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/getPerformance',
                  type:"POST",
                  data:data,
                  success:function(res){
                      self.db.usetime=res.data;
                  }
              });
          },
          getuse:function(){
              var data=JSON.parse(this.$parent.queryStr);
              data.assetId=this.core+"";
              data=JSON.stringify(data);
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/performanceStatistics/getPerformanceList',
                  type:"POST",
                  data:data,
                  success:function(res){
                      var c1,c2,c3,c4;
                      var dt=res.data;
                      c1={
                          target:'chart21',
                          name:'首页响应时间',
                          xdata:[],
                          ydata:[]
                      };
                      c2={
                          target:'chart22',
                          name:'首页打开时间',
                          xdata:[],
                          ydata:[]
                      };
                      c3={
                          target:'chart23',
                          name:' 域名解析时间',
                          xdata:[],
                          ydata:[]
                      };
                      c4={
                          target:'chart24',
                          name:'首页下载速度',
                          xdata:[],
                          ydata:[]
                      };
                      for(var i=0;i<dt.length;i++){
                          c1.xdata.push(dt[i].timestring);
                          c1.ydata.push(dt[i].respTime);
                          c2.xdata.push(dt[i].timestring);
                          c2.ydata.push(dt[i].openTime);
                          c3.xdata.push(dt[i].timestring);
                          c3.ydata.push(dt[i].dnsTime);
                          c4.xdata.push(dt[i].timestring);
                          c4.ydata.push(dt[i].downloadTime);
                      };
                      self.drawuse(c1);
                      self.drawuse(c2);
                      self.drawuse(c3);
                      self.drawuse(c4);
                  }
              });
          },
          drawuse:function(params){
              var chart = echarts.init(document.getElementById(params.target));
              option = {
                  grid: {
                      left: '2%',
                      right: '2%',
                      bottom: '-5%',
                      top:'5%',
                      containLabel: true
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  xAxis:  {
                      type: 'category',
                      boundaryGap: false,
                      axisLabel: {
                          show: false
                      },
                      axisTick: {inside:true},
                      axisLine: {      
                          show: true,
                          onZero: true,
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.2)',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      // data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
                      data: params.xdata
                  },
                  yAxis: {
                      type: 'value',
                      axisLabel: {
                          formatter: '{value}',
                          show: true
                      },
                      axisTick: {inside:true},
                      splitLine:{
                          show: true,
                          interval:1,
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.2)',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      axisLine: {
                          show: true,
                          onZero: true,
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.2)',
                              width: 1,
                              type: 'solid'
                          }
                      }
                  },
                  series: [
                      {
                          name:params.name,
                          type:'line',
                          // data:[1, 11, 5, 3, 9, 13, 10,21, 6, 5, 13, 12, 3, 20],
                          data:params.ydata,
                          itemStyle: {
                              normal: {
                                  opacity:0
                              }
                          },lineStyle: {
                          normal: {
                              color: 'rgba(255, 255, 255, 0.6)',
                              width:1,
                              type: 'solid',
                              shadowColor: 'rgba(255, 255, 255, 1)',
                              shadowBlur: 3
                          }
                      }
                      }
                  ]
              };
              chart.setOption(option);
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
          getlog:function(params){
              var data=JSON.parse(this.$parent.queryStr);
              if(params){
                  data.level=params;
              }else{
                  data.level='';
              };
              if(data.level=="高"){
                  $("button#eventbtn").addClass("active")
                  $("button#eventbtn").siblings("button").removeClass("active")
              }else{
                  $("button#eventbtn").siblings("button").addClass("active")
                  $("button#eventbtn").removeClass("active")
              }
              // data.assetId=this.core+"";
              data.assetId="";
              data=JSON.stringify(data); 
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+'/eventLogStatistics/getEventLogList',
                  type:"POST",
                  data:data,
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
          getGroupId:function(num){
              var arr=this.$parent.db.group;
              for(var i=0;i<arr.length;i++){
                  if(arr[i].groupNum==num){
                      return arr[i].id;
                  }
              }
          }
      }
  });
  

});
