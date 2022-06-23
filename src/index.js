import './styles/index.css';
import logo from './assets/logo.svg';
import avatar from './assets/head.png';
import pedro from './assets/pedro-image.png';
import rspec from './assets/rspec.png';
import jest from './assets/jest.png';
import rails from './assets/rails.png';
import postman from './assets/postman.png';
import projects from './projects.js';

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');
const PROJECTS = document.getElementById('projects-holder');
document.getElementById('logo').src = logo;
document.getElementById('avatar').src = avatar;
document.getElementById('pedro-image').src = pedro;
document.getElementById('rspec').src = rspec;
document.getElementById('jest').src = jest;
document.getElementById('rails').src = rails;
document.getElementById('postman').src = postman;

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

const displayProjects = (projects) => {
  projects.forEach((project) => {
    PROJECTS.innerHTML += `<div data-aos="zoom-in" class="project">
    <img class="project-img" src="${project.image}" alt="${project.title}">
    <div class="project-info">
    <h3 class="project-title">${project.title}</h3>
    <ul class="project-languages">
    ${project.languages
    .map((lang) => `<li class="project-item">
      <img class="project-icon" src="${lang.icon}" alt="">
      <p>${lang.name}</p>
      </li>`)
    .join('')}
    </ul>
  </div>`;
  });
};

displayProjects(projects);
