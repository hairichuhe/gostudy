define('routers', function(require, exports, module) {

  var Vue = require('vue');
  var VueRouter = require('vue-router');
  Vue.use(VueRouter);
  var router = new VueRouter();
  router.map({
      '/': {
          component: {
            ready:function(){
              this.$router.replace('/counts');
            }
          }
      },
      '/login': {
          component: (function(resolve) {
              return require(['login'], resolve);
          })
      },
      '/actionlog': {
          component: (function(resolve) {
              return require(['actionlog'], resolve);
          })
      },
      '/privilege': {
          component: (function(resolve) {
              return require(['privilege'], resolve);
          })
      },
      '/privilege-input/:id': {
          component: (function(resolve) {
              return require(['privilege-input'], resolve);
          })
      },
      '/role': {
          component: (function(resolve) {
              return require(['role'], resolve);
          })
      },
      '/role-input/:id': {
          component: (function(resolve) {
              return require(['role-input'], resolve);
          })
      },
      '/user': {
          component: (function(resolve) {
              return require(['user'], resolve);
          })
      },
      '/user-input/:id': {
          component: (function(resolve) {
              return require(['user-input'], resolve);
          })
      },
      '/user-info/:id': {
          component: (function(resolve) {
              return require(['user-info'], resolve);
          })
      },
      '/counts': {
          component: (function(resolve) {
              return require(['counts'], resolve);
          }),
          subRoutes:{
              '/':{
                  component:(function(resolve) {
                      return require(['countsgroup'], resolve);
                  })
              },
              '/group':{
                  component:(function(resolve) {
                      return require(['countsgroup'], resolve);
                  })
              },
              '/site':{
                  component:(function(resolve) {
                      return require(['countssite'], resolve);
                  })
              }
          }
      },
      '/alarm': {
          component: (function(resolve) {
              return require(['alarm'], resolve);
          })
      },
      '/export': {
          component: (function(resolve) {
              return require(['export'], resolve);
          })
      },
      '/assets': {
          component: (function(resolve) {
              return require(['assets'], resolve);
          })
      },
      '/assets1': {
          component: (function(resolve) {
              return require(['assets1'], resolve);
          })
      },
      '/log': {
          component: (function(resolve) {
              return require(['log'], resolve);
          })
      },
      '/hole': {
          component: (function(resolve) {
              return require(['hole'], resolve);
          })
      },
      '/show': {
          component: (function(resolve) {
              return require(['show'], resolve);
          })
      },
      '/group': {
          component: (function(resolve) {
              return require(['group'], resolve);
          })
      },
      '/group-input/:id': {
          component: (function(resolve) {
              return require(['group-input'], resolve);
          })
      },
      '/temp': {
          component: {
            ready:function(){
              this.$router.replace(this.$route.query.url);
            }
          }
      },
      '*':{  //找不到路径跳转404页面
          component:(function(resolve) {
              return require(['404'], resolve);
          })
      }
  });
  module.exports = {
      route: router    
  }
  
  

});
