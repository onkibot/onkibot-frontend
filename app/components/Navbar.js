import React from 'react';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Hamburger from 'material-ui/svg-icons/navigation/menu';
import LogoHeader from './svg/LogoHeader';

const Navbar = ({ loggedIn, logout, open, setOpen }) => (
  <div className="header-navbar">
    <MediaQuery query="(min-device-width: 1224px)">
      <MediaQuery query="(orientation: landscape)">
        <header>
          <div className="header-wrap">
            <ul className="main-nav main-nav-icon">
              <li>
                <Link to="/" id="icon-content-wrap">
                  <LogoHeader />
                  <span id="icon-text">OnkiBot</span>
                </Link>
              </li>
            </ul>
            {loggedIn ? (
              <ul className="main-nav">
                <li><Link to="/" onClick={logout}>Log Out</Link></li>
                <li><Link to="/courses">Courses</Link></li>
              </ul>
            ) : (
              <ul className="main-nav">
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </ul>
            )}
          </div>
        </header>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery query="(orientation: portrait)">
      <header>
        <div className="header-wrap">
          <ul className="main-nav main-nav-icon">
            <li>
              <Link to="/" id="icon-content-wrap">
                <LogoHeader />
                <span id="icon-text">OnkiBot</span>
              </Link>
            </li>
          </ul>
          <ul className="main-nav">
            <li><Link onTouchTap={() => setOpen(!open)}><Hamburger /></Link></li>
          </ul>
          {loggedIn ? (
            <Drawer
              className="drawer"
              docked={false}
              width={200}
              open={open}
              onRequestChange={setOpen}
            >
              <Link to="/"><MenuItem>Home</MenuItem></Link>
              <Link to="/"><MenuItem onTouchTap={logout}>Log Out</MenuItem></Link>
              <Link to="/courses"><MenuItem>Courses</MenuItem></Link>
            </Drawer>
          ) : (
            <Drawer
              className="drawer"
              docked={false}
              width={200}
              open={open}
              onRequestChange={setOpen}
            >
              <Link to="/"><MenuItem>Home</MenuItem></Link>
              <Link to="/login"><MenuItem>Log In</MenuItem></Link>
              <Link to="/signup"><MenuItem>Sign Up</MenuItem></Link>
            </Drawer>
          )}
        </div>
      </header>
    </MediaQuery>
  </div>
);

Navbar.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
    logout: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    setOpen: React.PropTypes.func.isRequired
};

export default Navbar;
