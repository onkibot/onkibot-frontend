import React from 'react';
import { Card, CardActions } from 'material-ui';

import CreateCourseForm from '../../forms/CreateCourseForm';

const CreateCourse = props => (
  <div>
    <Card>
      <div className="page-title-container page-title-container-index">
        <h1>Create Course</h1>
      </div>
      <CardActions>
        <CreateCourseForm router={props.router} />
      </CardActions>
    </Card>
  </div>
);

export default CreateCourse;
