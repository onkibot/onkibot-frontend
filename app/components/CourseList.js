import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses, onCourseClick }) => (
    <List>
        {courses.map(({id, name, description }) => (
            <Link to={"categories/"+id} key={id}><CourseListItem name={name} description={description} onClick={() => onCourseClick(id)} /></Link>
        ))}
    </List>
);

export default CourseList;
