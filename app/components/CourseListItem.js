import React from 'react';
import { ListItem } from 'material-ui';

const CourseListItem = ({ name, description }) => (
    <ListItem primaryText={name} secondaryText={description} />
);

export default CourseListItem;
