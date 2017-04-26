define('show', function(require, exports, module) {

  var Vue = require('vue');
  window.vueUI=require('vueUI');
  document.getElementById("bd").style.visibility="visible";
  new Vue({
      el:'body',
      data: {
              head:'',
              int:0,
              top:[],
              ltop:[],
              max:'',
              mmd:[],
              boot:[],
              rt:[],
              mid:[],
              lmBody:[],
              rtable:[],
              timed:5,
              timed1:30,
              dateTime:{
                  year:'2017',
                  mon:'01',
                  date:'08',
                  hour:'06',
                  min:'01',
                  sec:'01'
              }
      },
      ready: function(){
          var self=this;
          self.fillDateTime();
          self.getTop();
          self.getLefttop();
          self.getMiddle();
          self.getBottom();
          self.getRight();
          self.getLeftm();
          self.getRightTable();
          self.getdataarea();
          self.getdatapie();
          self.getdatabar();
          self.reload();
          self.getdatamap();
      },
      methods:{
  
          Time:function(){
              var self=this;
              setTimeout(function(){
                  self.mid = [];
                  /*$(".info").css("visibility","hidden");*/
              },5000);
          },
  
          reload:function(){
              setInterval(function(){
                  window.location.reload();
              },600000);
          },
  
          Time1:function(){
              var self=this;
              window.time1=setTimeout(function(){
                  self.mmd = [];
                  /*$('.bgb').removeClass('bgb-show');*/
                  /*$(".info").css("visibility","hidden");*/
              },30000);
          },
  
          fillDateTime:function(){
              var self=this;
              setInterval(function(){
                  var date=new Date();
                  self.dateTime.year = date.getFullYear();
                  self.dateTime.mon = self.formatDate(date.getMonth()+1);
                  self.dateTime.date = self.formatDate(date.getDate());
                  self.dateTime.hour = self.formatDate(date.getHours());
                  self.dateTime.min = self.formatDate(date.getMinutes());
                  self.dateTime.sec = self.formatDate(date.getSeconds());
              },1000);
          },
  
          formatDate:function(num){
              var t=num+"";
              if(t.length>1){
                  return t
              }else{
                  return "0"+t;
              }
          },
  
          getTop:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/querytop5Counts",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.top=res.data;
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/querytop5Counts",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.top=res.data;
                      }
                  });
              },600000);
          },
  
          getMiddle:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryMalert",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.mmd=res.data;
                      if(res.data!=''){
                          $('.bgb').addClass('bgb-show');
                          if(res.data.type==1){
                              $('.warning').addClass('s-i1')
                          }else{
                              $(".emergency").addClass("s-i")
                          }
                      }
                      if(res.data.type){
                          self.Time1();
                          self.TimeD1();
                      }else{
                          clearInterval(window.time1)
                      }
                  }
              });
              setInterval(function(){
                  self.mmd = [];
                  var old=new Date().getTime();
                  self.timed1=30;
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryMalert",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.mmd=res.data;
                          if(res.data!=''){
                              $('.bgb').addClass('bgb-show');
                              if(res.data.type==1){
                                  $('.warning').removeClass('s-i1');
                                  $(".emergency").removeClass("s-i");
                                  $('.warning').removeClass('s-o1');
                                  $(".emergency").removeClass("s-o");
                                  $('.warning').addClass('s-o1');
                                  $('.warning').removeClass('s-o1');
                                  $('.warning').addClass('s-i1')
                              }else{
                                  $('.warning').removeClass('s-i1');
                                  $(".emergency").removeClass("s-i");
                                  $('.warning').removeClass('s-o1');
                                  $(".emergency").removeClass("s-o");
                                  $(".emergency").addClass("s-o");
                                  $('.emergency').removeClass('s-o');
                                  $(".emergency").addClass("s-i")
                              }
                          }
                          var abadd=new Date().getTime()-old;
                          if(abadd<200){
                              setTimeout(function(){
                                  self.$data.mmd=res.data;
                                  self.TimeD1();
                              },200)
                          }else{
                              self.$data.mmd=res.data;
                              self.TimeD1();
                          }
                          if(res.data.type){
                              self.Time1();
                              self.TimeD1();
                          }else{
                              clearInterval(window.time1)
                          }
                      }
                  });
              },6000);
          },
  
          getLefttop:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryTopAttackSite",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.ltop=res.data.nvs;
                      self.$data.max=res.data.max;
                  }
              });
              setInterval(function(){
                   vueUI.ajaxCall({
                   url:vueUI.conf.host+"/bigscreen/queryTopAttackSite",
                   async:false,
                   type:"POST",
                   data:JSON.stringify(_data),
                   success:function (res){
                   self.$data.ltop=res.data.nvs;
                   self.$data.max=res.data.max;
                   }
                   });
               },120000);
          },
  
          getBottom:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/querySiteHitCounts",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.boot=res.data;
                      var dt=res.data;
                      Vue.nextTick(function(){
                          for(var i=0;i<dt.length;i++){
                              var newdt=dt[i];
                              newdt.target="tu"+i;
                              if(!newdt.attackCounts.keys){
                                  newdt.attackCounts.keys=[""];
                                  newdt.attackCounts.values=[0]
                              }
                              self.drawnew(newdt);
                          }
                      })
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/querySiteHitCounts",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.boot=res.data;
                          var dt=res.data;
                          Vue.nextTick(function(){
                              for(var i=0;i<dt.length;i++){
                                  var newdt=dt[i];
                                  newdt.target="tu"+i;
                                  if(!newdt.attackCounts.keys){
                                      newdt.attackCounts.keys=[""];
                                      newdt.attackCounts.values=[0]
                                  }
                                  self.drawnew(newdt);
                              }
                          })
                      }
                  });
               },18000);
          },
  
          getRight:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryCoreRute",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.rt=res.data;
                      var dt=res.data;
                      Vue.nextTick(function(){
                          for(var i=0;i<dt.length;i++){
                              var newdt=$.extend(true,{},dt[i]);
                              var newdt1=$.extend(true,{},dt[i]);
                              newdt.target="tur"+i;
                              newdt1.target="tur1"+i;
                              if(!newdt.attackCounts1.keys){
                                  newdt.attackCounts1.keys=[""]
                                  newdt.attackCounts1.values=[0]
                              }
                              if(!newdt1.attackCounts2.keys){
                                  newdt1.attackCounts2.keys=[""]
                                  newdt1.attackCounts2.values=[0]
                              }
                              self.drawarea2(newdt);
                              self.drawarea3(newdt1);
                          }
                      })
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryCoreRute",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.rt=res.data;
                          var dt=res.data;
                          Vue.nextTick(function(){
                              for(var i=0;i<dt.length;i++){
                                  var newdt=$.extend(true,{},dt[i]);
                                  var newdt1=$.extend(true,{},dt[i]);
                                  newdt.target="tur"+i;
                                  newdt1.target="tur1"+i;
                                  if(!newdt.attackCounts1.keys){
                                      newdt.attackCounts1.keys=[""]
                                      newdt.attackCounts1.values=[0]
                                  }
                                  if(!newdt1.attackCounts2.keys){
                                      newdt1.attackCounts2.keys=[""]
                                      newdt1.attackCounts2.values=[0]
                                  }
                                  self.drawarea2(newdt);
                                  self.drawarea3(newdt1);
                              }
                          })
                      }
                  });
               },15000);
          },
  
          getLeftm:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryAttackFromCounts",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.lmBody=res.data.nvs;
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryAttackFromCounts",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.lmBody=res.data.nvs;
                      }
                  });
              },180000);
          },
  
          getRightTable:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryNewEvents",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.$data.rtable=res.data;
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryNewEvents",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.$data.rtable=res.data;
                      }
                  });
              },3000);
          },
  
          drawa:function(params){
              var option = {
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data:['最高次数','最低次数']
                  },
                  grid: {
                      left: '0',
                      right: '13%',
                      bottom: '2%',
                      top:'5%',
                      containLabel: true
                  },
                  xAxis:  {
                      type: 'category',
                      axisLine: {
                          show: true,
                          onZero: true,
                          lineStyle: {
                              color: '#4e5066',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      splitLine:{
                          show: true,
                          interval:0,
                          lineStyle: {
                              color: '#2d2f42',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      boundaryGap: false,
                      data: params.xdata
                  },
                  yAxis: {
                      type: 'value',
                      nameTextStyle:{
                          color:'#e3eaf8'
                      },
                      axisLine: {
                          show: true,
                          onZero: true,
                          lineStyle: {
                              color: '#4e5066',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      splitLine:{
                          show: false
                      },
                      axisLabel: {
                          formatter: '{value}'
                      }
                  },
                  series: params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          getdataarea:function(){
              var self=this;
              var _data={'page_pageNo':1,'page_pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryAttackCounts",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.drawarea(res.data);
                      self.$data.head=res.data.attackTotal;
                      /*self.int=self.head;*/
                      /*if(res.data.attackTotal>10000){
                          var a=res.data.attackTotal/10000;
                          self.$data.head=parseInt(a);;
                          self.int=1;
                      }else{
                          self.int=0;
                          self.$data.head=res.data.attackTotal;
                      }*/
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryAttackCounts",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.drawarea(res.data);
                          if(parseInt(res.data.attackTotal)!=parseInt(self.head)){
                              var num=parseInt(self.head);
                              var nnum=parseInt(res.data.attackTotal);
                              var speed=(nnum-num)/40;
                              window.timeauto=setInterval(function(){
                                  if(num<nnum){
                                      num+=speed;
                                      self.head=parseInt(num);
                                  }else{
                                      clearInterval(window.timeauto)
                                  }
                              },40);
                              setTimeout(function(){
                                  self.head=nnum;
                              },1645)
                          };
                          // self.$data.head=res.data.attackTotal;
                          // self.int=self.head;
                          /*if(res.data.attackTotal>10000){
                              var a=res.data.attackTotal/10000;
  
                              self.$data.head=parseInt(a);
                              self.int=1;
                          }else{
                              self.int=0;
                              self.$data.head=res.data.attackTotal;
                          }*/
                      }
                  });
              },2000);
          },
  
          drawarea:function(params){
              var data=[];
              for(var i=0;i<params.values.length;i++){
                  data.push(params.values[i])
              }
              var data1=[];
              for(var j=0;j<params.keys.length;j++){
                  data1.push(params.keys[j])
              }
              this.drawa({
                  target:"chart1",
                  xdata:data1,
                  data:[
                      {
                          name:'攻击次数',
                          type:'line',
                          nameTextStyle:{
                              color:'#e3eaf8'
                          },
                          data:data,
                          itemStyle: {
                              normal: {
                                  color: "#5744f5",
                                  borderColor: '#5645f3',
                                  borderWidth: 0,
                                  borderType: 'solid',
                                  opacity:0
                              }
                          },
                          markPoint: {
                              data: [
                                  {type: 'max', name: '最大值'},
                                  {type: 'min', name: '最小值'}
                              ],
                              symbolSize:'0',
                              itemStyle: {
                                  normal: {
                                      color: "#ccc",
                                      borderColor: '#5645f3',
                                      borderWidth: 0,
                                      borderType: 'solid'
                                  }
                              }
                          },
                          lineStyle: {
                              normal: {
                                  color: '#5645f3',
                                  width: 2,
                                  type: 'solid'
                              }
                          },
                          markLine: {
                              data: [
                                  {type: 'average', name: '平均值'}
                              ],
                              lineStyle: {
                                  normal:{
                                      color:'#8489b5'
                                  }
                              }
                          }
                      }
                  ]
              });
          },
  
          drawa2:function(params){
              var option = {
                  grid: {
                      left: '-8%',
                      right: '1%',
                      bottom: '-20%',
                      top:'5%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
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
                                  color: '#2d2f42',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          type : 'category',
                          boundaryGap : false,
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
                                  color: '#2d2f42',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          splitLine:{
                              show: true,
                              interval:1,
                              lineStyle: {
                                  color: '#2d2f42',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          type : 'value'
                      }
                  ],
                  series :params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          drawarea2:function(params){
              this.drawa2({
                   target:params.target,
                   xdata:params.attackCounts1.keys,
                  data:[
                      {
                          name:'运行速度',
                          itemStyle: {
                              normal: {
                                  opacity:0
                              }
                          },
                          lineStyle: {
                              normal: {
                                  color: "#2d2f42",
                                  width:0
                              }
                          },
                          areaStyle: {
                              normal: {
                                  color: "#595972"
                              }
                          },
                          type:'line',
                          stack: '总量',
                          data:params.attackCounts1.values
                      }
                  ]
              });
          },
  
          drawarea3:function(params){
              this.drawa2({
                  target:params.target,
                  xdata:params.attackCounts2.keys,
                  data:[
                      {
                          name:'运行速度',
                          itemStyle: {
                              normal: {
                                  opacity:0
                              }
                          },
                          lineStyle: {
                              normal: {
                                  color: "#2d2f42",
                                  width:0
                              }
                          },
                          areaStyle: {
                              normal: {
                                  color: "#595972"
                              }
                          },
                          type:'line',
                          stack: '总量',
                          data:params.attackCounts2.values
                      }
                  ]
              });
          },
  
          drawa3:function(params){
              option = {
                  grid: {
                      left: '-10%',
                      right: '2%',
                      bottom: '-18%',
                      top:'10%',
                      containLabel: true
                  },
                  tooltip: {
                      trigger: 'axis',
                      formatter: '{c}Kbps'
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
                              color: '#2d2f42',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      data : params.xdata
                  },
                  yAxis: {
                      type: 'value',
                      axisLabel: {
                          formatter: '{value}',
                          show: false
                      },
                      axisTick: {inside:true},
                      splitLine:{
                          show: true,
                          interval:1,
                          lineStyle: {
                              color: '#2d2f42',
                              width: 1,
                              type: 'solid'
                          }
                      },
                      axisLine: {
                          show: true,
                          onZero: true,
                          lineStyle: {
                              color: '#2d2f42',
                              width: 1,
                              type: 'solid'
                          }
                      }
                  },
                  series :params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          drawnew:function(params){
              this.drawa3({
                  target:params.target,
                  xdata:params.attackCounts.keys,
                  data:[
                      {
                          name:'平均流量',
                          type:'line',
                          data:params.attackCounts.values,
                          itemStyle: {
                              normal: {
                                  opacity:0
                              }
                          },
                          label:{
                              normal:{
                                  formatter:"{c} Kbps"
                              }
                          },
                          lineStyle: {
                          normal: {
                              color: "#bbd2f9",
                              width:1,
                              type: 'solid',
                              shadowColor: 'rgba(255, 255, 255, 1)',
                              shadowBlur: 6
                          }
                      }
                      }
                  ]
              });
          },
  
          drawp:function(params){
              var option = {
                  tooltip : {
                      trigger: 'item',
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                  },
                  legend: {
                      x : 'right',
                      y : 'center',
                      orient:'vertical',
                      textStyle:{
                          color:'#8489b5',
                          fontSize: 10
                      },
                      width:100,
                      right:'-5px',
                      align: 'left',
                      itemGap: 5,
                      formatter:function(name){
                          if(name.length>12){
                              return name.substr(0,12)+"…"
                          }else{
                              return name
                          }
                      },
                      padding: 0,
                      itemWidth:15,
                      itemHeight:10,
                      data:params.xdata
                  },
                  calculable : true,
                  color:['#CCCCFF','#FFFF99', '#FFCCCC', '#CC9999', '#CCCC99','#FF6666',  '#CCCC00', '#FFCC99','#CC9999', '#FFFF00', '#c4ccd3'],
                  series :params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          getdatapie:function(){
              var self=this;
              var _data={'first':0,'pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/attackTypePie",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.drawpie(res.data);
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/attackTypePie",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.drawpie(res.data);
                      }
                  });
              },120000);
          },
  
          drawpie:function(params){
              var data=[];
              for(var i=0;i<params.nvs.length;i++){
                  data.push(params.nvs[i])
              }
              var data1=[];
              for(var j=0;j<params.keys.length;j++){
                  data1.push(params.keys[j])
              }
              this.drawp({
                  target:"chart3",
                  xdata:data1,
                  data:[
                      {
                          name:'半径模式',
                          type:'pie',
                          radius : [10, 80],
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
                          data:data
                      }
                  ]
              });
          },
  
          drawb:function(params){
              var option = {
                  color: ['#8067e9'],
                  tooltip : {
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  grid: {
                      left: '-5%',
                      right: '4%',
                      bottom: '6%',
                      top:'10%',
                      containLabel: true
                  },
                  xAxis : [
                      {
                          type : 'category',
                          axisLine: {
                              show: true,
                              onZero: true,
                              lineStyle: {
                                  color: '#4e5066',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          axisLabel: {
                              interval:0,
                              textStyle: {
                                  fontSize:10
                              }
                          },
                          axisTick: {inside:true},
                          data : params.xdata
                      }
  
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          splitLine:{
                              show: true,
                              interval:0,
                              lineStyle: {
                                  color: '#2d2f42',
                                  width: 1,
                                  type: 'solid'
                              }
                          },
                          axisTick: {inside:true},
                          axisLabel: {
                              formatter: '{value}',
                              show: false
                          },
                          axisLine: {
                              show: true,
                              onZero: true,
                              lineStyle: {
                                  color: '#2d2f42',
                                  width: 1,
                                  type: 'solid'
                              }
                          }
                      }
                  ],
                  series :params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          getdatabar:function(){
              var self=this;
              var _data={'first':0,'pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryAttackFromCounts",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.drawbar(res.data);
                  }
              });
              setInterval(function(){
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryAttackFromCounts",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          self.drawbar(res.data);
                      }
                  });
              },180000);
          },
  
          drawbar:function(params){
              var data=[];
              for(var i=0;i<params.keys.length;i++){
                  data.push(params.keys[i])
              }
              var data1=[];
              for(var j=0;j<params.values.length;j++){
                  data1.push(params.values[j])
              }
              this.drawb({
                  target:"chart4",
                  xdata:data,
                  data: [
                      {
                          name:'攻击次数',
                          type:'bar',
                          label: {
                              normal: {
                                  show: true,
                                  position: 'top',
                                  formatter: '{c}',
                                  textStyle: {
                                      color:'#d06ad4',
                                      fontWeight:'bold',
                                      fontSize:8
                                  }
                              }
                          },
                          barWidth: '60%',
                          data:data1
                      }
                  ]
              });
          },
  
          drawm:function(params){
              var option = {
                  tooltip : {
                      trigger: 'item'
                  },
                  geo: {
                      map: 'china',
                      label: {
                          emphasis: {
                              show: false
                          }
                      },
                      roam: true,
                      itemStyle: {
                          normal: {
                              areaColor: 'transparent',
                              borderColor: '#777ca8'
                          },
                          emphasis: {
                              areaColor: '#2a333d'
                          }
                      }
                  },
                  series: params.data
              };
              var chart=echarts.init(document.getElementById(params.target));
              chart.setOption(option);
  
              $(window).bind('resize', function(evt) {
                  chart.resize();
              });
          },
  
          getdatamap:function(){
              var self=this;
              var _data={'first':0,'pageSize':10};
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/bigscreen/queryHitFromTo",
                  async:false,
                  type:"POST",
                  data:JSON.stringify(_data),
                  success:function (res){
                      self.mid=res.data.at;
                      self.drawmap(res.data);
                      self.Time();
                      self.TimeD();
                  }
              });
              setInterval(function(){
                  var old=new Date().getTime();
                  self.mid = [];
                  vueUI.ajaxCall({
                      url:vueUI.conf.host+"/bigscreen/queryHitFromTo",
                      async:false,
                      type:"POST",
                      data:JSON.stringify(_data),
                      success:function (res){
                          var abadd=new Date().getTime()-old;
                          if(abadd<200){
                              setTimeout(function(){
                                  self.mid=res.data.at;
                                  self.TimeD();
                              },200)
                          }else{
                              self.mid=res.data.at;
                              self.TimeD();
                          }
                          self.drawmap(res.data);
                          self.Time();
                          self.TimeD();
                      }
                  });
              },8000);
          },
  
          drawmap:function(params){
              var YNData=[];
              for(var i=0;i<params.ft.length;i++){
                  YNData.push([{name:params.ft[i].to},{name:params.ft[i].from,value:80}]);
              }
              var toData=[];
              for(var l=0;l<params.ft.length;l++){
                  toData.push({name:params.ft[l].to,value:params.ft[l].toXY});
              }
              var geoCoordMap = {
                  '上海': [121.4648,31.2891],
                  '东莞': [113.8953,22.901],
                  '东营': [118.7073,37.5513],
                  '中山': [113.4229,22.478],
                  '临汾': [111.4783,36.1615],
                  '临沂': [118.3118,35.2936],
                  '丹东': [124.541,40.4242],
                  '丽水': [119.5642,28.1854],
                  '乌鲁木齐': [87.9236,43.5883],
                  '佛山': [112.8955,23.1097],
                  '保定': [115.0488,39.0948],
                  '兰州': [103.5901,36.3043],
                  '包头': [110.3467,41.4899],
                  '北京': [116.4551,40.2539],
                  '北海': [109.314,21.6211],
                  '南京': [118.8062,31.9208],
                  '南宁': [108.479,23.1152],
                  '南昌': [116.0046,28.6633],
                  '南通': [121.1023,32.1625],
                  '厦门': [118.1689,24.6478],
                  '台州': [121.1353,28.6688],
                  '合肥': [117.29,32.0581],
                  '呼和浩特': [111.4124,40.4901],
                  '咸阳': [108.4131,34.8706],
                  '哈尔滨': [127.9688,45.368],
                  '唐山': [118.4766,39.6826],
                  '嘉兴': [120.9155,30.6354],
                  '大同': [113.7854,39.8035],
                  '大连': [122.2229,39.4409],
                  '天津': [117.4219,39.4189],
                  '太原': [112.3352,37.9413],
                  '威海': [121.9482,37.1393],
                  '宁波': [121.5967,29.6466],
                  '宝鸡': [107.1826,34.3433],
                  '宿迁': [118.5535,33.7775],
                  '常州': [119.4543,31.5582],
                  '广州': [113.5107,23.2196],
                  '廊坊': [116.521,39.0509],
                  '延安': [109.1052,36.4252],
                  '张家口': [115.1477,40.8527],
                  '徐州': [117.5208,34.3268],
                  '德州': [116.6858,37.2107],
                  '惠州': [114.6204,23.1647],
                  '成都': [103.9526,30.7617],
                  '扬州': [119.4653,32.8162],
                  '承德': [117.5757,41.4075],
                  '拉萨': [91.1865,30.1465],
                  '无锡': [120.3442,31.5527],
                  '日照': [119.2786,35.5023],
                  '昆明': [102.9199,25.4663],
                  '杭州': [119.5313,29.8773],
                  '枣庄': [117.323,34.8926],
                  '柳州': [109.3799,24.9774],
                  '株洲': [113.5327,27.0319],
                  '武汉': [114.3896,30.6628],
                  '汕头': [117.1692,23.3405],
                  '江门': [112.6318,22.1484],
                  '沈阳': [123.1238,42.1216],
                  '沧州': [116.8286,38.2104],
                  '河源': [114.917,23.9722],
                  '泉州': [118.3228,25.1147],
                  '泰安': [117.0264,36.0516],
                  '泰州': [120.0586,32.5525],
                  '济南': [117.1582,36.8701],
                  '济宁': [116.8286,35.3375],
                  '海口': [110.3893,19.8516],
                  '淄博': [118.0371,36.6064],
                  '淮安': [118.927,33.4039],
                  '深圳': [114.5435,22.5439],
                  '清远': [112.9175,24.3292],
                  '温州': [120.498,27.8119],
                  '渭南': [109.7864,35.0299],
                  '湖州': [119.8608,30.7782],
                  '湘潭': [112.5439,27.7075],
                  '滨州': [117.8174,37.4963],
                  '潍坊': [119.0918,36.524],
                  '烟台': [120.7397,37.5128],
                  '玉溪': [101.9312,23.8898],
                  '珠海': [113.7305,22.1155],
                  '盐城': [120.2234,33.5577],
                  '盘锦': [121.9482,41.0449],
                  '石家庄': [114.4995,38.1006],
                  '福州': [119.4543,25.9222],
                  '秦皇岛': [119.2126,40.0232],
                  '绍兴': [120.564,29.7565],
                  '聊城': [115.9167,36.4032],
                  '肇庆': [112.1265,23.5822],
                  '舟山': [122.2559,30.2234],
                  '苏州': [120.6519,31.3989],
                  '莱芜': [117.6526,36.2714],
                  '菏泽': [115.6201,35.2057],
                  '营口': [122.4316,40.4297],
                  '葫芦岛': [120.1575,40.578],
                  '衡水': [115.8838,37.7161],
                  '衢州': [118.6853,28.8666],
                  '西宁': [101.4038,36.8207],
                  '西安': [109.1162,34.2004],
                  '贵阳': [106.6992,26.7682],
                  '连云港': [119.1248,34.552],
                  '邢台': [114.8071,37.2821],
                  '邯郸': [114.4775,36.535],
                  '郑州': [113.4668,34.6234],
                  '鄂尔多斯': [108.9734,39.2487],
                  '重庆': [107.7539,30.1904],
                  '金华': [120.0037,29.1028],
                  '铜川': [109.0393,35.1947],
                  '银川': [106.3586,38.1775],
                  '镇江': [119.4763,31.9702],
                  '长春': [125.8154,44.2584],
                  '长沙': [113.0823,28.2568],
                  '长治': [112.8625,36.4746],
                  '阳泉': [113.4778,38.0951],
                  '青岛': [120.4651,36.3373],
                  '韶关': [113.7964,24.7028],
                  '云南': [102.8293,24.9947],
                  '欧洲': [34.1070,51.5158]
              };
              var color = ['#B9C3E9'];
              var convertData = function (data) {
                  var res = [];
                  for (var i = 0; i < data.length; i++) {
                      var dataItem = data[i];
                      var fromCoord = geoCoordMap[dataItem[1].name];
                      var toCoord = geoCoordMap[dataItem[0].name];
                      if (fromCoord && toCoord) {
                          res.push({
                              fromName: dataItem[0].name,
                              toName: dataItem[1].name,
                              coords: [fromCoord, toCoord]
                          });
                      }
                  }
                  return res;
              };
              var series = [];
              [['上海', YNData]].forEach(function (item, i) {
                  series.push(
                      {
                          name: item[0] ,
                          type: 'lines',
                          zlevel: 1,
                          effect: {
                              show: true,
                              period: 3,
                              trailLength: 0.5,
                              color: '#fff',
                              symbolSize: 1
                          },
                          lineStyle: {
                              normal: {
                                  color: color[i],
                                  width: 0,
                                  opacity: 0.2,
                                  curveness: 0.3
                              }
                          },
                          data: convertData(item[1])
                      },
                      {
                          name: item[0],
                          type: 'effectScatter',
                          coordinateSystem: 'geo',
                          zlevel: 2,
                          rippleEffect: {
                              period: 4,
                              scale: 3,
                              brushType: 'stroke'
                          },
                          label: {
                              normal: {
                                  show: true,
                                  position: 'right',
                                  formatter: '{b}'
                              }
                          },
                          symbolSize: function (val) {
                              return val[2] / 8;
                          },
                          itemStyle: {
                              normal: {
                                  color: color[i]
                              }
                          },
                          data: item[1].map(function (dataItem) {
                              return {
                                  name: dataItem[1].name,
                                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                              };
                          })
                      },
                      {
                          name: item[0],
                          type: 'effectScatter',
                          coordinateSystem: 'geo',
                          zlevel: 4,
                          rippleEffect: {
                              period: 4,
                              scale: 3,
                              brushType: 'stroke'
                          },
                          label: {
                              normal: {
                                  show: true,
                                  position: 'right',
                                  formatter: '{b}'
                              }
                          },
                          symbolSize: "12",
                          itemStyle: {
                              normal: {
                                  color: '#D70304'
                              }
                          },
                          data:toData
                      });
              });
              this.drawm({
                  target:"chart21",
                  data: series
              });
          },
  
          TimeD:function(){
              var self=this;
              clearInterval(window.timed);
              self.timed=5;
              window.timed=setInterval(function(){
                  if(self.timed>0){
                      self.timed--;
                  }else{
                      self.timed = null;
                  }
              },1000);
          },
  
          TimeD1:function(){
              var self=this;
              clearInterval(window.timed1);
              self.timed1=30;
              window.timed1=setInterval(function(){
                  if(self.timed1>0){
                      self.timed1--;
                  }else{
                      self.timed1 = null;
                  }
              },1000);
          }
      }
  });
  
  
  
  
  

});
