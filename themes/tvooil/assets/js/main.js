// Detect Scroll
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('nav').addClass('scrolled');
    }else{
        $('nav').removeClass('scrolled');
    }           
});
    
$(document).ready(function(){

    // Wow Animation
    wow = new WOW({mobile: false})
    wow.init();

    // Header Slider
    $('header .owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        items: 1,
        startPosition: 0,
        dots: false,
        nav: true,
        navText: ['<span class="fa fa-chevron-left"></span>','<span class="fa fa-chevron-right"></span>'],
        //animateIn: 'zoomIn',
        animateOut: 'fadeOut',
    });

}); 