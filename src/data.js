import { v4 as uuidv4 } from 'uuid';
import {
  SiJavascript, SiCss3,
  SiRedux,
  SiWebpack,
} from 'react-icons/si';
import { FaHtml5, FaReact, FaBootstrap } from 'react-icons/fa';

export const projects = [
  {
    id: uuidv4(),
    name: 'MealMood',
    github: 'https://github.com/Qoosim/JavaScript-Group-Capstone',
    live: 'https://laughing-hodgkin-321112.netlify.app/',
    image: 'https://github.com/Qoosim/JavaScript-Group-Capstone/blob/dev/src/assets/food_menu.png?raw=true',
    tech: [<SiJavascript />, <SiWebpack />, <FaHtml5 />, <SiCss3 />],
    desc: 'This is a JavaScript capstone project. It is a web application based on an external API. A selected API provides data about different recipes. The webapp has two interfaces. 1. A home page showing a list of items that you can "like." 2. A popup window with more data about an item that you can use to comment on the item.',
  },
  {
    id: uuidv4(),
    name: 'Leaderboard',
    github: 'https://github.com/Qoosim/leaderboard-JS',
    live: 'https://leaderboard-js.netlify.app/',
    image: 'https://github.com/Qoosim/leaderboard-JS/blob/develop/src/images/leader_2.png?raw=true',
    tech: [<SiJavascript />, <SiWebpack />, <FaHtml5 />, <SiCss3 />],
    desc: 'This leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.'
  },
  {
    id: uuidv4(),
    name: 'Awesome-Books',
    github: 'https://github.com/Qoosim/Awesome-Books',
    live: 'https://qoosim-awesome-books.netlify.app/',
    image: 'https://github.com/Qoosim/Awesome-Books/blob/main/images/awesome_bk.png?raw=true',
    tech: [<SiJavascript />,  <FaHtml5 />, <SiCss3 />],
    desc: 'This is a project that allows user to add/remove books from both localStorage and browser memory',
  },
  {
    id: uuidv4(),
    name: 'Todo-List',
    github: 'https://github.com/Qoosim/Todo-List',
    live: 'https://qoosim.github.io/Todo-List/dist/',
    image: 'https://github.com/Qoosim/Todo-List/blob/main/src/images/todo_l.png?raw=true',
    tech: [<SiJavascript />, <SiWebpack />, <FaHtml5 />, <SiCss3 />],
    desc: 'Todo list is a simple app that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete whenever you are done with each of them.',
  },
  {
    id: uuidv4(),
    name: 'Math-Magician',
    github: 'https://github.com/Qoosim/math-magicians-react',
    live: 'https://qoosim-math-magician-react.netlify.app/',
    image: 'https://github.com/Qoosim/math-magicians-react/blob/develop/src/images/calculate.png?raw=true',
    tech: [<FaReact />, <SiJavascript />, <FaBootstrap />],
    desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: - make simple calculations and read a random math-related quote.',
  },
  {
    id: uuidv4(),
    name: 'Space-Travelers',
    github: 'https://github.com/JEFFKAY16/space-travelers-hub-react',
    live: 'https://clever-mclean-8316d1.netlify.app/',
    image: 'https://github.com/JEFFKAY16/space-travelers-hub-react/blob/dev/Images/space_tr.png?raw=true',
    tech: [<FaReact />, <SiRedux />, <SiJavascript />, <FaBootstrap />],
    desc: 'This is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },
  {
    id: uuidv4(),
    name: 'Meal-Review',
    github: 'https://github.com/Qoosim/meal-reviews-refactor-react',
    live: 'https://qoosim-meal-reviews-refactor.netlify.app/',
    image: 'https://github.com/Qoosim/meal-reviews-refactor-react/blob/main/src/images/meal_r.png?raw=true',
    tech: [<FaReact />, <SiJavascript />, <FaBootstrap />],
    desc: 'This is an application where a user can review all the meal menu by clicking either of the forward or backward arrow. The user can also randomly review the meal menu by clicking on the select random button.',
  }
];
