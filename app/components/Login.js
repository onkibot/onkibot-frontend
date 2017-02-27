import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Login = () => (
    <div className="main-content">
        <div className="page-title-container">
          <h1>Login</h1>
        </div>
        <CardActions>
            <LoginForm />
        </CardActions>
    </div>
);

export default Login;
