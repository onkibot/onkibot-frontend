/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import CodeCell from 'material-ui/svg-icons/action/code';
import { Card, CardHeader, ListItem } from 'material-ui';

import ExternalResourceList from '../ExternalResourceList';

describe('ExternalResourceList Component', () => {
    it('should link to external resources', () => {
        expect(shallow(<ExternalResourceList
          externalResources={[{
              externalResourceId: 0,
              title: 'A title',
              comment: 'A comment',
              url: 'http://www.url.com'
          }]}
        />).contains(<a
          key={0}
          href="http://www.url.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItem
            leftIcon={<CodeCell />}
            primaryText="A comment"
            secondaryText="A title"
          />
        </a>)).toBe(true);
    });
});
