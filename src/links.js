import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

export const links = [
  {
    id: uuidv4(),
    text: 'home',
    url: "/"
  },
  {
    id: uuidv4(),
    text: 'about',
    url: "/about"
  },
  {
    id: uuidv4(),
    text: 'portfolio',
    url: "/project"
  },
  {
    id: uuidv4(),
    text: 'contact',
    url: "/contact"
  },

];

export const social = [
  {
    id: uuidv4(),
    url: 'https://github.com/Qoosim',
    icon: <FaGithub />
  },
  {
    id: uuidv4(),
    url: 'https://www.linkedin.com/in/qoosim/',
    icon: <FaLinkedinIn /> 
  },
];

/**
export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/qoosim/',
    icon: <FaLinkedinIn /> 
    
  },
  {
    id: 2,
    url: 'https://twitter.com/qoosim_ayinde',
    icon: <FaTwitter />
  },
  {
    id: 4,
    url: 'https://gitlab.com/Qoosim',
    icon: <FaGitlab />
  }
]
*/
