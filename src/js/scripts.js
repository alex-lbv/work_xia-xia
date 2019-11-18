//= jquery.js
//= uikit.js
//= swiper.js
//= nice-select.js

function toggleMenu() {
  var navLink = $('.menu__list > li > a');
  var animateTime = 350;

  if ($(window).width() < 1200) {
    navLink.click(function (e) {
      $(this).removeAttr('href');
      var nav = $(this).next()
      var nav_all = $(this).parents('.menu__list').find('> li > a').not($(this)).next();
      $(this).parent().toggleClass('active');
      $('.menu__list > li > a').not($(this)).removeClass('active');

      nav_all.stop().animate({
        height: '0'
      }, animateTime);

      if (nav.height() === 0) {
        autoHeightAnimate(nav, animateTime);
      } else {
        nav.stop().animate({
          height: '0'
        }, animateTime);
      }
    });
  }
}

/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
  var curHeight = element.height(), // Get Default Height
    autoHeight = element.css('height', 'auto').height(); // Get Auto Height
  element.height(curHeight); // Reset to Default Height
  element.stop().animate({
    height: autoHeight
  }, time); // Animate to Auto Height
}

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

$(window).on('resize', function () {
  toggleMenu();
});

toggleMenu();

$('.header__catalog, .header__catalog-menu').hover(
  function () {
    $('header').addClass('header-catalog-active')
  },
  function () {
    $('header').removeClass('header-catalog-active')
  }
)