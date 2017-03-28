/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Person from 'material-ui/svg-icons/social/person';
import { Card, CardHeader } from 'material-ui';

import UserCard from '../UserCard';

describe('UserCard Component', function() {
  it('should return null if name is not set', function() {
    expect(shallow(<UserCard />).type()).toBe(null);
  });

  it('should render without throwing an error', function() {
    expect(shallow(<UserCard name='testUser'/>).contains(<Card>
        <CardHeader avatar={<Person />} title={`Hello, testUser`} subtitle="Welcome to Onkibot" />
    </Card>)).toBe(true);
  });
});
