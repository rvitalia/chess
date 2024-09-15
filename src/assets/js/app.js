new Swiper(".swiper_participants", {
    slidesPerView: 3,
    spaceBetween: 57,
    loop: true, // Зацикливаем слайды
    autoplay: {
      delay: 4000, // Автоматическая смена каждые 4 секунды (4000 миллисекунд)
      disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: e => e,
      formatFractionTotal: e => e
    }
  });
  