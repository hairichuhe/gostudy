define('mailbox-compose', function(require, exports, module) {

  var Vue = require('vue');
  
  module.exports = Vue.extend({
      template: "\t\t\t\t<!--Page content-->\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<div id=\"page-content\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<!-- COMPOSE EMAIL -->\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<div class=\"panel panel-default panel-left\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Cc & bcc toggle buttons-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"demo-toggle-cc\" data-toggle=\"button\" type=\"button\" class=\"btn btn-sm btn-default btn-active-info\">Cc</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button id=\"demo-toggle-bcc\" data-toggle=\"button\" type=\"button\" class=\"btn btn-sm btn-default btn-active-info\">Bcc</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Input form-->\n\t\t\t\t\t\t\t\t\t\t<form role=\"form\" class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-1 control-label text-left\" for=\"inputEmail\">To</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" id=\"inputEmail\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-cc-input\" class=\"hide form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-1 control-label text-left\" for=\"inputCc\">Cc</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"inputCc\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-bcc-input\" class=\"hide form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-1 control-label text-left\" for=\"inputBcc\">Bcc</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"inputBcc\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-1 control-label text-left\" for=\"inputSubject\">Subject</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"inputSubject\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Attact file button-->\n\t\t\t\t\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-default btn-file\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tAttachment <input type=\"file\">\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"demo-attach-file\" class=\"media-body\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<hr class=\"hr-sm\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!--Wysiwyg editor : Summernote placeholder-->\n\t\t\t\t\t\t\t\t\t\t<div id=\"demo-mail-compose\"></div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"pad-ver\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Send button-->\n\t\t\t\t\t\t\t\t\t\t\t<button id=\"mail-send-btn\" type=\"button\" class=\"btn btn-success btn-labeled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn-label\"><i class=\"fa fa-paper-plane\"></i></span> Send Mail\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Save draft button-->\n\t\t\t\t\t\t\t\t\t\t\t<button id=\"mail-save-btn\" type=\"button\" class=\"btn btn-primary btn-labeled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn-label\"><i class=\"fa fa-paper-plane\"></i></span> Save Draft\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<!--Discard button-->\n\t\t\t\t\t\t\t\t\t\t\t<button id=\"mail-discard-btn\" type=\"button\" class=\"btn btn-warning btn-labeled\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn-label\"><i class=\"fa fa-paper-plane\"></i></span> Discard\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--===================================================-->\n\t\t\t\t\t\t\t\t<!-- END COMPOSE EMAIL -->\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<!--===================================================-->\n\t\t\t\t<!--End page content-->",
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
