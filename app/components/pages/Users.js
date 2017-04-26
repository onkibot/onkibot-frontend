import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import UserUserList from '../../containers/UserUserList';

/** The user invitation list, used to add and remove users from a specific course */
const Users = props => (
  <div>
    <Card>
      <CardHeader
        title="Back"
        subtitle="to course"
        avatar={<Link to={`courses/${props.params.courseId}/categories`}><ArrowBackward /></Link>}
      />
      <div className="page-title-container page-title-container-index">
        <h1>Users</h1>
      </div>
      <CardActions>
        <UserUserList courseId={props.params.courseId} />
      </CardActions>
    </Card>
  </div>
);

Users.propTypes = {
    /** params from URL passed as props, contains courseId */
    params: React.PropTypes.object.isRequired
};

export default Users;
