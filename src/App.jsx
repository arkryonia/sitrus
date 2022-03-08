import React, { Fragment } from "react";

import "./assets/css/styles.css";
import { Nav } from "./components/inc/navigation/Nav";


export const App = () => {
  return (
    <Fragment>
      <Nav />
      <section id="certifications" className="min-h-screen bg-i-teal"></section>
      <section id="ent" className="min-h-screen"></section>
      <section id="contact" className="min-h-screen bg-gray-100"></section>
    </Fragment>
  );
};
