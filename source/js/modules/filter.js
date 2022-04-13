const filter = document.querySelector('.filter');

if (filter) {
  const overlay = document.createElement('div');
  filter.classList.remove('filter--no-js');
  overlay.classList.add('overlay');

  const filterButtons = filter.querySelectorAll('.filter__type-button');
  const filterTypes = filter.querySelectorAll('.filter__type');

  filter.addEventListener('click', (evt) => {
    filterButtons.forEach((button, index) => {
      if (filterButtons[index] === evt.target) {
        evt.preventDefault();
        filterTypes[index].classList.toggle('filter__type--is-closed');
      }
    });
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
