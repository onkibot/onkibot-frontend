/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Footer from '../Footer';
import LogoSmall from '../svg/LogoSmall';

describe('Navbar Component', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Footer />).contains(<span className="icon-text">Copyright © 2017 Onkibot - <a href="mailto:onki@onkibot.com">onki@onkibot.com</a></span>)).toBe(true);
  });
});
