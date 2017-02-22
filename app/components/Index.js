import React from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem } from 'material-ui';
import OnOffButton from '../containers/OnOffButton';
import SignupForm from '../forms/SignupForm';

const Index = () => (
    <Menu>
        <Link to="/login"><MenuItem primaryText="Log in" /></Link>
        <Link to="/signup"><MenuItem primaryText="Sign up" /></Link>
        <Link to="/button"><MenuItem primaryText="The button" /></Link>
    </Menu>
);

export default Index;