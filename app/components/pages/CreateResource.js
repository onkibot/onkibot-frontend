import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import ResourceCreation from '../../containers/ResourceCreation';

const CreateResource = () => (
    <div>
      <Card>
          <div className="page-title-container page-title-container-index">
            <h1>Create Task</h1>
          </div>
          <CardActions>
              <ResourceCreation />
          </CardActions>
      </Card>
    </div>
);

export default CreateResource;
