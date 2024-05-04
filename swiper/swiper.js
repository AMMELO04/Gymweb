const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    100 : { 
      slidesPerView: 1,
      spaceBetween: 50

    },

    450 :{
      slidesPerView: 2,
      spaceBetween: 30
    },

    760:{
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200:{
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
});
