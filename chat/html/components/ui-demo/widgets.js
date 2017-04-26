define('widgets', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\r\n\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<div id=\"page-content\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Profile Widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel widget\">\r\n\t\t\t\t\t\t\t\t<div class=\"widget-header bg-primary\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"widget-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"Profile Picture\" class=\"widget-img img-circle img-border-light\" src=\"/static/img/av2.png\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">John Doe</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-btm\">Administrator</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Follow</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\">Message</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Profile Widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel widget\">\r\n\t\t\t\t\t\t\t\t<div class=\"widget-header bg-success\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"widget-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"Profile Picture\" class=\"widget-img img-circle img-border\" src=\"/static/img/av3.png\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Donald Brown</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-btm\">Web and Graphic designer</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-icon btn-hover-primary fa fa-facebook icon-lg add-tooltip\" href=\"#\" title=\"Facebook\"></a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-icon btn-hover-info fa fa-twitter icon-lg add-tooltip\" href=\"#\" title=\"Twitter\"></a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-icon btn-hover-danger fa fa-google-plus icon-lg add-tooltip\" href=\"#\" title=\"Google+\"></a>\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default btn-icon btn-hover-mint fa fa-envelope icon-lg add-tooltip\" href=\"#\" title=\"Email\"></a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Profile Widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel widget\">\r\n\t\t\t\t\t\t\t\t<div class=\"widget-header bg-purple\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"widget-bg img-responsive\" src=\"/static/img/thumbs/img3.jpg\" alt=\"Image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"widget-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"Profile Picture\" class=\"widget-img img-border-light\" src=\"/static/img/av4.png\" >\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Lucy Moon</h4>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-btm\">Art Designer</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled text-center pad-top mar-no clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-lg\">1,345</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Following</small>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-lg\">23,456</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Followers</small>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-lg\">52,678</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Likes</small>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Profile Heading-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-bg-cover\">\r\n\t\t\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"/static/img/thumbs/img1.jpg\" alt=\"Image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-media\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av1.png\" class=\"panel-media-img img-circle img-border-light\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"panel-media-heading\">Stephen Tran</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn-link\">@stephen_doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-btm\">Web and Graphic designer</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-5 text-lg-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-primary\">Add Friend</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-sm btn-mint btn-icon fa fa-envelope icon-lg\"></button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Profile Widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body bg-purple\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"Avatar\" class=\"img-md img-circle img-border\" src=\"/static/img/av5.png\" >\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Brenda Fuller</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Project manager</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">\r\n\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut sed diam.\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn-link\">http://www.themeon.net</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Follow</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\">Message</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-8\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Realtime flot chart-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-control\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-success\">Online</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Server Load</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-inline mar-no\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 text-thin\">40%</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\"><small>Avg. Server Load</small></p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 text-thin\">24 Days</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\"><small>Up Time</small></p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"h4 text-thin\">00:05:23</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted text-uppercase\"><small>Avg. Time on Site</small></p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div id=\"demo-realtime-chart\" class=\"flot-full-content\">\r\n\t\t\t\t\t\t\t\t\t<!--Flot chart placement-->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Realtime flot chart-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Guege server load-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body bg-success text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Gauge placeholder-->\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"demo-gauge\" height=\"105\" class=\"canvas-responsive\"></canvas>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer <a href=\"#\" class=\"add-tooltip text-semibold\" data-title=\"45%\">adipiscing elit</a>, sed diam nonummy nibh. Lorem ipsum dolor sit amet.</p>\r\n\t\t\t\t\t\t\t\t\t<small class=\"text-muted\"><em>Last Update : Des 12, 2014</em></small>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled row text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Gauge info-->\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span id=\"demo-gauge-text\" class=\"text-2x\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t1,788\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<small>% Server Load</small>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text-2x\">48 Days</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<small>Up Time</small>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Guege server load-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Weather widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div id=\"demo-weather-widget-md\" class=\"panel panel-mint panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Weather widget body-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"row pad-top\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-md-icon-1\" width=\"98\" height=\"98\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-4x\">27&#176;</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"\">Partly Cloudy Day</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin mar-no pad-top\">San Jose, CA</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Today</p>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Weather widget footer-->\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled text-center clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-md-icon-2\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Saturday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>25 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-md-icon-3\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Sunday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>22 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-md-icon-4\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Monday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>20 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-md-icon-5\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Monday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>28 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Weather widget-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Large weather widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div id=\"demo-weather-widget-lg\" class=\"panel panel-info panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Widget heading-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker fa-3x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin mar-no text-left\">San Jose, CA</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-left\">Today</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Widget body-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"row pad-top\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-1\" width=\"98\" height=\"98\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-4x\">27&#176;</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Partly Cloudy Day</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Widget footer-->\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled text-center clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-2\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Saturday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>25 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-3\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Sunday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>22 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-4\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Monday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>20 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-5\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Tuesday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>28 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-6\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Wednesday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>22 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"col-xs-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-lg-icon-7\" width=\"32\" height=\"32\"></canvas>\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mar-no\">Thursday</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>25 &#176;C</p>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Large weather widget-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Small weather widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body bg-warning\">\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-sm-icon\" width=\"128\" height=\"128\"></canvas>\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin mar-no pad-top\">San Jose, CA</h4>\r\n\t\t\t\t\t\t\t\t\t<p>Today</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-4x\">20&#176;</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"\">Rainy Day</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Small weather widget-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Extra small weather widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"panel media middle\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left bg-primary pad-all\">\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-xs-icon-1\" width=\"48\" height=\"48\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body pad-lft\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin\">32&#176;</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">Sunny</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Extra small weather widget-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Easy pie chart-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body bg-purple text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Placeholder-->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-pie-1\" data-percent=\"35\" class=\"pie-title-center\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pie-value\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetuer <a href=\"#\" class=\"add-tooltip text-semibold\" data-title=\"45%\">adipiscing elit</a>, sed diam nonummy nibh. Lorem ipsum dolor sit amet.</p>\r\n\t\t\t\t\t\t\t\t\t<small class=\"text-muted\"><em>Last Update : Des 12, 2014</em></small>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-3x text-primary\">5,327</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Easy pie chart-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Extra small weather widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel media middle\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left pad-all\">\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"demo-weather-xs-icon-2\" width=\"48\" height=\"48\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body pad-lft\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin text-mint\">25&#176;</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">Partly Cloudy Day</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--End Extra small weather widget-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-lg-6\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Chat widget-->\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<!--Heading-->\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-control\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\" data-toggle=\"collapse\" data-target=\"#demo-chat-body\"><i class=\"fa fa-chevron-down\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-toggle=\"dropdown\"><i class=\"fa fa-gear\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Available</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Busy</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Away</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a id=\"demo-connect-chat\" href=\"#\" class=\"disabled-link\" data-target=\"#demo-chat-body\">Connect</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a id=\"demo-disconnect-chat\" href=\"#\" data-target=\"#demo-chat-body\" >Disconect</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Chat</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!--Widget body-->\r\n\t\t\t\t\t\t\t\t<div id=\"demo-chat-body\" class=\"collapse in\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"nano\" style=\"height:380px\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"nano-content pad-all\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled media-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av1.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">John Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Hello Lucy, how can I help you today ?</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i>09:23AM\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor speech-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">Lucy Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Hi, I want to buy a new shoes.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:23AM\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av1.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">John Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Shipment is free. You\\'ll get your shoes tomorrow!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:25\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor speech-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">Lucy Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Wow, that\\'s great!</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:27\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor speech-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">Lucy Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Ok. Thanks for the answer. Appreciated.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:28\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av1.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">John Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>You are welcome! <br/> Is there anything else I can do for you today?</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:30\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor speech-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">Lucy Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Nope, That\\'s it.</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:31\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"mar-btm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av1.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body pad-hor\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"speech\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"media-heading\">John Doe</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>Thank you for contacting us today</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"speech-time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clock-o fa-fw\"></i> 09:32\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Widget footer-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-footer\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-9\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter your text\" class=\"form-control chat-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\">Send</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t<!--Chat widget-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--Simple Tiles-->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sales-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-primary panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">53</span>\r\n\t\t\t\t\t\t\t\t\t<p>Sales</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Messages-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-warning panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">68</span>\r\n\t\t\t\t\t\t\t\t\t<p>Messages</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Projects-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-purple panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">32</span>\r\n\t\t\t\t\t\t\t\t\t<p>Projects</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-code\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Reports-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-dark panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">12</span>\r\n\t\t\t\t\t\t\t\t\t<p>Reports</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-file-text\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--New Items-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-info panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">254</span>\r\n\t\t\t\t\t\t\t\t\t<p>New Items</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-plus-circle\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-4 col-lg-2\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Task-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-success panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-center\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-5x text-thin\">52</span>\r\n\t\t\t\t\t\t\t\t\t<p>Task</p>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-tasks\"></i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!--End Simple Tiles-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--Tiles - Bright version-->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Registered User-->\r\n\t\t\t\t\t\t\t<div class=\"panel media pad-all\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-success\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin\">241</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">Registered User</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--New Order-->\r\n\t\t\t\t\t\t\t<div class=\"panel media pad-all\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-info\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin\">543</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">New Order</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Comments-->\r\n\t\t\t\t\t\t\t<div class=\"panel media pad-all\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-warning\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comment fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin\">34</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">Comments</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sales-->\r\n\t\t\t\t\t\t\t<div class=\"panel media pad-all\">\r\n\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-sm icon-circle bg-danger\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dollar fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-2x mar-no text-thin\">654</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-muted mar-no\">Sales</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!--End Tiles - Bright version-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Tile with progress bar - (Visit Today)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-success panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all media\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"h3 text-thin media-heading\">314,675</p>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-uppercase\">Visit Today</small>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"progress progress-xs progress-dark-base mar-no\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"width: 30%\" class=\"progress-bar progress-bar-light\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"30\" role=\"progressbar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-right\">\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\">30%</span> Higher than yesterday</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Tile with progress bar - (Visit Today)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Tile with progress bar - (Comments)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-mint panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all media\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comment fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"h3 text-thin media-heading\">45.9%</p>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-uppercase\">comments</small>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"progress progress-xs progress-dark-base mar-no\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"width: 45.9%\" class=\"progress-bar progress-bar-light\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"45.9\" role=\"progressbar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-right\">\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-unlock-alt fa-fw\"></i> 312</span> Unapproved comments</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Tile with progress bar - (Comments)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Tile with progress bar - (New Order)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-purple panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all media\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart fa-fw fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"h3 text-thin media-heading\">5,345</p>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-uppercase\">New Order</small>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"progress progress-xs progress-dark-base mar-no\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"width: 75%\" class=\"progress-bar progress-bar-light\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" role=\"progressbar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-right\">\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-shopping-cart fa-fw\"></i> 954</span> Sales in this month</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Tile with progress bar - (New Order)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Tile with progress bar - (Earning)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-pink panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all media\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-wrap icon-wrap-xs\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dollar fa-fw fa-2x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"h3 text-thin media-heading\">7,428</p>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"text-uppercase\">Earning</small>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"progress progress-xs progress-dark-base mar-no\">\r\n\t\t\t\t\t\t\t\t\t<div style=\"width: 37.4%\" class=\"progress-bar progress-bar-light\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"37.4\" role=\"progressbar\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"pad-all text-right\">\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-dollar fa-fw\"></i> 22,675</span> Total Earning</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Tile with progress bar - (Earning)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Large Tile - (Visit Today)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-dark panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users fa-5x\"></i>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<p class=\"h2 mar-btm text-thin\">254,487</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase mar-no text-sm\">Visit Today</p>\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\">7%</span> Higher than yesterday</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Large Tile - (Visit Today)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Large Tile - (Comments)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-danger panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-comment fa-5x\"></i>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<p class=\"h2 mar-btm text-thin\">873</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase mar-no text-sm\">Comments</p>\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-unlock-alt fa-fw\"></i> 154</span> Unapproved comments</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Large Tile - (Comments)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Large Tile - (New Orders)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-primary panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-shopping-cart fa-5x\"></i>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<p class=\"h2 mar-btm text-thin\">2,423</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase mar-no text-sm\">New Order</p>\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-shopping-cart fa-fw\"></i> 954</span> Sales in this month</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--Large Tile - (New Orders)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Large Tile - (Earning)-->\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-lg-3\">\r\n\t\t\t\t\t\t\t<div class=\"panel panel-info panel-colorful\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-dollar fa-5x\"></i>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<p class=\"h2 mar-btm text-thin\">7,428</p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"text-uppercase mar-no text-sm\">Earning</p>\r\n\t\t\t\t\t\t\t\t\t<small><span class=\"text-semibold\"><i class=\"fa fa-dollar fa-fw\"></i> 22,675</span> Total Earning</small>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t<!--End Large Tile - (Earning)-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<!--End page content-->\r\n\r\n\r\n",
      el: function() {
          return "#page-content";
      },
      ready: function(){
  		// Widgets.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  	    // REALTIME FLOT CHART
  		// =================================================================
  		// Require Flot Charts
  		// -----------------------------------------------------------------
  		// http://www.flotcharts.org/
  		// =================================================================
  		// We use an inline data source in the example, usually data would
  		// be fetched from a server
  
  		var data = [],  totalPoints = 300;
  
  		function getRandomData() {
  			if (data.length > 0)
  				data = data.slice(1);
  
  			// Do a random walk
  
  			while (data.length < totalPoints) {
  				var prev = data.length > 0 ? data[data.length - 1] : 50,
  					y = prev + Math.random() * 10 - 5;
  
  				if (y < 0) {
  					y = 0;
  				} else if (y > 100) {
  					y = 100;
  				}
  
  				data.push(y);
  			}
  
  			// Zip the generated y values with the x values
  			var res = [];
  			for (var i = 0; i < data.length; ++i) {
  				res.push([i, data[i]])
  			}
  			return res;
  		}
  
  		// Set up the control widget
  		var updateInterval = 1000;
  		var flotOptions = {
  			series: {
  				lines: {
  					lineWidth:0,
  					show: true,
  					fill: true,
  					fillColor : "#3f8bd1"
  				},
  				shadowSize: 0	// Drawing is faster without shadows
  			},
  			yaxis: {
  				min: 0,
  				max: 110,
  				ticks: 30,
  				show: false
  			},
  			xaxis: {
  				show: false
  			},
  			grid: {
  				hoverable: true,
  				clickable: true,
  				borderWidth: 0
  			},
  			tooltip: false,
  			tooltipOpts: {
  				defaultTheme: false
  			}
  		}
  
  
  		var plot = $.plot("#demo-realtime-chart", [ getRandomData() ], flotOptions);
  		function update() {
  			plot.setData([getRandomData()]);
  
  			// Since the axes don't change, we don't need to call plot.setupGrid()
  
  			plot.draw();
  			setTimeout(update, updateInterval);
  		}
  		update();
  
  
  
  
  
  
  
  
  
  
  		// GAUGE PLUGIN
  		// =================================================================
  		// Require Gauge.js
  		// -----------------------------------------------------------------
  		// http://bernii.github.io/gauge.js/
  		// =================================================================
  		var opts = {
  			lines: 10, // The number of lines to draw
  			angle: 0, // The length of each line
  			lineWidth: 0.41, // The line thickness
  			pointer: {
  				length: 0.75, // The radius of the inner circle
  				strokeWidth: 0.035, // The rotation offset
  				color: '#54851e' // Fill color
  			},
  			limitMax: 'true', // If true, the pointer will not go past the end of the gauge
  			colorStart: '#fff', // Colors
  			colorStop: '#fff', // just experiment with them
  			strokeColor: '#75a93c', // to see which ones work best for you
  			generateGradient: true
  		};
  
  
  		var target = document.getElementById('demo-gauge'); // your canvas element
  		var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  		gauge.maxValue = 100; // set max gauge value
  		gauge.animationSpeed = 32; // set animation speed (32 is default value)
  		gauge.set(57); // set actual value
  		gauge.setTextField(document.getElementById("demo-gauge-text"));
  
  
  
  
  
  
  
  
  
  
  
  
  		// PIE CHART
  		// =================================================================
  		// Require easyPieChart
  		// -----------------------------------------------------------------
  		// http://rendro.github.io/easy-pie-chart/
  		// =================================================================
  		$('#demo-pie-1').easyPieChart({
  			barColor :'#ffffff',
  			scaleColor:'#A06AD8',
  			trackColor : '#A06AD8',
  			lineCap : 'round',
  			lineWidth :8,
  			onStep: function(from, to, percent) {
  				$(this.el).find('.pie-value').text(Math.round(percent) + '%');
  			}
  		});
  
  
  
  
  
  
  
  
  
  		// MEDIUM WEATHER WIDGET
  		// =================================================================
  		// Require sckycons
  		// -----------------------------------------------------------------
  		// http://darkskyapp.github.io/skycons/
  		// =================================================================
  
  		// on Android, a nasty hack is needed: {"resizeClear": true}
  		skyconsOptions = {
  			"color": "#fff",
  			"resizeClear": true
  		}
  
  		/* Main Icon */
  		var skycons = new Skycons(skyconsOptions);
  		skycons.add("demo-weather-md-icon-1", Skycons.PARTLY_CLOUDY_DAY);
  		skycons.play();
  
  
  
  		/* Small Icons*/
  		var skycons2 = new Skycons(skyconsOptions);
  		skycons2.add("demo-weather-md-icon-2", Skycons.CLOUDY);
  		skycons2.play();
  
  
  		var skycons3 = new Skycons(skyconsOptions);
  		skycons3.add("demo-weather-md-icon-3", Skycons.WIND);
  		skycons3.play();
  
  
  		var skycons4 = new Skycons(skyconsOptions);
  		skycons4.add("demo-weather-md-icon-4", Skycons.RAIN);
  		skycons4.play();
  
  
  		var skycons5 = new Skycons(skyconsOptions);
  		skycons5.add("demo-weather-md-icon-5", Skycons.PARTLY_CLOUDY_DAY);
  		skycons5.play();
  
  
  
  
  
  
  
  		// LARGE WEATHER WIDGET
  		// =================================================================
  		// Require sckycons
  		// -----------------------------------------------------------------
  		// http://darkskyapp.github.io/skycons/
  		// =================================================================
  
  		/* Main Icon */
  		var skycons = new Skycons(skyconsOptions);
  		skycons.add("demo-weather-lg-icon-1", Skycons.CLEAR_DAY);
  		skycons.play();
  
  
  		/* Small Icons*/
  		var skycons2 = new Skycons(skyconsOptions);
  		skycons2.add("demo-weather-lg-icon-2", Skycons.CLOUDY);
  		skycons2.play();
  
  
  		var skycons3 = new Skycons(skyconsOptions);
  		skycons3.add("demo-weather-lg-icon-3", Skycons.WIND);
  		skycons3.play();
  
  
  		var skycons4 = new Skycons(skyconsOptions);
  		skycons4.add("demo-weather-lg-icon-4", Skycons.RAIN);
  		skycons4.play();
  
  
  		var skycons5 = new Skycons(skyconsOptions);
  		skycons5.add("demo-weather-lg-icon-5", Skycons.PARTLY_CLOUDY_DAY);
  		skycons5.play();
  
  
  		var skycons6 = new Skycons(skyconsOptions);
  		skycons6.add("demo-weather-lg-icon-6", Skycons.WIND);
  		skycons6.play();
  
  
  		var skycons7 = new Skycons(skyconsOptions);
  		skycons7.add("demo-weather-lg-icon-7", Skycons.CLOUDY);
  		skycons7.play();
  
  
  
  
  
  
  
  
  
  
  
  		// SMALL WEATHER WIDGET
  		// =================================================================
  		// Require sckycons
  		// -----------------------------------------------------------------
  		// http://darkskyapp.github.io/skycons/
  		// =================================================================
  
  		var skycons = new Skycons(skyconsOptions);
  		skycons.add("demo-weather-sm-icon", Skycons.RAIN);
  		skycons.play();
  
  
  
  
  
  
  
  
  
  
  
  		// EXTRA SMALL WEATHER WIDGET
  		// =================================================================
  		// Require sckycons
  		// -----------------------------------------------------------------
  		// http://darkskyapp.github.io/skycons/
  		// =================================================================
  		skycons = new Skycons(skyconsOptions);
  		skycons.add("demo-weather-xs-icon-1", Skycons.CLEAR_DAY);
  		skycons.play();
  
  
  
  
  
  
  
  
  		// EXTRA SMALL WEATHER WIDGET
  		// =================================================================
  		// Require sckycons
  		// -----------------------------------------------------------------
  		// http://darkskyapp.github.io/skycons/
  		// =================================================================
  
  		skycons = new Skycons({
  			"color": "#00b19d",
  			"resizeClear": true
  		});
  
  		skycons.add("demo-weather-xs-icon-2", Skycons.PARTLY_CLOUDY_DAY);
  		skycons.play();
  		vueUI.hideLoading();
      }
  });
  

});
