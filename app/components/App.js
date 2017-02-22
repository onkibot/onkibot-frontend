import React, { Component } from 'react';
import { Link } from 'react-router';
import OnOffButton from '../containers/OnOffButton';
import SignupForm from '../forms/SignupForm';
import MediaQuery from 'react-responsive';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

class OnkibotApp extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <MediaQuery query='(orientation: landscape)'>
            <header>
              <div className="header-wrap">
                <span className="onki-logo">
                  <img src="./images/onkiBot-logo.png"/>
                </span>
                <ul className="main-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                  <li><Link to="/button">The Button</Link></li>
                </ul>
              </div>
            </header>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <header>
            <div className="header-wrap">
              <span className="onki-logo">
                <img src="./images/onkiBot-logo.png"/>
              </span>
              <ul className="main-nav">
                <li><Link onTouchTap={this.handleToggle}><i className="fa fa-bars fa-2x" aria-hidden="true"></i></Link></li>
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
                <Link to="/button"><MenuItem onTouchTap={this.handleClose}>The Button</MenuItem></Link>
              </Drawer>
            </div>
          </header>
        </MediaQuery>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default OnkibotApp;
