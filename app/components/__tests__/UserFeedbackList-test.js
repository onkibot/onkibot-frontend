/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import Face from 'material-ui/svg-icons/action/face';
import { Card, CardHeader, ListItem } from 'material-ui';

import UserFeedbackList from '../UserFeedbackList';

describe('UserFeedbackList Component', () => {
    it('should display user feedback', () => {
        expect(shallow(<UserFeedbackList
          feedback={[{
              resourceFeedbackId: 0,
              comment: 'A comment',
              difficulty: 3
          }]}
        />).contains(
          <ListItem
            key={0}
            leftIcon={<Face />}
            secondaryText="Difficulty rating: 3"
            primaryText="A comment"
          />
        )).toBe(true);
    });
});
