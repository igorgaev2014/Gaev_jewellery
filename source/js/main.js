import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

const page = document.querySelector('.page');
const header = document.querySelector('.header');
const navButton = header.querySelector('.main-nav__button');

const accordions = document.querySelectorAll('.faq li');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------


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

  // Аккордеон
  accordions.forEach(function (accordion) {
    const tab = accordion.querySelector('.faq h3');

    tab.addEventListener('click', function () {
      if (accordion.classList.contains('faq--is-open')) {
        accordion.classList.remove('faq--is-open');
      } else {
        accordions.forEach(function (item) {
          item.classList.remove('faq--is-open');
        });
        accordion.classList.add('faq--is-open');
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
