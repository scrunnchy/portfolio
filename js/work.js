window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      showNav();
      $("#scrollIcon").css("display", "block");
} else {
    hideNav();
    $("#scrollIcon").css("display", "none");
}
}


// // Setup isScrolling variable
// var isScrolling;

// // Listen for scroll events
// window.addEventListener('scroll', function ( event ) {
    
//     // Clear our timeout throughout the scroll
// 	window.clearTimeout( isScrolling );
    
// 	// Set a timeout to run after scrolling ends
// 	isScrolling = setTimeout(function() {
        
//         // Run the callback
// 		// console.log( 'Scrolling has stopped.' );
//         hideNav();
        
// 	}, 2000);
    
// }, false);


function hideNav(){
    $("#secondaryNav").css("display", "none");
}

function showNav(){
    $("#secondaryNav").css("display", "flex");
}

$(".navIcon").on("click", function(){
    // alert("click");
    if($(this).hasClass("closed"))
    {
        // alert("closed");
        $(this).attr("src", "images/site_images/mobile_button_pressed.svg").removeClass("closed");
        $("nav").css("visibility", "visible");
        $("#navigation").css("pointerEvents", "all");
    }
    else
    {
        // alert("open");
        $(this).attr("src", "images/site_images/mobile_button_normal.svg").addClass("closed");
        $("nav").css("visibility", "hidden");
        $("#navigation").css("pointerEvents", "none");
    }

});

window.onresize = function(){
  if($(window).width() > 1000){
      $("nav").css("visibility", "visible");
  }
  else if($(window).width() <= 1000)
  {
    $("nav").css("visibility", "hidden");
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
