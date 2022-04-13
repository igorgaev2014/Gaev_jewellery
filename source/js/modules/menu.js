const page = document.querySelector('.page');
const header = document.querySelector('.header');
const navButton = header.querySelector('.main-nav__button');
header.classList.remove('header--no-js');

const openMenu = () => {
  header.classList.remove('header--is-close');
  header.classList.add('header--is-open');
  page.classList.add('overflow');
};

const closeMenu = () => {
  header.classList.remove('header--is-open');
  header.classList.add('header--is-close');
  page.classList.remove('overflow');
};

navButton.addEventListener('click', function () {
  if (header.classList.contains('header--is-close')) {
    openMenu();
  } else {
    closeMenu();
  }
});
