define('mailbox', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<div id=\"page-content\">\n\t\t\t\t\t\n\t\t\t\t\t<!-- MAIL INBOX -->\n\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t<div class=\"panel panel-default panel-left\">\n\t\t\t\t\t\t<div id=\"demo-email-list\" class=\"panel-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- Mail toolbar -->\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Split button dropdowns-->\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-checked-all-mail\" class=\"btn btn-default\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-checkbox form-normal\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-input\" type=\"checkbox\" name=\"mail-list\">\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle dropdown-toggle-icon\"><i class=\"dropdown-caret fa fa-caret-down\"></i></button>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-all-list\">All</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-none-list\">None</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-toggle-list\">Toggle</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-read-list\">Read</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-unread-list\">Unread</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"javascript:void(0)\" id=\"demo-select-starred-list\">Starred</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Refresh button-->\n\t\t\t\t\t\t\t\t\t<button id=\"demo-mail-ref-btn\" data-toggle=\"panel-overlay\" data-target=\"#demo-email-list\" class=\"btn btn-default\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-refresh\"></i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!--Dropdown button (More Action)-->\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t<button data-toggle=\"dropdown\" class=\"btn btn-default dropdown-toggle\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\tMore <i class=\"dropdown-caret fa fa-caret-down\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Mark as read</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Mark as unread</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Star</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Clear Star</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<hr class=\"hr-sm visible-xs\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-5 clearfix\">\n\t\t\t\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Pager buttons-->\n\t\t\t\t\t\t\t\t\t\t<span class=\"text-muted\">\n\t\t\t\t\t\t\t\t\t\t\t<strong>1-50</strong>\n\t\t\t\t\t\t\t\t\t\t\tof\n\t\t\t\t\t\t\t\t\t\t\t<strong>160</strong>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-left\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-right\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t<!--Mail list group-->\n\t\t\t\t\t\t\t<ul id=\"demo-mail-list\" class=\"mail-list\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread mail-attach\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Michael Robert</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">05:55 PM</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">This is an example if there is a really really long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Shopping Mall</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">10:45 AM</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Tracking Your Order - Shoes Store Online</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread mail-starred mail-attach\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Dropbox</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">07:18 AM</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Reset your account password</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Server Host</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">01:51 PM</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-danger\">\n\t\t\t\t\t\t\t\t\t\t\tBussines\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\tRegarding to your website issues.\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Lisa D. Smith</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Yesterday</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Hi John! How are you?</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Johny Juan</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Yesterday</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info\">\n\t\t\t\t\t\t\t\t\t\t\tPartner\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\tRepair Status Unregistered User\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-attach\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Bobby Marz</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 10</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Bugs in your system.</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Lucy Moon</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 10</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">We need to meet up soon</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Michael Robert</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 10</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">This is an example if there is a really really long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-starred mail-attach\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Shopping Mall</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 9</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Tracking Your Order - Shoes Store Online</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Dropbox</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 8</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Reset your account password</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Server Host</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 7</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-danger\">\n\t\t\t\t\t\t\t\t\t\t\t\tBussines\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\tRegarding to your website issues.\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Lisa D. Smith</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 5</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Hi John! How are you?</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<li class=\"mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Johny Juan</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 5</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info\">\n\t\t\t\t\t\t\t\t\t\t\t\tPartner\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\tRepair Status Unregistered User\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t\t\t\t<li class=\"mail-attach\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Bobby Marz</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 3</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">Bugs in your system.</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!--Mail list item-->\n\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\n\t\t\t\t\t\t\t\t<li class=\"mail-list-unread mail-starred\">\n\t\t\t\t\t\t\t\t\t<div class=\"mail-control\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"demo-cb-mail form-checkbox form-normal form-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\">\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-star\"><a href=\"#\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-from\"><a href=\"#\">Lucy Moon</a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-time\">Oct 1</div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-icon\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"mail-subject\"><a href=\"mailbox-message.html\" tppabs=\"mailbox-message.html\">We need to meet up soon</a></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t<!--Mail footer-->\n\t\t\t\t\t\t<div class=\"panel-footer clearfix\">\n\t\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t\t\t<span class=\"text-muted\"><strong>1-50</strong> of <strong>160</strong></span>\n\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-left\"></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-dark\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-right\"></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t<!-- END OF MAIL INBOX -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<!--End page content-->\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){	
  		// Mail.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// MAILBOX-COMPOSE.HTML
  		// =================================================================
  
  		if ($('#demo-mail-compose').length) {
  
  
  			// SUMMERNOTE
  			// =================================================================
  			// Require Summernote
  			// http://hackerwins.github.io/summernote/
  			// =================================================================
  			$('#demo-mail-compose').summernote({
  				height:500
  			});
  
  
  			// Show The CC Input Field
  			// =================================================================
  			$('#demo-toggle-cc').on('click', function(){
  				$('#demo-cc-input').toggleClass('hide');
  			});
  
  
  
  			// Show The BCC Input Field
  			// =================================================================
  			$('#demo-toggle-bcc').on('click', function(){
  				$('#demo-bcc-input').toggleClass('hide');
  			});
  
  
  
  			// Attachment button.
  			// =================================================================
  			$('.btn-file :file').on('fileselect', function(event, numFiles, label, fileSize) {
  				$('#demo-attach-file').html('<strong class="box-block text-capitalize"><i class="fa fa-paperclip fa-fw"></i> '+label+'</strong><small class="text-muted">'+fileSize+'</small>');
  			});
  
  
  			return;
  		}
  
  
  
  
  
  		// MAILBOX-MESSAGE.HTML
  		// =================================================================
  
  		// SUMMERNOTE
  		// =================================================================
  		// Require Summernote
  		// http://hackerwins.github.io/summernote/
  		// =================================================================
  		if( $('#demo-mail-textarea').length ){
  			$('#demo-mail-textarea').on('click', function(){
  				$(this).empty().summernote({
  				height:300,
  				focus: true
  				});
  				$('#demo-mail-send-btn').removeClass('hide');
  			});
  			return;
  		}
  
  
  
  
  
  		// MAILBOX.HTML
  		// =================================================================
  		var mSelAllCb 	= $('#demo-checked-all-mail').find('.form-checkbox');
  		var mListCb 	= $('.demo-cb-mail');
  		var mReadCb 	= $('#demo-mail-list').find('li:not(.mail-list-unread)');
  		var mUnreadCb 	= $('#demo-mail-list').find('.mail-list-unread');
  		var mStarBtn 	= $('#demo-mail-list').find('.mail-star a');
  
  
  		// Select / deselect all checkboxes.
  		// =================================================================
  		$('#demo-checked-all-mail').on('click', function(e){
  			if(!mSelAllCb.niftyCheck('isChecked')){
  				mListCb.niftyCheck('toggleOn');
  				mSelAllCb.niftyCheck('toggleOn');
  			}else{
  				mListCb.niftyCheck('toggleOff');
  				mSelAllCb.niftyCheck('toggleOff');
  			}
  		});
  
  
  		// Sellect all checkboxes.
  		// =================================================================
  		$('#demo-select-all-list').on('click', function(e){
  			mListCb.niftyCheck('toggleOn');
  			mSelAllCb.niftyCheck('toggleOn');
  		});
  
  
  		// Toggle checkboxes.
  		// =================================================================
  		$('#demo-select-toggle-list').on('click', function(e){
  			mListCb.niftyCheck('toggle');
  		});
  
  
  		// Uncheck all checkboxes.
  		// =================================================================
  		$('#demo-select-none-list').on('click', function(e){
  			mListCb.niftyCheck('toggleOff');
  			mSelAllCb.niftyCheck('toggleOff');
  		});
  
  
  		// Check on all the messages that have been read.
  		// =================================================================
  		$('#demo-select-read-list').on('click', function(e){
  			mListCb.niftyCheck('toggleOff');
  			mReadCb.niftyCheck('toggleOn');
  		});
  
  
  		// Checks on all unread messages.
  		// =================================================================
  		$('#demo-select-unread-list').on('click', function(e){
  			mListCb.niftyCheck('toggleOff');
  			mUnreadCb.niftyCheck('toggleOn');
  		});
  
  
  		// Check on all the messages that have been starred.
  		// =================================================================
  		$('#demo-select-starred-list').on('click', function(e){
  			mListCb.niftyCheck('toggleOff');
  			$('#demo-mail-list').find('.mail-starred .demo-cb-mail').niftyCheck('toggleOn');
  		});
  
  
  		//  Toggle the star on/off.
  		// =================================================================
  		mStarBtn.on('click', function(e){
  			e.preventDefault();
  
  			$(this).closest('li').toggleClass('mail-starred');
  		});
  
  
  		// highlight the message.
  		// =================================================================
  		mListCb.on('nifty.ch.checked', function(){
  			$(this).parents('li').addClass('highlight');
  		}).on('nifty.ch.unchecked', function(){
  			$(this).closest('li').removeClass('highlight');
  		});
  
  
  		// Loading overlay.
  		// =================================================================
  		$('#demo-mail-ref-btn').niftyOverlay().on('click', function(){
  			var $el = $(this), relTime;
  
  			$el.niftyOverlay('show');
  			relTime = setInterval(function(){
  				$el.niftyOverlay('hide');
  				clearInterval(relTime);
  			},2500);
  		});
          vueUI.hideLoading();
  
      }
  });
  
  
  

});
