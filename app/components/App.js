import React, { PureComponent } from 'react';
import SessionNavbar from '../containers/SessionNavbar';
import SessionUserCard from '../containers/SessionUserCard';
import ErrorSnackbar from '../containers/ErrorSnackbar';
import Footer from './Footer';

/** The main app component, contains navbar and the viewed page */
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
            <ErrorSnackbar
              autoHideDuration={4000}
            />
          </div>
        );
    }
}

OnkibotApp.propTypes = {
    /** The page being viewed, passed as props */
    children: React.PropTypes.node.isRequired
};

export default OnkibotApp;
