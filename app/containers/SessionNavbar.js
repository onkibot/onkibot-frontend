import { connect } from 'react-redux';
import { setNavbarOpen, logoutUser } from '../actions/';

import Navbar from '../components/Navbar';

const mapStateToProps = state => ({
    loggedIn: state.auth.session !== null,
    open: state.navbarOpen
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser()),
    setOpen: open => dispatch(setNavbarOpen(open))
});

const SessionNavbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default SessionNavbar;
