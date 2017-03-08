import React from 'react';
import { List } from 'material-ui';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses, onCourseClick }) => (
    <List>
        {courses.map(({id, name, description }) => (
            <CourseListItem key={id} name={name} description={description} onClick={() => onCourseClick(id)} />
        ))}
    </List>
);

export default CourseList;