/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Person from 'material-ui/svg-icons/social/person';
import { Card, CardHeader } from 'material-ui';

import ResourceList from '../ResourceList';
import ResourceListItem from '../ResourceListItem';

describe('ResourceList Component', () => {
    it('should show there are no resources', () => {
        expect(mount(<ResourceList courseId="0" categoryId="0" resources={[]} />)
        .contains(<p className="text-align-center">Looks like there are no resources yet.</p>)).toBe(true);
    });

    it('should link to a resource', () => {
        expect(shallow(<ResourceList
          courseId="0"
          categoryId="0"
          resources={[{
              resourceId: 0,
              name: 'A name',
              body: 'A body',
              hasMyFeedback: true
          }]}
        />).contains(<Link
          to="courses/0/categories/0/resources/0/resourceView/"
          key={0}
        >
          <ResourceListItem
            name="A name"
            body="A body"
            hasMyFeedback={false}
          />
        </Link>)).toBe(true);
    });
});
