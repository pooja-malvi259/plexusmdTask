/*Navigation Scroll Js*/
$(document).ready(function(e){
    $(window).on("scroll",function(){
    var win = $(window).scrollTop();
    if(win > 50){
        $(".navbar").css("background","hsla(0, 0%, 100%, 0.95)");
    }
    else{
        $(".navbar").css("background","rgba(0,0,0,0)");
    }
  });
});
/*Body Scroll */
$('body').scrollspy({
    target: '#navbar-example',
    offset: 60
})

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