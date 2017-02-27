import React from 'react';
import SignupForm from '../forms/SignupForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Signup = () => (
  <div className="main-content">
    <Card>
        <div className="page-title-container">
          <h1>Sign Up</h1>
        </div>
        <CardActions>
            <SignupForm />
        </CardActions>
    </Card>
  </div>
);

export default Signup;
