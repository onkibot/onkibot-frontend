import React from 'react';
import { ListItem } from 'material-ui';
import CourseIcon from 'material-ui/svg-icons/communication/import-contacts';

const CourseListItem = ({ name, description }) => (
    <ListItem primaryText={name} secondaryText={description}  leftIcon={<CourseIcon/>}/>
);

export default CourseListItem;
