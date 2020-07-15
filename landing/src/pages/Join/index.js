import React from 'react';

import { SignupForm } from 'components/SignupForm'

import './index.scss';

export const Join = () => {
  return(
    <div className='join page' >
        <h1 className=''>JOIN us for the ride</h1>
        <SignupForm />
    </div>
    )
}