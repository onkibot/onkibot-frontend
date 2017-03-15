import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses }) => (
  <List>
    {courses.map(({ courseId, name, description }) => (
      <Link to={`courses/${courseIdd}/categories`} key={id}><CourseListItem name={name} description={description} /></Link>
    ))}
  </List>
);

export default CourseList;
