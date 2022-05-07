import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-auto flex justify-between px-48 py-6 bg-gray-900">
      <h3 className="capitalize text-gray-300 font-mont font-bold text-xl">qoosim <span className="text-yellow-400">abdulGhaniyy</span></h3>
      <ul className="flex justify-between w-80 capitalize text-gray-300 font-lato">
        <li className="cursor-pointer hover:text-gray-400">home</li>
        <li className="cursor-pointer hover:text-gray-400">skills</li>
        <li className="cursor-pointer hover:text-gray-400">portfolio</li>
        <li className="cursor-pointer hover:text-gray-400">blog</li>
        <li className="cursor-pointer hover:text-gray-400">contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;
