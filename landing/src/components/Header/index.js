import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use'

import './index.scss'

export function Header() {
  const [isActive, setIsActive] = useState(false)
  const { y} = useWindowScroll();
  return (
    <React.Fragment>
    <div className={`header ${y > 0 || isActive ? "header-shadow" : ''}`}>
      <Link to='/' className="header-logo"> RtDC </Link>
    <svg className={`hamburger ${isActive ? "cross" : ''}`} onClick={() => setIsActive(!isActive)} viewBox="0 0 800 600">
        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
        <path d="M300,320 L540,320" id="middle"></path>
        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
      </svg>
      <nav className="desktop-links">
        {/* <Link to="/about" onClick={() => setIsActive(false)}>About</Link> */}
        <Link to="/route" onClick={() => setIsActive(false)}>Route</Link>
        <Link to="/sponsors" onClick={() => setIsActive(false)}>Sponsors</Link>
        <Link to="/faq" onClick={() => setIsActive(false)}>FAQ</Link>
        <a className='cta' href="https://www.gofundme.com/f/ride-to-dc" onClick={() => setIsActive(false)}>Donate</a>
      </nav>
    </div>
    <nav className={`mobile-nav ${isActive ? "isActive" : ''}`}>
      {/* <Link to="/about" onClick={() => setIsActive(false)}>About</Link> */}
      <Link to="/route" onClick={() => setIsActive(false)}>Route</Link>
      <Link to="/sponsors" onClick={() => setIsActive(false)}>Sponsors</Link>
      <Link to="/faq" onClick={() => setIsActive(false)}>FAQ</Link>
      <a className='cta' href="https://www.gofundme.com/f/ride-to-dc" onClick={() => setIsActive(false)}>Donate</a>
    </nav>
    </React.Fragment>
  );
}