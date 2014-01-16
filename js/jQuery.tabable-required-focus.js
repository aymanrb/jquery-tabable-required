(function($) {
	'use strict';
	
	//On Page Load prevent the default Enter keypress action and get to the focus function
	$(document).ready(function(){
		$('form').on("keypress keydown", function(e) {
		  var code = e.keyCode || e.which; 

		  if (code == 13 && !$(':focus').is('textarea')) { //If 'Enter' key is pressed while not focused in a textarea
		    e.preventDefault();
		    $.focusNextRequired();
		 }else if (code == 17) { //If 'CTRL' key is pressed
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

		if(current.length === 1){
			var currentIndex = focusableElements.index(current);
			if(currentIndex - 1 < focusableElements.length){
				nextIndex = currentIndex - 1;
			}
		}
		focusableElements.eq(nextIndex).focus();
	}
})(jQuery);