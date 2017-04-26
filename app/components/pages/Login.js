import React from 'react';
import { Card, CardActions } from 'material-ui';

import LoginForm from '../../forms/LoginForm';

/* The user login page */
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
