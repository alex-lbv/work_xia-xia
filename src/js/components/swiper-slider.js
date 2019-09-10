var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
});

var swiperArticles = new Swiper('.swiper-articles', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    }
  },
});