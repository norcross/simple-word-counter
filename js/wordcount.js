/*!
* simplewordcounter js
*
*/
(function($){

	$.fn.simplewordcounter = function() {
	
		var content = $(this),
			wordCount,
			value,
			regex = /\s+/gi;;
		
		content.on('change keydown keypress keyup blur focus', function(e) {
			
			    value = $(content).val();
			    
			    wordCount = value.trim().replace(regex, ' ').split(' ').length;

			    if ( value.length === 0 ) {
			         wordCount = 0;
			    } 
			   
			    $( 'p.current-count span' ).html( wordCount );
		
		});
	
	}
	
})( jQuery );


$(document).ready(function() {
	
	$('textarea#word-count').simplewordcounter({});
			
});