document.querySelectorAll(".swiper-good").forEach(function (slider, index) {
  slider.nextElementSibling.classList.add("btn-prev--" + index);
  slider.classList.add("swiper-good--" + index);
  slider.offsetParent.nextElementSibling.classList.add(
    "swiper-scrollbar--" + index
  );
  var currentSlider = document.querySelector(".swiper-good--" + index);
  window["swiper" + index] = new Swiper(".swiper-good--" + index, {
    slidesPerView: 4,
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar--" + index,
      draggable: true,
      snapOnRelease: false
    },
    loop: window.innerWidth < 1179 ? false : true,
    navigation: {
      nextEl: ".btn-prev--" + index
    },
    loopAdditionalSlides: 2,
    setWrapperSize: true,
    breakpoints: {
      750: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      980: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      1179: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    },
    on: {
      init: function () {
        calcCarouselHeight();
      },
      slideChangeTransitionStart: function () {
        if (window.innerWidth > 1178) return;
        if (window["swiper" + index].isEnd) {
          currentSlider.classList.add("swiper-container--last-shown");
        } else {
          currentSlider.classList.remove("swiper-container--last-shown");
        }
      }
    }
  });
});