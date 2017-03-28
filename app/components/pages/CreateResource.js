import React from 'react';
import { Card, CardActions } from 'material-ui';

import ResourceCreation from '../../containers/ResourceCreation';

const CreateResource = props => (
  <div>
    <Card>
      <div className="page-title-container page-title-container-index">
        <h1>Create Task</h1>
      </div>
      <CardActions>
        <ResourceCreation courseId={props.params.courseId} categoryId={props.params.categoryId} router={props.router} />
      </CardActions>
    </Card>
  </div>
);

export default CreateResource;
