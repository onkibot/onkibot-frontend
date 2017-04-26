/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import LightBulb from 'material-ui/svg-icons/action/lightbulb-outline';
import Done from 'material-ui/svg-icons/action/done';
import { ListItem, Card, CardHeader } from 'material-ui';

import ResourceListItem from '../ResourceListItem';

describe('ResourceList Component', () => {
    it('should display the right information', () => {
        expect(shallow(<ResourceListItem
          name="A name"
          body="A body"
          hasMyFeedback={true}
        />).contains(<ListItem
          primaryText="A name"
          secondaryText="A body"
          leftIcon={<LightBulb />}
          rightIcon={<Done />}
        />)).toBe(true);
    });
});
