(function($) {
	'use strict';
	
	//On Page Load prevent the default Enter keypress action and get to the focus function
	$(document).ready(function(){
		$('form').on("keypress keydown", function(e) {
		  var code = e.keyCode || e.which; 

		  if (code === 13 && !$(':focus').is('textarea')) { //If 'Enter' key is pressed while not focused in a textarea
		    e.preventDefault();
		    applyFlyingFocusEffect();
		    $.focusNextRequired();
		 }else if (code === 17) { //If 'CTRL' key is pressed
		    e.preventDefault();
		    applyFlyingFocusEffect();
		    $.focusPrevRequired();
		  }
		});
	});

	//Select the next required field in the current page
	$.focusNextRequired = function(){
		var focusableElements = getFocusableElements();
		
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
	
	//Select the previous required field in the current page
	$.focusPrevRequired = function(){
		var focusableElements = getFocusableElements();
		
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
	
	
	//Returns all required elements in the page or all input elements incase no required fields are detected 
	function getFocusableElements(){
		var focusableElements = $(':required');
		
		if(focusableElements.length == 0){
			focusableElements = $(':input');
		}
		return focusableElements;
	}
	
	function applyFlyingFocusEffect(){
		if(typeof(ringElem) !== "undefined"){ //If Flying Focus ringElement is detected
			keyDownTime = Date.now();
		}
	}
})(jQuery);