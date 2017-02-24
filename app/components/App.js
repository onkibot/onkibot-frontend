<<<<<<< 88abee8b07a4c279148b1ed8b6466251568e8473
import React, { Component } from 'react';
import OnOffButton from '../containers/OnOffButton';
import SessionUserCard from '../containers/SessionUserCard';
import SignupForm from '../forms/SignupForm';
import Footer from './Footer';
import Navbar from './Navbar';

class OnkibotApp extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="main-content">
            <SessionUserCard username="lel" />
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OnkibotApp;
