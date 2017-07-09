$(document).ready(function(){
    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass('active');
        $(this).addClass('active');
    })

    $(".slider.owl-carousel").owlCarousel({
        items : 1,
        nav : true,
        navText : " ",
        loop : true,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 600,
        autoplaySpeed : 600,
        navSpeed : 600,
        dotsSpeed : 600,
        dragEndSpeed : 600
     });


});