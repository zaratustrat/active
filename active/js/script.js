
$(document).ready(function () {
  $('.button-callback').on('click', function () {
  $('.modal').toggleClass('modal_visible');
 });
 $('.modal-close').on('click', function () {
  $('.modal').toggleClass('modal_visible');
 });
});

$(document).ready(function () {
 $('.mask').mask("+7 (999) 99-99-999");
})
$('.scrol').bind("click", function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top - 60
  }, 1200);
  e.preventDefault();
});
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  nextArrow: '<div class="arrow arrow_right"></div>',
  prevArrow: '<div class="arrow arrow_left"></div>',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
     
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

  ]
});
