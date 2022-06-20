import './styles/index.css';

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');
const CLOSE_MENU = document.getElementById('close-menu');

OPEN_MENU.addEventListener(('click'), () => {
  MENU.classList.toggle('hidden');
  OPEN_MENU.style.display = 'none';
});

CLOSE_MENU.addEventListener(('click'), () => {
  MENU.classList.toggle('hidden');
  OPEN_MENU.style.display = 'block';
});
