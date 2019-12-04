/* function toggleMenu() {
  var navLink = $('.menu__list li > a');
  var animateTime = 350;

  if ($(window).width() < 1200) {
    navLink.click(function (e) {
      $(this).removeAttr('href');
      var nav = $(this).next()
      var nav_all = $(this).parent('ul').find('> li > a').not($(this)).next();
      $(this).parent().toggleClass('active');
      $(this).parent().not($(this).parent()).toggleClass('active');

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
} */

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
  $('body').addClass('search--opened');
});

$("body").on('blur', '#searchInput', function () {
  $('body').removeClass('search--opened');
});

/* $("#searchInputMobile").on('click', function () {
  $('body').addClass('search--opened-mobile');
  $('#searchInput').focus();
}); */

/* $(window).on('resize', function () {
  toggleMenu();
});

toggleMenu();
 */
$('#div1').on('click', function () {

})
/* header__menu-catalog on DESKTOPE */
/* $(window).scroll(function (event) {
  console.log($(this).scrollTop());
  var scrolTop = $(this).scrollTop()-140;
  if ($(this).scrollTop() > 100) {
    $('.header__catalog-menu').css('top', '-' + scrolTop + 'px')
  }
}); */

var menu_li = $('body').find('.header__catalog-list');
$(menu_li).hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
})

/* clear val for search input */
$(document).ready(function () {
  $('.search__close').on('click', function () {
    $('#searchInput').val('');
    console.log('nika loh');
  })

  $('body').on('click', '.search__clear', function () {
    $(this).prev().val('');
    console.log('nika loh 2');
  })
})