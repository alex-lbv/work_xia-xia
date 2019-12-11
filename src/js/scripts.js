document.addEventListener("DOMContentLoaded", function () {
  //= components/swiper-slider.js
  //= components/select.js
  //= components/calc.js
});

$("body").on('focus', '#searchInput', function () {
  $('body').addClass('search--opened');
});

$("body").on('blur', '#searchInput', function () {
  $('body').removeClass('search--opened');
});

var menu_li = $('body').find('.header__catalog-list');
$(menu_li).hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
})

/* clear val for search input */
$(document).ready(function () {
  $('.search__close').on('click', function () {
    $('#searchInput').val('');
  })

  $('body').on('click', '.search__clear', function () {
    $(this).prev().val('');
  })
})