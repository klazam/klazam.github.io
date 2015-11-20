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
    dots: true,
    
});


/* TESTING fixing transition to nav bar while resizing page TESTING 
$(window).on('resize', function () {
    $('.is-sticky .nav').css('transition', '0s');
    return $('.is-sticky .nav').css('transition', '1s');
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
        },1000);
        return false;
      }
    }
  });
});

/* If window is scrolled from the top of the page more than 300 pixels, 'to the top' button will appear */

$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.toTheTop').fadeIn();
    } else {
        $('.toTheTop').fadeOut();
    }
});

/* 'to the top' button on click will move to the top of page in 0,6sec */

$('.toTheTop').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 700);
    return false;
});

$(window).resize(function() {
  $('.is-sticky .nav').css('transition', '0s');
});







