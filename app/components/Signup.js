import React from 'react';
import SignupForm from '../forms/SignupForm';
import { Card, CardHeader, CardActions } from 'material-ui';

const Signup = () => (
  <div className="main-content">
      <div className="page-title-container">
        <h1>Sign Up</h1>
      </div>
      <CardActions>
          <SignupForm />
      </CardActions>
  </div>
);

export default Signup;
