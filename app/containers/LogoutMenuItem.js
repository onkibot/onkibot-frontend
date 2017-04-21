import React from 'react';
import { connect } from 'react-redux';
import { MenuItem } from 'material-ui';

import { logoutUser } from '../actions';

const mapStateToProps = state => ({
    disable: !state.auth.session
});

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        dispatch(logoutUser());
    }
});

let LogoutMenuItem = ({ disable, onClick, primaryText }) => {
    if (disable) {
        return null;
    }
    return (
      <MenuItem primaryText={primaryText} onClick={onClick} />
    );
};

LogoutMenuItem.propTypes = {
    disable: React.PropTypes.boolean.isRequired,
    onClick: React.PropTypes.func.isRequired,
    primaryText: React.PropTypes.string.isRequired
};

LogoutMenuItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutMenuItem);

export default LogoutMenuItem;