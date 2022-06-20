import './styles/index.css';

const OPEN_MENU = document.getElementById('open-menu');
const MENU = document.getElementById('menu');

OPEN_MENU.addEventListener(('click'), () => {
  MENU.style.display = 'block';
});
