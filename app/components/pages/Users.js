import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import UserUserList from '../../containers/UserUserList';

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

export default Users;
