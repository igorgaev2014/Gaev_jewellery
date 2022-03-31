const body = document.body;
const nav = document.querySelector('.main-nav');
const navButton = nav.querySelector('.main-nav__button');

function openMenu() {
  nav.classList.remove('main-nav--is-close');
  nav.classList.add('main-nav--is-open');
  body.classList.add('page__body-lock');
}

function closeMenu() {
  nav.classList.remove('main-nav--is-open');
  nav.classList.add('main-nav--is-close');
  body.classList.remove('page__body-lock');
}

navButton.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--is-close')) {
    openMenu();
  } else {
    closeMenu();
  }
});
