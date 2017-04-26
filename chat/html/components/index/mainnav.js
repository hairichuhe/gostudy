define('mainnav', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "<nav class=\"menu\">\r\n    <ul>\r\n        <!-- <li class=\"item\">\r\n            <a @click=\"goRouter('assets')\">\r\n                <span class=\"icon-l1\"></span>\r\n                <span>资产管理</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"item\">\r\n            <a @click=\"goRouter('alarm')\">\r\n                <span class=\"icon-l2\"></span>\r\n                <span>告警管理</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"item\">\r\n            <a @click=\"goRouter('counts')\">\r\n                <span class=\"icon-l3\"></span>\r\n                <span>统计分析</span>\r\n            </a>\r\n        </li>\r\n        <li class=\"item\">\r\n            <span class=\"icon-l4\"></span>\r\n            <span>报告导出</span>\r\n        </li>\r\n        <li class=\"item\">\r\n            <span class=\"icon-l5\"></span>\r\n            <span>用户管理</span>\r\n        </li>\r\n        <li class=\"item\">\r\n            <span class=\"icon-l6\"></span>\r\n            <span>系统配置</span>\r\n        </li> -->\r\n        <li class=\"item\" v-for=\"menu in menus\" @click=\"goRouter(menu.url)\">\r\n            <span :class=\"menu.ico\"></span>\r\n            <span>{{menu.name}}</span>\r\n            <i v-if=\"menu.children.length>0\" class=\"fa fa-chevron-down icon-r fl\"></i>\r\n            <ul class=\"i-ul\" v-if=\"menu.children.length>0\">\r\n                <li v-for=\"item in menu.children\" @click=\"goRouter(item.url)\">{{item.name}}</li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n</nav>",
      el:function(){
          return "#mainnav-container"
      },
      created:function(){
          this.getPrivilege()
      },
      ready:function (){
          //this.getGroup();
      },
      data: function(){
          return {
              menus:[],
              group:"",
              groups:[],
              child:"",
              childs:[],
              groupId:"",
              nowpage:1,
              totalpage:1,     //Math.ceil(totalpage=res.data.length/60)
              allList:{
                  pageNo:1,
              },
              tempnode:{},
              current:''
          };
      },
      watch: {
          'group':function (val, oldVal) {
              this.groupId=val;
              this.getChilds(val);
          },
          'child':function (val, oldVal) {
              this.groupId=val;
              this.getList(val);
          }
      },
      computed:{
          tempnode:function(){
              var obj={};
              var list=this.allList;
              var list1=[],list2=[],list3=[],list4=[];
              var start=(this.nowpage-1)*60;
              for(start;start<start+60;start++){
                  if(start<start+15){
                      list1.push({index:start,name:list[start]})
                  }else if(start>=start+15&&start<start+30){
                      list2.push({index:start,name:list[start]})
                  }else if(start>=start+30&&start<start+45){
                      list3.push({index:start,name:list[start]})
                  }else{
                      list4.push({index:start,name:list[start]})
                  }
              };
              obj.list1=list1;
              obj.list2=list2;
              obj.list3=list3;
              obj.list4=list4;
              return obj;
          }
      },
      methods:{
          getPrivilege:function(){
              var menus = [];
              var arr=[];
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/user/get_privileges",
                  async:false,
                  type:"GET",
                  success:function (rsp){
                      var dts = rsp.data;
                      for(var i=0;i<dts.length;i++){
                          dts[i].children=[];
                          if(dts[i].parentId){
                              arr.push(dts[i])
                          }else{
                              menus.push(dts[i]);
                          }
                      };
                      for(var i=0;i<menus.length;i++){
                          self.setChild(menus[i],arr)
                      };
                      self.menus=menus;
                  }
              });
          },
          goRouter:function(url){
              // routers.route.go(url);
              if(url && url!=''){
                  routers.route.go({
                      path: "/temp",
                      query: {
                          url: url
                      }
                  });
              }
          },
          search:function(e){
              var val=$(e.currentTarget).siblings("input:eq(0)").val();
              var obj={name:val};
              this.querygroup(JSON.stringify(obj));
          },
          setChild:function(root,list){
              var self=this;
              var children=[];
              for(var i=0;i<list.length;i++){
                  if(list[i].parentId==root.id){
                      children.push(list[i])
                  }
              };
              if(children.length>0){
                  for(var i=0;i<children.length;i++){
                      self.setChild(children[i],list)
                  };
                  root.children=children;
              }
          },
          getGroup:function(){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/group/queryParent",
                  type:"post",
                  data:'{"params":"params"}',
                  success:function(res){
                      var dt=res.data;
                      var list=[];
                      var group='';
  
                      group=dt[0].id;
                      self.$data.current = dt[0].current;
                      self.getChilds(dt[0].id);
                      self.groupId=dt[0].id;
                      self.group=group;
  
                      function pushdata(dt){
                          for(var i=0;i<dt.length;i++){
                              list.push({value:dt[i].id,label:dt[i].name})
                              // if(dt[i].children.length>0){
                              //     pushdata(dt[i].children.length)
                              // }
                          }
                      };
                      pushdata(dt);
                      self.groups=list;
                  }
              })
          },
          getChilds:function(id){
              var self=this;
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/group/queryChild",
                  type:"post",
                  data:'{"pid":"'+id+'"}',
                  success:function(res){
                      var dt=res.data;
                      if(dt.length>0){
                          var list=[];
                          for(var i=0;i<dt.length;i++){
                              list.push({value:dt[i].id,label:dt[i].name})
                          };
                          self.childs=list;
                      };
                      self.getList(self.groupId);
                  }
              })
          },
          gohome:function(){
              var self = this;
              var current = self.$data.current;
              var url = '/home?id=';
              if(current==1){
                  url +=self.$data.groupId;
              }
              this.goRouter(url);
              this.hideHome();
          },
          getList:function(groupId){
              var self=this;
              var sql=$("#searchsql").val();
              var data='{"page_pageNo":"'+self.allList.pageNo+'","page_pageSize":"60","page_order":"desc","page_orderBy":"id","groupId":"'+groupId+'","groupIdPattern":"in","name":"'+sql+'","namePattern":"like"}';
              vueUI.ajaxCall({
                  url:vueUI.conf.host+"/site/query",
                  type:"post",
                  data:data,
                  // data:'{"groupId":"'+groupId+'","groupIdPattern":"in","pageNo","1"}',
                  success:function(res){
                      self.allList=res.data;
                  }
              })
          },
          got:function(params,e){
              this.goRouter('/page?id='+params.id);
              $(e.currentTarget).closest("div.conc-c").find("li.active").removeClass("active");
              $(e.currentTarget).addClass("active");
              this.hideHome();
          },
          filter:function(){
              this.getList(this.groupId);
          },
  
          home:function(){
              // routers.route.go({ path: '/home'});
              $("#panel").addClass("show");
          },
          hideHome:function(){
              $("#panel").removeClass("show");
          },
          pre:function(){
              var self=this;
              if(this.allList.hasPre){
                  this.allList.pageNo=this.allList.prePage;
                  self.getList(self.groupId);
              }else{
                  vueUI.alert("提示","已经是第一页了！")
              }
          },
          next:function(){
              var self=this;
              if(this.allList.hasNext){
                  this.allList.pageNo=this.allList.nextPage;
                  self.getList(self.groupId);
              }else{
                  vueUI.alert("提示","已经是最后一页了")
              }
          }
      }
  });
  

});
