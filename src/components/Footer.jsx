import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './CSS Files/Footer.css';
import logo from '../assets/Log.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-right">
        <input type="email" placeholder="Enter Email id for latest update" className="footer-input" />
        <button className="footer-button">Submit</button>
      </div>
      <hr className="footer-separator" />
      <div className="footer-left-line2">
        <div className="footer-links">
          <span>About Us</span> | <span>Help</span> | <span>Blog</span> | <span>Contact Us</span> | <span>Team</span> | <span>Privacy Policy</span>
        </div>
        
        <div className="footer-icons">
           <a href="https://facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
          <a href="https://twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href="https://threads.com"><FontAwesomeIcon icon={['fab', 'threads']} /></a>
          <a href="https://instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          <a href="https://linkedin.com"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="https://youtube.com"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
        </div>
      </div>
      <hr className="footer-separator" />
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright © 2023 Writeo. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
