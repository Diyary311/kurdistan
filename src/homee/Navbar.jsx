import React from 'react';

import './navbar.css';

const Navbar = () => {
  return (
    <div className="bg-stone-100 text-center text-xl font-normal hover:bg-red-500">
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#city">City</a>
        </li>
        <li>
          <a href="#Attraction">Attraction</a>
        </li>
        <li>
          <a href="#Culture&History">Culture&History</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>

        <li>
          <button className="ml-10 rounded-full bg-transparent py-2 font-bold text-white transition-all duration-300 hover:bg-blue-700">
            Login
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
