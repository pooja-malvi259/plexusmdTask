/*Scroll Js*/
$(document).ready(function(e){
    $(window).on("scroll",function(){
    var win = $(window).scrollTop();
    if(win > 50){
        $(".navbar").css("background","hsla(0, 0%, 100%, 0.95)");
    }
    else{
        $(".navbar").css("background","rgba(0,0,0,0)");
    }
    /*Changing link border on scroll using section-wise IDs.
    var sec = $("#news").offset().top - 50;
    if(win > 0 && win > sec){
        $("#news-link").addClass("active-section");
    }
    else{
        $("#news-link").removeClass("active-section");
    }*/

    /* Changing link border on scroll for each section using universal ID
    id = ;
    var sec = $(id).offset().top - 50;
    if(win > 0 && win > sec){
        $(id+"-link").addClass("active-section");
    }
    else{
        $(id+"-link").removeClass("active-section");
    }*/
  });
});


/*Menu Scroll*/

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 50
    });
});

function goTo(x){
    $("html,body").animate({
        scrollTop: $(x).offset().top - 50
    });
}