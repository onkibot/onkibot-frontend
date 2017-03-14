import React from 'react';
import { List } from 'material-ui';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses, onCourseClick }) => (
    <List>
        {courses.map(({id, name, description }) => (
            <a href={"#/categories/"+id} key={id}><CourseListItem name={name} description={description} onClick={() => onCourseClick(id)} /></a>
        ))}
    </List>
);

export default CourseList;
