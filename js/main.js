/* Zmiana koloru selektorów */

$('nav a').click(function() {
    if ($(this).parent().hasClass('selected')) {
    }
    else {
        $(this).parent().addClass('selected');
        $(this).parent().siblings().removeClass('selected');
    }
});



/* STICKY NAV BAR */

$(".nav").sticky({ topSpacing: 0 });

/* SLIDER */

$(".skills").slick({
	fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
});

