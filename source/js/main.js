import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './vendor.js';

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const navButton = header.querySelector('.main-nav__button');
// const slider = document.querySelector('.slider');
const accordion = document.querySelectorAll('.faq li');
const filter = document.querySelector('.filter');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
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


  // filter.classList.remove('filter--no-js');

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

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
