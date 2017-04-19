import React from 'react';
import { RaisedButton, Card, CardActions, CardHeader } from 'material-ui';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

import UserUserList from '../../containers/UserUserList';

let searchWord = "test";

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

const updateSearch = () => {
  searchWord += "test"
  console.log(searchWord)
}

export default Users;
