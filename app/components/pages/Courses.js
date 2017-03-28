import React from 'react';
import { RaisedButton, Card, CardActions } from 'material-ui';
import { Link } from 'react-router';

import UserCourseList from '../../containers/UserCourseList';

const Courses = () => (
  <div>
    <Card>
      <div className="page-title-container page-title-container-index">
        <h1>Courses</h1>
      </div>
      <CardActions>
        <UserCourseList />
        <Link to="courses/create">
          <RaisedButton
            label="Create course"
            fullWidth={true}
            className="place-mid"
            style={{
                margin: '20px auto',
                padding: '0px'
            }}
          />
        </Link>
      </CardActions>
    </Card>
  </div>
);

export default Courses;
