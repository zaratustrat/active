// $(document).ready(function () {
//  var link = $('.menu-link');
//  var link_active = $('.menu-link_active');
//  var menu = $('.header');

//  link.click(function () {
//   link.toggleClass('menu-link_active');
//   menu.toggleClass('menu_active');
//  });
//  link_active.click(function () {
//   link.removeClass('menu-link_active');
//  });
// }); 

// $(document).ready(function () {
//  $('.callback-text').on('click', function () {
//   $('#modal-callback').toggleClass('modal_visible');
//  });
//  $('.modal-close').on('click', function () {
//   $('#modal-callback').toggleClass('modal_visible');
//  });
// });

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
// var $page = $('html, body');
// $('.scrol').click(function () {
//   $page.animate({
//     scrollTop: $($.attr(this, 'href')).offset().top
//   }, 400);
//   return false;
// });