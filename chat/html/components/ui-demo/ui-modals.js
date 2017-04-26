define('ui-modals', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<div id=\"page-content\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--STATIC EXAMPLE-->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"panel panel-dark panel-colorful\">\r\n\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">Static Example</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"panel-body demo-nifty-modal\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Static Examplel-->\r\n\t\t\t\t\t\t\t<div class=\"modal\">\r\n\t\t\t\t\t\t\t\t<div class=\"modal-dialog\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"close\" data-dismiss=\"modal\" type=\"button\"><span>&times;</span><span class=\"sr-only\">Close</span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"modal-title\">Modal title</h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>One fine body ...........</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Close</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">Save changes</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!--END OF STATIC EXAMPLE-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div id=\"demo-panel-ref\" class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Default modal</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Launch demo default modal-->\r\n\t\t\t\t\t\t\t\t\t<p>Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page.</p><br>\r\n\t\t\t\t\t\t\t\t\t<button data-target=\"#demo-default-modal\" data-toggle=\"modal\" class=\"btn btn-primary btn-lg\">Launch demo modal</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Remove animation</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Launch demo modal wihtout animation-->\r\n\t\t\t\t\t\t\t\t\t<p>For modals that simply appear rather than fade in to view, remove the <code>.fade</code> class from your modal markup.</p><br>\r\n\t\t\t\t\t\t\t\t\t<button data-target=\"#demo-modal-wo-anim\" data-toggle=\"modal\" class=\"btn btn-primary btn-lg\">Launch demo modal</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Optional sizes</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Large modal button-->\r\n\t\t\t\t\t\t\t\t\t<p>Modals have two optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code></p><br>\r\n\t\t\t\t\t\t\t\t\t<button data-target=\"#demo-lg-modal\" data-toggle=\"modal\" class=\"btn btn-warning\">Large modal</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Optional sizes</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Small modal button-->\r\n\t\t\t\t\t\t\t\t\t<p>Modals have two optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code></p><br>\r\n\t\t\t\t\t\t\t\t\t<button data-target=\"#demo-sm-modal\" data-toggle=\"modal\" class=\"btn btn-success\">Small modal</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"eq-height\">\r\n\t\t\t\t\t\t<div class=\"col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Bootbox Modals</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body demo-nifty-btn\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Bootbox Modals-->\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-alert\" class=\"btn btn-danger\">Alert</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-confirm\" class=\"btn btn-info\">Confirm</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-prompt\" class=\"btn btn-warning\">Prompt</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Bootbox Custom Modals</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body demo-nifty-btn\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Bootbox Custom Modals-->\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-custom\" class=\"btn btn-purple\">Custom Dialog</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-custom-h-content\" class=\"btn btn-pink\">HTML Content</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-custom-h-form\" class=\"btn btn-success\">HTML Form</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Bootbox with animate.css</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body demo-nifty-btn\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Bootbox with Animate.css-->\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-zoom\" class=\"btn btn-info\">Zoom in/out</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-bounce\" class=\"btn btn-warning\">Bounce</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-ruberwobble\" class=\"btn btn-dark\">RubberBand and wobble</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-flip\" class=\"btn btn-purple\">Flip</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-lightspeed\" class=\"btn btn-success\">Light Speed</button>\r\n\t\t\t\t\t\t\t\t\t<button id=\"demo-bootbox-swing\" class=\"btn btn-primary\">Swing and Hinge</button>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--===================================================-->\r\n\r\n\r\n\t<!--弹出窗口❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏❏-->\r\n\t<!--Default Bootstrap Modal-->\r\n\t<!--===================================================-->\r\n\t<div class=\"modal fade\" id=\"demo-default-modal\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"demo-default-modal\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\r\n\t\t\t\t<!--Modal header-->\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button data-dismiss=\"modal\" class=\"close\" type=\"button\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<h4 class=\"modal-title\">Modal Heading</h4>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--Modal body-->\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t  <div class=\"panel-body\">\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <label class=\"col-sm-3 control-label\" for=\"demo-is-inputsmall\">Small Input</label>\r\n\t\t\t\t\t      <div class=\"col-sm-6\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".input-sm\" class=\"form-control input-sm\" id=\"demo-is-inputsmall\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <label for=\"demo-is-inputnormal\" class=\"col-sm-3 control-label\">Normal Input</label>\r\n\t\t\t\t\t      <div class=\"col-sm-6\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\"Normal\" class=\"form-control\" id=\"demo-is-inputnormal\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <label for=\"demo-is-inputlarge\" class=\"col-sm-3 control-label\">Large Input</label>\r\n\t\t\t\t\t      <div class=\"col-sm-6\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".input-lg\" class=\"form-control input-lg\" id=\"demo-is-inputlarge\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <label class=\"col-sm-3 control-label\">Grid Inputs</label>\r\n\t\t\t\t\t      <div class=\"col-sm-3\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".col-sm-3\" class=\"form-control\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <div class=\"col-sm-5 col-sm-offset-3\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".col-sm-5\" class=\"form-control\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <div class=\"col-sm-7 col-sm-offset-3\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".col-sm-7\" class=\"form-control\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t    <div class=\"form-group\">\r\n\t\t\t\t\t      <div class=\"col-sm-9 col-sm-offset-3\">\r\n\t\t\t\t\t        <input type=\"text\" placeholder=\".col-sm-9\" class=\"form-control\">\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"panel-footer\">\r\n\t\t\t\t\t    <div class=\"row\">\r\n\t\t\t\t\t      <div class=\"col-sm-9 col-sm-offset-3\">\r\n\t\t\t\t\t        <button class=\"btn btn-info btn-labeled fa fa-user fa-lg\" type=\"submit\">Login</button>\r\n\t\t\t\t\t        <button class=\"btn btn-warning btn-labeled fa fa-repeat fa-lg\" type=\"reset\">Reset</button>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<!--Modal footer-->\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\r\n\t\t\t\t\t<button class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--===================================================-->\r\n\t<!--End Default Bootstrap Modal-->\r\n\r\n\r\n\t<!--Bootstrap Modal without Animation-->\r\n\t<!--===================================================-->\r\n\t<div class=\"modal\" id=\"demo-modal-wo-anim\" role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"demo-default-modal\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\r\n\t\t\t\t<!--Modal header-->\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button data-dismiss=\"modal\" class=\"close\" type=\"button\">\r\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<h4 class=\"modal-title\">Modal Heading</h4>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<!--Modal body-->\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<h4 class=\"text-thin\">Bootstrap Modal Vertical Alignment Center</h4>\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\r\n\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<h4 class=\"text-thin\">Popover in a modal</h4>\r\n\t\t\t\t\t<p>This\r\n\t\t\t\t\t<button class=\"btn btn-sm btn-warning demo-modal-popover add-popover\" data-toggle=\"popover\" data-trigger=\"focus\" data-content=\"And here\\'s some amazing content. It\\'s very engaging. right?\" data-original-title=\"Popover Title\">button</button> should trigger a popover on click.</p>\r\n\r\n\t\t\t\t\t<hr>\r\n\r\n\t\t\t\t\t<h4 class=\"text-thin\">Tooltips in a modal</h4>\r\n\t\t\t\t\t<p><a class=\"btn-link add-tooltip\" href=\"#\" data-original-title=\"Tooltip\">This link</a> and <a class=\"btn-link add-tooltip\" data-toggle=\"tooltip\" href=\"#\" data-original-title=\"Tooltip\" title=\"\">that link</a> should have tooltips on hover.</p>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<!--Modal footer-->\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button data-dismiss=\"modal\" class=\"btn btn-default\" type=\"button\">Close</button>\r\n\t\t\t\t\t<button class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--===================================================-->\r\n\t<!--End Bootstrap Modal without Animation-->\r\n\r\n\r\n\t<!--Large Bootstrap Modal-->\r\n\t<!--===================================================-->\r\n\t<div id=\"demo-lg-modal\" class=\"modal fade\" tabindex=\"-1\">\r\n\t\t<div class=\"modal-dialog modal-lg\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"myLargeModalLabel\">Large modal</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--===================================================-->\r\n\t<!--End Large Bootstrap Modal-->\r\n\r\n\r\n\t<!--Small Bootstrap Modal-->\r\n\t<!--===================================================-->\r\n\t<div id=\"demo-sm-modal\" class=\"modal fade\" tabindex=\"-1\">\r\n\t\t<div class=\"modal-dialog modal-sm\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n\t\t\t\t\t<h4 class=\"modal-title\" id=\"mySmallModalLabel\">Small modal</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){
  		// UI-Modals.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// BOOTBOX - ALERT MODAL
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-alert').on('click', function(){
  			bootbox.alert("Hello world!", function(){
  				$.niftyNoty({
  					type: 'info',
  					icon : 'fa fa-info',
  					message : 'Hello world callback',
  					container : 'floating',
  					timer : 3000
  				});
  			});
  		});
  
  
  
  		// BOOTBOX - CONFIRM MODAL
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-confirm').on('click', function(){
  			bootbox.confirm("Are you sure?", function(result) {
  				if (result) {
  					$.niftyNoty({
  						type: 'success',
  						icon : 'fa fa-check',
  						message : 'User confirmed dialog',
  						container : 'floating',
  						timer : 3000
  					});
  				}else{
  					$.niftyNoty({
  						type: 'danger',
  						icon : 'fa fa-minus',
  						message : 'User declined dialog.',
  						container : 'floating',
  						timer : 3000
  					});
  				};
  
  			});
  		});
  
  
  
  		// BOOTBOX - PROMPT MODAL
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-prompt').on('click', function(){
  			bootbox.prompt("What is your name?", function(result) {
  				if (result) {
  					$.niftyNoty({
  						type: 'success',
  						icon : 'fa fa-check',
  						message : 'Hi ' + result,
  						container : 'floating',
  						timer : 3000
  					});
  				}else{
  					$.niftyNoty({
  						type: 'danger',
  						icon : 'fa fa-minus',
  						message : 'User declined dialog.',
  						container : 'floating',
  						timer : 3000
  					});
  				};
  			});
  		});
  
  
  
  		// BOOTBOX - CUSTOM DIALOG
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-custom').on('click', function(){
  			bootbox.dialog({
  				message: "I am a custom dialog",
  				title: "Custom title",
  				buttons: {
  					success: {
  						label: "Success!",
  						className: "btn-success",
  						callback: function() {
  							$.niftyNoty({
  								type: 'success',
  								icon : 'fa fa-check',
  								message : '<strong>Well done!</strong> You successfully read this important alert message. ',
  								container : 'floating',
  								timer : 3000
  							});
  						}
  					},
  
  					danger: {
  						label: "Danger!",
  						className: "btn-danger",
  						callback: function() {
  							$.niftyNoty({
  								type: 'danger',
  								icon : 'fa fa-times',
  								message : '<strong>Oh snap!</strong> Change a few things up and try submitting again.',
  								container : 'floating',
  								timer : 3000
  							});
  						}
  					},
  
  					main: {
  						label: "Click ME!",
  						className: "btn-primary",
  						callback: function() {
  							$.niftyNoty({
  								type: 'primary',
  								icon : 'fa fa-thumbs-o-up',
  								message : "<strong>Heads up!</strong> This alert needs your attention, but it's not super important.",
  								container : 'floating',
  								timer : 3000
  							});
  						}
  					}
  				}
  			});
  		});
  
  
  
  		// BOOTBOX - CUSTOM HTML CONTENTS
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-custom-h-content').on('click', function(){
  			bootbox.dialog({
  				title: "That html",
  				message: '<div class="media"><div class="media-left"><img class="media-object img-lg img-circle" src="static/img/av3.png" alt="Profile picture"></div><div class="media-body"><h4 class="text-thin">You can also use <strong>html</strong></h4>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div></div>',
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				}
  			});
  		});
  
  
  
  		// BOOTBOX - CUSTOM HTML FORM
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		// =================================================================
  		$('#demo-bootbox-custom-h-form').on('click', function(){
  			bootbox.dialog({
  				title: "This is a form in a modal.",
  				message:'<div class="row"> ' + '<div class="col-md-12"> ' +
  						'<form class="form-horizontal"> ' + '<div class="form-group"> ' +
  						'<label class="col-md-4 control-label" for="name">Name</label> ' +
  						'<div class="col-md-4"> ' +
  						'<input id="name" name="name" type="text" placeholder="Your name" class="form-control input-md"> ' +
  						'<span class="help-block"><small>Here goes your name</small></span> </div> ' +
  						'</div> ' + '<div class="form-group"> ' +
  						'<label class="col-md-4 control-label" for="awesomeness">How awesome is this?</label> ' +
  						'<div class="col-md-8"> <div class="form-block"> ' +
  						'<label class="form-radio form-icon demo-modal-radio active"><input type="radio" autocomplete="off" name="awesomeness" value="Really awesome" checked> Really awesome</label>' +
  						'<label class="form-radio form-icon demo-modal-radio"><input type="radio" autocomplete="off" name="awesomeness" value="Super awesome"> Super awesome </label> </div>' +
  						'</div> </div>' + '</form> </div> </div><script></script>',
  				buttons: {
  					success: {
  						label: "Save",
  						className: "btn-purple",
  						callback: function() {
  							var name = $('#name').val();
  							var answer = $("input[name='awesomeness']:checked").val();
  
  							$.niftyNoty({
  								type: 'purple',
  								icon : 'fa fa-check',
  								message : "Hello " + name + ".<br> You've chosen <strong>" + answer + "</strong>",
  								container : 'floating',
  								timer : 4000
  							});
  						}
  					}
  				}
  			});
  
  			$(".demo-modal-radio").niftyCheck();
  		});
  
  
  
  		// BOOTBOX - ZOOM IN/OUT ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-zoom').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>Zoom In/Out</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'zoomInDown',
  				animateOut : 'zoomOutUp'
  			});
  		});
  
  
  
  		// BOOTBOX - BOUNCE IN/OUT ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-bounce').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>Bounce</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'bounceIn',
  				animateOut : 'bounceOut'
  			});
  		});
  
  
  
  		// BOOTBOX - RUBBERBAND & WOBBLE ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-ruberwobble').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>RubberBand & Wobble</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'rubberBand',
  				animateOut : 'wobble'
  			});
  		});
  
  
  
  		// BOOTBOX - FLIP IN/OUT ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-flip').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>Flip</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'flipInX',
  				animateOut : 'flipOutX'
  			});
  		});
  
  
  
  		// BOOTBOX - LIGHTSPEED IN/OUT ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-lightspeed').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>Light Speed</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'lightSpeedIn',
  				animateOut : 'lightSpeedOut'
  			});
  		});
  
  
  
  		// BOOTBOX - SWING & HINGE IN/OUT ANIMATION
  		// =================================================================
  		// Require Bootbox
  		// http://bootboxjs.com/
  		//
  		// Animate.css
  		// http://daneden.github.io/animate.css/
  		// =================================================================
  		$('#demo-bootbox-swing').on('click', function(){
  			bootbox.confirm({
  				message : "<h4 class='text-thin'>Swing & Hinge</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>",
  				buttons: {
  					confirm: {
  						label: "Save"
  					}
  				},
  				callback : function(result) {
  					//Callback function here
  				},
  				animateIn: 'swing',
  				animateOut : 'hinge'
  			});
  		});
  		vueUI.hideLoading();
      }
  });
  
  

});
