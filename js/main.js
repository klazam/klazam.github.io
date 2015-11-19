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


/* still testing
$(window).click(function() {
    $(window).on('resize', function () {
    $('.is-sticky .nav').css('transition', '0s');
});

$(window).on('scroll', function () {
    $('.is-sticky .nav').css('transition', '1s');
});
});
*/

/* SMOOTH SCROLLING */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});