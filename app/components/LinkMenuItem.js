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

export default LoginLinkMenuItem;
