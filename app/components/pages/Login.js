import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import LoginForm from '../../forms/LoginForm';

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
