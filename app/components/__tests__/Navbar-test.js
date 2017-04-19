/* eslint-disable no-unused-vars, max-len */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import MenuItem from 'material-ui/MenuItem';

import Navbar from '../Navbar';
import LogoHeader from '../svg/LogoHeader';

/*
TODO: MediaQuery depends on device width, pass it through window.width?
render(<Navbar />) currently returns an empty div element:
<div class="header-navbar"></div>
*/
describe('Navbar Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Navbar />).contains(<ul className="main-nav main-nav-icon">
          <li>
            <Link to="/" id="icon-content-wrap">
              <LogoHeader />
              <span id="icon-text">OnkiBot</span>
            </Link>
          </li>
        </ul>)).toBe(true);
    });

    it('should be selectable by class ".header-navbar"', () => {
        expect(shallow(<Navbar />).is('.header-navbar')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<Navbar />).find('.header-navbar').length).toBe(1);
    });

    it('should contain LogoHeader', () => {
        expect(shallow(<Navbar />).contains(<LogoHeader />)).toBe(true);
    });

    it('should render LogoHeader without throwing an error', () => {
        expect(shallow(<Navbar />).equals(<svg id="onki-icon">
          <g>
            <path
              fill="#FFFFFF" d="M26.604,25.705l-0.142-0.04c-0.44-0.214-0.72-0.657-0.72-1.15V15.34c0-0.047-0.004-0.096-0.014-0.142
          c0.999-0.347,1.722-1.303,1.722-2.42c0-1.111-0.724-2.117-1.718-2.468V0.523c-0.254-0.002-0.886,0-0.886,0s-0.218,0-0.811,0v9.842
          c-0.995,0.353-1.709,1.302-1.709,2.413c0,1.117,0.72,2.073,1.721,2.42c-0.008,0.046-0.012,0.096-0.012,0.142v2.659
          c-0.786,0.178-1.279,0.603-1.694,0.958c-0.458,0.394-0.757,0.647-1.438,0.647c-0.68,0-0.98-0.253-1.435-0.647
          c-0.55-0.473-1.237-1.057-2.547-1.057c-1.311,0-1.995,0.584-2.547,1.057c-0.455,0.394-0.755,0.647-1.435,0.647
          c-0.679,0-0.98-0.253-1.436-0.647c-0.55-0.473-1.233-1.057-2.546-1.057c-1.31,0-1.995,0.584-2.547,1.057
          c-0.454,0.394-0.756,0.647-1.436,0.647c-0.679,0-0.98-0.253-1.436-0.647C2.99,18.484,2.305,17.9,0.994,17.9
          c-0.472,0-0.853,0.381-0.853,0.855c0,0.47,0.381,0.85,0.853,0.85c0.68,0,0.981,0.259,1.436,0.652
          c0.551,0.473,1.235,1.057,2.547,1.057c1.312,0,1.996-0.584,2.545-1.057c0.457-0.394,0.758-0.652,1.436-0.652
          c0.679,0,0.98,0.259,1.435,0.652c0.551,0.473,1.239,1.057,2.548,1.057c1.31,0,1.999-0.584,2.547-1.057
          c0.457-0.394,0.756-0.652,1.436-0.652c0.679,0,0.979,0.259,1.435,0.652c0.552,0.473,1.238,1.057,2.547,1.057
          c1.312,0,1.997-0.584,2.547-1.057c0.209-0.179,0.387-0.329,0.584-0.443v4.701c0,1.184,0.703,2.265,1.791,2.739
          c0.041,0.018,0.081,0.033,0.123,0.041l0.262,0.076c0.034,0.004,0.068,0.016,0.104,0.016c2.424,0.34,4.557,1.546,6.178,3.396
          c1.64,1.86,2.631,4.266,2.631,6.752c0,5.644-4.594,10.235-10.234,10.235c-5.649,0-10.243-4.592-10.243-10.235
          c0-1.421,0.292-2.813,0.852-4.1l0.952,1.825c0.151,0.291,0.448,0.454,0.757,0.454c0.132,0,0.267-0.032,0.394-0.1
          c0.42-0.212,0.581-0.726,0.361-1.144l-1.699-3.262c0,0-0.001,0-0.004-0.012c-0.008-0.014-0.018-0.03-0.027-0.048
          c-0.005-0.005-0.011-0.016-0.017-0.021c-0.008-0.018-0.02-0.023-0.03-0.037c-0.005-0.011-0.016-0.019-0.023-0.035
          c-0.007-0.008-0.019-0.015-0.029-0.025c-0.01-0.015-0.019-0.022-0.03-0.03c-0.007-0.01-0.015-0.015-0.022-0.022
          c-0.015-0.021-0.026-0.03-0.041-0.036c-0.009-0.009-0.017-0.015-0.024-0.024c-0.013-0.008-0.03-0.022-0.044-0.03
          c-0.003,0-0.006,0-0.009,0c-0.006-0.007-0.011-0.007-0.018-0.017c-0.015-0.011-0.033-0.018-0.046-0.026
          c-0.012-0.005-0.022-0.005-0.038-0.016c-0.011-0.007-0.023-0.015-0.035-0.015c-0.015-0.01-0.031-0.015-0.045-0.015
          c-0.012-0.009-0.021-0.009-0.031-0.009c-0.016-0.011-0.034-0.017-0.049-0.017c-0.01,0-0.021-0.009-0.031-0.009
          c-0.016,0-0.034-0.007-0.05-0.007c-0.011,0-0.023,0-0.033,0c-0.016,0-0.031-0.012-0.045-0.012c-0.015,0-0.026,0-0.04,0
          c-0.012,0-0.025,0-0.041,0c-0.013,0-0.029,0.012-0.043,0.012c-0.012,0-0.024,0-0.038,0c-0.015,0.007-0.03,0.007-0.047,0.007
          c-0.011,0.009-0.022,0.009-0.035,0.009c-0.014,0.006-0.027,0.006-0.042,0.017c-0.014,0-0.027,0.009-0.041,0.014
          c-0.014,0-0.026,0.01-0.037,0.01c-0.016,0.008-0.031,0.015-0.043,0.024c-0.011,0-0.02,0.005-0.026,0.005
          c-0.003,0-0.004,0.01-0.009,0.01c-0.013,0.007-0.03,0.017-0.044,0.025c-0.01,0.007-0.02,0.007-0.028,0.016
          c-0.014,0.011-0.027,0.023-0.039,0.031c-0.011,0.008-0.021,0.017-0.028,0.022c-0.013,0.009-0.023,0.016-0.032,0.028
          c-0.011,0.01-0.023,0.023-0.033,0.031c-0.008,0.009-0.013,0.017-0.021,0.022c-0.013,0.019-0.026,0.025-0.036,0.042
          c-0.005,0.009-0.012,0.019-0.017,0.022c-0.013,0.017-0.023,0.034-0.031,0.05c-0.005,0-0.005,0-0.007,0.004
          c-1.206,1.913-1.845,4.113-1.845,6.386c0,6.58,5.361,11.943,11.951,11.943c6.587,0,11.941-5.363,11.941-11.943
          c0-2.901-1.052-5.703-2.96-7.885C31.991,27.514,29.412,26.107,26.604,25.705z M24.892,11.929c0.47,0,0.852,0.38,0.852,0.849
          c0,0.474-0.381,0.853-0.852,0.853c-0.472,0-0.855-0.379-0.855-0.853C24.037,12.309,24.419,11.929,24.892,11.929z"
            />
            <path
              fill="#FFFFFF" d="M49.045,17.885c-1.315,0-1.998,0.588-2.55,1.061c-0.45,0.386-0.754,0.644-1.435,0.644
          c-0.683,0-0.982-0.257-1.436-0.644c-0.555-0.473-1.234-1.061-2.55-1.061c-1.307,0-1.992,0.588-2.537,1.061
          c-0.458,0.386-0.767,0.644-1.44,0.644c-0.675,0-0.986-0.257-1.442-0.644c-0.543-0.473-1.23-1.061-2.54-1.061
          c-1.313,0-1.994,0.588-2.554,1.061c-0.454,0.386-0.749,0.644-1.431,0.644c-0.205,0-0.377-0.023-0.537-0.069
          c-0.452-0.134-0.925,0.126-1.063,0.578c-0.132,0.448,0.126,0.927,0.575,1.056c0.318,0.096,0.656,0.144,1.024,0.144
          c1.31,0,1.991-0.582,2.544-1.057c0.459-0.393,0.759-0.652,1.439-0.652s0.98,0.258,1.438,0.652c0.544,0.474,1.229,1.057,2.544,1.057
          c1.308,0,1.991-0.582,2.548-1.057c0.453-0.393,0.748-0.652,1.431-0.652c0.686,0,0.986,0.258,1.437,0.652
          c0.552,0.474,1.241,1.057,2.549,1.057c1.313,0,1.998-0.582,2.55-1.057c0.458-0.393,0.756-0.652,1.435-0.652
          c0.473,0,0.855-0.379,0.855-0.85C49.9,18.266,49.518,17.885,49.045,17.885z"
            />
          </g>
        </svg>));

        it('should include correct Links', () => {
            expect(shallow(<Navbar />).contains(<Link to="/"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>)).toBe(true);
            expect(shallow(<Navbar />).contains(<Link to="/login"><MenuItem onTouchTap={this.handleClose}>Login</MenuItem></Link>)).toBe(true);
            expect(shallow(<Navbar />).contains(<Link to="/signup"><MenuItem onTouchTap={this.handleClose}>Sign up</MenuItem></Link>)).toBe(true);
            expect(shallow(<Navbar />).contains(<Link to="/taskcontainer"><MenuItem onTouchTap={this.handleClose}>Courses</MenuItem></Link>)).toBe(true);
        });
    });
});
