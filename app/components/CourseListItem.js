import React from 'react';
import { ListItem } from 'material-ui';
import CourseIcon from 'material-ui/svg-icons/communication/import-contacts';

/** A list item for the course list, displaying information about a specific course */
const CourseListItem = ({ name, description }) => (
  <ListItem primaryText={name} secondaryText={description} leftIcon={<CourseIcon />} />
);

CourseListItem.propTypes = {
    /** The course name, passed as prop */
    name: React.PropTypes.string.isRequired,
    /** A description of the course, passed as prop */
    description: React.PropTypes.string.isRequired
};

export default CourseListItem;
