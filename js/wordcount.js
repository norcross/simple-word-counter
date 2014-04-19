function wordCounter() {
    var value = jQuery( 'textarea#word-count' ).val();

    if (value.length === 0) {
        jQuery( 'p.current-count span' ).html(0);
        return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;

    jQuery( 'p.current-count span' ).html( wordCount );
}

jQuery( document ).ready(function($) {

	// grab initial value on load
	$( 'textarea#word-count' ).each(function() {
		wordCounter();
	});

	// now handle various input methods
	$( 'div.entry-container' ).on( 'change', 'textarea#word-count', function() {
		wordCounter();
	});

	$( 'div.entry-container' ).on( 'keydown', 'textarea#word-count', function() {
		wordCounter();
	});

	$( 'div.entry-container' ).on( 'keypress', 'textarea#word-count', function() {
		wordCounter();
	});

	$( 'div.entry-container' ).on( 'keyup', 'textarea#word-count', function() {
		wordCounter();
	});

	$( 'div.entry-container' ).on( 'blur', 'textarea#word-count', function() {
		wordCounter();
	});

	$( 'div.entry-container' ).on( 'focus', 'textarea#word-count', function() {
		wordCounter();
	});

});