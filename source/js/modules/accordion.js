const accordion = document.querySelector('.faq__list');

if (accordion) {
  accordion.classList.remove('faq__list--no-js');
  const accordionItems = document.querySelectorAll('.faq li');

  accordionItems.forEach(function (elem) {
    const tab = elem.querySelector('.faq h3');

    tab.addEventListener('click', function () {
      if (elem.classList.contains('faq__item--is-open')) {
        elem.classList.remove('faq__item--is-open');
      } else {
        accordionItems.forEach(function (item) {
          item.classList.remove('faq__item--is-open');
        });
        elem.classList.add('faq__item--is-open');
      }
    });
  });
}

