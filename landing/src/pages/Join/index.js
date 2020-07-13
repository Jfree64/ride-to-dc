import React from 'react';

import { SignupForm } from 'components/SignupForm'

import './index.scss';

export const Join = () => {
  return(
    <div className='join page' >
        <h1 className=''>A RIDE FOR THE MOVEMENT</h1>
        <h2 className=''>a RIDE to recognize the EXISTENCE <br/> and SIGNIFICANCE of BLACK LIVES.</h2>
        <SignupForm />
    </div>
    )
}