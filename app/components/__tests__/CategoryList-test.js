/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Person from 'material-ui/svg-icons/social/person';
import { Card, CardHeader } from 'material-ui';

import CategoryList from '../CategoryList';
import CategoryListItem from '../CategoryListItem';

describe('CategoryList Component', () => {
    it('should show there are no categories', () => {
        expect(mount(<CategoryList courseId="0" categories={[]} />)
        .contains(<p className="text-align-center">Looks like there are no categories yet.</p>)).toBe(true);
    });

    it('should link to a category', () => {
        expect(shallow(<CategoryList
          courseId="0"
          categories={[{
              categoryId: 0,
              name: 'A name',
              description: 'A description'
          }]}
        />).contains(<Link
          to="courses/0/categories/0/resources"
          key={0}
        >
          <CategoryListItem
            name="A name"
            description="A description"
          />
        </Link>)).toBe(true);
    });
});
