import React, { PureComponent } from 'react';
import SessionUserCard from '../containers/SessionUserCard';
import Footer from './Footer';
import Navbar from './Navbar';

class OnkibotApp extends PureComponent {
    render() {
        return (
          <div>
            <Navbar />
            <div className="container">
              <div className="main-content">
                <SessionUserCard />
                {this.props.children}
              </div>
            </div>
            <Footer />
          </div>
        );
    }
}

OnkibotApp.propTypes = {
    children: React.PropTypes.array.isRequired
};

export default OnkibotApp;
