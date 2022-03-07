import React, { Fragment } from "react";

import "./assets/css/styles.css";
import { Cover } from "./components/inc/Cover";
import { Formations } from "./components/inc/Formations";
import { Header } from "./components/inc/Header";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Cover />
      <Formations />
      <section id="certifications" className="min-h-screen bg-gray-100"></section>
      <section id="ent" className="min-h-screen"></section>
      <section id="contact" className="min-h-screen bg-gray-100"></section>
    </Fragment>
  );
};
