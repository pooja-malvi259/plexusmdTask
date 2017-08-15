/*Scroll Js*/
$(document).ready(function(){
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