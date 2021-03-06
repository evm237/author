$(document).ready(function(){
    $(".toggle_menu").click(function() {
        $(this).toggleClass("on");
        $("nav").slideToggle();
    });

    $("nav ul li a").click(function(event) {
        event.preventDefault();
        $("nav ul li a").removeClass('active');
        $(this).addClass('active');
    })

    $("header nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;  
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > $('header').height() - 50) {
            $(".top_line").addClass("fixed")
            .removeClass("content");
            $(".wrap_top_line").css({"height":"99px"});
        }
        else {
            $(".top_line").removeClass("fixed")
            .addClass("content");
            $(".wrap_top_line").css({"height":"auto"});
        }
    });
    $(".top_line").mouseover(
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).css({"opacity": 1});
            }
    });
    $(".top_line").mouseout(
        function(){
            if( $(this).hasClass('fixed') ){
                $(this).css({"opacity": 0.8});
            }
    });

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

    $(".wrap_services button").mouseover(function(){
        $(this).css({'background-color': "#49cbcd"});
        $(this).parent().children('h4').css({'background-color': "#49cbcd"});
    });
    $(".wrap_services button").mouseout(function(){
        $(this).css({'background-color': "#788492"});
        $(".wrap_services h4").css({'background-color': "#485460"});
    });

});