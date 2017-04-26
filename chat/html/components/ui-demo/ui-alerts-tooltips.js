define('ui-alerts-tooltips', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\r\n\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<div id=\"page-content\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- Panel heading -->\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t\t\t\t\tSettings\r\n\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<p>Choose an alert layout :</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-block\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"name2\" \r\n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"form-block\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\r\n\t\t\t\t\t\t\t                    {value:'option1',display:'Basic Alert',style : 'form-icon',checked:true},\r\n\t\t\t\t\t\t\t                    {value:'option2',display:'With Title',style : 'form-icon'}\r\n\t\t\t\t\t\t\t                    ]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label id=\"demo-alert-type-1\" class=\"form-radio form-icon active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio-type-alert\" checked=\"checked\"> Basic Alert\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label id=\"demo-alert-type-2\" class=\"form-radio form-icon\"> With Title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio-type-alert\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"name2\" \r\n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"form-block\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\r\n\t\t\t\t\t\t\t                    {value:'option1',display:'With Icon',style : 'form-icon',checked:true},\r\n\t\t\t\t\t\t\t                    {value:'option2',display:'Custom Layout',style : 'form-icon'}\r\n\t\t\t\t\t\t\t                    ]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label id=\"demo-alert-type-3\" class=\"form-radio form-icon\"> With Icon\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio-type-alert\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label id=\"demo-alert-type-4\" class=\"form-radio form-icon\"> Custom Layout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio-type-alert\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p>Preview :</p>\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-preview-alert-1\" class=\"demo-preview-alert\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Alert layout example -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-success media fade in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-preview-alert-2\" class=\"demo-preview-alert\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Alert layout example -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-info media fade in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"alert-title\">You have got 30 Messages</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"alert-message\">30 newly unread messages in your <a href=\"#\" class=\"alert-link text-bold\">inbox</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-preview-alert-3\" class=\"demo-preview-alert\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Alert layout example -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-warning media fade in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-circle alert-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bolt fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"alert-title\">Server Load Limited</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"alert-message\">Database server has reached its daily capicity</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-preview-alert-4\" class=\"demo-preview-alert\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- Alert layout example -->\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger fade in\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"alert-title\">Oh snap! You got an error!</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"alert-message\">Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mar-top\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-danger\" type=\"button\">Take this action</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">Or do this</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Closed method :</p>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"name2\" \r\n\t\t\t\t\t\t\t\t\t\t\t\ttype=\"form-block\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\r\n\t\t\t\t\t\t\t                    {value:'option1',display:'Auto',style : 'form-icon',checked:true},\r\n\t\t\t\t\t\t\t                    {value:'option2',display:'Sticky alerts',style : 'form-icon'}\r\n\t\t\t\t\t\t\t                    ]\">\r\n\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<button id=\"demo-alert-page\" class=\"btn btn-info mar-btm\" type=\"button\">Page Alerts</button>\r\n\t\t\t\t\t\t\t\t\t\t<button id=\"demo-alert-panel\" class=\"btn btn-primary mar-btm\" type=\"button\">Panel Alerts</button>\r\n\t\t\t\t\t\t\t\t\t\t<button id=\"demo-alert-noty\" class=\"btn btn-warning mar-btm\" type=\"button\">\"Growl-Like\" Notification</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Alert on the panel-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div id=\"demo-panel-alert\" class=\"panel\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!--Panel heading-->\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-control\">\r\n\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"collapse\" data-target=\"#demo-panel-collapse\" class=\"btn btn-default\"><i class=\"fa fa-chevron-down\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t<button data-dismiss=\"panel\" class=\"btn btn-default\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Default panel</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div id=\"demo-panel-collapse\" class=\"collapse in\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Panel body -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Show alerts on this panel.</h4>\r\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Alert on the basic panel-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div id=\"demo-basic-panel-alert\" class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">This panel can also display the alerts.</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>\r\n\t\t\t\t\t\t\t\t\t<p>Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla.</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">Alerts</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!-- Alert types -->\r\n\t\t\t\t\t\t<div class=\"panel-body demo-nifty-alert\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Primary Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-primary fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it\\'s not super important.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Success Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-success fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Info Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-info fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it\\'s not super important.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Warning Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-warning fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Warning!</strong> Better check yourself, you\\'re not looking too good.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Danger Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Mint Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-mint fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Heads up!</strong> This alert needs your attention, but it\\'s not super important.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Purple Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-purple fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Warning!</strong> Better check yourself, you\\'re not looking too good.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Pink Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-pink fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Oh snap!</strong> Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Dark Alert -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-dark fade in\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<strong>Well done!</strong> You successfully read this important alert message.\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Tooltips-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-thin\">Tooltips</h3>\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Tooltips</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Tooltip Example-->\r\n\t\t\t\t\t\t\t\t\t<p class=\"muted\">\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet <a class=\"btn-link add-tooltip\" data-toggle=\"tooltip\" href=\"#\" data-original-title=\"Default tooltip\">consectetuer</a>\r\n\t\t\t\t\t\t\t\t\t\tadipiscing elit, <a class=\"btn-link add-tooltip\" data-toggle=\"tooltip\" href=\"#\" data-original-title=\"Another tooltip\"> sed diam nonummy</a>\r\n\t\t\t\t\t\t\t\t\t\tnibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn-link add-tooltip\" data-toggle=\"tooltip\" href=\"#\" data-original-title=\"The last tip!\">quis nostrud</a> exerci tation ullamcorper.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Four directions</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Tooltip directions-->\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-hover-info add-tooltip\" data-placement=\"left\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on left\">Tooltip on left</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-hover-info add-tooltip\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on top\">Tooltip on top</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-hover-info add-tooltip\" data-placement=\"bottom\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on bottom\">Tooltip on bottom</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-hover-info add-tooltip\" data-placement=\"right\" data-toggle=\"tooltip\" data-original-title=\"Tooltip on right\">Tooltip on right</button>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--POPOVERS-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<h3 class=\"text-thin\">Popovers</h3>\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Dismissible popover</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Dismissible popover-->\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-lg btn-warning add-popover\" data-original-title=\"Bootstrap Popover\" data-content=\"It\\'s so simple to create a tooltop for my website!\" data-placement=\"top\" data-trigger=\"focus\" data-toggle=\"popover\">Dismissible popover</button>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Four directions</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Popover directions-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-active-success add-popover\" data-toggle=\"popover\" data-placement=\"left\" data-original-title=\"Bootstrap Popover\" data-content=\"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.\">Popover on left</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-active-success add-popover\" data-toggle=\"popover\" data-placement=\"top\" data-original-title=\"Bootstrap Popover\" data-content=\"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.\">Popover on top</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-active-success add-popover\" data-toggle=\"popover\" data-placement=\"bottom\" data-original-title=\"Bootstrap Popover\" data-content=\"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.\">Popover on bottom</button>\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-active-success add-popover\" data-toggle=\"popover\" data-placement=\"right\" data-original-title=\"Bootstrap Popover\" data-content=\"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit.\">Popover on right</button>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<!--End page content-->\r\n\r\n\r\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){
  		// UI-Alerts.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// [ DEMO ] GENERATE RANDOM ALERTS
  		// =================================================================
  		var dataAlert = [{
  				type : "info"
  			},{
  				type : "primary"
  			},{
  				type : "success"
  			},{
  				type : "warning"
  			},{
  				type : "danger"
  			},{
  				type : "mint"
  			},{
  				type : "purple"
  			},{
  				type : "pink"
  			},{
  				type : "dark"
  			}
  		],
  		alertContent = $('#demo-preview-alert-1').find('.alert').html(),
  		autoClose = true;
  		$('#demo-alert-close-1').on('nifty.ch.checked', function(){
  			autoClose = true;
  		});
  		$('#demo-alert-close-2').on('nifty.ch.checked', function(){
  			autoClose = false;
  		});
  		// =================================================================
  
  
  
  		// PAGE ALERTS
  		// =================================================================
  		// Require Nifty Admin Javascript
  		// http://www.themeon.net/
  		// =================================================================
  		$('#demo-alert-page').on('click', function(){
  			dataNum = nifty.randomInt(0,8);
  			contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);
  			$.niftyNoty({
  				type: dataAlert[dataNum].type,
  				container : 'page',
  				html : contentHTML,
  				timer : autoClose ? 3000 : 0
  			});
  		});
  
  
  		// PANEL ALERTS
  		// =================================================================
  		// Require Nifty Admin Javascript
  		// http://www.themeon.net/
  		// =================================================================
  		$('#demo-alert-panel').on('click', function(){
  			var dataNum = nifty.randomInt(0,8);
  			var contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);
  
  			$.niftyNoty({
  				type: dataAlert[dataNum].type,
  				container : '#demo-panel-alert',
  				html : contentHTML,
  				focus: false,
  				timer : autoClose ? 3000 : 0
  			});
  
  			dataNum = nifty.randomInt(0,8);
  			contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);
  
  			$.niftyNoty({
  				type: dataAlert[dataNum].type,
  				container : '#demo-basic-panel-alert',
  				html : contentHTML,
  				focus: false,
  				timer : autoClose ? 3000 : 0
  			});
  		});
  
  
  		// GROW-LIKE / FLOATING ALERTS
  		// =================================================================
  		// Require Nifty Admin Javascript
  		// http://www.themeon.net/
  		// =================================================================
  		$('#demo-alert-noty').on('click', function(){
  			dataNum = nifty.randomInt(0,8);
  			contentHTML = alertContent.replace("btn-danger", "btn-"+dataAlert[dataNum].type);
  
  			$.niftyNoty({
  				type: dataAlert[dataNum].type,
  				container : 'floating',
  				html : contentHTML,
  				timer : autoClose ? 3000 : 0
  			});
  		});
  
  
  		// [ DEMO ] ALERT SELECTOR
  		// =================================================================
  		var prevAlert = $('.demo-preview-alert');
  		prevAlert.hide();
  		$('#demo-preview-alert-1').fadeIn(300);
  		$('#demo-alert-type-1').on('nifty.ch.checked', function(){
  			prevAlert.hide();
  			alertContent = $('#demo-preview-alert-1').find('.alert').html();
  			$('#demo-preview-alert-1').fadeIn(300);
  		}).niftyCheck('toggleOn');
  
  		$('#demo-alert-type-2').on('nifty.ch.checked', function(){
  			prevAlert.hide();
  			alertContent = $('#demo-preview-alert-2').find('.alert').html();
  			$('#demo-preview-alert-2').fadeIn(300);
  		});
  
  		$('#demo-alert-type-3').on('nifty.ch.checked', function(){
  			prevAlert.hide();
  			alertContent = $('#demo-preview-alert-3').find('.alert').html();
  			$('#demo-preview-alert-3').fadeIn(300);
  		});
  
  		$('#demo-alert-type-4').on('nifty.ch.checked', function(){
  			prevAlert.hide();
  			alertContent = $('#demo-preview-alert-4').find('.alert').html();
  
  			$('#demo-preview-alert-4').fadeIn(300);
  		});
          vueUI.hideLoading();
      }
  });
  
  

});
