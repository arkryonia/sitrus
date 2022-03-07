import React, { Fragment } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  ZoomOut,
} from "react-scroll-motion";

import "./assets/css/styles.css";
import { Cover } from "./components/inc/Cover";
import { Header } from "./components/inc/Header";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={ZoomOut}>
            <Cover />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomOut}>
            <section id="formations" className="min-h-screen"></section>
          </Animator>
        </ScrollPage>
        <section
          id="certifications"
          className="min-h-screen bg-gray-100"
        ></section>
        <section id="ent" className="min-h-screen"></section>
        <section id="contact" className="min-h-screen bg-gray-100"></section>
      </ScrollContainer>
    </Fragment>
  );
};
