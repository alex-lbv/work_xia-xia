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
var swiperArticle = new Swiper('.swiper-article', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  spaceBetween: 10,
  slidesPerView: 3,
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

var swiperBanner = new Swiper('.main-banner__swiper', {

});

var swiperCheckout = new Swiper('.checkout__swiper', {
  mousewheel: true,
  slidesPerView: 2,
  direction: 'vertical',
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    640: {
      spaceBetween: 10,
      slidesPerView: 1,
      direction: 'horizontal',
      mousewheel: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
      },
    },
    1200: {
      spaceBetween: 10,
      slidesPerView: 2,
      direction: 'horizontal',
      mousewheel: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
      },
    }
  },
});

var initialSlide = $('.catalog__swiper-link--active').index();
var swiperCatalog = new Swiper('.catalog__swiper', {
  navigation: {
    nextEl: '.catalog__swiper-button-next',
    prevEl: '.catalog__swiper-button-prev',
  },
  slidesPerView: 8,
  spaceBetween: 5,
  initialSlide: initialSlide,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 6,
    }
  }
});

var initialSlideProduct = $('.product__swiper-link--active').index();
var swiperProduct = new Swiper('.product__swiper', {
  navigation: {
    nextEl: '.product__swiper-button-next',
    prevEl: '.product__swiper-button-prev',
  },
  slidesPerView: 7,
  initialSlide: initialSlide,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  /* slideToClickedSlide: true, */
});