import React from 'react';
import OnOffButton from '../containers/OnOffButton';
import { Card, CardHeader, CardActions, FlatButton } from 'material-ui';

const OnkibotApp = () => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The button" />
        <CardActions>
            <OnOffButton />
        </CardActions>
    </Card>
);

export default OnkibotApp;