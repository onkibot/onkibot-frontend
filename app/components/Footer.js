import React from 'react';
import LogoSmall from './svg/LogoSmall';

/** The footer component, displayed at the bottom of every page */
const Footer = () => (
  <footer>
    <div className="footer-box">
      <div className="footer-icon-wrap">
        <h2>
          <LogoSmall />
          <span className="icon-text">
          Copyright © 2017 Onkibot - <a href="mailto:onki@onkibot.com">onki@onkibot.com</a>
          </span>
        </h2>
      </div>
    </div>
  </footer>
);

export default Footer;
