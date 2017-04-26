define('charts', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--===================================================-->\r\n\t\t\t\t<div id=\"page-content\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"eq-height\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-control panel-control-component\">\r\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">Auto update</small>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" data-size=\"switchery-md\" id=\"demo-auto-gauge\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Gauge</h3>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!-- Gauge JS -->\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<!--Gauge placeholder-->\r\n\t\t\t\t\t\t\t\t\t\t\t<canvas id=\"demo-gauge\" height=\"70\" class=\"canvas-responsive\"></canvas>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"h4\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span id=\"demo-gauge-txt\" class=\"label label-primary\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t<!-- End Gauge JS -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Easy pie charts</h3>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Easy Pie Chart-->\r\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-pie-1\" class=\"pie-title-center mar-rgt\" data-percent=\"35\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pie-value text-thin\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t\t<!-- End Easy Pie Chart -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-4 eq-box-lg\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Easy pie charts</h3>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<!--Easy Pie Chart-->\r\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-pie-2\" class=\"pie-title-center\" data-percent=\"83\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pie-value text-thin\"></span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t\t\t\t\t\t<!-- End Easy Pie Chart -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<h3 class=\"text-thin\">Sparkline</h3>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sparkline Area Chart-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-success panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Placeholder-->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-sparkline-area\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"bg-light pad-ver\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Sparkline</h4> Area Chart\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sparkline Line Chart-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-info panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Placeholder-->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-sparkline-line\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"bg-light pad-ver\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Sparkline</h4> Line Chart\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sparkline Bar Chart-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-purple panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Placeholder-->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-sparkline-bar\" class=\"box-inline\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"bg-light pad-ver\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Sparkline</h4> Bar Chart\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-lg-3\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!--Sparkline Pie Chart-->\r\n\t\t\t\t\t\t\t<div class=\"panel panel-mint panel-colorful text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Placeholder-->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-sparkline-pie\" class=\"box-inline \"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"bg-light pad-ver\">\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"text-thin\">Sparkline</h4> Pie chart\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<h3 class=\"text-thin mar-btm\">Morris Charts</h3>\r\n\t\t\t\t\t<hr>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--Morris Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Area Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Morris Area Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-morris-area\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Line Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Morris Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-morris-line\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Bar Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Morris Bar Chart placeholder -->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-morris-bar\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Donut Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Morris Donut Chart placeholder -->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-morris-donut\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Morris Charts -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 class=\"text-thin mar-btm\">Flot Charts</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Line Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-flot-line\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">Pie Chart</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Donut Chart placeholder -->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-flot-donut\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Morris Charts -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 class=\"text-thin mar-btm\">自己封装echart</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">折线</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-line\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">饼图</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Donut Chart placeholder -->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-pie\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">柱图</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-bar\" style=\"height:212px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">测试重置</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<from>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" v-model=\"form.a\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" v-model=\"form.b\">\r\n\t\t\t\t\t\t\t\t\t</from>\r\n\t\t\t\t\t\t\t\t\t<button @click=\"reset\">重置</button>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Morris Charts -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<h3 class=\"text-thin mar-btm\">网络攻击示意图</h3>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- Flot Charts -->\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t<div class=\"panel\">\r\n\t\t\t\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">攻击示意图</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<!--Flot Line Chart placeholder-->\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\t\t\t\t<div id=\"demo-map\" style=\"height:600px\"></div>\r\n\t\t\t\t\t\t\t\t\t<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--===================================================-->\r\n\t\t\t\t\t<!-- End Flot Charts -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--===================================================-->\r\n",
      el: function() {
          return "#page-content";
      },
      data:function(){
      	return{
      		form:{
      			a:"aaa",
      			b:"bbb"
      		}
      	}
      },
      ready: function(){
      	vueUI.ajaxCall({
      		type:"get",
      		async:false,
      		url:'../../../static/libs/echarts/map/json/world.json',
      		success:function(chinaJson){
      			echarts.registerMap('world', chinaJson);
      		}
      	});
      	this.drawmap();
      	vueUI.draw({
      		title:"络安网站访问来源",
      		target:"demo-pie",
      		type:"pie",
      		data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ]
      	});
      	vueUI.draw({
      		title:"络安网站访问来源",
      		target:"demo-line",
      		type:"line",
      		xdata:['周一','周二','周三','周四','周五','周六','周日'],
      		data:[
  		        {
  		            name:'邮件营销',
  		            data:[120, 132, 101, 134, 90, 230, 210]
  		        },
  		        {
  		            name:'联盟广告',
  		            data:[220, 182, 191, 234, 290, 330, 310]
  		        },
  		        {
  		            name:'视频广告',
  		            data:[150, 232, 201, 154, 190, 330, 410]
  		        }
  		    ]
      	});
      	vueUI.draw({
      		title:"络安网站访问来源",
      		target:"demo-bar",
      		type:"bar",
      		xdata:['周一','周二','周三','周四','周五','周六','周日'],
      		data:[
  		        {
  		            name:'邮件营销',
  		            data:[120, 132, 101, 134, 90, 230, 210]
  		        },
  		        {
  		            name:'联盟广告',
  		            data:[220, 182, 191, 234, 290, 330, 310]
  		        },
  		        {
  		            name:'视频广告',
  		            data:[150, 232, 201, 154, 190, 330, 410]
  		        },
  		        {
  		            name:'直接访问',
  		            data:[320, 332, 301, 334, 390, 330, 320]
  		        },
  		        {
  		            name:'搜索引擎',
  		            data:[820, 932, 901, 934, 1290, 1330, 1320]
  		        }
  		    ]
      	});
  		// Charts.js
  		// ====================================================================
  		// This file should not be included in your project.
  		// This is just a sample how to initialize plugins or components.
  		//
  		// - ThemeOn.net -
  
  		// GAUGE JS
  		// =================================================================
  		// Require GaugeJS
  		// -----------------------------------------------------------------
  		// http://bernii.github.io/gauge.js/
  		// =================================================================
  		var opts = {
  			lines: 10, // The number of lines to draw
  			angle: 0, // The length of each line
  			lineWidth: 0.3, // The line thickness
  			pointer: {
  				length: 0.45, // The radius of the inner circle
  				strokeWidth: 0.035, // The rotation offset
  				color: '#242d3c' // Fill color
  			},
  			limitMax: 'true', // If true, the pointer will not go past the end of the gauge
  			colorStart: '#177bbb', // Colors
  			colorStop: '#177bbb', // just experiment with them
  			strokeColor: '#ddd', // to see which ones work best for you
  			generateGradient: true
  		};
  
  
  		var target = document.getElementById('demo-gauge'); // your canvas element
  		var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  		gauge.maxValue = 1500; // set max gauge value
  		gauge.animationSpeed = 32; // set animation speed (32 is default value)
  		gauge.set(570); // set actual value
  		gauge.setTextField(document.getElementById("demo-gauge-txt"));
  
  
  
  		// REALTIME SAMPLE
  		// =================================================================
  		var updateGauge;
  		var gaugeSwitch = document.getElementById('demo-auto-gauge');
  		gaugeSwitch.checked = false;
  		new Switchery(gaugeSwitch);
  
  		gaugeSwitch.onchange = function(){
  			if (gaugeSwitch.checked) {
  				updateGauge = setInterval(function(){
  					gauge.set(nifty.randomInt(1,1500));
  				},2000)
  			}else{
  				clearInterval(updateGauge);
  			}
  		};
  
  
  
  
  
  
  
  		// EASY PIE CHART
  		// =================================================================
  		// Require easyPieChart
  		// -----------------------------------------------------------------
  		// http://rendro.github.io/easy-pie-chart/
  		// =================================================================
  		$('#demo-pie-1').easyPieChart({
  			barColor :'#68b828',
  			scaleColor: false,
  			trackColor : '#eee',
  			lineCap : 'round',
  			lineWidth :8,
  			onStep: function(from, to, percent) {
  				$(this.el).find('.pie-value').text(Math.round(percent) + '%');
  			}
  		});
  		$('#demo-pie-2').easyPieChart({
  			barColor :'#8465d4',
  			scaleColor:false,
  			trackColor : '#eee',
  			lineCap : 'butt',
  			lineWidth :8,
  			onStep: function(from, to, percent) {
  				$(this.el).find('.pie-value').text(Math.round(percent) + '%');
  			}
  		});
  
  
  
  
  		// SPARKLINE AREA CHART
  		// =================================================================
  		// Require sparkline
  		// -----------------------------------------------------------------
  		// http://omnipotent.net/jquery.sparkline/#s-about
  		// =================================================================
  		$("#demo-sparkline-area").sparkline([57,69,70,68,73,76,75,79,73,76,77,73], {
  			type: 'line',
  			width: '130',
  			height: '75',
  			spotRadius: 2.5,
  			lineWidth:1.5,
  			lineColor:'rgba(255,255,255,.5)',
  			fillColor: 'rgba(0,0,0,0.2)',
  			spotColor: 'rgba(255,255,255,.5)',
  			minSpotColor: 'rgba(255,255,255,.5)',
  			maxSpotColor: 'rgba(255,255,255,.5)',
  			highlightLineColor : '#ffffff',
  			highlightSpotColor: '#ffffff',
  			tooltipChartTitle: 'Usage',
  			tooltipSuffix:' %'
  		});
  
  
  
  		// SPARKLINE LINE CHART
  		// =================================================================
  		// Require sparkline
  		// -----------------------------------------------------------------
  		// http://omnipotent.net/jquery.sparkline/#s-about
  		// =================================================================
  		$("#demo-sparkline-line").sparkline([345,404,305,455,378,767], {
  			type: 'line',
  			width: '130',
  			height: '75',
  			spotRadius: 2.5,
  			lineWidth:1.5,
  			lineColor:'#ffffff',
  			fillColor: false,
  			minSpotColor :false,
  			maxSpotColor : false,
  			highlightLineColor : '#ffffff',
  			highlightSpotColor: '#ffffff',
  			tooltipChartTitle: 'Earning',
  			tooltipPrefix :'$ ',
  			spotColor:'#ffffff',
  			valueSpots : {
  				'0:': '#ffffff'
  			}
  		});
  
  
  		// SPARKLINE BAR CHART
  		// =================================================================
  		// Require sparkline
  		// -----------------------------------------------------------------
  		// http://omnipotent.net/jquery.sparkline/#s-about
  		// =================================================================
  		$("#demo-sparkline-bar").sparkline([40,32,53,45,67,45,56,34,67,76], {
  			type: 'bar',
  			height: '75',
  			barWidth: 9,
  			barSpacing: 3,
  			zeroAxis: false,
  			tooltipChartTitle: 'Daily Sales',
  			tooltipSuffix:' Sales',
  			barColor: '#fff'}
  		);
  
  
  		// SPARKLINE PIE CHART
  		// =================================================================
  		// Require sparkline
  		// -----------------------------------------------------------------
  		// http://omnipotent.net/jquery.sparkline/#s-about
  		// =================================================================
  		$("#demo-sparkline-pie").sparkline([5, 12, 17 ,55], {
  			type: 'pie',
  			width: '75',
  			height: '75',
  			tooltipChartTitle: 'Top Movies',
  			tooltipFormat: '{{offset:offset}} ({{percent.1}}%)',
  			tooltipValueLookups: {
  				'offset': {
  					0: 'Drama',
  					1: 'Action',
  					2: 'Comedy',
  					3: 'Adventure'
  				}
  			},
  			sliceColors: ['#2d4859','#fe7211','#7ad689','#128376'],
  		});
  
  
  
  		// MORRIS AREA CHART
  		// =================================================================
  		// Require MorrisJS Chart
  		// -----------------------------------------------------------------
  		// http://morrisjs.github.io/morris.js/
  		// =================================================================
  
  		Morris.Area({
  			element: 'demo-morris-area',
  			data: [{
  				period: 'January',
  				dl: 77,
  				up: 25
  				}, {
  				period: 'February',
  				dl: 127,
  				up: 58
  				}, {
  				period: 'March',
  				dl: 115,
  				up: 46
  				}, {
  				period: 'April',
  				dl: 239,
  				up: 57
  				}, {
  				period: 'May',
  				dl: 46,
  				up: 75
  				}, {
  				period: 'June',
  				dl: 97,
  				up: 57
  				}, {
  				period: 'July',
  				dl: 105,
  				up: 70
  				}, {
  				period: 'August',
  				dl: 115,
  				up: 106
  				}, {
  				period: 'September',
  				dl: 239,
  				up: 187
  				}, {
  				period: 'October',
  				dl: 246,
  				up: 215
  				}],
  			gridEnabled: false,
  			gridLineColor: 'transparent',
  			behaveLikeLine: true,
  			xkey: 'period',
  			ykeys: ['dl', 'up'],
  			labels: ['Visitor', 'Pageview'],
  			lineColors: ['#045d97'],
  			pointSize: 0,
  			pointStrokeColors : ['#045d97'],
  			lineWidth: 0,
  			resize:true,
  			hideHover: 'auto',
  			fillOpacity: 0.7,
  			parseTime:false
  		});
  
  
  		// MORRIS LINE CHART
  		// =================================================================
  		// Require MorrisJS Chart
  		// -----------------------------------------------------------------
  		// http://morrisjs.github.io/morris.js/
  		// =================================================================
  		var day_data = [
  			{"elapsed": "I", "value": 34},
  			{"elapsed": "II", "value": 24},
  			{"elapsed": "III", "value": 3},
  			{"elapsed": "IV", "value": 12},
  			{"elapsed": "V", "value": 13},
  			{"elapsed": "VI", "value": 22},
  			{"elapsed": "VII", "value": 5},
  			{"elapsed": "VIII", "value": 26},
  			{"elapsed": "IX", "value": 12},
  			{"elapsed": "X", "value": 19}
  		];
  		Morris.Line({
  			element: 'demo-morris-line',
  			data: day_data,
  			xkey: 'elapsed',
  			ykeys: ['value'],
  			labels: ['value'],
  			gridEnabled: false,
  			gridLineColor: 'transparent',
  			lineColors: ['#045d97'],
  			lineWidth: 2,
  			parseTime: false,
  			resize:true,
  			hideHover: 'auto'
  		});
  
  
  
  		// MORRIS BAR CHART
  		// =================================================================
  		// Require MorrisJS Chart
  		// -----------------------------------------------------------------
  		// http://morrisjs.github.io/morris.js/
  		// =================================================================
  		Morris.Bar({
  			element: 'demo-morris-bar',
  			data: [
  				{ y: '1', a: 100, b: 90 },
  				{ y: '2', a: 75,  b: 65 },
  				{ y: '3', a: 20,  b: 15 },
  				{ y: '5', a: 50,  b: 40 },
  				{ y: '6', a: 75,  b: 95 },
  				{ y: '7', a: 15,  b: 65 },
  				{ y: '8', a: 70,  b: 100 },
  				{ y: '9', a: 100, b: 70 },
  				{ y: '10', a: 50, b: 70 },
  				{ y: '11', a: 20, b: 10 },
  				{ y: '12', a: 40, b: 90 },
  				{ y: '13', a: 70, b: 30 },
  				{ y: '14', a: 50, b: 50 },
  				{ y: '15', a: 100, b: 90 }
  			],
  			xkey: 'y',
  			ykeys: ['a', 'b'],
  			labels: ['Series A', 'Series B'],
  			gridEnabled: false,
  			gridLineColor: 'transparent',
  			barColors: ['#177bbb', '#afd2f0'],
  			resize:true,
  			hideHover: 'auto'
  		});
  
  
  
  		// MORRIS DONUT CHART
  		// =================================================================
  		// Require MorrisJS Chart
  		// -----------------------------------------------------------------
  		// http://morrisjs.github.io/morris.js/
  		// =================================================================
  		Morris.Donut({
  			element: 'demo-morris-donut',
  			data: [
  				{label: "Download Sales", value: 12},
  				{label: "In-Store Sales", value: 30},
  				{label: "Mail-Order Sales", value: 20}
  			],
  			colors: [
  				'#a6c600',
  				'#177bbb',
  				'#afd2f0'
  			],
  			resize:true
  		});
  
  
  
  		// FLOT CHART
  		// =================================================================
  		// Require Flot Charts
  		// -----------------------------------------------------------------
  		// http://www.flotcharts.org/
  		// =================================================================
  
  		var pageviews = [[1, 1700], [2, 1200], [3, 1090], [4, 1550], [5, 1700], [6, 1850], [7, 2736], [8, 3045], [9, 3779], [10, 4895], [11, 5209], [12, 5100]],
  		visitor = [[1, 456], [2, 589], [3, 354], [4, 558], [5, 254], [6, 656], [7, 124], [8, 523], [9, 256], [10, 987], [11, 854], [12, 965]];
  
  		var plot = $.plot("#demo-flot-line", [
  				{
  					label: 'Pageviews',
  					data: pageviews,
  					lines: {
  						show: true,
  						lineWidth:2,
  						fill: true,
  						fillColor: {
  							colors: [{opacity: 0.5}, {opacity: 0.5}]
  						}
  					},
  					points: {
  						show: true,
  						radius: 4
  					}
  				},
  				{
  					label: 'Visitors',
  					data: visitor,
  					lines: {
  						show: true,
  						lineWidth:2,
  						fill: true,
  						fillColor: {
  							colors: [{opacity: 0.5}, {opacity: 0.5}]
  						}
  					},
  					points: {
  						show: true,
  						radius: 4
  					}
  				}
  			],{
  			series: {
  				lines: {
  					show: true
  				},
  				points: {
  					show: true
  				},
  				shadowSize: 0	// Drawing is faster without shadows
  			},
  			colors: ['#177bbb', '#177bbb'],
  			legend: {
  				show: true,
  				position: 'nw',
  				margin: [15, 0]
  			},
  			grid: {
  				borderWidth: 0,
  				hoverable: true,
  				clickable: true
  			},
  			yaxis: {
  				ticks: 4, tickColor: '#eeeeee'
  			},
  			xaxis: {
  				ticks: 12,
  				tickColor: '#ffffff'
  			}
  		});
  
  
  		// Flot tooltip
  		// =================================================================
  		$("<div id='demo-flot-tooltip'></div>").css({
  			position: "absolute",
  			display: "none",
  			padding: "10px",
  			color: "#fff",
  			"text-align":"right",
  			"background-color": "#1c1e21"
  		}).appendTo("body");
  
  
  		$("#demo-flot-line").bind("plothover", function (event, pos, item) {
  
  			if (item) {
  				var x = item.datapoint[0].toFixed(2),  y = item.datapoint[1];
  				$("#demo-flot-tooltip").html("<p class='h4'>" + item.series.label + "</p>" + y)
  					.css({top: item.pageY+5, left: item.pageX+5})
  					.fadeIn(200);
  			} else {
  				$("#demo-flot-tooltip").hide();
  			}
  
  		});
  
  
  
  
  		// FLOT PIE CHART
  		// =================================================================
  		// Require Flot Charts
  		// -----------------------------------------------------------------
  		// http://www.flotcharts.org/
  		// =================================================================
  		var dataSet = [
  			{ label: "Comedy", data: 4119630000, color: "#177bbb" },
  			{ label: "Action", data: 1012960000, color: "#a6c600" },
  			{ label: "Adventure", data: 727080000, color: "#8669CC" },
  			{ label: "Drama", data: 344120000, color: "#f84f9a" }
  		];
  
  		$.plot('#demo-flot-donut', dataSet, {
  			series: {
  				pie: {
  					show: true,
  					combine: {
  					color: '#999',
  					threshold: 0.1
  					}
  				}
  			},
  			legend: {
  			show: false
  			}
  		});
          vueUI.hideLoading();
      },
      methods:{
      	drawmap:function(){
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
  			    '华盛顿': [-77.02,38.54]
  			};
  
  			var BJData = [
  			    [{name:'北京'}, {name:'上海',value:95}],
  			    [{name:'北京'}, {name:'广州',value:90}],
  			    [{name:'北京'}, {name:'大连',value:80}],
  			    [{name:'北京'}, {name:'南宁',value:70}],
  			    [{name:'北京'}, {name:'南昌',value:60}],
  			    [{name:'北京'}, {name:'拉萨',value:50}],
  			    [{name:'北京'}, {name:'长春',value:40}],
  			    [{name:'北京'}, {name:'包头',value:30}],
  			    [{name:'北京'}, {name:'重庆',value:20}],
  			    [{name:'北京'}, {name:'常州',value:10}],
  			    [{name:'北京'}, {name:'华盛顿',value:60}]
  			];
  
  			var SHData = [
  			    [{name:'上海'},{name:'包头',value:95}],
  			    [{name:'上海'},{name:'昆明',value:90}],
  			    [{name:'上海'},{name:'广州',value:80}],
  			    [{name:'上海'},{name:'郑州',value:70}],
  			    [{name:'上海'},{name:'长春',value:60}],
  			    [{name:'上海'},{name:'重庆',value:50}],
  			    [{name:'上海'},{name:'长沙',value:40}],
  			    [{name:'上海'},{name:'北京',value:30}],
  			    [{name:'上海'},{name:'丹东',value:20}],
  			    [{name:'上海'},{name:'大连',value:10}]
  			];
  
  			var GZData = [
  			    [{name:'广州'},{name:'福州',value:95}],
  			    [{name:'广州'},{name:'太原',value:90}],
  			    [{name:'广州'},{name:'长春',value:80}],
  			    [{name:'广州'},{name:'重庆',value:70}],
  			    [{name:'广州'},{name:'西安',value:60}],
  			    [{name:'广州'},{name:'成都',value:50}],
  			    [{name:'广州'},{name:'常州',value:40}],
  			    [{name:'广州'},{name:'北京',value:30}],
  			    [{name:'广州'},{name:'北海',value:20}],
  			    [{name:'广州'},{name:'海口',value:10}]
  			];
  
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
  
  			var color = ['#a6c84c', '#ffa022', '#46bee9'];
  			var series = [];
  			[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
  			    series.push({
  			        name: item[0] + ' Top10',
  			        type: 'lines',
  			        zlevel: 1,
  			        effect: {
  			            show: true,
  			            period: 6,
  			            trailLength: 0.7,
  			            color: '#fff',
  			            symbolSize: 3
  			        },
  			        lineStyle: {
  			            normal: {
  			                color: color[i],
  			                width: 0,
  			                curveness: 0.2
  			            }
  			        },
  			        data: convertData(item[1])
  			    },
  			    {
  			        name: item[0] + ' Top10',
  			        type: 'lines',
  			        zlevel: 2,
  			        effect: {
  			            show: true,
  			            period: 6,
  			            trailLength: 0,
  			            symbol: ['none', 'circle'],
  			            symbolSize: 2
  			        },
  			        lineStyle: {
  			            normal: {
  			                color: color[i],
  			                width: 1,
  			                opacity: 0.4,
  			                curveness: 0.2
  			            }
  			        },
  			        data: convertData(item[1])
  			    },
  			    {
  			        name: item[0] + ' Top10',
  			        type: 'effectScatter',
  			        coordinateSystem: 'geo',
  			        zlevel: 2,
  			        rippleEffect: {
  			            brushType: 'stroke'
  			        },
                      markPoint : {
                          symbol:'emptyCircle',
                          symbolSize : 10,
                          effect : {
                              show: true,
                              shadowBlur : 0
                          },
                          itemStyle:{
                              normal:{
                                  label:{show:false},
                                  borderWidth: 2,
                                  borderColor:"#FF3333",
                                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                  }, {
                                    offset: 1, color: 'blue' // 100% 处的颜色
                                  }], true)
                              },
                              emphasis: {
                                  label:{position:'top'}
                              }
                          },
                          data : [
                              {name:item[0],coord: geoCoordMap[item[0]]}
                          ]
                      },
  			        label: {
  			            normal: {
  			                show: true,
  			                position: 'right',
  			                formatter: '{b}'
  			            }
  			        },
  			        symbolSize: function (val) {
  			            return 5 + val[2] / 16;
  			        },
  			        symbol:'emptyCircle',
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
  			    });
  			});
  
  			var option = {
  			    backgroundColor: '#404a59',
  			    title : {
  			        text: '模拟攻击',
  			        subtext: '数据纯属虚构',
  			        left: 'center',
  			        textStyle : {
  			            color: '#fff'
  			        }
  			    },
  			    tooltip : {
  			        trigger: 'item'
  			    },
  			    legend: {
  			        orient: 'vertical',
  			        top: 'bottom',
  			        left: 'right',
  			        data:['北京 Top10', '上海 Top10', '广州 Top10'],
  			        textStyle: {
  			            color: '#fff'
  			        },
  			        selectedMode: 'single'
  			    },
  			    geo: {
  			        map: 'world',
  			        label: {
  			            emphasis: {
  			                show: false
  			            }
  			        },
  			        roam: true,
  			        itemStyle: {
  			            normal: {
  			                areaColor: '#323c48',
  			                borderColor: '#404a59'
  			            },
  			            emphasis: {
  			                areaColor: '#2a333d'
  			            }
  			        }
  			    },
  			    series: series
  			};
  			var mymap=echarts.init(document.getElementById("demo-map"));
  			mymap.setOption(option);
  			$(window).bind('resize', function(evt) {
  				mymap.resize();
  			});
      	},
      	drawchina:function(){
      		function randomData() {
  			    return Math.round(Math.random()*1000);
  			}
  
  			var option = {
  			    title: {
  			        text: 'iphone销量',
  			        subtext: '纯属虚构',
  			        left: 'center'
  			    },
  			    tooltip: {
  			        trigger: 'item'
  			    },
  			    legend: {
  			        orient: 'vertical',
  			        left: 'left',
  			        data:['iphone3','iphone4','iphone5']
  			    },
  			    visualMap: {
  			        min: 0,
  			        max: 2500,
  			        left: 'left',
  			        top: 'bottom',
  			        text: ['高','低'],           // 文本，默认为数值文本
  			        calculable: true
  			    },
  			    toolbox: {
  			        show: true,
  			        orient: 'vertical',
  			        left: 'right',
  			        top: 'center',
  			        feature: {
  			            dataView: {readOnly: false},
  			            restore: {},
  			            saveAsImage: {}
  			        }
  			    },
  			    series: [
  			        {
  			            name: 'iphone3',
  			            type: 'map',
  			            mapType: 'china',
  			            roam: false,
  			            label: {
  			                normal: {
  			                    show: true
  			                },
  			                emphasis: {
  			                    show: true
  			                }
  			            },
  			            data:[
  			                {name: '北京',value: randomData() },
  			                {name: '天津',value: randomData() },
  			                {name: '上海',value: randomData() },
  			                {name: '重庆',value: randomData() },
  			                {name: '河北',value: randomData() },
  			                {name: '河南',value: randomData() },
  			                {name: '云南',value: randomData() },
  			                {name: '辽宁',value: randomData() },
  			                {name: '黑龙江',value: randomData() },
  			                {name: '湖南',value: randomData() },
  			                {name: '安徽',value: randomData() },
  			                {name: '山东',value: randomData() },
  			                {name: '新疆',value: randomData() },
  			                {name: '江苏',value: randomData() },
  			                {name: '浙江',value: randomData() },
  			                {name: '江西',value: randomData() },
  			                {name: '湖北',value: randomData() },
  			                {name: '广西',value: randomData() },
  			                {name: '甘肃',value: randomData() },
  			                {name: '山西',value: randomData() },
  			                {name: '内蒙古',value: randomData() },
  			                {name: '陕西',value: randomData() },
  			                {name: '吉林',value: randomData() },
  			                {name: '福建',value: randomData() },
  			                {name: '贵州',value: randomData() },
  			                {name: '广东',value: randomData() },
  			                {name: '青海',value: randomData() },
  			                {name: '西藏',value: randomData() },
  			                {name: '四川',value: randomData() },
  			                {name: '宁夏',value: randomData() },
  			                {name: '海南',value: randomData() },
  			                {name: '台湾',value: randomData() },
  			                {name: '香港',value: randomData() },
  			                {name: '澳门',value: randomData() }
  			            ]
  			        },
  			        {
  			            name: 'iphone4',
  			            type: 'map',
  			            mapType: 'china',
  			            label: {
  			                normal: {
  			                    show: true
  			                },
  			                emphasis: {
  			                    show: true
  			                }
  			            },
  			            data:[
  			                {name: '北京',value: randomData() },
  			                {name: '天津',value: randomData() },
  			                {name: '上海',value: randomData() },
  			                {name: '重庆',value: randomData() },
  			                {name: '河北',value: randomData() },
  			                {name: '安徽',value: randomData() },
  			                {name: '新疆',value: randomData() },
  			                {name: '浙江',value: randomData() },
  			                {name: '江西',value: randomData() },
  			                {name: '山西',value: randomData() },
  			                {name: '内蒙古',value: randomData() },
  			                {name: '吉林',value: randomData() },
  			                {name: '福建',value: randomData() },
  			                {name: '广东',value: randomData() },
  			                {name: '西藏',value: randomData() },
  			                {name: '四川',value: randomData() },
  			                {name: '宁夏',value: randomData() },
  			                {name: '香港',value: randomData() },
  			                {name: '澳门',value: randomData() }
  			            ]
  			        },
  			        {
  			            name: 'iphone5',
  			            type: 'map',
  			            mapType: 'china',
  			            label: {
  			                normal: {
  			                    show: true
  			                },
  			                emphasis: {
  			                    show: true
  			                }
  			            },
  			            data:[
  			                {name: '北京',value: randomData() },
  			                {name: '天津',value: randomData() },
  			                {name: '上海',value: randomData() },
  			                {name: '广东',value: randomData() },
  			                {name: '台湾',value: randomData() },
  			                {name: '香港',value: randomData() },
  			                {name: '澳门',value: randomData() }
  			            ]
  			        }
  			    ]
  			};
  			echarts.init(document.getElementById("demo-map")).setOption(option);
      	},
      	reset:function(){
      		this.$data.form={
      			a:"aaa",
      			b:"bbb"
      		}
      	}
      }
  });
  

});
