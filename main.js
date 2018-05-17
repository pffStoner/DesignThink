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

 // init Isotope
 let $grid = $('.picture-container').isotope({
    // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

