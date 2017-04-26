define('forms-validation', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<div id=\"page-content\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- FORM VALIDATION ON TABS -->\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<div class=\"tab-base\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Nav tabs -->\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#demo-bsc-tab-1\" data-toggle=\"tab\"><i class=\"fa\"></i> Information</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#demo-bsc-tab-2\" data-toggle=\"tab\"><i class=\"fa\"></i> Address</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Tabs Content -->\n\t\t\t\t\t\t\t\t<form id=\"demo-bv-bsc-tabs\" class=\"form-horizontal\" action=\"#\" method=\"post\">\n\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane pad-btm fade in active\" id=\"demo-bsc-tab-1\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin mar-btm\">First Tab</h4>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Full name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fullName\" placeholder=\"Full name\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Company</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"company\" placeholder=\"Company\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Member Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:name=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\n\t\t\t\t\t\t\t\t\t                    {value:'free',display:'free',style : 'form-icon','name':'memberType'},\n\t\t\t\t\t\t\t\t\t                    {value:'personal',display:'personal',style : 'form-icon','name':'memberType'},\n\t\t\t\t\t\t\t\t\t                    {value:'bussines',display:'bussines',style : 'form-icon','name':'memberType'}\n\t\t\t\t\t\t\t\t\t                    ]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"free\"> Free\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"personal\"> Personal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"bussines\"> Bussiness\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane fade\" id=\"demo-bsc-tab-2\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Second Tab</h4>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"address\" placeholder=\"Address\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"city\" placeholder=\"City\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-footer clearfix\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-labeled fa fa-check fa-lg\">Validate</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<!-- END FORM VALIDATION ON TABS -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!-- FORM VALIDATION ON ACCORDION -->\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<form id=\"demo-bv-accordion\" class=\"form-horizontal\" action=\"#\" method=\"post\">\n\t\t\t\t\t\t\t\t<div id=\"demo-accordion\" class=\"panel-group accordion\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion title -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-parent=\"#demo-accordion\" data-toggle=\"collapse\" href=\"#demo-acc-panel-1\"><i class=\"fa\"></i> Account</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion content -->\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-acc-panel-1\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion title -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-parent=\"#demo-accordion\" data-toggle=\"collapse\" href=\"#demo-acc-panel-2\"><i class=\"fa\"></i> Information</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion content -->\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-acc-panel-2\" class=\"panel-collapse collapse\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Full name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Member type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t:name=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\n\t\t\t\t\t\t\t\t\t\t                    {value:'free',display:'free',style : 'form-icon','name':'memberType'},\n\t\t\t\t\t\t\t\t\t\t                    {value:'personal',display:'personal',style : 'form-icon','name':'memberType'},\n\t\t\t\t\t\t\t\t\t\t                    {value:'bussines',display:'bussines',style : 'form-icon','name':'memberType'}\n\t\t\t\t\t\t\t\t\t\t                    ]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"free\"> Free\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"personal\"> Personal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"memberType\" value=\"bussines\"> Bussiness\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Bio</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"bio\" rows=\"7\" placeholder=\"Tell us your story...\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion title -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-parent=\"#demo-accordion\" data-toggle=\"collapse\" href=\"#demo-acc-panel-3\"><i class=\"fa\"></i> Profile</a>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- Accordion content -->\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-acc-panel-3\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"Phone number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"city\" placeholder=\"City\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-labeled fa fa-user fa-lg\" name=\"signup\" value=\"Sign up\">Sign up</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<!-- END FORM VALIDATION ON ACCORDION -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Panel heading -->\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-control\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"active\"><a data-toggle=\"tab\" href=\"#demo-tabs-box-1\"><i class=\"fa\"></i> Tooltip</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#demo-tabs-box-2\"><i class=\"fa\"></i> Popover</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a data-toggle=\"tab\" href=\"#demo-tabs-box-3\"><i class=\"fa\"></i> Custom container</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Showing errors in...</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Panel body -->\n\t\t\t\t\t\t\t\t<form id=\"demo-bv-errorcnt\" class=\"form-horizontal\" action=\"#\" method=\"post\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--SHOWING ERRORS IN TOOLTIP-->\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-tabs-box-1\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Tooltip</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group pad-btm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--SHOWING ERRORS IN POPOVER-->\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-tabs-box-2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Popover</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--SHOWING ERRORS IN CUSTOM CONTAINER-->\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-tabs-box-3\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Custom container</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"phoneNumber\" placeholder=\"Phone number\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"city\" placeholder=\"City\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-error-container\" class=\"bg-gray-light\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-footer clearfix\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-labeled fa fa-user fa-lg\" name=\"signup\" value=\"Sign up\">Sign up</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!--MASKED INPUT-->\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Masked Input</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"panel-body form-horizontal\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-date\" class=\"col-md-4 control-label\">Date</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-date\" class=\"form-control\" placeholder=\"dd/mm/yyyy\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-date2\" class=\"col-md-4 control-label\">Date</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-date2\" class=\"form-control\" placeholder=\"dd-mm-yyyy\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-phone\" class=\"col-md-4 control-label\">Phone</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-phone\" class=\"form-control\" placeholder=\"(999) 999-9999\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-phone-ext\" class=\"col-md-4 control-label\">Phone + Ext</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-phone-ext\" class=\"form-control\" placeholder=\"(999) 999-9999? x99999\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-taxid\" class=\"col-md-4 control-label\">Tax ID</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-taxid\" class=\"form-control\" placeholder=\"99-9999999\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-ssn\" class=\"col-md-4 control-label\">SSN</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-ssn\" class=\"form-control\" placeholder=\"999-99-9999\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"demo-msk-pkey\" class=\"col-md-4 control-label\">Product Key</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"demo-msk-pkey\" class=\"form-control\" placeholder=\"a*-999-a999\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t<!--END OF MASKED INPUT-->\n\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Form Validation</h3>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<form id=\"demo-bvd-notempty\" action=\"http://www.themeon.net/nifty/wb/v2.1/forms-validation.html\" class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Not Empty validator</h4>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--NOT EMPTY VALIDATOR-->\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Country</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select id=\"demo-bs-select\" class=\"form-control bs-validation\" name=\"country\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">-- Select a country --</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"fr\">France</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"de\">Germany</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"it\">Italy</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"jp\">Japan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"ru\">Russia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"gb\">United Kingdom</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"us\">United State</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<v-checkbox  :checked=\"false\" :name='false' display-name=\"Accept the terms and policies\"></v-checkbox>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"acceptTerms\" value=\"java\" /> Accept the terms and policies\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Identical validator</h4>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--IDENTICAL VALIDATOR-->\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Retype password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Retype password\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Other validators</h4>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--OTHER VALIDATOR-->\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Member Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<v-radiogrop\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:name=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\n\t\t\t\t\t\t\t\t\t                    {value:'free',display:'free',style : 'form-icon','name':'member'},\n\t\t\t\t\t\t\t\t\t                    {value:'personal',display:'personal',style : 'form-icon','name':'member'},\n\t\t\t\t\t\t\t\t\t                    {value:'bussines',display:'bussines',style : 'form-icon','name':'member'}\n\t\t\t\t\t\t\t\t\t                    ]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</v-radiogrop>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"member\" value=\"free\"> Free\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"member\" value=\"personal\"> Personal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"member\" value=\"bussiness\"> Bussiness\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Skill</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox form-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<v-checkboxgrop\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:model=\"[]\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"name14\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"form-block\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t:options=\"[\n\t\t\t\t\t\t\t\t\t                    {value:'net',display:'.Net',style : 'form-icon',checked:true,name:'programs[]'},\n\t\t\t\t\t\t\t\t\t                    {value:'java',display:'Java',style : 'form-icon',name:'programs[]'},\n\t\t\t\t\t\t\t\t\t                    {value:'c',display:'C/C++',style : 'form-icon',name:'programs[]'},\n\t\t\t\t\t\t\t\t\t                    {value:'php',display:'PHP',style : 'form-icon',checked:true,name:'programs[]'},\n\t\t\t\t\t\t\t\t\t                    {value:'perl',display:'Perl',style : 'form-icon',name:'programs[]'},\n\t\t\t\t\t\t\t\t\t                    {value:'ruby',display:'Ruby',style : 'form-icon',name:'programs[]'}\n\t\t\t\t\t\t\t\t\t                    ]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</v-checkboxgrop>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"form-checkbox form-icon active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"net\"> .Net\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"java\"> Java\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"c\"> C/C++\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"php\"> PHP\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"perl\"> Perl\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name='programs[]' value=\"ruby\"> Ruby\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Integer</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"integer\" placeholder=\"Integer\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Numeric</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"numeric\" placeholder=\"Decimal is allowed\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Greater than</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"greaterthan\" placeholder=\"Numbers greater than 50\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Less than 25</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"lessthan\" placeholder=\"Numbers less than 50\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Range [1 - 100]</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"range\" placeholder=\"Numbers 1-100\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"mar-btm text-thin\">Regular expression based validators</h4>\n\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--REGULAR EXPRESSION BASED VALIDATORS-->\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Website</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"website\" placeholder=\"http://\" />\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Hex color</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"color\" placeholder=\"#fff\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-labeled fa fa-send fa-lg\" type=\"submit\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<!--End page content-->\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){
  		// Form-Validation.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// FORM VALIDATION
  		// =================================================================
  		// Require Bootstrap Validator
  		// http://bootstrapvalidator.com/
  		// =================================================================
  
  
  		// FORM VALIDATION FEEDBACK ICONS
  		// // =================================================================
  		// vueUI.bindEvent("page-content")
  		var faIcon = {
  			valid: 'fa fa-check-circle fa-lg text-success',
  			invalid: 'fa fa-times-circle fa-lg',
  			validating: 'fa fa-refresh'
  		}
  
  
  
  		// FORM VALIDATION ON TABS
  		// =================================================================
  		$('#demo-bv-bsc-tabs').bootstrapValidator({
  			excluded: [':disabled'],
  			feedbackIcons: faIcon,
  			fields: {
  			fullName: {
  				validators: {
  					notEmpty: {
  						message: 'The full name is required'
  					}
  				}
  			},
  			company: {
  				validators: {
  					notEmpty: {
  						message: 'The company name is required'
  					}
  				}
  			},
  			memberType: {
  				validators: {
  					notEmpty: {
  						message: 'Please choose the membership type that best meets your needs'
  					}
  				}
  			},
  			address: {
  				validators: {
  					notEmpty: {
  						message: 'The address is required'
  					}
  				}
  			},
  			city: {
  				validators: {
  					notEmpty: {
  						message: 'The city is required'
  					}
  				}
  			},
  			country: {
  				validators: {
  					notEmpty: {
  						message: 'The city is required'
  					}
  				}
  			}
  			}
  		}).on('status.field.bv', function(e, data) {
  			var $form     = $(e.target),
  			validator = data.bv,
  			$tabPane  = data.element.parents('.tab-pane'),
  			tabId     = $tabPane.attr('id');
  
  			if (tabId) {
  			var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');
  
  			// Add custom class to tab containing the field
  			if (data.status == validator.STATUS_INVALID) {
  				$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
  			} else if (data.status == validator.STATUS_VALID) {
  				var isValidTab = validator.isValidContainer($tabPane);
  				$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
  			}
  			}
  		});
  
  
  		// FORM VALIDATION ON ACCORDION
  		// =================================================================
  		$('#demo-bv-accordion').bootstrapValidator({
  			message: 'This value is not valid',
  			excluded: ':disabled',
  			feedbackIcons: faIcon,
  			fields: {
  			firstName: {
  				validators: {
  					notEmpty: {
  						message: 'The first name is required and cannot be empty'
  					},
  					regexp: {
  						regexp: /^[A-Z\s]+$/i,
  						message: 'The first name can only consist of alphabetical characters and spaces'
  					}
  				}
  			},
  			lastName: {
  				validators: {
  					notEmpty: {
  						message: 'The last name is required and cannot be empty'
  					},
  					regexp: {
  						regexp: /^[A-Z\s]+$/i,
  						message: 'The last name can only consist of alphabetical characters and spaces'
  					}
  				}
  			},
  			username: {
  				message: 'The username is not valid',
  				validators: {
  					notEmpty: {
  						message: 'The username is required and cannot be empty'
  					},
  					stringLength: {
  						min: 4,
  						max: 30,
  						message: 'The username must be more than 4 and less than 30 characters long'
  					},
  					regexp: {
  						regexp: /^[a-zA-Z0-9_\.]+$/,
  						message: 'The username can only consist of alphabetical, number, dot and underscore'
  					},
  					different: {
  						field: 'password',
  						message: 'The username and password cannot be the same as each other'
  					}
  				}
  			},
  			email: {
  				validators: {
  					notEmpty: {
  						message: 'The email address is required and cannot be empty'
  					},
  					emailAddress: {
  						message: 'The input is not a valid email address'
  					}
  				}
  			},
  			password: {
  				validators: {
  					notEmpty: {
  						message: 'The password is required and cannot be empty'
  					},
  					different: {
  						field: 'username',
  						message: 'The password cannot be the same as username'
  					}
  				}
  			},
  			memberType: {
  				validators: {
  					notEmpty: {
  						message: 'The gender is required'
  					}
  				}
  			},
  			bio:{
  				validators: {
  					notEmpty: {
  						message: 'The bio is required and cannot be empty'
  					},
  				}
  			},
  			phoneNumber: {
  				validators: {
  					notEmpty: {
  						message: 'The phone number is required and cannot be empty'
  					},
  					digits: {
  						message: 'The value can contain only digits'
  					}
  				}
  			},
  			city:{
  				validators: {
  					notEmpty: {
  						message: 'The city is required and cannot be empty'
  					},
  				}
  			}
  			}
  		}).on('status.field.bv', function(e, data) {
  			var $form = $(e.target),
  			validator = data.bv,
  			$collapsePane = data.element.parents('.collapse'),
  			colId = $collapsePane.attr('id');
  
  			if (colId) {
  			var $anchor = $('a[href="#' + colId + '"][data-toggle="collapse"]');
  			var $icon = $anchor.find('i');
  
  			// Add custom class to panel containing the field
  			if (data.status == validator.STATUS_INVALID) {
  				$anchor.addClass('bv-col-error');
  				$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
  			} else if (data.status == validator.STATUS_VALID) {
  				var isValidCol = validator.isValidContainer($collapsePane);
  				if (isValidCol) {
  					$anchor.removeClass('bv-col-error');
  				}else{
  					$anchor.addClass('bv-col-error');
  				}
  				$icon.removeClass(faIcon.valid + " " + faIcon.invalid).addClass(isValidCol ? faIcon.valid : faIcon.invalid);
  			}
  			}
  		});
  
  
  		// FORM VALIDATION CUSTOM ERROR CONTAINER
  		// =================================================================
  		// Indicate where the error messages are shown.
  		// Tooltip, Popover, Custom Container.
  		// =================================================================
  		$('#demo-bv-errorcnt').bootstrapValidator({
  			message: 'This value is not valid',
  			excluded: [':disabled'],
  			feedbackIcons: faIcon,
  			fields: {
  			name: {
  				container: 'tooltip',
  				validators: {
  					notEmpty: {
  						message: 'The first name is required and cannot be empty'
  					},
  					regexp: {
  						regexp: /^[A-Z\s]+$/i,
  						message: 'The first name can only consist of alphabetical characters and spaces'
  					}
  				}
  			},
  			lastName: {
  				validators: {
  					notEmpty: {
  						message: 'The last name is required and cannot be empty'
  					},
  					regexp: {
  						regexp: /^[A-Z\s]+$/i,
  						message: 'The last name can only consist of alphabetical characters and spaces'
  					}
  				}
  			},
  			email: {
  				container: 'tooltip',
  				validators: {
  					notEmpty: {
  						message: 'The email address is required and can\'t be empty'
  					},
  					emailAddress: {
  						message: 'The input is not a valid email address'
  					}
  				}
  			},
  			username: {
  				container: 'popover',
  				message: 'The username is not valid',
  				validators: {
  					notEmpty: {
  						message: 'The username is required and cannot be empty'
  					},
  					stringLength: {
  						min: 6,
  						max: 30,
  						message: 'The username must be more than 6 and less than 30 characters long'
  					},
  					regexp: {
  						regexp: /^[a-zA-Z0-9_\.]+$/,
  						message: 'The username can only consist of alphabetical, number, dot and underscore'
  					},
  					different: {
  						field: 'password',
  						message: 'The username and password cannot be the same as each other'
  					}
  				}
  				},
  			password: {
  				container: 'popover',
  					validators: {
  						notEmpty: {
  						message: 'The password is required and cannot be empty'
  						},
  						different: {
  							field: 'username',
  							message: 'The password cannot be the same as username'
  						}
  					}
  			},
  			phoneNumber: {
  				container: '#demo-error-container',
  				validators: {
  					notEmpty: {
  						message: 'The phone number is required and cannot be empty'
  					},
  					digits: {
  						message: 'The value can contain only digits'
  					}
  					}
  			},
  			city:{
  				container: '#demo-error-container',
  				validators: {
  					notEmpty: {
  						message: 'The city is required and cannot be empty'
  					},
  				}
  			}
  			}
  		}).on('status.field.bv', function(e, data) {
  			var $form     = $(e.target),
  			validator = data.bv,
  			$tabPane  = data.element.parents('.tab-pane'),
  			tabId     = $tabPane.attr('id');
  
  			if (tabId) {
  			var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');
  			// Add custom class to tab containing the field
  			if (data.status == validator.STATUS_INVALID) {
  				$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
  			} else if (data.status == validator.STATUS_VALID) {
  				var isValidTab = validator.isValidContainer($tabPane);
  				$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
  			}
  			}
  		});
  
  
  		// FORM VARIOUS VALIDATION
  		// =================================================================
  		$('#demo-bvd-notempty').bootstrapValidator({
  			message: 'This value is not valid',
  			feedbackIcons: faIcon,
  			fields: {
  			username: {
  				message: 'The username is not valid',
  				validators: {
  					notEmpty: {
  						message: 'The username is required.'
  					}
  				}
  			},
  			country: {
  				validators: {
  					notEmpty: {
  						message: 'The country is required and can\'t be empty'
  					}
  				}
  			},
  			acceptTerms: {
  				validators: {
  					notEmpty: {
  						message: 'You have to accept the terms and policies'
  					}
  				}
  			},
  			password: {
  				validators: {
  					notEmpty: {
  						message: 'The password is required and can\'t be empty'
  					},
  					identical: {
  						field: 'confirmPassword',
  						message: 'The password and its confirm are not the same'
  					}
  				}
  			},
  			confirmPassword: {
  				validators: {
  					notEmpty: {
  						message: 'The confirm password is required and can\'t be empty'
  					},
  					identical: {
  						field: 'password',
  						message: 'The password and its confirm are not the same'
  					}
  				}
  			},
  			member: {
  				validators: {
  					notEmpty: {
  						message: 'The gender is required'
  					}
  				}
  			},
  			'programs[]': {
  				validators: {
  					choice: {
  						min: 2,
  						max: 4,
  						message: 'Please choose 2 - 4 programming languages you are good at'
  					}
  				}
  			},
  			integer: {
  				validators: {
  					notEmpty: {
  						message: 'The number is required and can\'t be empty'
  					},
  					integer: {
  						message: 'The value is not a number'
  					}
  				}
  			},
  			numeric: {
  				validators: {
  					notEmpty: {
  						message: 'The number is required and can\'t be empty'
  					},
  					numeric: {
  						message: 'The value is not a number'
  					}
  				}
  			},
  			greaterthan: {
  				validators: {
  					notEmpty: {
  						message: 'The number is required and can\'t be empty'
  					},
  					greaterThan: {
  						inclusive:false,
  						//If true, the input value must be greater than or equal to the comparison one.
  						//If false, the input value must be greater than the comparison one
  						value: 50,
  						message: 'Please enter a value greater than 50'
  					}
  				}
  			},
  			lessthan: {
  				validators: {
  					notEmpty: {
  						message: 'The number is required and can\'t be empty'
  					},
  					lessThan: {
  						inclusive:false,
  						//If true, the input value must be less than or equal to the comparison one.
  						//If false, the input value must be less than the comparison one
  						value: 25,
  						message: 'Please enter a value less than 25'
  					}
  				}
  			},
  			range: {
  				validators: {
  					inclusive:true,
  					notEmpty: {
  						message: 'The number is required and can\'t be empty'
  					},
  					between: {
  						min:1,
  						max:100,
  						message: 'Please enter a number between 1 and 100'
  					}
  				}
  			},
  			uppercase:{
  				validators: {
  					notEmpty: {
  						message: 'The card holder is required and can\'t be empty'
  					},
  					// Since case is a Javascript keyword,
  					// you should place it between quotes (like 'case' or "case")
  					// to make it work in all browsers
  					stringCase: {
  						message: 'The card holder must be in uppercase',
  						'case': 'upper'
  					}
  				}
  			},
  			email: {
  				validators: {
  					notEmpty: {
  						message: 'The email address is required and can\'t be empty'
  					},
  					emailAddress: {
  						message: 'The input is not a valid email address'
  					}
  				}
  			},
  			website: {
  				validators: {
  					notEmpty: {
  						message: 'The website address is required and can\'t be empty'
  					},
  					uri: {
  						allowLocal: false,
  						message: 'The input is not a valid URL'
  					}
  				}
  			},
  			color: {
  				validators: {
  					notEmpty: {
  						message: 'The hex color is required and can\'t be empty'
  					},
  					hexColor: {
  						message: 'The input is not a valid hex color'
  					}
  				}
  			}
  			}
  		}).on('success.field.bv', function(e, data) {
  			// $(e.target)  --> The field element
  			// data.bv      --> The BootstrapValidator instance
  			// data.field   --> The field name
  			// data.element --> The field element
  
  			var $parent = data.element.parents('.form-group');
  
  			// Remove the has-success class
  			$parent.removeClass('has-success');
  		});
  
  
  
  
  		// MASKED INPUT
  		// =================================================================
  		// Require Masked Input
  		// http://digitalbush.com/projects/masked-input-plugin/
  		// =================================================================
  
  
  		// Initialize Masked Inputs
  		// a - Represents an alpha character (A-Z,a-z)
  		// 9 - Represents a numeric character (0-9)
  		// * - Represents an alphanumeric character (A-Z,a-z,0-9)
  		$('#demo-msk-date').mask('99/99/9999');
  		$('#demo-msk-date2').mask('99-99-9999');
  		$('#demo-msk-phone').mask('(999) 999-9999');
  		$('#demo-msk-phone-ext').mask('(999) 999-9999? x99999');
  		$('#demo-msk-taxid').mask('99-9999999');
  		$('#demo-msk-ssn').mask('999-99-9999');
  		$('#demo-msk-pkey').mask('a*-999-a999');
          vueUI.hideLoading();
      }
  });
  

});
