import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CourseListItem from './CourseListItem';

const CourseList = ({ courses }) => (
  courses.length > 0 ? (
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
  ) : (
    <p>Looks like you are not attending any courses yet.</p>
  )
);

CourseList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CourseList;
