import './styles/index.css';

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');

OPEN_MENU.addEventListener(('click'), () => {
  if (MENU.style.height === '175px') {
    MENU.style.height = '0';
  } else {
    MENU.style.height = '175px';
  }
  OPEN_MENU.classList.toggle('bi-list');
  OPEN_MENU.classList.toggle('bi-x');
});
