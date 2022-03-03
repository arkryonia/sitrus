import React, { Fragment } from 'react'

import { HeroSection } from "./components/inc/HeroSection";
import { FormationsSection } from "./components/inc/FormationsSection";

import './assets/css/styles.css'

export const App = () => {
  return (
    <Fragment>
      <HeroSection />
      <FormationsSection />
    </Fragment>
  )
}
