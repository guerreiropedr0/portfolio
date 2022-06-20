import './styles/index.css';

const MENU = document.getElementById('menu');
const MENU_INFO = document.getElementById('nav-info');
const OPEN_MENU = document.getElementById('open-menu');
const CLOSE_MENU = document.getElementById('close-menu');

const menuDisplay = (btn) => {
  btn.addEventListener(('click'), () => {
    MENU.classList.toggle('hidden');
    MENU_INFO.classList.toggle('hidden');
  });
};

window.onload = () => {
  menuDisplay(OPEN_MENU);
  menuDisplay(CLOSE_MENU);
};
