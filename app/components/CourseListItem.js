import React from 'react';
import { ListItem } from 'material-ui';
import CourseIcon from 'material-ui/svg-icons/communication/import-contacts';

const CourseListItem = ({ name, description }) => (
  <ListItem primaryText={name} secondaryText={description} leftIcon={<CourseIcon />} />
);

CourseListItem.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
};

export default CourseListItem;
