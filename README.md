Tabable Required Fields
================================
A very simple jQuery plugin that prevents web forms from being submitted on 'Enter' keypress and replaces this default behavior with a more convenient one. It focuses on the next required field in the form. If no fields are required the plugin will take you through each input one at a time (just like the 'Tab' keypress behavior in this case) 

	
## Online Demo:
http://aymanrb.github.io/jquery-tabable-required/

## Usage Example:

```HTML
<!--Add the following to the <head> tag of your page -->
<script src="js/jQuery.tabable-required-focus.js"></script>
<script>
    $(document).ready(function(){
    	//Activate the 'Tabable Required Fields Focus' plugin when the page loads
		$.tabableRequiredFieldsFocus();
	});
</script>
```

## License

This plugin is available under [the MIT license](http://mths.be/mit).