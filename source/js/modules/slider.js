const slider = document.querySelector('.slider');

if (slider) {
  slider.classList.remove('slider--no-js');

  const swiper = new Swiper('.swiper-container', {
    mousewheel: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet(index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    navigation: {
      prevEl: '.swiper-button-custom-prev',
      nextEl: '.swiper-button-custom-next',
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom(swipe, current, total) {
            return `${current} of ${total}`;
          },
        },
      },
    },
  });
}
