import hauntedHouse from '../assets/project-images/project-3-landing-page-screenshot.png';
import fetchAssessment from '../assets/project-images/fetch-homepage-screenshot.png';
import couchPotato from '../assets/project-images/Couch-Potato-screenshot.png';
import cocktailConcierge from '../assets/project-images/Cocktail-concierge-screenshot.jpg';
import expenseTracker from '../assets/project-images/Expense-tracker-screenshot.png';
import testEcommerceSite from '../assets/project-images/Test-Ecommerce-Site-Screenshot.png';
import weatherDashboard from '../assets/project-images/Weather-dashboard-screenshot.jpg';
import codingQuiz from '../assets/project-images/code-quiz-screenshot.jpg';
import passwordGenerator from '../assets/project-images/Password-Generator.jpg';
import backgroundGenerator from '../assets/project-images/Background-generator-screenshot.png';

const projectData = [
  {
    id: 1,
    title: 'Full Moon Manor',
    type: 'ReactJS, NodeJS, GraphQL, MongoDB/Mongoose',
    img: hauntedHouse,
    description: 'Enjoy this text-based, story-driven exploration game where users must escape a haunted house before their health points reach zero.',
    liveLink: 'https://secret-river-41082.herokuapp.com/',
    githubLink: 'https://github.com/jmruiz96/Full-Moon-Manor',
  },
  {
    id: 2,
    title: 'Fetch',
    type: 'ReactJS, MaterialUI',
    img: fetchAssessment,
    description: "Search for your favorite dogs from a large list of available pups provided by Fetch's privately provided API.",
    liveLink: 'https://mbronstein1.github.io/fetch-frontend-assessment/',
    githubLink: 'https://github.com/mbronstein1/fetch-frontend-assessment',
  },
  {
    id: 3,
    title: 'Couch Potato',
    type: 'MVC: Handlebars, NodeJS, Express, MySQL/Sequelize',
    img: couchPotato,
    description: 'Search and store information about favorite movies in a single digital collection.',
    liveLink: 'https://infinite-river-93616.herokuapp.com/',
    githubLink: 'https://github.com/mbronstein1/Couch-Potato',
  },
  {
    id: 4,
    title: 'Cocktail Concierge',
    type: 'HTML, CSS, JavaScript, The Cocktail DB API',
    img: cocktailConcierge,
    description: 'Receive recipes to a selection of cocktails based on search input.',
    liveLink: 'https://tyleresselman.github.io/cocktail-concierge-project-1/index.html',
    githubLink: 'https://github.com/tyleresselman/cocktail-concierge-project-1',
  },
  {
    id: 5,
    title: 'Expense Tracker',
    type: 'ReactJS',
    img: expenseTracker,
    description: 'Add expenses by date and track them by comparing with a sleek chart.',
    liveLink: 'https://mbronstein1.github.io/expense-tracker/',
    githubLink: 'https://github.com/mbronstein1/expense-tracker',
  },
  {
    id: 6,
    title: 'Test Ecommerce Site',
    type: 'NextJS, Stripe API, Sanity Studio',
    img: testEcommerceSite,
    description: 'Browse a collection of electronic items, add to the cart, and successfully checkout using Stripe payments -- TEST ONLY',
    liveLink: 'https://e-commerce-sample-site.vercel.app/',
    githubLink: 'https://github.com/mbronstein1/e-commerce-sample-site',
  },
  {
    id: 7,
    title: 'Weather Dashboard',
    type: 'HTML, CSS, JavaScript, OpenWeather API',
    img: weatherDashboard,
    description: 'View the current weather and 5-day forecast in any city.',
    liveLink: 'https://mbronstein1.github.io/Weather-Dashboard',
    githubLink: 'https://github.com/mbronstein1/Weather-Dashboard',
  },
  {
    id: 8,
    title: 'Coding Quiz',
    type: 'HTML, CSS, JavaScript',
    img: codingQuiz,
    description: 'Take a timed coding quiz made almost entirely with vanilla Javascript.',
    liveLink: 'https://mbronstein1.github.io/Code-Quiz',
    githubLink: 'https://github.com/mbronstein1/Code-Quiz',
  },
  {
    id: 9,
    title: 'Random Password Generator',
    type: 'JavaScript',
    img: passwordGenerator,
    description: 'Generate a random password by inputting certain parameters including character length, capitalization, numeric values and/or special characters.',
    liveLink: 'https://mbronstein1.github.io/Random-Password-Generator',
    githubLink: 'https://github.com/mbronstein1/Random-Password-Generator',
  },
  {
    id: 10,
    title: 'Background Generator',
    type: 'HTML, CSS, JavaScript',
    img: backgroundGenerator,
    description: 'Generate different background colors with this gradient background generator or let the app generate it randomly',
    liveLink: 'https://background-generator-1.vercel.app/',
    githubLink: 'https://github.com/mbronstein1/background-generator-1',
  },
];

export default projectData;
