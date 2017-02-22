import React from 'react';
import OnOffButton from '../containers/OnOffButton';
import { Card, CardHeader, CardActions } from 'material-ui';

const TheButton = () => (
    <Card>
        <CardHeader title="Onkibot" subtitle="The button" />
        <CardActions>
            <OnOffButton />
        </CardActions>
    </Card>
);

export default TheButton;