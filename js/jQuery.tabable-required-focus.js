(function($) {
	'use strict';

	//On Page Load prevent the default Enter keypress action and get to the focus function
	$.tabableRequiredFieldsFocus = function(){
		$('form').on("keypress keydown", function(e) {
		  var code = e.keyCode || e.which; 

		  if (code === 13 && !$(':focus').is('textarea')) { //If 'Enter' key is pressed while not focused in a textarea
		    e.preventDefault();
		    applyFlyingFocusEffect();
		    focusRequiredField('next');
		 }else if (code === 17) { //If 'CTRL' key is pressed
		    e.preventDefault();
		    applyFlyingFocusEffect();
		    focusRequiredField('previous');
		  }
		});
	}

	//Select the next required field in the current page
	function focusRequiredField(direction){
		var focusableElements = getFocusableElements();
		
		var current = $(':focus');
		var nextIndex = 0;

		if(current.length === 1){
			var currentIndex = focusableElements.index(current);
			
			if(direction === 'next' && currentIndex + 1 < focusableElements.length){
				nextIndex = currentIndex + 1;
			}

			if(direction === 'previous' && currentIndex - 1 < focusableElements.length){
				nextIndex = currentIndex - 1;
			}
		}
		focusableElements.eq(nextIndex).focus();
	}
	
	//Returns all required elements in the page or all input elements incase no required fields are detected 
	function getFocusableElements(){
		var focusableElements = $(':required');
		
		if(focusableElements.length === 0){
			focusableElements = $(':input');
		}
		return focusableElements;
	}
	
	//Take advantage of the 'Flying Focus' effect if it was included in the current page
	//Recommended: https://github.com/NV/flying-focus
	function applyFlyingFocusEffect(){
		if(typeof(ringElem) !== "undefined"){ //If Flying Focus ringElement is detected
			keyDownTime = Date.now();
		}
	}
})(jQuery);
