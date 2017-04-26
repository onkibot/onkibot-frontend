import { connect } from 'react-redux';
import { setNavbarOpen, logoutUser } from '../actions/';

import Navbar from '../components/Navbar';

const mapStateToProps = state => ({
    /** bool describing whether the user is logged in or not */
    loggedIn: state.auth.session !== null,
    /** bool describing whether the hamburger version of the navbar is open, used on mobile */
    open: state.navbarOpen
});

const mapDispatchToProps = dispatch => ({
    /** Function used for logging out, dispatching the logoutUser action */
    logout: () => dispatch(logoutUser()),
    /** Function used for opening and closing the hamburger version of the navbar
    /*  dispatching the setNavBarOpen with a bool describing whether it should be open or close
    */
    setOpen: open => dispatch(setNavbarOpen(open))
});

const SessionNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default SessionNavbar;
