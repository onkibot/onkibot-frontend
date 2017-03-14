import React from 'react';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router';

import UserCourseList from '../../containers/UserCourseList';

const Courses = () => (
    <div>
        <h1>Courses</h1>
        <Link to="courses/create"><FlatButton>Create course</FlatButton></Link>
        <UserCourseList />
    </div>
);

export default Courses;
