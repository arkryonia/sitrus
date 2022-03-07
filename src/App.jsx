import React, { Fragment } from "react";

import "./assets/css/styles.css";
import { Nav } from "./components/navbar/Nav";


export const App = () => {
  return (
    <Fragment>
      <Nav />
      <section id="home" className="min-h-screen bg-orange-400"></section>
      <section id="certifications" className="min-h-screen bg-black"></section>
    </Fragment>
  );
};
