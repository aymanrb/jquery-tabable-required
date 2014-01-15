(function($) {
	'use strict';
	
	//On Page Load prevent the default Enter keypress action and get to the focus function
	$(document).ready(function(){
		$(this).on("keypress keydown", function(e) {
		  var code = e.keyCode || e.which; 
		  if (code == 13) { //If 'Enter'
		    e.preventDefault();
		    $.focusNextRequired();
		 }else if (code == 17) { //If 'CTRL'
		    e.preventDefault();
		    $.focusPrevRequired();
		  }
		});
	});

	//Select the next required field in the current page
	$.focusNextRequired = function(){
		var focusableElements = $(':required');
		
		//Incase none of the document elements are required 
		if(focusableElements.length == 0){
			focusableElements = $(':input');
		}
		var current = $(':focus');
		var nextIndex = 0;
		console.log(current.length);
		if(current.length === 1){
			var currentIndex = focusableElements.index(current);
			if(currentIndex + 1 < focusableElements.length){
				nextIndex = currentIndex + 1;
			}
		}
		focusableElements.eq(nextIndex).focus();
	}
	
	//Select the next required field in the current page
	$.focusPrevRequired = function(){
		var focusableElements = $(':required');
		
		//Incase none of the document elements are required 
		if(focusableElements.length == 0){
			focusableElements = $(':input');
		}
		var current = $(':focus');
		var nextIndex = 0;
		console.log(current.length);
		if(current.length === 1){
			var currentIndex = focusableElements.index(current);
			if(currentIndex - 1 < focusableElements.length){
				nextIndex = currentIndex - 1;
			}
		}
		focusableElements.eq(nextIndex).focus();
	}
})(jQuery);