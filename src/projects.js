import billionairesImg from './assets/billionaires.png';
import pokedbImg from './assets/pokedb.png';
import railsImg from './assets/rails.png';
import recipeImg from './assets/recipe.png';
import spaceImg from './assets/space.png';

const languagesIcons = [
  {
    name: 'HTML',
    icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
  },
  {
    name: 'CSS',
    icon: 'https://img.icons8.com/color/48/000000/css3.png',
  },
  {
    name: 'JavaScript',
    icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
  },
  {
    name: 'React',
    icon: 'https://img.icons8.com/color/48/000000/react-native.png',
  },
  {
    name: 'Redux',
    icon: 'https://img.icons8.com/color/48/000000/redux.png',
  },
  {
    name: 'Ruby',
    icon: 'https://img.icons8.com/color/48/000000/ruby-programming-language.png',
  },
  {
    name: 'Rails',
    icon: railsImg,
  },
];

const projects = [
  {
    image: billionairesImg,
    title: 'Billionaires Appointment',
    languages: [languagesIcons[3], languagesIcons[4], languagesIcons[5], languagesIcons[6]],
    liveLink: 'https://billionaire-appointment.netlify.app/',
    sourceLink: 'https://github.com/rachidelaid/billionaire-appointment-front-end',
  },
  {
    image: pokedbImg,
    title: 'PokeDB',
    languages: [languagesIcons[0], languagesIcons[1], languagesIcons[2]],
    liveLink: 'https://pokedb.netlify.app/',
    sourceLink: 'https://github.com/rachidelaid/pokeDB',
  },
  {
    image: recipeImg,
    title: 'Recipe App',
    languages: [languagesIcons[5], languagesIcons[6]],
    liveLink: 'https://recipe-rails-app.herokuapp.com/',
    sourceLink: 'https://github.com/guerreiropedr0/recipe-app',
  },
  {
    image: spaceImg,
    title: 'Space Traveler',
    languages: [languagesIcons[3], languagesIcons[4]],
    liveLink: 'https://spacetraveller-spacex.netlify.app/',
    sourceLink: 'https://github.com/clintonjosephs/Space-traveler',
  },
];

export default projects;
