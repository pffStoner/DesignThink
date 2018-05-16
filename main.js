$(document).ready(function(){
 $('#toggle-btn').click(function(){
     $('.nav_links').slideToggle(1000);
 })
});

$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if (scroll > 100) {
        $('nav').addClass("nav_fixed");
    }else{
        $('nav').removeClass("nav_fixed");

    }
});

