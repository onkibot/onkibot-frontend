import React, { Component } from 'react';
import { Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import LogoHeader from './svg/LogoHeader';
import Hamburger from 'material-ui/svg-icons/navigation/menu';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
      <MediaQuery query='(min-device-width: 1224px)'>
        <MediaQuery query='(orientation: landscape)'>
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
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/courses">Courses</Link></li>
              </ul>
            </div>
          </header>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query='(orientation: portrait)'>
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
              <li><Link onTouchTap={this.handleToggle}><Hamburger /></Link></li>
            </ul>
            <Drawer
              className="drawer"
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <Link to="/"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
              <Link to="/login"><MenuItem onTouchTap={this.handleClose}>Login</MenuItem></Link>
              <Link to="/signup"><MenuItem onTouchTap={this.handleClose}>Sign Up</MenuItem></Link>
              <Link to="/taskcontainer"><MenuItem onTouchTap={this.handleClose}>Task</MenuItem></Link>
            </Drawer>
          </div>
        </header>
      </MediaQuery>
      </div>
    );
  }

}


export default Navbar;
