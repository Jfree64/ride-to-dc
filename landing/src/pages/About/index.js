import React from 'react';

import './index.scss';

export const About = () => {
  return(
    <div className='about' >
        <a href='#' >
            <svg className='jf' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 140"><title>jfLogo-05</title><path d="M52,8V132H8V8H52m8-8H0V140H60V0h0Z"/><path d="M14,76h7.58C34.83,76,45,64.92,45,51.67V15H14V25H35V52c0,7.67-5.75,14-13.42,14H14V76"/><path d="M46,83H38.56C25.31,83,15,94.08,15,107.33V125H39.71L44,115H25v-8A13.7,13.7,0,0,1,38.56,93H46V83Z"/></svg>
        </a>
        <div className='wip-container'>
            <p className='intro-text noselect'>
            Jono is a human
            <br/> Go look at the <a href='http://www.jonofreeman.com'> old one </a>
            </p>
        </div>
    
    </div>
    )
}