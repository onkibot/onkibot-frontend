import React, { PureComponent } from 'react';
import SessionNavbar from '../containers/SessionNavbar';
import SessionUserCard from '../containers/SessionUserCard';
import Footer from './Footer';

class OnkibotApp extends PureComponent {
    render() {
        return (
          <div>
            <SessionNavbar />
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
    children: React.PropTypes.node.isRequired
};

export default OnkibotApp;
