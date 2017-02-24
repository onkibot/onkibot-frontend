import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import SignupForm from '../../forms/SignupForm';

const Signup = () => (
  <div>
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
