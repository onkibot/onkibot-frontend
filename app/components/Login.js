import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Login = () => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The login form" />
        <CardActions>
            <LoginForm />
        </CardActions>
    </Card>
);

export default Login;
