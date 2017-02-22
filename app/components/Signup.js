import React from 'react';
import SignupForm from '../forms/SignupForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Signup = () => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The signup form" />
        <CardActions>
            <SignupForm />
        </CardActions>
    </Card>
);

export default Signup;