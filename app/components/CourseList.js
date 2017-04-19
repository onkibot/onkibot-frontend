import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses }) => (
  <List>
    {courses.map(({ courseId, name, description }) => (
      <Link
        to={`courses/${courseId}/categories`}
        key={courseId}
      >
        <CourseListItem
          name={name}
          description={description}
        />
      </Link>
    ))}
  </List>
);

CourseList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CourseList;
