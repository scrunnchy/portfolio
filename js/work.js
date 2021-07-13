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