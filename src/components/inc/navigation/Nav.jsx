import React from "react";

import "./nav.css";

import logo from "../../../assets/img/logo.svg";
import { menus } from "./utils";

export const Nav = () => {
  return (
    <header className="header">
      <nav className="nav__bar">
        <div>
          <img src={logo} alt="logo iifmec" className="nav__logo" />
        </div>

        <ul className="nav__links">
          {menus.map((menu) => (
            <li key={menu.link} className="nav__item">
              <a href={`#${menu.link}`} className="nav__link">
                {menu.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
