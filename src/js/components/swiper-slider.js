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

var swiperReviews = new Swiper('.swiper-reviews', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 1,
      loop: false,
    },
    1200: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.reviews-button-next',
  },
});

var swiperProductCard1 = new Swiper('.swiper-product-card1', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    640: {
      slidesPerView: 1,
      loop: false,
    },
    1200: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.product-card1-button-next',
  },
});

var swiperProductCard2 = new Swiper('.swiper-product-card2', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    640: {
      slidesPerView: 1,
      loop: false,
    },
    1200: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.product-card2-button-next',
  },
});

var swiperProductCard3 = new Swiper('.swiper-product-card3', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    640: {
      slidesPerView: 1,
      loop: false,
    },
    1200: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.product-card3-button-next',
  },
});

var swiperProductCard3 = new Swiper('.swiper-product-card4', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    640: {
      slidesPerView: 1,
      loop: false,
    },
    1200: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.product-card4-button-next',
  },
});