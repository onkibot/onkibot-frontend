import React from 'react';
import { Card, CardHeader, CardActions } from 'material-ui';

import CreateTaskForm from '../../forms/CreateTaskForm';

const CreateTask = () => (
    <div>
      <Card>
          <div className="page-title-container page-title-container-index">
            <h1>Create Task</h1>
          </div>
          <CardActions>
              <CreateTaskForm />
          </CardActions>
      </Card>
    </div>
);

export default CreateTask;
