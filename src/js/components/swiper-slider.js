document.querySelectorAll(".swiper-products").forEach(function (slider, index) {
  slider.nextElementSibling.classList.add("product-button-next--" + index);
  slider.children[1].classList.add("product-pagination--" + index);
  slider.classList.add("swiper-products--" + index);
  window["swiper" + index] = new Swiper(".swiper-products--" + index, {
    navigation: {
      nextEl: ".product-button-next--" + index
    },
    pagination: {
      el: ".product-pagination--" + index,
      type: 'bullets',
      dynamicBullets: true,
    },
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    threshold: 20,
    followFinger: false,
    breakpoints: {
      550: {
        slidesPerView: 1,
        loop: false,
      },
      900: {
        slidesPerView: 2,
        loop: false,
      },
      1200: {
        slidesPerView: 3,
      }
    },
  });
});

var swiperArticles = new Swiper('.swiper-articles', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  threshold: 20,
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
  threshold: 20,
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
  threshold: 20,
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

var swiperBanner = new Swiper('.main-banner__swiper', {
  effect: 'fade',
  loop: true,
  threshold: 20,
  navigation: {
    nextEl: '.main-banner__swiper-button-next',
    prevEl: '.main-banner__swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiperCheckout = new Swiper('.checkout__swiper', {
  mousewheel: true,
  threshold: 20,
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

var initialSlideCatalog = $('.subcat-active').index() - 2;
var swiperCatalog = new Swiper('.catalog__swiper', {
  navigation: {
    nextEl: '.catalog__swiper-button-next',
    prevEl: '.catalog__swiper-button-prev',
  },
  threshold: 20,
  initialSlide: initialSlideCatalog,
  slidesPerView: 'auto',
  spaceBetween: 5,
});

var swiperProduct = undefined;

function initSwiper() {
  var screenWidth = $(window).width();
  if (screenWidth < 1200 && swiperProduct == undefined) {
    var initialSlideProduct = $('.product__swiper-link--active').index();
    var swiperProduct = new Swiper('.product__swiper', {
      navigation: {
        nextEl: '.product__swiper-button-next',
        prevEl: '.product__swiper-button-prev',
      },
      threshold: 20,
      slidesPerView: 7,
      initialSlide: initialSlideProduct,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 4,
          speed: 100,
        }
      },
    });
  }
}
//Swiper plugin initialization
initSwiper();
//Swiper plugin initialization on window resize
$(window).on('resize', function () {
  setTimeout(function () {
    initSwiper();
  }, 500);
});


$(document).ready(function () {

  var swiperGeneral = new Swiper('.tab-general__swiper', {
    threshold: 20,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.tab-general__swiper-button-next',
      prevEl: '.tab-general__swiper-button-prev',
    },
    breakpoints: {
      640: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          dynamicBullets: true,
        },
        slidesPerView: 3,
        loop: true,
      },
      1200: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        dynamicBullets: true,
        slidesPerView: 4,
      }
    },
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
    threshold: 20,
    spaceBetween: 18,
    slidesPerView: 5,
    freeMode: true,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      640: {
        slidesPerView: 4,
        direction: 'horizontal',
      },
      1200: {
        slidesPerView: 8,
        direction: 'horizontal',
      }
    },
  });
  var galleryTop = new Swiper('.gallery-top', {
    threshold: 20,
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
});