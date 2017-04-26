import React from 'react';
import { Card, CardActions } from 'material-ui';

import CreateCourseForm from '../../forms/CreateCourseForm';

/** The course creation page */
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

CreateCourse.propTypes = {
    /** The react router passed as props, used to programmatically navigate to different pages */
    router: React.PropTypes.object.isRequired
};

export default CreateCourse;
