/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import LocalOffer from 'material-ui/svg-icons/maps/local-offer';
import { ListItem, Card, CardHeader } from 'material-ui';

import CategoryListItem from '../CategoryListItem';

describe('CategoryList Component', () => {
    it('should display the right information', () => {
        expect(shallow(<CategoryListItem
          categoryId={0}
          name="A name"
          description="A description"
        />).contains(<ListItem
          primaryText="A name"
          secondaryText="A description"
          leftIcon={<LocalOffer />}
        />)).toBe(true);
    });
});
