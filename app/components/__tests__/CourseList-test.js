/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Person from 'material-ui/svg-icons/social/person';
import { Card, CardHeader } from 'material-ui';

import CourseList from '../CourseList';
import CourseListItem from '../CourseListItem';

describe('CourseList Component', () => {
    it('should show you are not attending any courses', () => {
        expect(mount(<CourseList courses={[]} />)
        .contains(<p className="text-align-center">Looks like you are not attending any courses yet.</p>)).toBe(true);
    });

    it('should link to a course', () => {
        expect(shallow(<CourseList
          courses={[{
              courseId: 0,
              name: 'A name',
              description: 'A description'
          }]}
        />).contains(<Link
          to="courses/0/categories"
          key={0}
        >
          <CourseListItem
            name="A name"
            description="A description"
          />
        </Link>)).toBe(true);
    });
});
