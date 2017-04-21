import React from 'react';
import { RaisedButton, Card, CardActions } from 'material-ui';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import UserCourseList from '../../containers/UserCourseList';

const mapStateToProps = state => ({
    canAdministrate: (state.auth.session !== null) && state.auth.session.isInstructor
});

let Courses = ({ canAdministrate }) => (
  <div>
    <Card>
      <div className="page-title-container page-title-container-index">
        <h1>Courses</h1>
      </div>
      <CardActions>
        <UserCourseList />
        {canAdministrate && (
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
        )}
      </CardActions>
    </Card>
  </div>
);

Courses.propTypes = {
    canAdministrate: React.PropTypes.bool.isRequired
};

Courses = connect(mapStateToProps)(Courses);

export default Courses;
