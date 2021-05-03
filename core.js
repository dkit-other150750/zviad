const page = document.querySelector('.page');
const body = document.querySelector('.page__body');
const nav = document.querySelector('.nav');
const navOpenBtn = nav.querySelector('.nav__open-nav');
const navCloseBtn = nav.querySelector('.nav__list-close');
const navOverlay = nav.querySelector('.nav__list-overlay');
const submenuList = nav.querySelectorAll('.submenu');
const navLinkButtons = nav.querySelectorAll('.nav__link--button');
const navBackButtons = nav.querySelectorAll('.nav__link--back');

const addPadding = (item) => {
  const { paddingRight } = getComputedStyle(item);
  item.style.paddingRight = `${parseFloat(paddingRight) + window.innerWidth - document.documentElement.clientWidth}px`;
}

const removePadding = (item) => {
  const { paddingRight } = getComputedStyle(item);
  item.style.paddingRight = `${parseFloat(paddingRight) - (window.innerWidth - document.documentElement.clientWidth)}px`;
};

const openNav = () => {
  addPadding(body);
  addPadding(nav);
  page.classList.add('show-nav');
};

const closeNav = () => {
  submenuList.forEach((submenu) => {
    closeSubmenu(submenu);
  });
  page.classList.remove('show-nav');
  removePadding(body);
  removePadding(nav);
};

navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
navOverlay.addEventListener('click', closeNav);

// =============================================================================================
// =============================================================================================

const openSubmenu = (submenu) => {
  submenu.classList.add('submenu--active');
};

const closeSubmenu = (submenu) => {
  submenu.classList.remove('submenu--active');
};

navLinkButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav__item');
    const submenu = parent.querySelector('.submenu');
    openSubmenu(submenu);
  });
});

navBackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const submenu = button.closest('.submenu');
    closeSubmenu(submenu);
  });
});
