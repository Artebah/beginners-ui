import * as functions from "./modules/functions.js";

new Swiper(".main-block-slider", {
  navigation: {
    nextEl: ".main-block-slider__next",
    prevEl: ".main-block-slider__prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,
});
new Swiper(".feedback-slider", {
  navigation: {
    nextEl: ".feedback__button_next",
    prevEl: ".feedback__button_prev",
  },
  //autoplay: {
  //  delay: 3000,
  //  disableOnInteraction: true,
  //},

  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 190,
    },
  },
});

/* swiper

const slider = new Swiper(".slider__container", {
  // Стрелки навигации
  //  navigation: {
  //    nextEl: ".swiper-button-next",
  //    prevEl: ".swiper-button-prev",
  //  },

  // Буллеты
  //  pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: true,
  //   dynamicBullets: true,
  // },

  // Фракции
  //  pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  //   renderFraction(currentClass, totalClass) {
  //    return `Фото <span class="${currentClass}"></span> из <span class="${totalClass}"></span>`
  //  }
  //},

  // Прогресс полоса
  //  pagination: {
  //   el: ".swiper-pagination",
  //   type: "progressbar",
  //},

  // Полоса прокрутки
  //  scrollbar: {
  //    el: ".slider__scrollbar",
  //    draggable: true,
  //  },

  // Переключение слайдов с клавиатуры
  //  keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDown: true,
  //},
  
  //simulateTouch: true,

  //grabCursor: true,

  // Чувствительность перетаскивания
  //touchRatio: 3,

  // Плавная автоподстройка высоты слайдов
  //autoHeight: true,

  //slidesPerView: 3,
  //slidesPerGroup: 3,

  // Переключение слайдов при клике (работает со slidesPerView)
  //slideToClickedSlide: true,

  //spaceBetween: 30,
});

*/

functions.isWebp();
functions.burger();

const da = functions.DynamicAdapt;
const daMax = new da("max");
daMax.init();

const acceptChallengesBlock = document.querySelector(".accept-challenges");
const acceptChallengesButton = document.querySelector(
  ".accept-challenges__button > button"
);

acceptChallengesButton.addEventListener("click", function () {
  const blockHeight = acceptChallengesBlock.clientHeight;
  const heightToBlock =
    acceptChallengesBlock.getBoundingClientRect().top + window.scrollY;

  const top = heightToBlock + blockHeight;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
});
