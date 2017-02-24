import React from 'react';
import { Card, CardHeader } from 'material-ui';

import OnOffButton from '../containers/OnOffButton';
import SignupForm from '../forms/SignupForm';

const UserCard = ({ name }) => {
    if (!name) {
        return null;
    }
    return (
        <Card>
            <CardHeader title={`Hello, ${name}`} subtitle="Welcome to Onkibot" />
        </Card>
    );
};

export default UserCard;