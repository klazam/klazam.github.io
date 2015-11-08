/* Zmiana koloru selektorów */

$('nav a').click(function() {
    if ($(this).parent().hasClass('selected')) {
        $(this).parent().addClass('selected');
    }
    else {
        $(this).parent().addClass('selected');
        $(this).parent().siblings().removeClass('selected');
    }
});

/* Sticky nav bar */

$("#nav").sticky({ topSpacing: 0 });

/* zmiana koloru podczas doczepiania nav bara ON CONSTRUCTION

            ON CONSTRUCTION

$('#nav').on('sticky-start', function() {
    $(this).css('background': 'black');
});

*/

$(".slides").slick({
	fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true
    });