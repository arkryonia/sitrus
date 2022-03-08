import React, { useState } from "react";

import "./nav.css";

import logo from "../../../assets/img/logor.svg";
import { burger, cross, menus } from "./utils";

export const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
    console.log(showLinks)
  };

  return (
    <header className="header">
      <nav className="nav__bar">
        <div>
          <img src={logo} alt="logo iifmec" className="nav__logo" />
        </div>

        <ul className={`nav__links ${ showLinks ? 'translate-x-full' : 'translate-x-0'}`}>
          {menus.map((menu) => (
            <li key={menu.link} className="nav__item">
              <a href={`#${menu.link}`} className="nav__link">
                {menu.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={`nav__burger`} onClick={handleShowLinks}>
            {showLinks ? burger : cross}
        </button>
      </nav>
    </header>
  );
};
