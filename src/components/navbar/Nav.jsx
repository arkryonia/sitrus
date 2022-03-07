import React, { useState } from "react";

import "./navbar.css";

const menuIcon = (
  <svg
    className="w-10 h-10 z-20"
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
);

const closeIcon = (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar__ctn">
        <div className="navbar__logo">Logo</div>
        <ul
          className={`navbar__links ${
            showLinks ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li className="navbar__item">
            <a href="#home" className="navbar__link">
              Formations
            </a>
          </li>
          <li className="navbar__item">
            <a href="#certifications" className="navbar__link">
              Certifications
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Studi
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Ent
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          {showLinks ? closeIcon : menuIcon}
        </button>
      </div>
    </nav>
  );
};
