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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#scrollIcon").css("display", "block");
  } else {
    $("#scrollIcon").css("display", "none");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


$(".button").hover(function(){
  // alert("hit");
  if($(this).hasClass("normal"))
  {
    $(this).css("backgroundImage", "url('../../../images/site_images/button_hover.svg')").removeClass("normal");
  }
  else
  {
    $(this).css("backgroundImage", "url('../../../images/site_images/button_normal.svg')").addClass("normal");
  }
});