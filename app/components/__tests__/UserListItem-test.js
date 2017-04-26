/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router';

import { shallow, mount, render } from 'enzyme';

import InstructorIcon from 'material-ui/svg-icons/action/build';
import { ListItem, Card, CardHeader, RaisedButton } from 'material-ui';

import UserListItem from '../UserListItem';

describe('UserListItem Component', () => {
    /* it('should display the right information', () => {
        const onClick = () => null;
        expect(shallow(<UserListItem
          userId={0}
          name="Username"
          isInstructor={true}
          attending={true}
          onClick={onClick}
        />).contains(<ListItem
          primaryText="Username"
          leftIcon={<InstructorIcon />}
          rightIconButton={<RaisedButton
            label="Remove from course"
            className="place-mid"
            backgroundColor="red"
            style={{
                margin: '6px',
                padding: '0px',
                width: '200px'
            }}
            onClick={jest.fn()}
          />}
        />)).toBe(true);
    });*/
});
