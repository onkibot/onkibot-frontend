import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import OnOffButton from '../../containers/OnOffButton';

const TheButton = () => (
  <Card>
    <CardHeader title="Onkibot" subtitle="The button" />
    <CardActions>
      <OnOffButton />
    </CardActions>
  </Card>
);
export default TheButton;
