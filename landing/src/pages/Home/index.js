import React from 'react';

import { inDevelopment } from 'utils/env-utils'

// Contexts
import { Hero } from 'pages/Home/Hero';

import './index.scss'


export const Home = () => {
  
  // Data testing
  if (inDevelopment) {
    console.group("Data Status")
      console.log("Hiiiii")
    console.groupEnd()
  }

  return (
    <Hero />
  )
}