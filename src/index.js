import './styles/index.css';
import logo from './assets/logo.svg';
import avatar from './assets/head.png';
import pedro from './assets/pedro-image.png';
import rspec from './assets/rspec.png';
import jest from './assets/jest.png';
import rails from './assets/rails.png';

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');
document.getElementById('logo').src = logo;
document.getElementById('avatar').src = avatar;
document.getElementById('pedro-image').src = pedro;
document.getElementById('rspec').src = rspec;
document.getElementById('jest').src = jest;
document.getElementById('rails').src = rails;

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
