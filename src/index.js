import './styles/index.css';
import logo from './assets/logo.svg';
import avatar from './assets/head.png';

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');
document.getElementById('logo').src = logo;
document.getElementById('avatar').src = avatar;

OPEN_MENU.addEventListener(('click'), () => {
  if (MENU.style.height === '184px') {
    MENU.style.height = 0;
    MENU.style.marginTop = 0;
  } else {
    MENU.style.marginTop = '1rem';
    MENU.style.height = '184px';
  }
  OPEN_MENU.classList.toggle('bi-list');
  OPEN_MENU.classList.toggle('bi-x');
});
