import React from 'react';
import OnOffButton from '../containers/OnOffButton';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';
import { Card, CardHeader, CardActions, FlatButton } from 'material-ui';

const OnkibotApp = () => (
    <div>
        <Card>
            <CardHeader title="Onkibot" subtitle="The button" />
            <CardActions>
                <OnOffButton />
            </CardActions>
        </Card>
        <Card>
            <CardHeader title="Onkibot" subtitle="The login form" />
            <CardActions>
                <LoginForm />
            </CardActions>
        </Card>
        <Card>
            <CardHeader title="Onkibot" subtitle="The signup form" />
            <CardActions>
                <SignupForm />
            </CardActions>
        </Card>
    </div>
);

export default OnkibotApp;