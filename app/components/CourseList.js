import React from 'react';
import { List } from 'material-ui';
import { Link } from 'react-router';

import CourseListItem from './CourseListItem';

/** The course list component, displaying all courses a specific user is attending */
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
    /** An array of course objects, each containing a name and a description */
    courses: React.PropTypes.array.isRequired
};

export default CourseList;
