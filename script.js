const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-list');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
});
