const login = document.querySelector('.login');
const loginButton = document.querySelector('.main-nav__link--login');

if (login) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const loginForm = login.querySelector('form');
  const loginClose = login.querySelector('.login__close');
  const loginEmail = login.querySelector('input[type="email"]');
  const loginPassword = login.querySelector('input[type="password"]');

  let isStorageSupport = true;
  let storageEmail = '';

  try {
    storageEmail = localStorage.getItem('user-email');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageEmail) {
    loginEmail.value = storageEmail;
  }

  const openLogin = () => {
    login.classList.add('login--is-opened');
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    if (!loginEmail.value) {
      loginEmail.focus();
    } else {
      loginPassword.focus();
    }
  };

  const closeLogin = () => {
    login.classList.remove('login--is-opened');
    document.body.removeChild(overlay);
    document.body.style.overflow = 'auto';
  };

  loginButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openLogin();
  });

  loginClose.addEventListener('click', () => closeLogin());

  overlay.addEventListener('click', () => closeLogin());

  window.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      if (login.classList.contains('login--is-opened')) {
        evt.preventDefault();
        closeLogin();
      }
    }
  });

  loginForm.addEventListener('submit', () => {
    closeLogin();

    if (isStorageSupport) {
      localStorage.setItem('user-email', loginEmail.value);
    }
  });
}
