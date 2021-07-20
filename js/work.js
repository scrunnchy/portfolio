window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      showNav();
} else {
    hideNav();
}
}


// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
    
    // Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
    
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
        
        // Run the callback
		// console.log( 'Scrolling has stopped.' );
        hideNav();
        
	}, 2000);
    
}, false);


function hideNav(){
    $(".flex-column").css("display", "none");
}

function showNav(){
    $(".flex-column").css("display", "block");
}