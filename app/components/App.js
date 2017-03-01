import React, { Component } from 'react';
import OnOffButton from '../containers/OnOffButton';
import SignupForm from '../forms/SignupForm';
import Footer from './Footer';
import Navbar from './Navbar';

class OnkibotApp extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default OnkibotApp;
