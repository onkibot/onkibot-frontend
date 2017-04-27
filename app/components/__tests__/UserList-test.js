/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Person from 'material-ui/svg-icons/social/person';
import { Card, CardHeader } from 'material-ui';

import UserList from '../UserList';
import UserListItem from '../UserListItem';

describe('UserList Component', () => {
    it('should show a user', () => {
        const onRemoveClick = () => undefined;
        expect(shallow(<UserList
          onRemoveClick={onRemoveClick}
          users={[{
              userId: 0,
              name: 'Username',
              isInstructor: true,
              attending: true
          }]}
        />).contains(
          <UserListItem
            key={0}
            userId={0}
            name="Username"
            isInstructor={true}
            attending={true}
            onClick={onRemoveClick}
          />
        )).toBe(true);
    });
});
