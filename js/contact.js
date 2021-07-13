$(".navIcon").on("click", function(){
    // alert("click");
    if($(this).hasClass("closed"))
    {
        // alert("closed");
        $(this).attr("src", "images/mobile_button_pressed.svg").removeClass("closed");
        $("nav").css("visibility", "visible");
    }
    else
    {
        // alert("open");
        $(this).attr("src", "images/mobile_button_normal.svg").addClass("closed");
        $("nav").css("visibility", "hidden");
    }

});

if($(window).width() > 1000){
    $("nav").css("visibility", "visible");
}

//Get the button:
mybutton = document.getElementById("scrollIcon");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
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
    $(".button").css("backgroundImage", "url('../images/button_hover.svg')").removeClass("normal");
  }
  else
  {
    $(".button").css("backgroundImage", "url('../images/button_normal.svg')").addClass("normal");
  }
});