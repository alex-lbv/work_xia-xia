//= jquery.js
//= uikit.js
//= swiper.js
//= nice-select.js

document.addEventListener("DOMContentLoaded", function () {
  //= components/swiper-slider.js
  //= components/select.js
});

$("body").on('focus', '#searchInput', function () {
  $('header').addClass('search-active');
});

$("body").on('blur', '#searchInput', function () {
  $('header').removeClass('search-active');
});


/* $("#searchInput").on('keyup', function () {
  $('.search-results').addClass('active');
}); */