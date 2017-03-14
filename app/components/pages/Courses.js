import React from 'react';
import { FlatButton } from 'material-ui'

import UserCourseList from '../../containers/UserCourseList';

const Courses = () => (
    <div>
        <h1>Courses</h1>
        <a href="#/courses/create"><FlatButton>Create course</FlatButton></a>
        <UserCourseList />
    </div>
);

export default Courses;
