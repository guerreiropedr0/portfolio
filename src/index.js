import './styles/index.css';
import ActiveMenuLink from 'active-menu-link';
import logo from './assets/logo.svg';
import avatar from './assets/head.png';
import fullAvatar from './assets/full-avatar.png';
import pedro from './assets/pedro-image.png';
import rspec from './assets/rspec.png';
import jest from './assets/jest.png';
import rails from './assets/rails.png';
import postman from './assets/postman.png';
import projects from './projects.js';

const options = {
  activeClass: 'active',
  headerHeight: 86,
  showHash: false,
};

new ActiveMenuLink('.nav-bar', options); // eslint-disable-line no-new

const MENU = document.getElementById('menu');
const OPEN_MENU = document.getElementById('open-menu');
const PROJECTS = document.getElementById('projects-holder');
const AVATAR = document.getElementById('avatar');
const FAVICON = document.getElementById('favicon');
document.getElementById('logo').src = logo;

FAVICON.href = logo;

const dynamicImage = () => {
  if (window.innerWidth < 900) {
    AVATAR.src = avatar;
  } else AVATAR.src = fullAvatar;
};

window.addEventListener('resize', dynamicImage);

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
  projects.forEach((project, index) => {
    PROJECTS.innerHTML += `
    <a id="see-project${index}" data-aos="zoom-in" class="project">
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
      </div>
    </a>`;
  });
};

const closeModal = (modal) => {
  const closeModal = document.getElementById('close-modal');
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'visible';
  });
};

const displayModal = () => {
  const buttons = document.querySelectorAll('[id^="see-project"]');
  const modal = document.getElementById('modal');

  buttons.forEach((button, index) => {
    button.addEventListener(('click'), () => {
      const project = projects[index];
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';

      modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="project-title">${project.title}</h2>
          <i id="close-modal" class="bi bi-x"></i>
        </div>
        <div class="modal-info">
          <img class="modal-img" src="${project.image}" alt="${project.title}">
          <div class="modal-desc">
            <p>${project.description}</p>
            <p class="modal-toggle">Built with:</p>
            <ul class="project-languages modal-languages">
            ${project.languages
    .map((lang) => `<li class="project-item">
              <img class="project-icon" src="${lang.icon}" alt="">
              <p>${lang.name}</p>
            </li>`)
    .join('')}
          </ul>
          </div>
        </div>
        <div class="modal-footer">
          <a target="_blank" rel="noopener noreferrer" class="btn modal-btn" href="${project.liveLink}">
            <i class="bi bi-globe"></i>
            WEBSITE
          </a>
          <a target="_blank" rel="noopener noreferrer" class="btn modal-btn" href="${project.sourceLink}">
            <i class="bi bi-github"></i>
            SOURCE
          </a>
        </div>
      </div>`;
      closeModal(modal);
    });
  });
};

window.onload = () => {
  dynamicImage();
  displayProjects(projects);
  displayModal();
};
