define('mailbox-message', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<div id=\"page-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- VIEW MESSAGE -->\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t<div class=\"panel panel-default panel-left\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-7\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Sender Information-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"/static/img/av4.png\" class=\"img-circle img-sm\" alt=\"Profile Picture\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-bold\">Lisa D. Smith</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">lisa.aqua@themeon.net</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm visible-xs\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-5 clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Details Information-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mar-no\"><small class=\"text-muted\">Monday 23, Jan 2014</small></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Holiday.zip</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-paperclip fa-lg fa-fw\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Mail toolbar-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\"><i class=\"fa fa-print\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\"><i class=\"fa fa-exclamation-circle\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\"><i class=\"fa fa-trash\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-5 clearfix\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Reply & forward buttons-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-reply\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Message-->\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-all\">\n\t\t\t\t\t\t\t\t\t\t\t\tHey John,\n\t\t\t\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<blockquote class=\"text-muted\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t\t\t\t\t\tSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n\t\t\t\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\tRegards,\n\t\t\t\t\t\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Lisa D. Smith</strong><br>\n\t\t\t\t\t\t\t\t\t\t\t\t2834 Street Name<br>\n\t\t\t\t\t\t\t\t\t\t\t\tSan Francisco, CA<br>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<!--End Message-->\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!-- Attach Files-->\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4><i class=\"fa fa-paperclip fa-fw\"></i> Attachments <span>(2)</span></h4>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"mail-attach-list list-ov\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\" clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Download button-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-btn\"><a href=\"#\" class=\"btn btn-purple btn-sm\">Download</a></div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--File information-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mail-attach-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-info text-uppercase\">Images</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-bold\"><a href=\"#\">IMG_007.jpg</a></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">(15 KB)</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"clearfix\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--Download button-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-btn\"><a href=\"#\" class=\"btn btn-purple btn-sm\">Download</a></div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--File information-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mail-attach-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mail-attach-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-warning  text-uppercase\">Video</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-bold\"><a href=\"#\">VID_007.mp4</a></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"text-muted\">(178 MB)</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t\t\t<!-- End Attach Files-->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Quick reply : Summernote Placeholder -->\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-mail-textarea\" class=\"mail-message-reply bg-gray-light\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Reply</strong> or <strong>Forward</strong> this message...\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Send button-->\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"demo-mail-send-btn\" type=\"button\" class=\"btn btn-primary hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-paper-plane\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\tSend Message\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t\t<!-- END VIEW MESSAGE -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<!--End page content-->\n\n",
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
