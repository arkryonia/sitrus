import React, { Fragment } from "react";

import "./assets/scss/styles.scss";
import logo from './assets/img/logo.svg'

export const App = () => {
  return (
    <Fragment>
      <header className="ctn">
        <nav className="nav">
          <img src={logo} alt="Logo" className="nav__logo"/>
          <ul className="nav__links">
            <li className="nav__item"><a href="/" className="nav__link">Formations</a></li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};
