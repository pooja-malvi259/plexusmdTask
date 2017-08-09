var some = $('#scroll-start').offset().top;
$(document).ready(function(){
    $(window).on("scroll",function(){
    var win = $(window).scrollTop();
    if(win > some){
        $(".navbar").css("background","rgba(255,255,255,1)");
    }
    else{
        $(".navbar").css("background","rgba(0,0,0,0)");
    }
  });
});