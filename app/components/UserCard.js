import React from 'react';
import { Card, CardHeader } from 'material-ui';
import Person from 'material-ui/svg-icons/social/person';

import OnOffButton from '../containers/OnOffButton';
import SignupForm from '../forms/SignupForm';

const UserCard = ({ name }) => {
    if (!name) {
        return null;
    }
    return (
        <Card>
            <CardHeader avatar={<Person />} title={`Hello, ${name}`} subtitle="Welcome to Onkibot" />
        </Card>
    );
};

export default UserCard;
