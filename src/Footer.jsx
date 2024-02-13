import React from 'react';
import './Footer.css';
import bookmarkLogo  from './images/logo-bookmark2.svg';
import iconFacebook from './images/icon-facebook.svg';
import iconTwitter from './images/icon-twitter.svg';

import { Link } from 'react-scroll';

function footer() {
  return (
    <div className='footer'>
        <div className="footer--container">
        <div className="footer--left">
          <div className="footer--left__img">
          <img src={bookmarkLogo} alt="" />
          </div>
        <div className="footer__links">
              <ul className="footer__menu">
              <li className="footer__item"> <Link to='feature' spy={true} smooth={true} offset={-105} duration={500} >Features</Link></li>
              <li className="footer__item"><Link to='pricing' spy={true} smooth={true} offset={-105} duration={500}>Pricing</Link></li>
              <li className="footer__item"><Link to='contact' spy={true} smooth={true} offset={-105} duration={500}>Contact</Link></li>
              </ul>
            </div>
        </div>
        <div className="footer--right">
            <img src={iconFacebook} alt="" />
            <img src={iconTwitter} alt="" />
        </div>
        </div>

    </div>
  )
}

export default footer