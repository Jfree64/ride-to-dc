import React from 'react';

import { inDevelopment } from 'utils/env-utils'

// Contexts
import { Hero } from 'pages/Home/Hero';

import './index.scss'
import { Destinations } from './Destinations';
import { Callout } from './Callout';
// import { Mission } from './Mission';


export const Home = () => {
  
  // Data testing
  if (inDevelopment) {
    console.group("Data Status")
      console.log("Hiiiii")
    console.groupEnd()
  }

  return (
    <React.Fragment>
      <Hero />
      <Callout/>
      <Destinations />
      {/* <Mission /> */}
    </React.Fragment>
  )
}