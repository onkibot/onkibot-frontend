import React from 'react';
import { Link } from 'react-router';
import { MenuItem } from 'material-ui';

const LoginLinkMenuItem = ({ disable, to, primaryText }) => {
    if (disable) {
        return null;
    }
    return (
      <Link to={to}><MenuItem primaryText={primaryText} /></Link>
    );
};

LoginLinkMenuItem.propTypes = {
    disable: React.PropTypes.boolean.isRequired,
    to: React.PropTypes.string.isRequired,
    primaryText: React.PropTypes.string.isRequired
};

export default LoginLinkMenuItem;
