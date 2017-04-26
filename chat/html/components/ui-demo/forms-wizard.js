define('forms-wizard', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<div id=\"page-content\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\t<div class=\"eq-height clearfix\">\n\t\t\t\t\t\t\t<div class=\"col-md-5 eq-box-md text-center box-vmiddle-wrap bg-primary\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Simple Promotion Widget -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div class=\"box-vmiddle pad-all\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"text-thin\">Register Today</h3>\n\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-lg icon-circle bg-trans-light\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-gift fa-5x text-primary\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<p>Members get <span class=\"text-lg text-bold\">50%</span> more points, so register today and start earning points for savings on great rewards!</p>\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-primary btn-labeled fa fa-arrow-right\" href=\"#\">Learn More...</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-7 eq-box-md eq-no-panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Main Form Wizard -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div id=\"demo-main-wz\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--nav-->\n\t\t\t\t\t\t\t\t\t<ul class=\"row wz-step wz-icon-bw wz-nav-off mar-top\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-main-tab1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-danger\"><i class=\"fa fa-info\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-thin\">Account</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-main-tab2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-warning\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-thin\">Profile</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-main-tab3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-info\"><i class=\"fa fa-home\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-thin\">Address</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-main-tab4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-success\"><i class=\"fa fa-heart\"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-thin\">Finish</p>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--progress bar-->\n\t\t\t\t\t\t\t\t\t<div class=\"progress progress-xs\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-primary\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--form-->\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--First tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-main-tab1\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Retype password</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password2\" placeholder=\"Retype password\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Second tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-main-tab2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"First name\" name=\"firstName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Company</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Company\" name=\"company\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Member Type</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"free\" name=\"memberType\"> Free\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"personal\" name=\"memberType\"> Personal\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-radio form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"bussines\" name=\"memberType\"> Bussiness\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Third tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-main-tab3\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone number\" name=\"phoneNumber\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"address\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"City\" name=\"city\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Poscode</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Poscode\" name=\"poscode\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Fourth tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-main-tab4\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Bio</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea placeholder=\"Tell us your story...\" rows=\"7\" name=\"bio\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7 col-lg-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" value=\"java\" name=\"acceptTerms\"> Accept the terms and policies\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Footer button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right pad-all\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"previous btn btn-primary\">Previous</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"next btn btn-primary\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"finish btn btn-success\" disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- End of Main Form Wizard -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Classic Form Wizard -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div id=\"demo-cls-wz\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Nav-->\n\t\t\t\t\t\t\t\t\t<ul class=\"wz-nav-off wz-icon-inline\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3 bg-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cls-tab1\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-trans-dark\"><i class=\"fa fa-info\"></i></span> Account\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3 bg-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cls-tab2\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-trans-dark\"><i class=\"fa fa-user\"></i></span> Profile\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3 bg-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cls-tab3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-trans-dark\"><i class=\"fa fa-home\"></i></span> Address\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3 bg-purple\">\n\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cls-tab4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs bg-trans-dark\"><i class=\"fa fa-heart\"></i></span> Finish\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Progress bar-->\n\t\t\t\t\t\t\t\t\t<div class=\"progress progress-sm progress-striped active\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-pink\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Form-->\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal mar-top\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--First tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cls-tab1\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Second tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cls-tab2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"First name\" name=\"firstName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Third tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cls-tab3\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"address\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"City\" name=\"city\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Fourth tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cls-tab4\" class=\"tab-pane mar-btm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Thank you</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Footer button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"previous btn btn-purple\">Previous</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"next btn btn-purple\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"finish btn btn-pink\" disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- End Classic Form Wizard -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Circular Form Wizard -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div id=\"demo-step-wz\">\n\t\t\t\t\t\t\t\t\t<div class=\"wz-heading wz-w-label bg-success\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Progress bar-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-xs\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"width: 15%;\" class=\"progress-bar progress-bar-dark\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Nav-->\n\t\t\t\t\t\t\t\t\t\t<ul class=\"wz-steps wz-icon-bw wz-nav-off text-lg\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-step-tab1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs icon-circle bg-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"wz-icon icon-txt text-bold\">1</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"wz-desc box-block\">Account</small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-step-tab2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs icon-circle bg-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"wz-icon icon-txt text-bold\">2</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"wz-desc box-block\">Profile</small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-step-tab3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs icon-circle bg-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"wz-icon icon-txt text-bold\">3</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"wz-desc box-block\">Address</small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-step-tab4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs icon-circle bg-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"wz-icon icon-txt text-bold\">4</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"wz-desc box-block\">Finish</small>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Form-->\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--First tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-step-tab1\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Second tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-step-tab2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"First name\" name=\"firstName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Third tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-step-tab3\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone number\" name=\"phoneNumber\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"address\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Fourth tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-step-tab4\" class=\"tab-pane mar-btm text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Thank you</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Footer button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"previous btn btn-mint\">Previous</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"next btn btn-mint\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"finish btn btn-mint\" disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- End Circular Form Wizard -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Circular Form Wizard -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div id=\"demo-cir-wz\">\n\t\t\t\t\t\t\t\t\t<div class=\"wz-heading\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Progress bar-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-sm progress-light-base\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-primary\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Nav-->\n\t\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t\t\t\t\t\t<ul class=\"wz-nav-off \">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cir-tab1\" title=\"Account\" class=\"add-tooltip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-mint\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-info fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cir-tab2\" title=\"Profile\" class=\"add-tooltip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-user fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cir-tab3\" title=\"Address\" class=\"add-tooltip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-home fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-cir-tab4\" title=\"Finish\" class=\"add-tooltip\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-heart fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Form-->\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--First tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cir-tab1\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Second tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cir-tab2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"First name\" name=\"firstName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Third tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cir-tab3\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone number\" name=\"phoneNumber\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address\" name=\"address\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Fourth tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cir-tab4\" class=\"tab-pane  mar-btm text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Thank you</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Footer button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"previous btn btn-primary\">Previous</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"next btn btn-primary\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"finish btn btn-warning\" disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- End Circular Form Wizard -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t\t<div class=\"panel\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- Form wizard with Validation -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div id=\"demo-bv-wz\">\n\t\t\t\t\t\t\t\t\t<div class=\"wz-heading\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Progress bar-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress progress-sm progress-light-base\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar progress-bar-primary\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Nav-->\n\t\t\t\t\t\t\t\t\t\t<ul class=\"wz-icon-bw wz-nav-off\">\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-bv-tab1\" title=\"Account\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-mint\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-info fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-bv-tab2\" title=\"Profile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-user fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-bv-tab3\" title=\"Address\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-warning\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-home fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#demo-bv-tab4\" title=\"Finish\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon fa fa-heart fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"wz-icon-done fa fa-check fa-2x\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Form-->\n\t\t\t\t\t\t\t\t\t<form id=\"demo-bv-wz-form\" class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--First tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-bv-tab1\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Username</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Email address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Second tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-bv-tab2\" class=\"tab-pane fade\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">First name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"First name\" name=\"firstName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Last name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Third tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-bv-tab3\" class=\"tab-pane\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone number\" name=\"phoneNumber\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Phone number\" name=\"address\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<!--Fourth tab-->\n\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-bv-tab4\" class=\"tab-pane  mar-btm text-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4>Thank you</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Footer button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-footer text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"box-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"previous btn btn-primary\">Previous</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"next btn btn-primary\">Next</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"finish btn btn-warning\" disabled>Finish</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- End Form wizard with Validation -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<!--End page content-->\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){
  		// Layout.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// FORM WIZARD
  		// =================================================================
  		// Require Bootstrap Wizard
  		// http://vadimg.com/twitter-bootstrap-wizard-example/
  		// =================================================================
  
  
  		// MAIN FORM WIZARD
  		// =================================================================
  		$('#demo-main-wz').bootstrapWizard({
  			tabClass		: 'wz-steps',
  			nextSelector	: '.next',
  			previousSelector	: '.previous',
  			onTabClick: function(tab, navigation, index) {
  				return false;
  			},
  			onInit : function(){
  				$('#demo-main-wz').find('.finish').hide().prop('disabled', true);
  			},
  			onTabShow: function(tab, navigation, index) {
  				var $total = navigation.find('li').length;
  				var $current = index+1;
  				var $percent = ($current/$total) * 100;
  				var wdt = 100/$total;
  				var lft = wdt*index;
  
  				$('#demo-main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});
  
  
  				// If it's the last tab then hide the last button and show the finish instead
  				if($current >= $total) {
  					$('#demo-main-wz').find('.next').hide();
  					$('#demo-main-wz').find('.finish').show();
  					$('#demo-main-wz').find('.finish').prop('disabled', false);
  				} else {
  					$('#demo-main-wz').find('.next').show();
  					$('#demo-main-wz').find('.finish').hide().prop('disabled', true);
  				}
  			}
  		});
  
  
  
  
  		// CLASSIC FORM WIZARD
  		// =================================================================
  		$('#demo-cls-wz').bootstrapWizard({
  			tabClass		: 'wz-classic',
  			nextSelector	: '.next',
  			previousSelector	: '.previous',
  			onTabClick: function(tab, navigation, index) {
  				return false;
  			},
  			onInit : function(){
  				$('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
  			},
  			onTabShow: function(tab, navigation, index) {
  				var $total = navigation.find('li').length;
  				var $current = index+1;
  				var $percent = ($current/$total) * 100;
  				var wdt = 100/$total;
  				var lft = wdt*index;
  				$('#demo-cls-wz').find('.progress-bar').css({width:$percent+'%'});
  
  				// If it's the last tab then hide the last button and show the finish instead
  				if($current >= $total) {
  					$('#demo-cls-wz').find('.next').hide();
  					$('#demo-cls-wz').find('.finish').show();
  					$('#demo-cls-wz').find('.finish').prop('disabled', false);
  				} else {
  					$('#demo-cls-wz').find('.next').show();
  					$('#demo-cls-wz').find('.finish').hide().prop('disabled', true);
  				}
  			}
  		});
  
  
  
  
  		// CIRCULAR FORM WIZARD
  		// =================================================================
  		$('#demo-step-wz').bootstrapWizard({
  			tabClass		: 'wz-steps',
  			nextSelector	: '.next',
  			previousSelector	: '.previous',
  			onTabClick: function(tab, navigation, index) {
  				return false;
  			},
  			onInit : function(){
  				$('#demo-step-wz').find('.finish').hide().prop('disabled', true);
  			},
  			onTabShow: function(tab, navigation, index) {
  				var $total = navigation.find('li').length;
  				var $current = index+1;
  				var $percent = (index/$total) * 100;
  				var wdt = 100/$total;
  				var lft = wdt*index;
  				var margin = (100/$total)/2;
  				$('#demo-step-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
  
  
  				// If it's the last tab then hide the last button and show the finish instead
  				if($current >= $total) {
  					$('#demo-step-wz').find('.next').hide();
  					$('#demo-step-wz').find('.finish').show();
  					$('#demo-step-wz').find('.finish').prop('disabled', false);
  				} else {
  					$('#demo-step-wz').find('.next').show();
  					$('#demo-step-wz').find('.finish').hide().prop('disabled', true);
  				}
  			}
  		});
  
  
  
  		// CIRCULAR FORM WIZARD
  		// =================================================================
  		$('#demo-cir-wz').bootstrapWizard({
  			tabClass		: 'wz-steps',
  			nextSelector	: '.next',
  			previousSelector	: '.previous',
  			onTabClick: function(tab, navigation, index) {
  			return false;
  			},
  			onInit : function(){
  			$('#demo-cir-wz').find('.finish').hide().prop('disabled', true);
  			},
  			onTabShow: function(tab, navigation, index) {
  			var $total = navigation.find('li').length;
  			var $current = index+1;
  			var $percent = (index/$total) * 100;
  			var margin = (100/$total)/2;
  			$('#demo-cir-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
  
  			navigation.find('li:eq('+index+') a').trigger('focus');
  
  
  			// If it's the last tab then hide the last button and show the finish instead
  			if($current >= $total) {
  				$('#demo-cir-wz').find('.next').hide();
  				$('#demo-cir-wz').find('.finish').show();
  				$('#demo-cir-wz').find('.finish').prop('disabled', false);
  			} else {
  				$('#demo-cir-wz').find('.next').show();
  				$('#demo-cir-wz').find('.finish').hide().prop('disabled', true);
  			}
  			}
  		})
  
  
  
  
  		// FORM WIZARD WITH VALIDATION
  		// =================================================================
  		$('#demo-bv-wz').bootstrapWizard({
  			tabClass		: 'wz-steps',
  			nextSelector	: '.next',
  			previousSelector	: '.previous',
  			onTabClick: function(tab, navigation, index) {
  				return false;
  			},
  			onInit : function(){
  				$('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
  			},
  			onTabShow: function(tab, navigation, index) {
  				var $total = navigation.find('li').length;
  				var $current = index+1;
  				var $percent = (index/$total) * 100;
  				var margin = (100/$total)/2;
  				$('#demo-bv-wz').find('.progress-bar').css({width:$percent+'%', 'margin': 0 + 'px ' + margin + '%'});
  
  				navigation.find('li:eq('+index+') a').trigger('focus');
  
  
  				// If it's the last tab then hide the last button and show the finish instead
  				if($current >= $total) {
  					$('#demo-bv-wz').find('.next').hide();
  					$('#demo-bv-wz').find('.finish').show();
  					$('#demo-bv-wz').find('.finish').prop('disabled', false);
  				} else {
  					$('#demo-bv-wz').find('.next').show();
  					$('#demo-bv-wz').find('.finish').hide().prop('disabled', true);
  				}
  			},
  			onNext: function(){
  				isValid = null;
  				$('#demo-bv-wz-form').bootstrapValidator('validate');
  
  
  				if(isValid === false)return false;
  			}
  		});
  
  
  
  
  		// FORM VALIDATION
  		// =================================================================
  		// Require Bootstrap Validator
  		// http://bootstrapvalidator.com/
  		// =================================================================
  
  		var isValid;
  		$('#demo-bv-wz-form').bootstrapValidator({
  			message: 'This value is not valid',
  			feedbackIcons: {
  			valid: 'fa fa-check-circle fa-lg text-success',
  			invalid: 'fa fa-times-circle fa-lg',
  			validating: 'fa fa-refresh'
  			},
  			fields: {
  			username: {
  				message: 'The username is not valid',
  				validators: {
  					notEmpty: {
  						message: 'The username is required.'
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
  			address: {
  				validators: {
  					notEmpty: {
  						message: 'The address is required'
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
  
  
  			// Hide the success icon
  			//$parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
  		}).on('error.form.bv', function(e) {
  			isValid = false;
  		});
          vueUI.hideLoading();
  
      }
  });
  

});
