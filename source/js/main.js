import './vendor.js';

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const navButton = header.querySelector('.main-nav__button');
const slider = document.querySelector('.slider');
const accordion = document.querySelectorAll('.faq li');
const filter = document.querySelector('.filter');
const overlay = document.createElement('div');

overlay.classList.add('overlay');
header.classList.remove('header--no-js');

// Мобильное меню

function openMenu() {
  header.classList.remove('header--is-close');
  header.classList.add('header--is-open');
  page.classList.add('overflow');
}

function closeMenu() {
  header.classList.remove('header--is-open');
  header.classList.add('header--is-close');
  page.classList.remove('overflow');
}

navButton.addEventListener('click', function () {
  if (header.classList.contains('header--is-close')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Фильтр

if (filter) {
  filter.classList.remove('filter--no-js');
  filter.addEventListener('click', (evt) => {
    evt.target.closest('.filter__type').classList.toggle('filter__type--is-closed');
  });

  const filterOpen = filter.querySelector('.filter__button');
  const filterBlock = filter.querySelector('.filter__wrapper');
  const filterClose = filter.querySelector('.filter__close');
  const filterForm = filter.querySelector('form');

  const openFilter = () => {
    filterBlock.classList.add('filter__wrapper--opened');
    document.body.append(overlay);
    document.body.style.overflow = 'hidden';
  };

  const closeFilter = () => {
    filterBlock.classList.remove('filter__wrapper--opened');
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  filterOpen.addEventListener('click', () => openFilter());
  filterClose.addEventListener('click', () => closeFilter());
  overlay.addEventListener('click', () => closeFilter());

  window.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      closeFilter();
    }
  });

  filterForm.addEventListener('submit', () => {
    closeFilter();
  });
}

// Слайдер

if (slider) {
  slider.classList.remove('slider--nojs');

  new Swiper('.swiper-container', {
    mousewheel: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
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
          renderCustom: function (swiper, current, total) {
            return `${current} of ${total}`;
          },
        },
      },
    },
  });
}

// Аккордеон

accordion.forEach(function (elem) {
  const tab = elem.querySelector('.faq h3');

  tab.addEventListener('click', function () {
    if (elem.classList.contains('faq__item--is-open')) {
      elem.classList.remove('faq__item--is-open');
    } else {
      accordion.forEach(function (item) {
        item.classList.remove('faq__item--is-open');
      });
      elem.classList.add('faq__item--is-open');
    }
  });
});
