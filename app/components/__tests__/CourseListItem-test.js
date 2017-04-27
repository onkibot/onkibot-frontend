/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import ImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import { ListItem, Card, CardHeader } from 'material-ui';

import CourseListItem from '../CourseListItem';

describe('CourseList Component', () => {
    it('should display the right information', () => {
        expect(shallow(<CourseListItem
          courseId={0}
          name="A name"
          description="A description"
        />).contains(<ListItem
          primaryText="A name"
          secondaryText="A description"
          leftIcon={<ImportContacts />}
        />)).toBe(true);
    });
});
