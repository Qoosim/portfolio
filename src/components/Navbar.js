import React from 'react';
import { links } from '../links';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);

  return (
    <nav className="flex justify-between items-center bg-gray-900 py-6 px-4 h-auto">
      <h3 className="capitalize text-gray-300 font-mont font-bold text-xl">qoosim <span className="text-yellow-400">abdulGhaniyy.</span></h3>
      <button
        className="md:hidden block text-gray-400 border border-gray-500 p-2 rounded-md" 
        onClick={() => setShowLinks(!showLinks)}
      >
        <FaBars />
      </button>
      <ul className={`${showLinks ? 'left-0' : '-left-full'} md:static fixed top-20 md:flex md:space-x-7 items-center bg-gray-900 md:w-auto px-4 md:space-y-0 space-y-2 pb-4 transition-left ease-in duration-500`}>
        {links.map((link) => {
          const { id, text } = link;
          return (
            <li key={id} className="capitalize text-gray-300">
              <a href="/" className="hover:text-gray-500">{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;
