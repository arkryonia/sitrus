import React, { useState } from "react";
import classNames from "classnames";

import logo from "../../assets/img/logor.svg";

export const Header = () => {
    const [menuIconClicked, setMenuIconClicked] = useState(true)
    const handleClick = () => {
        setMenuIconClicked(!menuIconClicked)
    }

  return (
    <header className="fixed bg-i-teal w-full flex justify-between items-center px-4 md:px-12 h-24">
      <a href="/">
        <img src={logo} alt="logo" className="h-10" />
      </a>
      <nav>
        <button className="md:hidden" onClick={handleClick}>
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul
          className={`
            fixed 
            left-0 
            right-0 
            min-h-screen           
            px-4
            transition
            duration-500
            transform 
            translate-x-full
            bg-i-teal
            text-white
            md:relative 
            md:flex 
            md:min-h-0 
            md:space-y-0 
            md:space-x-6
            md:p-0
            md:translate-x-0
            ${ menuIconClicked ? 'translate-x-full': 'translate-x-0'}
            `}
        >
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#formations">Formations</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#ent">Ent</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
