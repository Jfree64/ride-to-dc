import React from 'react';

import { Link } from 'react-router-dom';


// Images

// Style
import './index.scss';


export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>RIDE <span>to</span> DC</h1>
        <h2>August 22-28, 2020</h2>
        <Link className='cta' to="/sign-up">SIGN UP</Link>  
      </div>
    </section>
  );  
}