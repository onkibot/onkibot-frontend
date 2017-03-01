import React from 'react';
import LoginForm from '../forms/LoginForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Login = () => (
    <div>
      <Card>
          <div className="page-title-container page-title-container-index">
            <h1>Login</h1>
          </div>
          <CardActions>
              <LoginForm />
          </CardActions>
      </Card>
    </div>
);

export default Login;
